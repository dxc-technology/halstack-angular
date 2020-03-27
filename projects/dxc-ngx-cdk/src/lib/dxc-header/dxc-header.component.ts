import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
  HostListener
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { spaces, responsiveSizes } from "../variables.js";

@Component({
  selector: "dxc-header",
  templateUrl: "./dxc-header.component.html",
  styleUrls: ["./dxc-header.scss"],
  providers: [CssUtils]
})
export class DxcHeaderComponent implements OnChanges {
  @HostBinding("class") className;

  @Input() theme: string = "light";
  @Input() underline: boolean;
  @Input() logoSrc: string;
  @Input() margin: any;
  @Input() padding: any;

  @Output() onClick = new EventEmitter<any>();

  isResponsive = false;
  isMenuVisible = false;
  innerWidth;

  responsiveMenu: string;

  defaultInputs = new BehaviorSubject<any>({
    theme: "light",
    underline: false,
    logoSrc: null,
    margin: null,
    padding: null,
    isResponsive: false,
    isMenuVisible: false,
    innerWidth
  });

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth <= responsiveSizes.tablet && !this.isResponsive) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
    }
    this.updateCss();
  }

  updateCss() {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      isMenuVisible: this.isMenuVisible,
      isResponsive: this.isResponsive,
      innerWidth: this.innerWidth
    })}`;

    this.responsiveMenu = `${this.getResponsiveMenuStyle({
      ...this.defaultInputs.getValue(),
      isMenuVisible: this.isMenuVisible,
      isResponsive: this.isResponsive,
      innerWidth: this.innerWidth
    })}`;
  }

  constructor(private utils: CssUtils) {}

  public ngOnInit() {
    this.innerWidth = window.innerWidth;
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
    this.underline === true ? true : false;
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

  public getThemeLogo(theme) {
    if (theme === "light") {
      return css`
        .mat-toolbar-row {
          background: var(--black);
          color: var(--white);
        }
        .underlined {
          .mat-toolbar-row {
            background: var(--white);
            color: var(--black);
          }
          border-bottom: 2px solid var(--black);
        }
      `;
    } else {
      return css`
        .mat-toolbar-row {
          background: var(--white);
          color: var(--black);
        }
        .underlined {
          .mat-toolbar-row {
            background: var(--black);
            color: var(--white);
          }
          border-bottom: 2px solid var(--white);
        }
      `;
    }
  }
  
  getLogoDxc(){
    if (this.theme === 'light'){
      return "../../assets/dxc_logo_white.png";
    }else {
      return "../../assets/dxc_logo_black.png";
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: block;
      width: 100%;
      ${this.getBottomMargin(inputs.margin)}
      .headerAnchor {
        display: flex;
      }
      .mat-toolbar {
        font-size: unset;
        .mat-toolbar-row {
          min-height: 64px;
        }
        &.underlined {
          min-height: 62px;
          .mat-toolbar-row {
            min-height: 62px;
          }
        }
      }
      mat-toolbar-row.mat-toolbar-row,
      .mat-toolbar-row {
        padding: 0 0px 0 20px;
        display: flex;
        justify-content: space-between;
        height: auto;
      }
      ${this.getThemeLogo(inputs.theme)}
      .dxc-logo,
      img {
        max-height: 32px;
        width: auto;
        vertical-align: middle;

        &:hover {
          cursor: pointer;
        }
      }
      .content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        overflow: hidden;
        font-family: "Open Sans", sans-serif;
        ${this.utils.getPaddings(inputs.padding)}
      }

      .hamburger {
        padding: ${this.utils.getPaddings(inputs.padding)};
        .hamburgerItem {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 54px;
          &:hover {
            cursor: pointer;
            background-color: ${(inputs.theme === "light" &&
              inputs.underline) ||
            (inputs.theme === "dark" && !inputs.underline)
              ? "var(--lightGrey)"
              : "var(--darkGrey)"};
          }
          .hamburgerIcon {
            width: 24px;
            height: 24px;
            svg path {
              fill: ${(inputs.theme === "light" && inputs.underline) ||
              (inputs.theme === "dark" && !inputs.underline)
                ? "var(--black)"
                : "var(--white)"};
            }
          }
          .hamburgerTitle {
            font-size: 10px;
            text-transform: uppercase;
            font-weight: 600;
            line-height: 14px;
          }
        }
      }
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #000000b3;
        visibility: ${inputs.isMenuVisible ? "visible" : "hidden"};
        opacity: ${inputs.isMenuVisible ? "1" : "0"};
        display: ${inputs.innerWidth <= responsiveSizes.mobileLarge
          ? "none"
          : ""};
        transition: opacity 0.2s 0.2s ease-in-out;
        z-index: 900;
      }
    `;
  }

  getResponsiveMenuStyle(inputs) {
    return css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      background-color: var(--lightGrey);
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;

      color: var(--black);
      width: ${inputs.innerWidth <= responsiveSizes.laptop &&
      inputs.innerWidth > responsiveSizes.mobileLarge
        ? "calc(60vw - 40px)"
        : "calc(100vw - 40px)"};
      height: 100vh;
      padding: 20px;

      ${this.checkMenuVisible(inputs.isMenuVisible)}
      transition-property: transform, opacity;
      transition-duration: 0.6s;
      transition-timing-function: ease-in-out;

      justify-content: flex-start;

      .responsiveMenu-Header {
        display: flex;
        flex-direction: row;
        width: 100%;
        .closeIcon {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          &:hover {
            cursor: pointer;
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
