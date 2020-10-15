import {
  Component,
  OnChanges,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-switch",
  templateUrl: "./dxc-switch.component.html",
  providers: [CssUtils],
})
export class DxcSwitchComponent implements OnChanges {
  @HostBinding("class") className;
  @Input() checked: boolean;
  @Input() value: any;
  @Input() disabled: boolean | string;
  @Input() required: boolean | string;
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() labelPosition: string;
  @Input() margin: any;
  @Input() size: any;

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
        .mat-slide-toggle-ripple {
          height: 0px;
          width: 0px;
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
        }
        .mat-slide-toggle-thumb {
          &:focus:not(.mat-disabled) {
            outline: -webkit-focus-ring-color auto 1px;
            outline-color: var(--slider-focusColor);
            outline-offset: 2px;
          }
        }
      }
      mat-slide-toggle.mat-checked {
        .mat-slide-toggle-thumb {
          background-color: var(--switch-checkedThumbBackgroundColor);
        }
        .mat-slide-toggle-bar {
          background-color: var(--switch-checkedTrackBackgroundColor);
        }
      }
      mat-slide-toggle.mat-disabled:not(.mat-checked) {
        .mat-slide-toggle-bar {
          opacity: var(--switch-disabledBackgroundColor) !important;
        }
      }
      mat-slide-toggle.mat-disabled {
        .mat-slide-toggle-content {
          opacity: var(--switch-disabledBackgroundColor) !important;
        }
      }
      .mat-slide-toggle.mat-disabled {
        opacity: 1;
        .mat-slide-toggle-label {
          cursor: not-allowed;
        }
        .mat-slide-toggle-thumb {
          cursor: not-allowed;
        }
        .mat-slide-toggle-bar {
          opacity: var(--switch-disabledBackgroundColor) !important;
        }
      }
    `;
  }
}
