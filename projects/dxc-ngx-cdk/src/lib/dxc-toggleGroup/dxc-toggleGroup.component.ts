import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  HostBinding,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "emotion";
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-toggleGroup",
  templateUrl: "./dxc-toggleGroup.component.html",
  styleUrls: [],
  providers: [CssUtils],
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
  @Input() public margin: any;
  @Input() public value: any;
  @Input() public options: {
    label?: string;
    iconSrc?: string;
    value: any;
  }[];
  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();

  selectedOptions = [];

  @HostBinding("class") styledDxcToggleGroup;

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
    margin: null,
  });
  constructor(private utils: CssUtils) {}

  ngOnInit() {
    if (this.value || this.value === "") {
      this.getSelectedByValue();
    }
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
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
  }

  public valueChanged($event: any): void {
    if (!this.disabled) {
      const selectedValues = [];
      if (this.value || this.value === "") {
        if (this.multiple) {
          this.selectedOptions.map((value) => {
            if (value !== $event) {
              selectedValues.push(value);
            }
          });
        }
        if (!this.selectedOptions.includes($event)) {
          selectedValues.push($event);
        }
      } else {
        if (this.selectedOptions && this.selectedOptions.includes($event)) {
          const index = this.selectedOptions.indexOf($event);
          this.selectedOptions.splice(index, 1);
        } else {
          if (this.multiple) {
            this.selectedOptions.push($event);
          } else {
            this.selectedOptions = [$event];
          }
        }
        this.selectedOptions.map((value) => {
          selectedValues.push(value);
        });
      }
      if (this.multiple) {
        this.onChange.emit(selectedValues);
      } else {
        this.onChange.emit(selectedValues[0] || "");
      }
    }
  }

  disabledStyles() {
    if (this.disabled) {
      return css`
        dxc-toggle {
          &:hover {
            cursor: not-allowed;
          }
          opacity: var(--toggle-disabled);
        }
      `;
    } else {
      return css`
        dxc-toggle {
          &:hover {
            cursor: pointer;
          }
          &:hover {
            background: var(--toggle-unselectedHoverBackgroundColor);
            color: var(--toggle-unselectedHoverFontColor);
          }
          &.selected {
            background: var(--toggle-selectedBackgroundColor);
            color: var(--toggle-selectedFontColor);
            &:hover {
              background: var(--toggle-selectedHoverBackgroundColor);
              color: var(--toggle-selectedHoverFontColor);
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

      .toggleContainer {
        height: 100%;

        ${this.disabledStyles()}
        dxc-toggle {
          height: 100%;
          display: flex;
          background: var(--toggle-unselectedBackgroundColor);
          color: var(--toggle-unselectedFontColor);

          .toggleContent {
            height: 100%;
            display: flex;
            align-items: center;
            .label {
              margin: 12px 30px;
              letter-spacing: 1.25px;
              font: normal 14px Open Sans;
            }
            .icon {
              width: 24px;
              height: 24px;
              margin: 10px 12px;
            }
            dxc-svg {
              display: flex;
              svg {
                fill: currentColor;
              }
            }
          }
        }
      }
    `;
  }
}
