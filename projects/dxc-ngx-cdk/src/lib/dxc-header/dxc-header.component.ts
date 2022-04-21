import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
  HostListener,
  ElementRef,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { spaces, responsiveSizes } from "../variables";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";
import { HeaderProperties, Space, Spacing } from "./dxc-header.types";

@Component({
  selector: "dxc-header",
  templateUrl: "./dxc-header.component.html",
  providers: [CssUtils, BackgroundProviderService],
})
export class DxcHeaderComponent implements OnChanges {
  /**
   * Wether a contrast line should appear at the bottom of the header.
   */
  @Input()
  get underlined(): boolean {
    return this._underlined;
  }
  set underlined(value: boolean) {
    this._underlined = coerceBooleanProperty(value);
  }
  private _underlined = false;

  /**
   * The path of an icon to replace the theme logo.
   */
  @Input() logoSrc: string;

  /**
   * The path of an icon to replace the theme logo in responsive version.
   */
  @Input() logoResponsiveSrc: string;

  /**
   * This event will emit in case the user clicks the header logo.
   */
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Value of the tabindex for all interactuable elements, except those inside the custom area.
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
   * Size of the bottom margin to be applied to the footer
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   */
  @Input() margin: Space;

  /**
   * Size of the padding to be applied to the custom area of the component
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to
   * specify different padding sizes.
   */
  @Input() padding: Space | Spacing;

  @HostBinding("class") className;

  isResponsive = false;
  isMenuVisible = false;
  responsiveMenu: string;
  isClickDefined = false;

  currentBackgroundColor: string;

  defaultInputs = new BehaviorSubject<HeaderProperties>({
    underlined: false,
    logoSrc: null,
    logoResponsiveSrc: null,
    tabIndexValue: 0,
    margin: null,
    padding: null,
  });

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isResponsive = window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches;
    if(!this.isResponsive) { 
      this.isMenuVisible = false;
    }
    this.updateCss();
  }

  constructor(private utils: CssUtils, private elRef: ElementRef) {}

  updateCss() {
                            
    this.currentBackgroundColor = this.utils.readProperty(
      "--header-backgroundColor"
    );
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      isMenuVisible: this.isMenuVisible,
      isResponsive: this.isResponsive
    })}`;

    this.responsiveMenu = `${this.getResponsiveMenuStyle({
      ...this.defaultInputs.getValue(),
      isMenuVisible: this.isMenuVisible,
      isResponsive: this.isResponsive
    })}`;
  }

  public ngOnInit() {
    this.isClickDefined = this.onClick.observers?.length > 0;
    this.isResponsive = window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches;
    this.updateCss();
  }

  showMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.updateCss();
  }

  showMenuKey($event) {
    if ($event.keyCode === 32) {
      this.isMenuVisible = !this.isMenuVisible;
      this.updateCss();
    }
  }

  getBottomMargin(margin) {
    return margin && typeof margin !== "object"
      ? css`
          margin-bottom: ${spaces[margin]};
        `
      : margin && margin !== null
      ? css`
          margin-bottom: ${spaces[margin["bottom"]]};
        `
      : css`
          margin-bottom: 0px;
        `;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.updateCss();
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  public checkMenuVisible(isMenuVisible) {
    return css`
      transform: ${isMenuVisible ? "translateX(0)" : "translateX(100vw)"};
      opacity: ${isMenuVisible ? "1" : "0.96"};
    `;
  }

  getLogoDxc() {
    const pic = document.body.getAttribute("header-logo");
    return pic;
  }

  getLogoResponsiveDxc() {
    return document.body.getAttribute("header-logoResponsive");
  }

  getDynamicStyle(inputs) {
    return css`
      font-family: var(--header-fontFamily);
      ${this.getBottomMargin(inputs.margin)}
      .headerAnchor {
        cursor: ${this.isClickDefined ? "pointer;" : "default; "};
        ${!this.isClickDefined ? "outline: none;" : ""};
      }
      .mat-toolbar {
        font-size: unset;
        .mat-toolbar-row {
          min-height: var(--header-minHeight);
          padding-top: var(--header-paddingTop);
          padding-right: var(--header-paddingRight);
          padding-bottom: var(--header-paddingBottom);
          padding-left: var(--header-paddingLeft);
        }
        &.underlined {
          .mat-toolbar-row {
            border-bottom: ${inputs.underlined
              ? `var(--header-underlinedThickness) var(--header-underlinedStyle) var(--header-underlinedColor);`
              : "unset;"};
          }
        }
      }
      mat-toolbar-row.mat-toolbar-row,
      .mat-toolbar-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .mat-toolbar-row {
        background: var(--header-backgroundColor);
      }
      .dxc-logo,
      img {
        height: var(--header-logoHeight);
        width: var(--header-logoWidth);
        vertical-align: middle;
      }

      .content {
        width: calc(100% - 186px);
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: flex-end;
        ${this.utils.getPaddings(inputs.padding)}
        align-items: center;
        flex-wrap: wrap;
      }
      .hamburger {
        color: var(--header-fontColor);
        ${this.utils.getPaddings(inputs.padding)}

        .hamburgerItem {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 54px;
          cursor: pointer;
          &:hover {
            cursor: pointer;
            background-color: var(--header-hamburguerHoverColor);
          }
          &:focus {
            outline: var(--header-hamburguerFocusColor) auto 1px;
          }
          .hamburgerIcon {
            width: 24px;
            height: 24px;
            svg path {
              fill: var(--header-hamburguerIconColor) !important;
            }
          }
          .hamburgerTitle {
            font-family: var(--header-hamburguerFontFamily);
            font-style: var(--header-hamburguerFontStyle);
            font-size: var(--header-hamburguerFontSize);
            text-transform: var(--header-hamburguerTextTransform);
            font-weight: var(--header-hamburguerFontWeight);
            color: var(--header-hamburguerFontColor);
          }
        }
      }
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--header-overlayColor);
        opacity: var(--header-overlayOpacity) !important;
        @media (max-width: ${responsiveSizes.small}rem) { 
          display: none;
        }
        transition: opacity 0.2s 0.2s ease-in-out;
        z-index: var(--header-overlayZindex);
      }
    `;
  }

  getResponsiveMenuStyle(inputs) {
    return css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: var(--header-menuBackgroundColor);
      position: fixed;
      top: 0;
      right: 0;
      z-index: var(--header-menuZindex);


      @media (max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem) {
        width: "var(--header-menuTabletWidth)";
      }
      @media not((max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem)) {
        width: "var(--header-menuMobileWidth)"};
      }

      height: 100vh;
      padding: 20px;

      ${this.checkMenuVisible(inputs.isMenuVisible)}
      transition-property: transform, opacity;
      transition-duration: 0.6s;
      transition-timing-function: ease-in-out;
      box-sizing: border-box;

      .responsiveMenu-Header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        .closeIcon {
          cursor: pointer;
          display: flex;
          justify-content: flex-end;
          width: 24px;
          &:hover {
            cursor: pointer;
          }
          &:focus {
            outline: var(--header-hamburguerFocusColor) solid 1px;
          }
          svg {
            fill: var(--header-fontColorMenu);
          }
        }
      }

      .menuContent {
        display: flex;
        flex-direction: column;
      }
    `;
  }
}
