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

@Component({
  selector: "dxc-footer",
  templateUrl: "./dxc-footer.component.html",
  styleUrls: ["./dxc-footer.component.scss"],
  providers: [CssUtils, BackgroundProviderService],
})
export class DxcFooterComponent implements OnChanges {
  @HostBinding("class") className;

  @Input() socialLinks: { href?: string; logoSrc?: string }[];
  @Input() bottomLinks: { href?: string; text?: string }[];

  @Input() copyright: string;
  @Input() margin: any;
  @Input() padding: any;
  @Input() logoSrc: string;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  defaultImglogo: string;
  innerWidth;
  isResponsive;

  bottomLinksLength;

  currentBackgroundColor: string;

  defaultInputs = new BehaviorSubject<any>({
    socialLinks: {},
    bottomLinks: {},
    copyright: "",
    logoSrc: null,
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
    height: var(--footer-socialIconSize);
    width: var(--footer-socialIconSize);
  `;

  childComponentsStyle: string;

  footerFooterStyle: string;

  socialLinksStyle: string = css`
    display: inline-flex;
    margin-left: var(--footer-socialIconsGutter);
    &:first-child {
      margin-left: 0px;
    }
  `;

  bottomLinkStyle: string = css`
    text-decoration: none;
    font-size: 12px;
  `;

  constructor(private utils: CssUtils) {}

  public ngOnInit() {
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

  setFooterContainerStyle(input: any, responsive) {
    return css`
      padding: ${responsive ? "20px" : "24px 36px"};
      background-color: var(--footer-backgroundColor);
      min-height: var(--footer-minHeight);
      ${this.utils.getTopMargin(input.margin)}
    `;
  }

  setChildComponentsStyle(inputs: any) {
    return css`
      min-height: 16px;
      ${this.utils.getPaddings(inputs.padding)}
    `;
  }

  setFooterFooterStyle(responsive) {
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
