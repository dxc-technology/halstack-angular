import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  Optional,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

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
  selector: "dxc-radio",
  templateUrl: "./dxc-radio.component.html",
  providers: [CssUtils],
})
export class DxcRadioComponent implements OnInit {
  /**
   * If true, the radio is selected. If undefined the component will be uncontrolled and
   * the value will be managed internally by the component.
   */
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = coerceBooleanProperty(value);
  }
  private _checked;

  /**
   * Will be passed to the value attribute of the html input element. When inside a form,
   * this value will be only submitted if the radio is checked.
   */
  @Input() value: string;

  /**
   * Text to be placed next to the radio.
   */
  @Input() label: string;

  /**
   * Whether the label should appear after or before the radio.
   */
  @Input() labelPosition: "before" | "after" = "before";

  /**
   * Name attribute of the input element.
   */
  @Input() name: string = "";

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
   * If true, the radio will change its appearence, showing that the value is required.
   */
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
  private _required = false;

  /**
   * This event will emit in case the user clicks the radio.
   * The new value will be passed as a parameter.
   */
  @Output() onChange: EventEmitter<boolean>;

  /**
   * Size of the margin to be applied to the component. You can pass an object with 'top',
   * 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Margin;

  /**
   * Size of the component.
   */
  @Input() size: "small" | "medium" | "large" | "fillParent" | "fitContent" =
    "fitContent";

  @HostBinding("class") className;
  @HostBinding("class.dark") darkBackground = false;
  @HostBinding("class.light") lightBackground = true;

  renderedChecked: boolean;

  defaultInputs = new BehaviorSubject<any>({
    checked: false,
    value: null,
    label: null,
    labelPosition: "before",
    name: null,
    disabled: false,
    required: false,
    margin: null,
    size: "fitContent",
    id: null,
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

  constructor(
    private utils: CssUtils,
    @Optional() public bgProviderService?: BackgroundProviderService
  ) {
    this.onChange = new EventEmitter();
    this.bgProviderService.$changeColor.subscribe((value) => {
      if (value === "dark") {
        this.lightBackground = false;
        this.darkBackground = true;
      } else if (value === "light") {
        this.lightBackground = true;
        this.darkBackground = false;
      }
    });
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
      ${this.getDarkStyle()}
      ${this.getLightStyle()}
      mat-radio-button {
        width: 100%;
        height: 24px;
        .mat-radio-label {
          width: inherit;
          height: inherit;
          white-space: normal;
          display: inline-flex;
          align-items: center;
          .mat-radio-label-content {
            padding: 0px !important;
            width: calc(100% - 50px);
            ${this.setTextAlign(inputs.labelPosition)}
            font-family: var(--radio-fontFamily);
            font-size: var(--radio-fontSize);
            font-style: var(--radio-fontStyle);
            font-weight: var(--radio-fontWeight);
            width: 100%;
          }
          .mat-radio-required {
            margin-right: 1px;
          }
          .mat-radio-container {
            height: var(--radio-circleSize);
            width: var(--radio-circleSize);
            ${inputs.labelPosition === "after"
              ? css`
                  margin-right: var(--radio-circleLabelSpacing);
                `
              : inputs.labelPosition === "before"
              ? css`
                  margin-left: var(--radio-circleLabelSpacing);
                `
              : css``}
            .mat-radio-frame {
              border-radius: 4px;
            }
            .mat-radio-outer-circle,
            .mat-radio-inner-circle {
              height: var(--radio-circleSize);
              width: var(--radio-circleSize);
            }
            .mat-ripple-element {
              background-color: transparent;
            }
          }
        }

        &.mat-radio-disabled {
          .mat-radio-label {
            cursor: not-allowed;
          }
        }
      }
    `;
  }

  getDarkStyle() {
    return css`
      &.dark {
        mat-radio-button {
          &.cdk-focused:not(.mat-radio-disabled) {
            .mat-radio-label {
              .mat-radio-container {
                .mat-radio-outer-circle {
                  outline: -webkit-focus-ring-color auto 2px;
                  outline-color: var(--radio-focusColorOnDark);
                  outline-offset: 2px;
                  outline-style: solid;
                }
              }
            }
          }
          .mat-radio-label-content {
            color: var(--radio-fontColorOnDark);
          }
          .mat-radio-container {
            .mat-radio-inner-circle {
              background-color: var(--radio-colorOnDark);
            }
            .mat-radio-outer-circle {
              border-color: var(--radio-colorOnDark);
            }
          }
          &.mat-radio-disabled {
            .mat-radio-label {
              .mat-radio-outer-circle {
                border-color: var(--radio-disabledColorOnDark);
              }
              .mat-radio-inner-circle {
                background-color: var(--radio-disabledColorOnDark);
              }
              .mat-radio-label-content {
                color: var(--radio-disabledFontColorOnDark);
              }
            }
          }
        }
      }
    `;
  }

  getLightStyle() {
    return css`
      &.light {
        mat-radio-button {
          &.cdk-focused:not(.mat-radio-disabled) {
            .mat-radio-label {
              .mat-radio-container {
                .mat-radio-outer-circle {
                  outline: -webkit-focus-ring-color auto 2px;
                  outline-color: var(--radio-focusColor);
                  outline-offset: 2px;
                  outline-style: solid;
                }
              }
            }
          }
          .mat-radio-label-content {
            color: var(--radio-fontColor);
          }
          .mat-radio-container {
            .mat-radio-inner-circle {
              background-color: var(--radio-color);
            }
            .mat-radio-outer-circle {
              border-color: var(--radio-color);
            }
          }
          &.mat-radio-disabled {
            .mat-radio-label {
              .mat-radio-outer-circle {
                border-color: var(--radio-disabledColor);
              }
              .mat-radio-inner-circle {
                background-color: var(--radio-disabledColor);
              }
              .mat-radio-label-content {
                color: var(--radio-disabledFontColor);
              }
            }
          }
        }
      }
    `;
  }

  ngOnDestroy() {
    this.utils = null;
  }
}
