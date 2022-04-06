import {
  Component,
  Input,
  HostBinding,
  SimpleChanges,
  ElementRef,
  ViewChild,
  OnInit,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Space, Spacing, SpinnerProperties } from "./dxc-spinner.types";
@Component({
  selector: "dxc-spinner",
  templateUrl: "./dxc-spinner.component.html",
  providers: [CssUtils],
})
export class DxcSpinnerComponent implements OnInit {
  /**
   * The value of the progress indicator. If it's received the
   * component is determinate, otherwise is indeterminate.
   */
  @Input() value: number;
  /**
   * Text to be placed inside the spinner.
   */
  @Input() label: string;
  /**
   * Available modes of the spinner ('large' | 'small' | 'overlay').
   */
  @Input() mode: "large" | "small" | "overlay" = "large";
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Spacing;
  /**
   * If true, the value is displayed inside the spinner..
   */
  @Input()
  get showValue(): boolean {
    return this._showValue;
  }
  set showValue(value: boolean) {
    this._showValue = coerceBooleanProperty(value);
  }
  private _showValue = false;

  @HostBinding("class") className: string;
  @HostBinding("class.overlay") isOverlayed: boolean = false;
  @HostBinding("class.small") isSmall: boolean = false;
  @HostBinding("class.large") isLarge: boolean = true;
  @ViewChild("svgBackgroundLarge") svgBackgroundLarge: ElementRef;
  @ViewChild("svgBackgroundSmall") svgBackgroundSmall: ElementRef;
  @ViewChild("svgLarge") svgLarge: ElementRef;
  @ViewChild("svgSmall") svgSmall: ElementRef;
  @ViewChild("circleBackgroundLarge") circleBackgroundLarge: ElementRef;
  @ViewChild("circleBackgroundSmall") circleBackgroundSmall: ElementRef;
  @ViewChild("circleLarge") circleLarge: ElementRef;
  @ViewChild("circleSmall") circleSmall: ElementRef;

  isIndeterminate: boolean = true;
  largeSize: number = 140;
  smallSize: number = 16;
  radioLargeSize: number = 65;
  radioSmallSize: number = 6;

  defaultInputs = new BehaviorSubject<SpinnerProperties>({
    showValue: false,
    mode: "large",
    value: 0,
    label: null,
    margin: null,
  });

