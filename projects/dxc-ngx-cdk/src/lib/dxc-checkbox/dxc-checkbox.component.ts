import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
} from "@angular/core";
import { EventEmitter, Optional } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";

import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

@Component({
  selector: "dxc-checkbox",
  templateUrl: "./dxc-checkbox.component.html",
  providers: [CssUtils],
})
export class DxcCheckboxComponent implements OnInit {
  @Input() value: string;
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
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
  private _required;
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() labelPosition: string;
  @Input() margin: any;
  @Input() size: any;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onChange: EventEmitter<any>;

  @HostBinding("class") className;
  @HostBinding("class.dark") darkBackground = false;
  @HostBinding("class.light") lightBackground = true;
  @HostBinding("class.hover") hover = false;

  renderedChecked: boolean;

  defaultInputs = new BehaviorSubject<any>({
    value: null,
    checked: false,
    disabled: false,
    required: false,
    label: null,
    name: null,
    id: null,
    labelPosition: "before",
    margin: null,
    size: "fitContent",
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

    this.labelPosition === "after" ? "after" : "before";
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

  ngOnInit() {
    this.renderedChecked = this.checked;

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.disabled) {
      this.required = false;
    }
  }

  onValueChange($event: any) {
    this.onChange.emit($event.checked);

    if (this.checked === undefined || this.checked === null) {
      this.renderedChecked = $event.checked;
    } else {
      $event.source.checked = this.renderedChecked;
      $event.source._checked = this.renderedChecked;
      $event.source._inputElement.nativeElement.checked = this.renderedChecked;
    }
  }

  calculateWidth(size) {
    if (size === "fillParent") {
      return css`
        width: ${this.sizes[size]};
      `;
    }
    return css`
      width: ${this.sizes[size]};
    `;
  }

  setTextAlign(labelPosition) {
    if (labelPosition === "before") {
      return css`
        text-align: end;
      `;
    }
  }

  hoverCheckbox() {
    this.hover = !this.hover;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.calculateWidth(inputs.size)}
      display: inline-flex;
      vertical-align: top;
      .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,
      .mat-checkbox-checked.mat-accent .mat-checkbox-background {
        background: var(--checkbox-selectedBackgroundColor) !important;
      }

      .mat-checkbox-checked .mat-checkbox-inner-container {
        &:hover {
          .mat-checkbox-background {
            background: var(--checkbox-selectedHoverBackgroundColor) !important;
          }
        }
      }

      .mat-checkbox:not(.mat-checkbox-disabled).mat-accent
        .mat-checkbox-ripple
        .mat-ripple-element {
        background-color: transparent;
      }
      mat-checkbox {
        display: inline-flex;
        width: 100%;
        &.cdk-focused:not(.mat-checkbox-disabled) {
          label.mat-checkbox-layout {
            .mat-checkbox-inner-container {
              .mat-checkbox-background {
                outline: -webkit-focus-ring-color auto 2px;
                outline-color: var(--checkbox-focusColor);
                outline-offset: 3px;
              }
            }
          }
        }
        label.mat-checkbox-layout {
          display: inline-flex;
          align-items: center;
          width: 100%;
          white-space: normal;
          span.mat-checkbox-label {
            span.checkboxLabel {
              word-break: normal;
              color: var(--checkbox-fontColor);
              font-family: var(--checkbox-fontFamily) !important;
              font-size: var(--checkbox-fontSize);
              font-weight: var(--checkbox-fontWeight);
              display: flex;
              justify-content: flex-end;
            }
          }

          .mat-checkbox-inner-container {
            margin: ${
              inputs.labelPosition === "after"
                ? "2px calc(var(--checkbox-checkLabelSpacing) + 6px) 2px 2px;"
                : "2px 2px 2px calc(var(--checkbox-checkLabelSpacing) + 2px);"
            };
            width: 18px;
            height: 18px;

            .mat-checkbox-background,
            .mat-checkbox-frame {
              border-radius: 2px;
              border-color: var(--checkbox-borderColor);
              border-width: 2px;
            }

            .mat-checkbox-background {
              svg path {
                stroke: var(--checkbox-checkColor) !important;
                stroke-width: 3px;
              }
            }

            &:hover {
              .mat-checkbox-background,
              .mat-checkbox-frame {
                border-color: var(--checkbox-hoverBorderColor);
              }
            }
          }
        }
        &.mat-checkbox-disabled {
          cursor: not-allowed;
          .mat-checkbox-inner-container {
            .mat-checkbox-frame {
              border-color: var(--checkbox-disabledBorderColor) !important;
            }
          }
          label.mat-checkbox-layout span.mat-checkbox-label {
            color: var(--checkbox-disabledFontColor) !important;
          }
        }
        &.mat-checkbox-disabled.mat-checkbox-checked {
          .mat-checkbox-inner-container {
            .mat-checkbox-frame {
              border-color: var(--checkbox-disabledBorderColor) !important;
            }
            .mat-checkbox-background {
              background: var(
                --checkbox-selectedDisabledBackgroundColor
              ) !important;
              svg path {
                stroke: var(--checkbox-disabledCheckColor) !important;
              }
            }
          }
        }
      }
      &.dark {
        mat-checkbox {
          &.cdk-focused:not(.mat-checkbox-disabled) {
            label.mat-checkbox-layout {
              .mat-checkbox-inner-container {
                .mat-checkbox-background {
                  outline: -webkit-focus-ring-color auto 2px;
                  outline-color: var(--checkbox-focusColorOnDark);
                  outline-offset: 3px;
                }
              }
            }
          }
        }
        .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,
        .mat-checkbox-checked.mat-accent .mat-checkbox-background {
          background: var(--checkbox-selectedBackgroundColorOnDark) !important;
        }

        .mat-checkbox-checked .mat-checkbox-inner-container {
          &:hover {
            .mat-checkbox-background {
              background: var(
                --checkbox-selectedHoverBackgroundColorOnDark
              ) !important;
            }
          }
        }

        label.mat-checkbox-layout {
          span.mat-checkbox-label {
            span.checkboxLabel {
              color: var(--checkbox-fontColorOnDark);
            }
          }
          .mat-checkbox-inner-container {
            .mat-checkbox-background,
            .mat-checkbox-frame {
              border-color: var(--checkbox-borderColorOnDark);
            }
            .mat-checkbox-background {
              svg path {
                stroke: var(--checkbox-checkColorOnDark) !important;
              }
            }

            &:hover {
              .mat-checkbox-background,
              .mat-checkbox-frame {
                border-color: var(--checkbox-hoverBorderColorOnDark);
              }
            }
          }
        }

        .mat-checkbox-disabled {
          .mat-checkbox-inner-container {
            .mat-checkbox-frame {
              border-color: var(
                --checkbox-disabledBorderColorOnDark
              ) !important;
            }
          }
          span.checkboxLabel {
            color: var(--checkbox-disabledFontColorOnDark) !important;
          }
        }
        .mat-checkbox-disabled.mat-checkbox-checked {
          .mat-checkbox-inner-container {
            .mat-checkbox-frame {
              border-color: var(
                --checkbox-disabledBorderColorOnDark
              ) !important;
            }
            .mat-checkbox-background {
              background: var(
                --checkbox-selectedDisabledBackgroundColorOnDark
              ) !important;
              svg path {
                stroke: var(--checkbox-disabledCheckColorOnDark) !important;
              }
            }
          }
        }
      }
      &.hover:not(.dark) {
        .mat-checkbox-checked .mat-checkbox-inner-container {
          .mat-checkbox-background {
            background: var(--checkbox-selectedHoverBackgroundColor) !important;
          }
        }
        label.mat-checkbox-layout .mat-checkbox-inner-container .mat-checkbox-background, 
        label.mat-checkbox-layout .mat-checkbox-inner-container .mat-checkbox-frame {
            border-color: var(--checkbox-hoverBorderColor);
        }
      }
      &.hover {
        .mat-checkbox-checked .mat-checkbox-inner-container {
          .mat-checkbox-background {
            background: var(--checkbox-selectedHoverBackgroundColorOnDark) !important;
          }
        }
        label.mat-checkbox-layout .mat-checkbox-inner-container .mat-checkbox-background, 
        label.mat-checkbox-layout .mat-checkbox-inner-container .mat-checkbox-frame {
            border-color: var(--checkbox-hoverBorderColorOnDark);
        }
      }
    `;
  }
}
