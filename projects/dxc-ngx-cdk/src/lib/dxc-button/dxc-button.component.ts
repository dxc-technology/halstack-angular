import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges,
  ContentChildren,
  QueryList,
  ChangeDetectorRef,
  Optional,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { DxcButtonIconComponent } from "./dxc-button-icon/dxc-button-icon.component";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
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
  selector: "dxc-button",
  templateUrl: "./dxc-button.component.html",
  providers: [CssUtils],
})
export class DxcButtonComponent {
  /**
   * Uses one of the available button modes.
   */
  @Input() mode: "primary" | "secondary" | "text" = "primary";
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
   * Text to be placed inside the button.
   */
  @Input() label: string;
  /**
   * @deprecated URL of the icon that will be placed next to the button label.
   */
  @Input() iconSrc: string;
  /**
   * Whether the icon should appear after or before the label.
   */
  @Input() iconPosition: "before" | "after" = "before";
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Margin;
  /**
   * Size of the component.
   */
  @Input() size: Size = "fitContent";
  /**
   * This prop corresponds to the 'type' prop of the button in html.
   */
  @Input() type: "reset" | "submit" | "button" = "button";
  /**
   * Value of the tabindex attribute.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue = 0;

  /**
   * This function will be called when the user clicks the button.
   */
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding("class") className;

  @ContentChildren(DxcButtonIconComponent)
  dxcButtonIcon: QueryList<DxcButtonIconComponent>;

