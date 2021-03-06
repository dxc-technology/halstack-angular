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
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-header",
  templateUrl: "./dxc-header.component.html",
  providers: [CssUtils],
})
export class DxcHeaderComponent implements OnChanges {
  @HostBinding("class") className;
  @Input() logoSrc: string;
  @Input() logoResponsiveSrc: string;
  @Input() margin: any;
  @Input() padding: any;
  @Input()
  get underlined(): boolean {
    return this._underlined;
  }
  set underlined(value: boolean) {
    this._underlined = coerceBooleanProperty(value);
  }
  private _underlined;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onClick = new EventEmitter<any>();

  isResponsive = false;
  isMenuVisible = false;
  innerWidth;
  innerHeight;
  responsiveMenu: string;
  isClickDefined = false;

  defaultInputs = new BehaviorSubject<any>({
    logoSrc: null,
    logoResponsiveSrc: null,
    margin: null,
    padding: null,
    isResponsive: false,
    isMenuVisible: false,
    innerWidth,
    innerHeight,
    underlined:false,
    tabIndexValue: 0,
  });

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.innerHeight = event.target.innerHeight;
    if (this.innerWidth <= responsiveSizes.tablet) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
      this.isMenuVisible = false;
    }
    this.updateCss();
  }

  constructor(private utils: CssUtils, private elRef: ElementRef) {}

  updateCss() {
    if (this.isMenuVisible) {
      this.elRef.nativeElement.ownerDocument.body.style.overflow = "hidden";
    } else {
      this.elRef.nativeElement.ownerDocument.body.style.overflow = null;
    }
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      isMenuVisible: this.isMenuVisible,
      isResponsive: this.isResponsive,
      innerWidth: this.innerWidth,
      innerHeight: this.innerHeight,
    })}`;

    this.responsiveMenu = `${this.getResponsiveMenuStyle({
      ...this.defaultInputs.getValue(),
      isMenuVisible: this.isMenuVisible,
      isResponsive: this.isResponsive,
      innerWidth: this.innerWidth,
      innerHeight: this.innerHeight,
    })}`;
  }

  public ngOnInit() {
    this.isClickDefined = this.onClick.observers?.length > 0;
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    if (this.innerWidth <= responsiveSizes.tablet && !this.isResponsive) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
    }
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

      font-size: var(--header-fontSizeBase);
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
          padding: 0 24px;
        }
        &.underlined {

          .mat-toolbar-row {
            border-bottom: ${inputs.underlined ?
              `var(--header-underlinedThickness) var(--header-underlinedStyle) var(--header-underlinedColor);`: 'unset;'};
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
        color: var(--header-fontColorBase);
      }
      .dxc-logo,
      img {
        height: 40px;
        width: auto;
        vertical-align: middle;
      }

      .content {

        width: calc(100% - 186px);
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: flex-end;
        ${this.utils.getPaddings(inputs.padding)}
        font-family: var(--header-customContentFontFamily, --header-fontFamilyBase);
        font-style: var(--header-customContentFontStyle);
        font-size: var(--header-customContentFontSize, --header-fontSizeBase);
        font-weight: var(--header-customContentFontWeight);
        color: var(--header-customContentFontColor, --header-fontColorBase);

        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;
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
              fill: var(--header-hamburguerColor) !important;
            }
          }
          .hamburgerTitle {
            font-family: var(--header-hamburguerFontFamily, --header-fontFamilyBase);
            font-style: var(--header-hamburguerFontStyle);
            font-size: var(--header-hamburguerFontSize);
            text-transform: var(--header-hamburguerTextTransform);
            font-weight: var(--header-hamburguerFontWeight);
            color: var(--header-hamburguerFontColor, --header-fontColorBase);
          }
        }
      }
      .overlay {

        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height:  ${inputs.innerHeight}px;
        background-color: var(--header-overlayColor);
        opacity: var(--header-overlayOpacity) !important;
        display: ${inputs.innerWidth <= responsiveSizes.mobileLarge
          ? "none"
          : ""};
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

      width: ${inputs.innerWidth <= responsiveSizes.laptop &&
      inputs.innerWidth > responsiveSizes.mobileLarge
        ? "var(--header-menuTabletWidth)"
        : "var(--header-menuMobileWidth)"};
      height: ${inputs.innerHeight}px;
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
