import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  SimpleChanges,
  HostListener,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { responsiveSizes } from "../variables";
import { coerceNumberProperty } from "@angular/cdk/coercion";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

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

export interface DxcFooterInputs{
  margin: Space | Margin,
  padding: Space | Margin
}

@Component({
  selector: "dxc-footer",
  templateUrl: "./dxc-footer.component.html",
  styleUrls: ["./dxc-footer.component.scss"],
  providers: [CssUtils, BackgroundProviderService],
})
export class DxcFooterComponent implements OnChanges {
  @HostBinding("class") className;

  /**
   * An array of objects representing the links that will be rendered as
   * icons at the top-right side of the footer. Each object has the
   * following properties:
   * - href: The path of an icon for the link.
   * - logoSrc: URL of the page the link goes to.
   */
  @Input() socialLinks: { href?: string; logoSrc?: string }[];
  /**
   * An array of objects representing the links that will be rendered at
   * the bottom part of the footer. Each object has the following
   * properties:
   * - text: Text for the link.
   * - href: URL of the page the link goes to.
   */
  @Input() bottomLinks: { href?: string; text?: string }[];
  /**
   * The text that will be displayed as copyright disclaimer.
   */
  @Input() copyright: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' |
   * 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
   * can pass an object with 'top', 'bottom', 'left' and 'right' properties
   * in order to specify different margin sizes.
   */
  @Input() margin: Space | Margin;
  /**
   * Size of the padding to be applied to the custom area of the component
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
   * 'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and
   * 'right' properties in order to specify different padding sizes.
   */
  @Input() padding: Space | Margin;
  /**
   * The path of an icon to replace the theme logo.
   */
  @Input() logoSrc: string;
  /**
   * Value of the tabindex for all interactuable elements, except those
   * inside the custom area.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue = 0;

  defaultImglogo: string;
  innerWidth: number;
  isResponsive: boolean;
  bottomLinksLength: number;
  currentBackgroundColor: string;

  defaultInputs = new BehaviorSubject<DxcFooterInputs>({
    margin: null,
    padding: null,
  });

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth <= responsiveSizes.tablet) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
    }
    this.footerFooterStyle = `${this.setFooterFooterStyle(this.isResponsive)}`;
  }

  // Styling
  footerContainerStyle: string;

  footerHeaderStyle: string = css`
    display: flex;
    justify-content: space-between;
  `;
  socialIconsStyle: string = css`
    display: flex;
    align-items: center;
  `;

  socialIconStyle: string = css`
    display: inline-flex;
  `;

  socialIconImageStyle: string = css`
    display: inline-flex;
    height: var(--footer-socialLinksSize);
    width: var(--footer-socialLinksSize);
    color: var(--footer-socialLinksColor);
    fill: var(--footer-socialLinksColor);
  `;

  childComponentsStyle: string;

  footerFooterStyle: string;

  socialLinksStyle: string = css`
    display: inline-flex;
    margin-left: var(--footer-socialLinksGutter);
    &:first-child {
      margin-left: 0px;
    }
  `;

  bottomLinkStyle: string = css`
    text-decoration: none;
    font-size: 12px;
  `;

  constructor(private utils: CssUtils) {}

  public ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.currentBackgroundColor = this.utils.readProperty(
      "--footer-backgroundColor"
    );
    this.childComponentsStyle = `${this.setChildComponentsStyle(
      this.defaultInputs.getValue()
    )}`;
    if (this.innerWidth <= responsiveSizes.tablet) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
    }
    this.footerContainerStyle = `${this.setFooterContainerStyle(
      this.defaultInputs.getValue(),
      this.isResponsive
    )}`;
    this.footerFooterStyle = `${this.setFooterFooterStyle(this.isResponsive)}`;
    if (this.bottomLinks) {
      this.bottomLinksLength = this.bottomLinks.length - 1;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.footerContainerStyle = `${this.setFooterContainerStyle(
      this.defaultInputs.getValue(),
      this.isResponsive
    )}`;
    this.childComponentsStyle = `${this.setChildComponentsStyle(
      this.defaultInputs.getValue()
    )}`;
    this.footerFooterStyle = `${this.setFooterFooterStyle(this.isResponsive)}`;
    if (this.bottomLinks) {
      this.bottomLinksLength = this.bottomLinks.length - 1;
    }
  }

  getLogoDxc() {
    return document.body.getAttribute("footer-logo");
  }

  setFooterContainerStyle(input: any, responsive: boolean) {
    return css`
      padding: ${responsive ? "20px" : "24px 36px"};
      background-color: var(--footer-backgroundColor);
      ${this.utils.getTopMargin(input.margin)}
      width: 100%;
      box-sizing: border-box;
      min-height: var(--footer-height);
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
    `;
  }

  setChildComponentsStyle(inputs: any) {
    return css`
      min-height: 16px;
      ${this.utils.getPaddings(inputs.padding)}
    `;
  }

  setFooterFooterStyle(responsive: boolean) {
    return css`
      display: flex;
      justify-content: space-between;
      flex-direction: ${responsive ? "column" : "row"};
      align-items: ${responsive ? "center" : "flex-end"};
      border-top: var(--footer-bottomLinksDividerThickness)
        var(--footer-bottomLinksDividerStyle)
        var(--footer-bottomLinksDividerColor);

      .copyrightStyle {
        color: var(--footer-copyrightFontColor);
        font-family: var(--footer-copyrightFontFamily);
        font-style: var(--footer-copyrightFontStyle);
        font-size: var(--footer-copyrightFontSize);
        font-weight: var(--footer-copyrightFontWeight);
        max-width: ${responsive ? "100%" : "40%"};
        width: ${responsive ? "100%" : "40%"};
        text-align: ${responsive ? "center" : "right"};
      }

      .bottomLinksStyle {
        padding-top: var(--footer-bottomLinksDividerSpacing);
        display: inline-flex;
        flex-wrap: wrap;
        max-width: ${responsive ? "100%" : "60%"};
        width: ${responsive ? "100%" : "auto"};
        text-align: ${responsive ? "center" : ""};
        margin: ${responsive ? "40px 0 40px 0" : ""};
        color: var(--footer-bottomLinksFontColor);
        .point {
          margin: 0px 10px;
          font-family: var(--footer-bottomLinksFontFamily);
          font-size: var(--footer-bottomLinksFontSize);
          font-style: var(--footer-bottomLinksFontStyle);
          font-weight: var(--footer-bottomLinksFontWeight);
          color: var(--footer-bottomLinksFontColor);
        }
        a,
        a * {
          text-decoration: var(--footer-bottomLinksTextDecoration);
          font-size: var(--footer-bottomLinksFontSize);
          font-family: var(--footer-bottomLinksFontFamily);
          font-style: var(--footer-bottomLinksFontStyle);
          font-weight: var(--footer-bottomLinksFontWeight);
          color: var(--footer-bottomLinksFontColor);
        }
      }
    `;
  }
}
