import {
  Component,
  OnChanges,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
} from "@angular/core";
import { EventEmitter, ElementRef } from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";

@Component({
  selector: "dxc-switch",
  templateUrl: "./dxc-switch.component.html",
  providers: [CssUtils],
})
export class DxcSwitchComponent implements OnChanges {
  @HostBinding("class") className;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null;
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
  }

  constructor(private utils: CssUtils) {
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

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.utils.calculateWidth(this.sizes, inputs)}
      display: inline-flex;
      font-family: var(--fontFamily);
      color: var(--switch-fontColor);
      mat-slide-toggle {
        margin-top: 5px;
        margin-bottom: 5px;
        display: inline-flex;
        height: auto;
        .mat-slide-toggle-thumb:not(.mat-checked) {
          background-color: var(--switch-uncheckedThumbBackgroundColor);
        }
        span.mat-slide-toggle-required {
          color: var(--switch-requiredColor);
        }
        div.mat-slide-toggle-thumb {
          height: 24px;
          width: 24px;
          position: absolute;
          top: -3px;
          right: -2px;
        }
        div.mat-slide-toggle-bar {
          height: 12px;
          margin: 15px;
          background-color: var(--switch-uncheckedTrackBackgroundColor);
        }
        span.mat-slide-toggle-content {
          white-space: normal;
          ${this.setTextAlign(inputs.labelPosition)}
          color: var(--switch-fontColor);
        }
        .mat-slide-toggle-thumb {
          &:focus:not(.mat-disabled) {
            outline: -webkit-focus-ring-color auto 1px;
            outline-color: var(--switch-focusColor);
            outline-offset: 2px;
          }
        }
      }
      mat-slide-toggle.mat-checked:not(.mat-disabled) {
        .mat-slide-toggle-thumb {
          background-color: var(--switch-checkedThumbBackgroundColor);
        }
        .mat-slide-toggle-bar {
          background-color: var(--switch-checkedTrackBackgroundColor);
        }
      }
      mat-slide-toggle.mat-disabled:not(.mat-checked) {
        .mat-slide-toggle-bar {
          background-color: var(
            --switch-disabledUncheckedTrackBackgroundColor
          ) !important;
        }
      }
      mat-slide-toggle.mat-disabled {
        .mat-slide-toggle-content {
          color: var(--switch-disabledFontColor) !important;
        }
        .mat-slide-toggle-bar {
          background-color: var(
            --switch-disabledCheckedTrackBackgroundColor
          ) !important;
        }
      }
      .mat-slide-toggle:not(.mat-disabled).cdk-focused
        .mat-slide-toggle-persistent-ripple {
        opacity: 1;
        outline: solid 2px;
        margin: 5px;
        height: 29px;
        width: 30px;
        outline-color: var(--switch-focusColor);
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
      }
    `;
  }
}
