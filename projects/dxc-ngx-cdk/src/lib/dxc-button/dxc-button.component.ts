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

@Component({
  selector: "dxc-button",
  templateUrl: "./dxc-button.component.html",
  providers: [CssUtils],
})
export class DxcButtonComponent {
  @Input() mode: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() margin: any;
  @Input() size: string;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onClick = new EventEmitter<any>();

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
      setTimeout(() => {
        if (value === "dark") {
          this.lightBackground = false;
          this.darkBackground = true;
        } else if (value === "light") {
          this.lightBackground = true;
          this.darkBackground = false;
        }
        this.className = `${this.getDynamicStyle(
          this.defaultInputs.getValue()
        )}`;
      }, 0);
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
          justify-content: inherit;
          ${
            this.iconPosition === "after"
              ? "flex-direction: row-reverse;"
              : "flex-direction: row;"
          }

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
            ${
              this.label
                ? this.iconPosition === "before"
                  ? "margin-left: 8px;"
                  : "margin-right: 8px;"
                : ""
            }
            height: 24px;
            width: 24px;
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
