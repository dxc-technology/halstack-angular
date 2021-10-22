import { Component, Input, HostBinding, SimpleChanges } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

@Component({
  selector: "dxc-progressbar",
  templateUrl: "./dxc-progressbar.component.html",
  providers: [CssUtils],
})
export class DxcProgressbarComponent {
  mode: string = "indeterminate";
  @Input() value: number;
  @Input() label: string;
  @Input() helperText: string;
  @Input()
  get showValue(): boolean {
    return this._showValue;
  }
  set showValue(value: boolean) {
    this._showValue = coerceBooleanProperty(value);
  }
  private _showValue;
  @Input()
  get overlay(): boolean {
    return this._overlay;
  }
  set overlay(value: boolean) {
    this._overlay = coerceBooleanProperty(value);
  }
  private _overlay = false;
  @Input() margin: any;

  @HostBinding("class") className;
  @HostBinding("class.absolute") isAbsolute: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    showValue: false,
    mode: "large",
    overlay: false,
  });

  constructor(private utils: CssUtils) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.value || this.value === 0) {
      if (this.value <= 100 && this.value >= 0) {
        this.mode = "determinate";
      } else {
        if (this.value > 100) {
          this.mode = "determinate";
          this.value = 100;
        } else if (this.value < 0) {
          this.mode = "determinate";
          this.value = 0;
        } else {
          this.value = undefined;
          this.mode = "indeterminate";
        }
      }
    } else {
      this.mode = "indeterminate";
    }
    if (this.overlay === true) {
      this.isAbsolute = true;
    } else {
      this.isAbsolute = false;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnInit(): void {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;

    if (this.value) {
      this.mode = "determinate";
    }
  }
  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: block;
      height: auto;
      width: auto;
      .progressContainer {
        width: auto;
      }
      &.absolute {
        position: absolute;
        width: auto;
        margin: 0px;
        height: 100%;
        mat-progress-bar {
          width: 80%;
        }
        .labelContainer {
          width: 80%;
        }
        .backOverlay {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          position: fixed;
          opacity: var(--progressBar-overlayOpacity);
          transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          background-color: var(--progressBar-overlayColor);
        }
        .overlayed {
          height: 100%;
          justify-content: center;
          align-items: center;
          top: 0;
          left: 0;
          flex-direction: column;
          position: fixed;
          z-index: 3120;
          display: flex;
          width: 100%;
          .labelContainer .label,
          .labelContainer .value {
            color: var(--progressBar-labelFontColorOnDark);
          }
        }
      }
      mat-progress-bar {
        border-radius: var(--progressBar-borderRadius);
        height: var(--progressBar-thickness);
        z-index: 1;
        width: auto;
        margin-bottom: 8px;
        margin-top: 8px;
        .mat-progress-bar-fill::after {
          background-color: ${inputs.overlay
            ? `var(--progressBar-trackLineColorOnDark);`
            : `var(--progressBar-trackLineColor);`};
        }
        .mat-progress-bar-background {
          fill: transparent;
        }
      }
      .helperText{
        font-family: var(--progressBar-helperTextFontFamily);
        font-size: var(--progressBar-helperTextFontSize);
        font-style: var(--progressBar-helperTextFontStyle);
        font-weight: var(--progressBar-helperTextFontWeight);
        color: ${inputs.overlay
          ? `var(--progressBar-helperTextFontColorOnDark);`
          : `var(--progressBar-helperTextFontColor);`};
      }
      .labelContainer {
        z-index: 1;
        width: auto;
        display: flex;
        .label {
          display: block;
          text-align: left;
          width: 95%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-family: var(--progressBar-labelFontFamily);
          font-size: var(--progressBar-labelFontSize);
          font-style: var(--progressBar-labelFontStyle);
          font-weight: var(--progressBar-labelFontWeight);
          color: var(--progressBar-labelFontColor);
          text-transform: var(--progressBar-labelFontTextTransform);
        }
        .value {
          display: inline-flex;
          justify-content: flex-end;
          width: 5%;
          font-family: var(--progressBar-valueFontFamily);
          font-size: var(--progressBar-valueFontSize);
          font-style: var(--progressBar-valueFontStyle);
          font-weight: var(--progressBar-valueFontWeight);
          color: ${inputs.overlay
            ? `var(--progressBar-valueFontColorOnDark);`
            : `var(--progressBar-valueFontColor);`};
          text-transform: var(--progressBar-valueFontTextTransform);
        }
      }
      mat-progress-bar {
        .mat-progress-bar-buffer {
          background-color: var(--progressBar-totalLineColor);
        }
      }
    `;
  }
}
