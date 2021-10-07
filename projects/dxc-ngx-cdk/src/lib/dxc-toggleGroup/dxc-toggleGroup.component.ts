import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  HostBinding,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "emotion";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { ToggleGroupService } from "./services/toggleGroup.service";

@Component({
  selector: "dxc-togglegroup",
  templateUrl: "./dxc-toggleGroup.component.html",
  styleUrls: [],
  providers: [CssUtils, ToggleGroupService],
})
export class DxcToggleGroupComponent implements OnInit {
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple = false;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  @Input() public margin: any;
  @Input() public value: any;
  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();

  selectedOptions = [];

  @HostBinding("class") styledDxcToggleGroup;

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
    margin: null,
    tabIndexValue: 0,
  });
  constructor(
    private utils: CssUtils,
    private service: ToggleGroupService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterViewInit() {
    if (this.value || this.value === "") {
      this.getSelectedByValue();
    }
    this.service.values.subscribe((valuesSelected) => {
      if (valuesSelected && valuesSelected[0]) {
        this.selectedOptions = valuesSelected;
      } else {
        this.selectedOptions = [];
      }
    });

    this.service.selected.subscribe((selected) => {
      this.valueChanged(selected);
    });
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
    if (this.value || this.value === "") {
      this.getSelectedByValue();
    }
    this.service.setTabIndexValue(this.disabled ? -1 : this.tabIndexValue);
  }

  getSelectedByValue() {
    this.selectedOptions = [];
    if (this.value !== "") {
      if (Array.isArray(this.value)) {
        this.selectedOptions = this.value;
      } else {
        this.selectedOptions.push(this.value);
      }
    }
    this.service.setValues(this.selectedOptions);
    this.cdRef.detectChanges();
  }

  public valueChanged(newSelected: any): void {
    if (!this.disabled) {
      const selectedValues = [];
      if (this.value || this.value === "") {
        if (this.multiple) {
          this.selectedOptions.map((value) => {
            if (newSelected && value !== newSelected) {
              selectedValues.push(value);
            }
          });
        }
        if (!this.selectedOptions.includes(newSelected)) {
          selectedValues.push(newSelected);
        }
      } else {
        if (
          newSelected &&
          this.selectedOptions &&
          this.selectedOptions.includes(newSelected)
        ) {
          const index = this.selectedOptions.indexOf(newSelected);
          this.selectedOptions.splice(index, 1);
        } else {
          if (this.multiple && newSelected) {
            this.selectedOptions.push(newSelected);
          } else {
            this.selectedOptions = [newSelected];
          }
        }
        this.selectedOptions.map((value) => {
          selectedValues.push(value);
        });
        this.service.setValues(selectedValues);
      }
      if (newSelected && this.multiple && selectedValues && selectedValues[0]) {
        this.onChange.emit(selectedValues);
      } else if (newSelected) {
        this.onChange.emit(selectedValues[0] || "");
      }
      this.cdRef.detectChanges();
    }
  }

  disabledStyles() {
    if (this.disabled) {
      return css`
        dxc-toggle {
          background: var(
            --toggleGroup-unselectedDisabledBackgroundColor
          ) !important;
          color: var(--toggleGroup-unselectedDisabledFontColor) !important;
          .toggleContent {
            &:focus {
              outline: none !important;
            }
            outline: none;
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-unselectedDisabledFontColor) !important;
            }
          }
          &:hover {
            cursor: not-allowed;
          }
          &.selected {
            background: var(
              --toggleGroup-selectedDisabledBackgroundColor
            ) !important;
            color: var(--toggleGroup-selectedDisabledFontColor) !important;
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedDisabledFontColor) !important;
            }
          }
        }
      `;
    } else {
      return css`
        dxc-toggle {
          &:hover {
            cursor: pointer;
            background: var(--toggleGroup-unselectedHoverBackgroundColor);
            color: var(--toggleGroup-unselectedFontColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-unselectedFontColor) !important;
            }
          }
          &:active {
            cursor: pointer;
            background: var(--toggleGroup-unselectedActiveBackgroundColor);
            color: var(--toggleGroup-selectedFontColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedFontColor) !important;
            }
          }
          &:focus, &:focus-within, &:focus-visible {
            outline: solid 2px var(--toggleGroup-focusColor) ;
            outline-offset: -2px;
          }
          &.selected {
            background: var(--toggleGroup-selectedBackgroundColor);
            color: var(--toggleGroup-selectedFontColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedFontColor) !important;
            }
            &:active {
              background: var(--toggleGroup-selectedActiveBackgroundColor) !important;
            }
            &:hover {
              background: var(--toggleGroup-selectedHoverBackgroundColor);
              color: var(--toggleGroup-selectedHoverFontColor);
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
      display: flex;
      align-items: center;
      height: 43px;
      width: fit-content;
      border-radius: 4px;
      overflow: hidden;
      ${this.utils.getMargins(inputs.margin)}

      ${this.disabledStyles()}
        dxc-toggle {
        height: 100%;
        display: flex;
        background: var(--toggleGroup-unselectedBackgroundColor);
        color: var(--toggleGroup-unselectedFontColor);

        .toggleContent {
          &:focus, &:focus-within, &:focus-visible {
            outline: none;
          }
          height: 40px;
          display: flex;
          align-items: center;
          .label {
            padding-left: var(--toggleGroup-labelPaddingLeft);
            padding-right: var(--toggleGroup-labelPaddingRight);
            letter-spacing: var(--toggleGroup-fontLetterSpacing);
            font-family: var(--toggleGroup-fontFamily);
            font-size: var(--toggleGroup-fontSize);
            font-style: var(--toggle-fontStyle);
            font-weight: var(--toggleGroup-fontWeight);
          }
          .icon {
            display: flex;
            img,
            svg {
              width: var(--toggleGroup-iconSize);
              height: var(--toggleGroup-iconSize);
              padding-left: var(--toggleGroup-iconPaddingLeft);
              padding-right: var(--toggleGroup-iconPaddingRight);
              fill: var(--toggleGroup-unselectedFontColor);
            }
          }
        }
      }
    `;
  }
}
