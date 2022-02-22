import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  HostBinding,
  QueryList,
  ContentChildren,
  ChangeDetectionStrategy,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "emotion";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { DxcToggleComponent } from "./dxc-toggle/dxc-toggle.component";
import { ChangeDetectorRef } from "@angular/core";
import { v4 as uuidv4 } from "uuid";


type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

@Component({
  selector: "dxc-togglegroup",
  templateUrl: "./dxc-toggleGroup.component.html",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils],
})
export class DxcToggleGroupComponent implements OnInit {
  /**
  * If true, the toggle group will support multiple selection. 
  * In that case, value must be an array of numbers with the keys of the selected values.
  */
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple = false;
  /**
  * If true, the component will be disabled.
  */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  /**
  * Value of the tabindex which its propagated to their children components.
  */
  @Input()
  get tabIndex(): number {
    return this._tabIndexValue;
  }
  set tabIndex(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  /**
  * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
  * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
  */
  @Input() public margin: Space | Margin;
  /**
  * Text to be placed next to the input.
  */
  @Input() label: string;
  /**
  * Assistive text to be placed bellow the input.
  */
  @Input() helperText: string;
  /**
  * Value(s) of the toggle(s) that are toggled. 
  * If undefined, the component will be uncontrolled and the value will be managed internally by the component.
  */ 
  @Input() public value: string | string[];
  /**
  * This function will be called when the user changes the state of any toggle. 
  * The new value or values will be passed as a parameter.
  */
  @Output() public onChange: EventEmitter<string | string[]> = new EventEmitter<string | string[]>();
  @ContentChildren(DxcToggleComponent)
  toggleGroup: QueryList<DxcToggleComponent>;

  toggleGroupId: string;

  selectedOptions = [];
  private isControlled: boolean = false;

  @HostBinding("class") styledDxcToggleGroup;

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
    margin: null,
    tabIndexValue: 0,
  });
  constructor(private utils: CssUtils, private ref: ChangeDetectorRef) {
    this.toggleGroupId = `file-input${uuidv4()}`;
  }

  ngOnInit() {
    if (this.value || this.value === "") {
      this.isControlled = true;
    }
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterContentInit() {
    // reference to the dxc-toggles and manipulating them depending on the given data
    if (this.toggleGroup) {
      this.toggleGroup.forEach((item: DxcToggleComponent, index: number) => {
        item.onClick.subscribe((value) => {
          if (!this.disabled) {
            this.valueChanged(value);
          }
        });
        item.onKeyPress.subscribe((value: string) => {
          if (!this.disabled) {
            this.valueChanged(value);
          }
        });

        setTimeout(() => {
          item.tabIndexValue = this.disabled ? -1 : this.tabIndex;
          item.role = this.multiple ? "switch" : "radio";
          this.setToggleSelected(item);
        });
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    if (this.isControlled) {
      this.changeSelectedToggle();
    }
  }

  private valueChanged(selectedOption: any): void {
    let newSelectedOptions = [];
    //handle When value is defined
    if (!this.isControlled) {
      if (this.multiple) {
        newSelectedOptions = this.selectedOptions.map((value) => value);
        if (newSelectedOptions.includes(selectedOption)) {
          const index = newSelectedOptions.indexOf(selectedOption);
          newSelectedOptions.splice(index, 1);
        } else {
          newSelectedOptions.push(selectedOption);
        }
        this.selectedOptions = newSelectedOptions;
      } else {
        this.selectedOptions =
          selectedOption === this.selectedOptions ? null : selectedOption;
      }
    } else if (this.multiple) {
      newSelectedOptions = this.value.map((v) => v);
      if (newSelectedOptions.includes(selectedOption)) {
        const index = newSelectedOptions.indexOf(selectedOption);
        newSelectedOptions.splice(index, 1);
      } else {
        newSelectedOptions.push(selectedOption);
      }
    } else {
      newSelectedOptions = selectedOption;
    }
    this.changeSelectedToggle(this.multiple ? selectedOption : null);
    // Emit the new selected values
    this.onChange.emit(
      this.isControlled ? newSelectedOptions : this.selectedOptions
    );
  }

  private changeSelectedToggle(selectedValue?: string) {
    if (this.toggleGroup) {
      if (selectedValue) {
        const filterToggles = this.toggleGroup.filter(
          (item) => item.value === selectedValue
        );
        filterToggles.forEach((item) => {
          this.setToggleSelected(item);
        });
      } else {
        this.toggleGroup.forEach((item) => {
          this.setToggleSelected(item);
        });
      }
      this.ref.detectChanges();
    }
  }

  private setToggleSelected(item: DxcToggleComponent) {
    if (this.multiple) {
      this.isControlled
        ? (item.selected = this.value.includes(item.value))
        : (item.selected = this.selectedOptions.includes(item.value));
    } else {
      this.isControlled
        ? (item.selected = item.value === this.value)
        : (item.selected = item.value === this.selectedOptions);
    }
  }

  disabledStyles() {
    if (this.disabled) {
      return css`
        dxc-toggle {
          background: var(--toggleGroup-unselectedDisabledBackgroundColor);
          color: var(--toggleGroup-unselectedDisabledFontColor);
          .toggleContent {
            &:focus {
              outline: none;
            }
            outline: none;
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-unselectedDisabledFontColor);
            }
          }
          &:hover {
            cursor: not-allowed;
          }
          &.selected {
            background: var(--toggleGroup-selectedDisabledBackgroundColor);
            color: var(--toggleGroup-selectedDisabledFontColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedDisabledFontColor);
            }
          }
        }
      `;
    } else {
      return css`
        dxc-toggle {
          color: var(--toggleGroup-unselectedFontColor);
          &:hover {
            cursor: pointer;
            background: var(--toggleGroup-unselectedHoverBackgroundColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-unselectedFontColor);
            }
          }
          &:active {
            cursor: pointer;
            background: var(--toggleGroup-unselectedActiveBackgroundColor);
            color: #ffffff;
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedFontColor);
            }
          }
          &:focus,
          &:focus-within,
          &:focus-visible {
            outline: solid 2px var(--toggleGroup-focusColor);
            outline-offset: -2px;
          }
          &.selected {
            background: var(--toggleGroup-selectedBackgroundColor);
            color: var(--toggleGroup-selectedFontColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedFontColor);
            }
            &:active {
              background: var(--toggleGroup-selectedActiveBackgroundColor);
              color: #ffffff;
            }
            &:hover {
              background: var(--toggleGroup-selectedHoverBackgroundColor);
              .icon img,
              .icon svg {
                fill: var(--toggleGroup-selectedHoverFontColor);
              }
            }
          }
        }
      `;
    }
  }

  setDxcToggleGroupDynamicStyle(inputs: any) {
    return css`
      display: inline-flex;
      flex-direction: column;
      ${this.utils.getMargins(inputs.margin)};
      label {
        color: ${this.disabled
          ? "var(--toggleGroup-disabledLabelFontColor)"
          : "var(--toggleGroup-labelFontColor)"};
        font-family: var(--toggleGroup-labelFontFamily);
        font-size: var(--toggleGroup-labelFontSize);
        font-style: var(--toggleGroup-labelFontStyle);
        font-weight: var(--toggleGroup-labelFontWeight);
        line-height: var(--toggleGroup-labelLineHeight);
      }

      .helperText {
        color: ${this.disabled
          ? "var(--toggleGroup-disabledHelperTextFontColor)"
          : "var(--toggleGroup-helperTextFontColor)"};
        font-family: var(--toggleGroup-helperTextFontFamily);
        font-size: var(--toggleGroup-helperTextFontSize);
        font-style: var(--toggleGroup-helperTextFontStyle);
        font-weight: var(--toggleGroup-helperTextFontWeight);
        line-height: var(--toggleGroup-helperTextLineHeight);
      }
      .toggleContainer {
        display: inline-flex;
        flex-direction: row;
        opacity: 1;
        height: 48px;
        padding: 4px;
        margin-top: var(--toggleGroup-containerMarginTop);
        border-width: var(--toggleGroup-containerBorderThickness);
        border-style: var(--toggleGroup-containerBorderStyle);
        border-radius: var(--toggleGroup-containerBorderRadius);
        border-color: var(--toggleGroup-containerBorderColor);
        background-color: var(--toggleGroup-containerBackgroundColor);
        margin-top: var(--toggleGroup-containerMarginTop);
        align-items: center;
        min-height: 40px;
        box-sizing: border-box;
      }
      ${this.disabledStyles()};

      dxc-toggle:not(:last-of-type) {
        margin-right: 4px;
      }
    `;
  }
}