  constructor(private utils: CssUtils) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.value || this.value === 0) {
      if (this.value <= 100 && this.value >= 0) {
        this.isIndeterminate = false;
      } else {
        if (this.value > 100) {
          this.isIndeterminate = false;
          this.value = 100;
        } else if (this.value < 0) {
          this.isIndeterminate = false;
          this.value = 0;
        } else {
          this.value = undefined;
          this.isIndeterminate = true;
        }
      }
    } else {
      this.isIndeterminate = true;
    }
    if (this.mode === "overlay") {
      this.isOverlayed = true;
      this.isLarge = false;
      this.isSmall = false;
    } else if (this.mode === "small") {
      this.isOverlayed = false;
      this.isLarge = false;
      this.isSmall = true;
    } else if (this.mode === "large") {
      this.isOverlayed = false;
      this.isLarge = true;
      this.isSmall = false;
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
      this.isIndeterminate = false;
    }
  }

  ngAfterViewInit() {
    if (this.mode !== "small") {
      this.svgBackgroundLarge.nativeElement.setAttribute(
        "viewBox",
        "0 0 " + this.largeSize + " " + this.largeSize
      );
      this.svgLarge.nativeElement.setAttribute(
        "viewBox",
        "0 0 " + this.largeSize + " " + this.largeSize
      );
      this.circleBackgroundLarge.nativeElement.setAttribute(
        "cx",
        this.largeSize / 2
      );
      this.circleBackgroundLarge.nativeElement.setAttribute(
        "cy",
        this.largeSize / 2
      );
      this.circleLarge.nativeElement.setAttribute("cx", this.largeSize / 2);
      this.circleLarge.nativeElement.setAttribute("cy", this.largeSize / 2);
      this.circleBackgroundLarge.nativeElement.setAttribute(
        "r",
        this.radioLargeSize
      );
      this.circleLarge.nativeElement.setAttribute("r", this.radioLargeSize);
    } else {
      this.svgBackgroundSmall.nativeElement.setAttribute(
        "viewBox",
        "0 0 " + this.smallSize + " " + this.smallSize
      );
      this.svgSmall.nativeElement.setAttribute(
        "viewBox",
        "0 0 " + this.smallSize + " " + this.smallSize
      );
      this.circleBackgroundSmall.nativeElement.setAttribute(
        "cx",
        this.smallSize / 2
      );
      this.circleBackgroundSmall.nativeElement.setAttribute(
        "cy",
        this.smallSize / 2
      );
      this.circleSmall.nativeElement.setAttribute("cx", this.smallSize / 2);
      this.circleSmall.nativeElement.setAttribute("cy", this.smallSize / 2);
      this.circleBackgroundSmall.nativeElement.setAttribute(
        "r",
        this.radioSmallSize
      );
      this.circleSmall.nativeElement.setAttribute("r", this.radioSmallSize);
    }
  }

  calculateValue(strokeDashArray) {
    let val = 0;
    if (this.value >= 0 && this.value <= 100) {
      val = strokeDashArray * (1 - this.value / 100);
    }
    return val;
  }

  getSpinnerStyle() {
    return css`
      position: relative;
      z-index: 2;
      svg {
        transform: rotate(-90deg);
        top: 0;
        left: 0;
        transform-origin: center;
        overflow: visible;
      }
      circle {
        fill: transparent;
        stroke-linecap: initial;
        vector-effect: non-scaling-stroke;
      }
    `;
  }

  getIndeterminateStyle(inputs, size, strokeWidth, strokeDashArray) {
    return css`
      .spinnerIndeterminate {
        ${this.getSpinnerStyle()}
        height: ${size};
        width: ${size};
        svg {
          animation: 1.4s linear infinite both spinner-svg;
        }
        circle {
          ${inputs.mode !== "small"
            ? "animation: 1.4s ease-in-out infinite both svg-circle-large;"
            : "animation: 1.4s ease-in-out infinite both svg-circle-small;"}
          ${inputs.mode === "overlay"
            ? "stroke: var(--spinner-trackCircleColorOnDark);"
            : "stroke: var(--spinner-trackCircleColor);"}
          stroke-dasharray: ${strokeDashArray};
          stroke-width: ${strokeWidth}px;
          transform-origin: 50% 50%;
        }
      }
    `;
  }

  getDeterminateStyle(inputs, size, strokeWidth, strokeDashArray) {
    return css`
      .spinnerDeterminate {
        ${this.getSpinnerStyle()}
        height: ${size};
        width: ${size};
        circle {
          animation: none;
          ${inputs.mode === "overlay"
            ? "stroke: var(--spinner-trackCircleColorOnDark);"
            : "stroke: var(--spinner-trackCircleColor);"}
          stroke-width: ${strokeWidth}px;
          stroke-dashoffset: ${inputs.mode !== "small"
            ? this.calculateValue(408)
            : this.calculateValue(38)};
          stroke-dasharray: ${strokeDashArray};
        }
      }
    `;
  }

  getBackgroundCircleStyle(size, strokeWidth, strokeDashArray) {
    return css`
      .backgroundSpinner {
        height: ${size};
        width: ${size};
        position: absolute;
        z-index: 1;
        circle {
          animation: none;
          fill: transparent;
          stroke: var(--spinner-totalCircleColor);
          stroke-dasharray: ${strokeDashArray};
          stroke-linecap: initial;
          stroke-width: ${strokeWidth}px;
          transform-origin: 50% 50%;
          vector-effect: non-scaling-stroke;
        }
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${inputs.mode != "overlay" ? this.utils.getMargins(inputs.margin) : ""}
      display: inline-block;
      &.overlay {
        height: 100vh;
        width: 100vw;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .spinnerContainer {
        align-items: center;
        display: flex;
        height: inherit;
        justify-content: center;
        position: relative;
        width: inherit;
        .backOverlay {
          width: 100vw;
          height: 100vh;
          opacity: 1;
          transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          position: fixed;
          top: 0;
          left: 0;
          background-color: var(--spinner-overlayBackgroundColor);
          opacity: var(--spinner-overlayOpacity);
        }
        &.overlayed {
          .labelsContainer {
            p {
              &.label {
                text-align: var(--spinner-overlayLabelTextAlign);
                font-family: var(--spinner-overlayLabelFontFamily);
                font-size: var(--spinner-overlayLabelFontSize);
                font-weight: var(--spinner-overlayLabelFontWeight);
                font-style: var(--spinner-overlayLabelFontStyle);
                color: var(--spinner-overlayLabelFontColor);
              }
              &.value {
                text-align: var(--spinner-overlayProgressValueTextAlign);
                font-family: var(--spinner-overlayProgressValueFontFamily);
                font-size: var(--spinner-overlayProgressValueFontSize);
                font-weight: var(--spinner-overlayProgressValueFontWeight);
                font-style: var(--spinner-overlayProgressValueFontStyle);
                color: var(--spinner-overlayProgressValueFontColor);
              }
            }
          }
        }
        &.overlayed,
        &.larger {
          ${this.getBackgroundCircleStyle("140px", 8.5, 408)}
          ${this.getIndeterminateStyle(inputs, "140px", 8.5, 408)}
          ${this.getDeterminateStyle(inputs, "140px", 8.5, 408)}
        }
        &.smaller {
          ${this.getBackgroundCircleStyle("16px", 2, 38)}
          ${this.getIndeterminateStyle(inputs, "16px", 2, 38)}
          ${this.getDeterminateStyle(inputs, "16px", 2, 38)}
        }
        .labelsContainer {
          display: block;
          margin: 0 auto;
          position: absolute;
          text-align: center;
          width: 110px;
          p {
            margin: 0;
            &.label,
            &.value {
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            &.label {
              text-align: var(--spinner-labelTextAlign);
              font-family: var(--spinner-labelFontFamily);
              font-size: var(--spinner-labelFontSize);
              font-weight: var(--spinner-labelFontWeight);
              font-style: var(--spinner-labelFontStyle);
              color: var(--spinner-labelFontColor);
            }
            &.value {
              text-align: var(--spinner-progressValueTextAlign);
              font-family: var(--spinner-progressValueFontFamily);
              font-size: var(--spinner-progressValueFontSize);
              font-weight: var(--spinner-progressValueFontWeight);
              font-style: var(--spinner-progressValueFontStyle);
              color: var(--spinner-progressValueFontColor);
            }
          }
        }
        @keyframes spinner-svg {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        @keyframes svg-circle-large {
          0% {
            stroke-dashoffset: 400;
            transform: rotate(0);
          }

          50% {
            stroke-dashoffset: 75;
            transform: rotate(45deg);
          }

          100% {
            stroke-dashoffset: 400;
            transform: rotate(360deg);
          }
        }
        @keyframes svg-circle-small {
          0% {
            stroke-dashoffset: 35;
            transform: rotate(0);
          }

          50% {
            stroke-dashoffset: 8;
            transform: rotate(45deg);
          }

          100% {
            stroke-dashoffset: 35;
            transform: rotate(360deg);
          }
        }
      }
    `;
  }
}
