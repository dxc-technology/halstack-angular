import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-radio",
  templateUrl: "./dxc-radio.component.html",
  providers: [CssUtils],
})
export class DxcRadioComponent implements OnInit {
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = coerceBooleanProperty(value);
  }
  private _checked;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input() label: string;
  @Input() name: string;
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
  private _required;
  @Input() labelPosition: string;
  @Input() margin: string;
  @Input() size: string;
  @Input() value: string;

  @Output() onChange: EventEmitter<any>;

  @HostBinding("class") className;

  renderedChecked: boolean;

  defaultInputs = new BehaviorSubject<any>({
    checked: false,
    disabled: false,
    label: null,
    name: "",
    required: false,
    labelPosition: "after",
    margin: null,
    size: "fitContent",
    value: null,
  });

  sizes = {
    small: "120px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset",
  };

  public ngOnChanges(changes: SimpleChanges): void {
    this.renderedChecked = this.checked;

    this.labelPosition === "before" ? "before" : "after";
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  constructor(private utils: CssUtils) {
    this.onChange = new EventEmitter();
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  ngOnInit() {
    this.renderedChecked = this.checked;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  onValueChange($event: any) {
    this.onChange.emit($event.source.checked);

    if (this.checked === undefined || this.checked === null) {
      this.renderedChecked = $event.source.checked;
    } else {
      $event.source.checked = this.renderedChecked;
      $event.source._inputElement.nativeElement.checked = this.renderedChecked;
    }
  }

  setTextAlign(labelPosition) {
    if (labelPosition === "before") {
      return css`
        text-align: end;
      `;
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: inline-flex;
      ${this.utils.getMargins(inputs.margin)}
      ${this.calculateWidth(inputs)}
      mat-radio-button {
        width: 100%;
        &.cdk-focused:not(.mat-radio-disabled) {
          .mat-radio-label {
            .mat-radio-container {
              .mat-radio-outer-circle {
                outline: -webkit-focus-ring-color auto 1px;
                outline-color: var(--radio-focusColor);
              }
            }
          }
        }
        .mat-radio-label {
          white-space: normal;
          display: inline-flex;
          align-items: center;
          .mat-radio-label-content {
            padding: 0px !important;
            width: calc(100% - 50px);
            ${this.setTextAlign(inputs.labelPosition)}
            color: var(--radio-fontColor);
            font-family: var(--fontFamily);
          }
          .mat-radio-required {
            margin-right: 1px;
          }
          .mat-radio-container {
            ${inputs.labelPosition === "after"
              ? css`
                  margin-right: 15px;
                  margin-left: 15px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                `
              : inputs.labelPosition === "before"
              ? css`
                  margin-left: 15px;
                  margin-right: 15px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                `
              : css``}
            .mat-radio-inner-circle {
              background-color: var(--radio-color);
            }
            .mat-radio-outer-circle {
              border-color: var(--radio-color);
            }
            .mat-radio-frame {
              border-radius: 4px;
            }
          }
        }

        &.mat-radio-disabled {
          .mat-radio-label {
            .mat-radio-outer-circle{
              border-color: var(--radio-disabledColor);
            }
            .mat-radio-inner-circle{
              background-color: var(--radio-disabledColor);
            }
            .mat-radio-label-content{
              color: var(--radio-disabledFontColor);
              font-family: var(--fontFamily);
            }
            cursor: not-allowed;
          }
        }
      }
    `;
  }

  ngOnDestroy() {
    this.utils = null;
  }
}