  lightBackground: boolean = true;
  darkBackground: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    mode: "primary",
    disabled: false,
    label: null,
    iconSrc: null,
    iconPosition: "before",
    margin: null,
    size: "fitContent",
    tabIndexValue: 0,
  });

  constructor(
    private utils: CssUtils,
    private cdRef: ChangeDetectorRef,
    @Optional() public bgProviderService?: BackgroundProviderService
  ) {
    this.bgProviderService.$changeColor.subscribe((value) => {
      if (value === "dark") {
        this.lightBackground = false;
        this.darkBackground = true;
      } else if (value === "light") {
        this.lightBackground = true;
        this.darkBackground = false;
      }
      this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    });
  }

  ngAfterViewInit() {
    if (this.dxcButtonIcon?.length !== 0) {
      this.iconSrc = "";
    }
    this.cdRef.detectChanges();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.iconPosition !== "after") {
      this.iconPosition = "before";
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  sizes = {
    small: "42px",
    medium: "120px",
    large: "240px",
    fillParent: "100%",
    fitContent: "unset",
  };

  setPadding(size) {
    if (size === "small") {
      return css`
        padding: 11px;
        min-width: calc(100% - 22px);
      `;
    }
    return css`
      min-width: unset;
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.getModeStyle()}
      ${this.utils.calculateWidth(this.sizes, inputs)}
      display: inline-flex;
      vertical-align: middle;
      .dxcButton {
        padding-top: var(--button-paddingTop);
        padding-bottom: var(--button-paddingBottom);
        padding-left: var(--button-paddingLeft);
        padding-right: var(--button-paddingRight);
        ${this.setPadding(inputs.size)}
        width: 100%;
        height: 40px;
        line-height: var(--button-labelFontLineHeight);
        letter-spacing: var(--button-labelLetterSpacing);
        white-space: normal;
        display: inline-flex;
        align-items: center;
        span.mat-button-wrapper {
          width: 100%;
          display: flex;
          align-items: inherit;
          justify-content: center;
          ${this.iconPosition === "after"
            ? "flex-direction: row-reverse;"
            : "flex-direction: row;"}

          & > span {
            margin: 0 8px;
            display: block;
            width: 100%;
            z-index: 20;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
          }
          dxc-button-icon {
            display: flex;
          }
          img,
          svg {
            ${this.label
              ? this.iconPosition === "before"
                ? "margin-left: 8px;"
                : "margin-right: 8px;"
              : ""}
            height: 100%;
            width: 100%;
            z-index: 20;
          }
          mat-icon {
            font-size: 24px;
            width: auto;
            height: auto;
            margin-bottom: -2.5px;
            margin-top: -2.5px;
          }

          i {
            font-size: 18px;
            margin-bottom: -2.5px;
            margin-top: -2.5px;
          }

          mat-icon:first-child,
          i:first-child {
            margin-right: 6px;

            &:last-child {
              margin-right: 6px;
              margin-left: 6px;
            }
          }

          span + mat-icon,
          span + i {
            margin-left: 6px;
          }
        }

        &:attr(disabled) {
          cursor: not-allowed;
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
    `;
  }

  getModeStyle() {
    if (this.mode === "secondary") {
      return this.getSecondaryStyle();
    } else if (this.mode === "text") {
      return this.getTextStyle();
    } else {
      return this.getPrimaryStyle();
    }
  }

  getPrimaryStyle() {
    return css`
      ${this.lightBackground
        ? this.getPrimaryLightStyle()
        : this.getPrimaryDarkStyle()}
      button {
        span.mat-button-ripple {
          border-style: var(--button-primaryBorderStyle);
          border-radius: var(--button-primaryBorderRadius);
          border-width: var(--button-primaryBorderThickness);
        }
        .mat-button-wrapper,
        .mat-button-wrapper span {
          font-family: var(--button-primaryFontFamily) !important;
          font-size: var(--button-primaryFontSize) !important;
          font-weight: var(--button-primaryFontWeight) !important;
        }
      }
    `;
  }
  getSecondaryStyle() {
    return css`
      ${this.lightBackground
        ? this.getSecondaryLightStyle()
        : this.getSecondaryDarkStyle()}
      button {
        padding-top: var(--button-secondaryPaddingTop);
        padding-bottom: var(--button-secondaryPaddingBottom);
        span.mat-button-ripple {
          border-style: var(--button-secondaryBorderStyle);
          border-radius: var(--button-secondaryBorderRadius);
          border-width: var(--button-secondaryBorderThickness);
        }
        .mat-button-wrapper span {
          font-family: var(--button-secondaryFontFamily) !important;
          font-size: var(--button-secondaryFontSize) !important;
          font-weight: var(--button-secondaryFontWeight) !important;
        }
      }
    `;
  }
  getTextStyle() {
    return css`
      ${this.lightBackground
        ? this.getTextLightStyle()
        : this.getTextDarkStyle()}
      button {
        padding-top: var(--button-textPaddingTop);
        padding-bottom: var(--button-textPaddingBottom);
        span.mat-button-ripple {
          border-style: var(--button-textBorderStyle);
          border-radius: var(--button-textBorderRadius);
          border-width: var(--button-textBorderThickness);
        }
        .mat-button-wrapper span {
          font-family: var(--button-textFontFamily) !important;
          font-size: var(--button-textFontSize) !important;
          font-weight: var(--button-textFontWeight) !important;
        }
        &:hover:not([disabled]) {
          background: var(--button-textHoverBackgroundColor);
          color: #ffffff;
        }
        &:disabled {
          background: var(--button-textDisabledBackgroundColor);
          color: var(--button-textDisabledFontColor) !important;
        }
        &:active:not([disabled]) {
          background: var(--button-textActiveBackgroundColor);
        }
      }
    `;
  }

  getPrimaryLightStyle() {
    return css`
      button {
        background: var(--button-primaryBackgroundColor);
        color: var(--button-primaryFontColor);
        span.mat-button-ripple {
          border-color: transparent;
        }
        &:hover:not([disabled]) {
          background: var(--button-primaryHoverBackgroundColor);
          color: #ffffff;
        }
        &:disabled {
          background: var(--button-primaryDisabledBackgroundColor);
          color: var(--button-primaryDisabledFontColor) !important;
        }
        &:focus:not([disabled]) {
          box-shadow: var(--button-focusBorderColor) 0px 0px 0px 2px;
        }
        &:active:not([disabled]) {
          background: var(--button-primaryActiveBackgroundColor);
        }
      }
    `;
  }

  getPrimaryDarkStyle() {
    return css`
      button {
        background: var(--button-primaryBackgroundColorOnDark);
        color: var(--button-primaryFontColorOnDark);
        span.mat-button-ripple {
          border-color: transparent;
        }
        &:hover:not([disabled]) {
          background: var(--button-primaryHoverBackgroundColorOnDark);
          color: #ffffff;
        }
        &:disabled {
          background: var(--button-primaryDisabledBackgroundColorOnDark);
          color: var(--button-primaryDisabledFontColorOnDark) !important;
        }
        &:focus:not([disabled]) {
          box-shadow: var(--button-focusBorderColorOnDark) 0px 0px 0px 2px;
        }
        &:active:not([disabled]) {
          background: var(--button-primaryActiveBackgroundColorOnDark);
          color: #ffffff;
        }
      }
    `;
  }

  getSecondaryLightStyle() {
    return css`
      button {
        color: var(--button-secondaryFontColor);
        background-color: var(--button-secondaryBackgroundColor);
        span.mat-button-ripple {
          border-color: var(--button-secondaryBorderColor);
        }
        &:hover:not([disabled]) {
          span.mat-button-ripple {
            border-color: #5f249f;
          }
          background: var(--button-secondaryHoverBackgroundColor);
          color: var(--button-secondaryHoverFontColor);
        }
        &:disabled {
          background-color: var(--button-secondaryDisabledBackgroundColor);
          color: var(--button-secondaryDisabledFontColor) !important;
          span.mat-button-ripple {
            border-color: var(--button-secondaryDisabledBorderColor);
          }
        }
        &:focus {
          box-shadow: var(--button-focusBorderColor) 0px 0px 0px 2px;
          background-color: var(--button-secondaryBackgroundColor);
        }
        &:active:not([disabled]) {
          background: var(--button-secondaryActiveBackgroundColor);
          color: var(--button-secondaryHoverFontColor);
          span.mat-button-ripple {
            border-color: var(--button-secondaryBorderColor);
          }
        }
      }
    `;
  }

  getSecondaryDarkStyle() {
    return css`
      button {
        color: var(--button-secondaryFontColorOnDark);
        background-color: var(--button-secondaryBackgroundColorOnDark);
        span.mat-button-ripple {
          border-color: var(--button-secondaryBorderColorOnDark);
        }
        &:hover:not([disabled]) {
          span.mat-button-ripple {
            border-color: #ffffff;
          }
          background: var(--button-secondaryHoverBackgroundColorOnDark);
          color: var(--button-secondaryHoverFontColorOnDark);
        }
        &:disabled {
          background-color: var(
            --button-secondaryDisabledBackgroundColorOnDark
          );
          border-color: var(--button-secondaryDisabledBorderColorOnDark);
          color: var(--button-secondaryDisabledFontColorOnDark) !important;
          span.mat-button-ripple {
            border-color: var(--button-secondaryDisabledBorderColorOnDark);
          }
        }
        &:focus {
          box-shadow: var(--button-focusBorderColorOnDark) 0px 0px 0px 2px;
          background-color: var(--button-secondaryBackgroundColorOnDark);
        }
        &:active:not([disabled]) {
          span.mat-button-ripple {
            border-color: var(--button-secondaryBorderColorOnDark);
          }
          background: var(--button-secondaryActiveBackgroundColorOnDark);
          color: var(--button-secondaryHoverFontColorOnDark);
        }
      }
    `;
  }

  getTextLightStyle() {
    return css`
      button {
        background-color: var(--button-textBackgroundColor);
        color: var(--button-textFontColor);
        span.mat-button-ripple {
          border-color: transparent;
        }
        &:hover:not([disabled]) {
          background: var(--button-textHoverBackgroundColor);
        }
        &:disabled {
          color: var(--button-textDisabledFontColor) !important;
          background: var(--button-textDisabledBackgroundColor);
        }
        &:focus {
          box-shadow: var(--button-focusBorderColor) 0px 0px 0px 2px;
          background-color: var(--button-textBackgroundColor);
        }
        &:active:not([disabled]) {
          background-color: var(--button-textActiveBackgroundColor);
        }
      }
    `;
  }

  getTextDarkStyle() {
    return css`
      button {
        background-color: var(--button-textBackgroundColorOnDark);
        color: var(--button-textFontColorOnDark);
        span.mat-button-ripple {
          border-color: transparent;
        }
        &:hover:not([disabled]) {
          background: var(--button-textHoverBackgroundColorOnDark);
          color: #ffffff;
        }
        &:disabled {
          color: var(--button-textDisabledFontColorOnDark) !important;
          background: var(--button-textDisabledBackgroundColorOnDark);
        }
        &:focus {
          box-shadow: var(--button-focusBorderColorOnDark) 0px 0px 0px 2px;
          background-color: var(--button-textBackgroundColorOnDark);
        }
        &:active:not([disabled]) {
          background-color: var(--button-textActiveBackgroundColorOnDark);
          color: #ffffff;
        }
      }
    `;
  }
}
