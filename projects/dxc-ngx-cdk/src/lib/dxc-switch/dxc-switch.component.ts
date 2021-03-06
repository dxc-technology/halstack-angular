import {
  Component,
  OnChanges,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
} from "@angular/core";
import { EventEmitter, ElementRef, Optional } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

@Component({
  selector: "dxc-switch",
  templateUrl: "./dxc-switch.component.html",
  providers: [CssUtils],
})
export class DxcSwitchComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.dark") darkBackground = false;
  @HostBinding("class.light") lightBackground = true;
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = coerceBooleanProperty(value);
  }
  private _checked;
  @Input() value: any;
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
    tabIndexValue: 0,
  });

  sizes = {
    small: "60px",
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

  ngOnInit() {
    this.renderedChecked = this.checked;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
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

  constructor(
    private utils: CssUtils,
    @Optional() public bgProviderService?: BackgroundProviderService
  ) {
    this.onChange = new EventEmitter();
  }

  onChangeHandler($event: any) {
    this.onChange.emit($event.checked);
    if (this.checked === undefined || this.checked === null) {
      this.renderedChecked = $event.checked;
    } else {
      $event.checked = this.renderedChecked;
      $event.source._checked = this.renderedChecked;
      $event.source._inputElement.nativeElement.checked = this.renderedChecked;
    }
  }

  calculateWidth(margin, size) {
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

  getDarkStyle() {
    return css`
      &.dark {
        .mat-slide-toggle-thumb:not(.mat-checked) {
          background-color: var(--switch-uncheckedThumbBackgroundColorOnDark);
        }
        div.mat-slide-toggle-bar {
          background-color: var(--switch-uncheckedTrackBackgroundColorOnDark);
        }
        span.mat-slide-toggle-content {
          color: var(--switch-labelFontColorOnDark);
        }
        .mat-checked:not(.mat-disabled) {
          .mat-slide-toggle-thumb {
            background-color: var(--switch-checkedThumbBackgroundColorOnDark);
          }
          .mat-slide-toggle-bar {
            background-color: var(--switch-checkedTrackBackgroundColorOnDark);
          }
        }
        .mat-disabled {
          &.mat-checked .mat-slide-toggle-thumb {
            background-color: var(
              --switch-disabledCheckedThumbBackgroundColorOnDark
            ) !important;
          }
          &:not(.mat-checked) {
            .mat-slide-toggle-thumb {
              background-color: var(
                --switch-disabledUncheckedThumbBackgroundColorOnDark
              ) !important;
            }
            .mat-slide-toggle-bar {
              background-color: var(
                --switch-disabledUncheckedTrackBackgroundColorOnDark
              ) !important;
            }
          }
          .mat-slide-toggle-content {
            color: var(--switch-disabledLabelFontColorOnDark) !important;
          }
          .mat-slide-toggle-bar {
            background-color: var(
              --switch-disabledCheckedTrackBackgroundColorOnDark
            ) !important;
          }
        }
        .mat-slide-toggle:not(.mat-disabled).cdk-focused
          .mat-slide-toggle-persistent-ripple {
          outline: -webkit-focus-ring-color auto 1px;
          outline-offset: 2px;
          outline-color: var(--switch-thumbFocusColorOnDark);
        }
      }
    `;
  }

  getLightStyle() {
    return css`
      &.light {
        .mat-slide-toggle-thumb:not(.mat-checked) {
          background-color: var(--switch-uncheckedThumbBackgroundColor);
        }
        span.mat-slide-toggle-required {
          color: var(--switch-requiredColor);
        }
        div.mat-slide-toggle-bar {
          background-color: var(--switch-uncheckedTrackBackgroundColor);
        }
        span.mat-slide-toggle-content {
          color: var(--switch-labelFontColor);
        }
        .mat-checked:not(.mat-disabled) {
          .mat-slide-toggle-thumb {
            background-color: var(--switch-checkedThumbBackgroundColor);
          }
          .mat-slide-toggle-bar {
            background-color: var(--switch-checkedTrackBackgroundColor);
          }
        }
        .mat-disabled {
          &.mat-checked .mat-slide-toggle-thumb {
            background-color: var(
              --switch-disabledCheckedThumbBackgroundColor
            ) !important;
          }
          &:not(.mat-checked) {
            .mat-slide-toggle-thumb {
              background-color: var(
                --switch-disabledUncheckedThumbBackgroundColor
              ) !important;
            }
            .mat-slide-toggle-bar {
              background-color: var(
                --switch-disabledUncheckedTrackBackgroundColor
              ) !important;
            }
          }
          .mat-slide-toggle-content {
            color: var(--switch-disabledLabelFontColor) !important;
          }
          .mat-slide-toggle-bar {
            background-color: var(
              --switch-disabledCheckedTrackBackgroundColor
            ) !important;
          }
        }
        .mat-slide-toggle:not(.mat-disabled).cdk-focused
          .mat-slide-toggle-persistent-ripple {
          outline: -webkit-focus-ring-color auto 1px;
          outline-offset: 2px;
          outline-color: var(--switch-thumbFocusColor);
        }
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.utils.calculateWidth(this.sizes, inputs)}
      display: inline-flex;
      ${this.getLightStyle()}
      ${this.getDarkStyle()}
      mat-slide-toggle {
        margin-top: 5px;
        margin-bottom: 5px;
        display: inline-flex;
        height: auto;
        span.mat-slide-toggle-required {
          color: var(--switch-requiredColor);
        }
        div.mat-slide-toggle-thumb {
          height: var(--switch-thumbHeight);
          width: var(--switch-thumbWidth);
          position: absolute;
          top: -3px;
          right: var(--switch-thumbShift);
        }
        div.mat-slide-toggle-bar {
          height: var(--switch-trackHeight);
          margin: 15px;
          left: var(--switch-spaceBetweenLabelSwitch);
        }
        span.mat-slide-toggle-content {
          white-space: normal;
          ${this.setTextAlign(inputs.labelPosition)}
          font-family: var(--switch-labelFontFamily);
          font-size: var(--switch-labelFontSize);
          font-style: var(--switch-labelFontStyle);
          font-weight: var(--switch-labelFontWeight);
        }
      }
      .mat-slide-toggle:not(.mat-disabled).cdk-focused
        .mat-slide-toggle-persistent-ripple {
        opacity: 1;
        outline: solid 2px;
        margin: 5px;
        height: 29px;
        width: 30px;
      }
      .mat-slide-toggle.mat-checked .mat-ripple-element,
      .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {
        background-color: transparent;
      }
      .mat-slide-toggle.mat-disabled {
        opacity: 1;
        .mat-slide-toggle-label {
          cursor: not-allowed;
        }
        .mat-slide-toggle-thumb {
          cursor: not-allowed;
        }
        .mat-slide-toggle-content {
          font-style: var(--switch-disabledLabelFontStyle);
        }
      }
    `;
  }
}
