import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  HostListener,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  HostBinding,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";
import { SidenavProperties, Space, Spacing } from "./dxc-sidenav.types";

@Component({
  selector: "dxc-sidenav",
  templateUrl: "./dxc-sidenav.component.html",
  providers: [CssUtils, BackgroundProviderService],
})
export class DxcSidenavComponent implements OnInit {
  @HostBinding("class") sidenavStyles;

  /**
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  @Input() padding: Space | Spacing;

  firstClick: boolean = false; //remove animation on first load

  currentBackgroundColor: string;

  defaultInputs = new BehaviorSubject<SidenavProperties>({
    padding: null,
  });

  @ViewChild("sidenavContainer", { static: false }) sidenav: ElementRef;
  sidenavArrow: any;

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.sidenavStyles = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.currentBackgroundColor = this.utils.readProperty(
      "--sidenav-backgroundColor"
    );
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
  }

  getDynamicStyle(inputs) {
    return css`
      z-index: auto;
      width: 300px;
      max-width: 300px;
      position: relative;
      height: 100%;
      background-color: var(--sidenav-backgroundColor);
      position: sticky;
      display: flex;
      background-provider-inner {
        display: flex;
        flex-direction: column;
        ${this.utils.getPaddings(inputs.padding)}
        width: ${"calc(300px" +
        this.utils.getPaddingOrMargin(null, inputs.padding) +
        ")"};
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 2px;
        }
        &::-webkit-scrollbar-track {
          background-color: var(--sidenav-scrollBarTrackColor);
          border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: var(--sidenav-scrollBarThumbColor);
          border-radius: 3px;
        }
        dxc-sidenav-title {
          margin: 15px 0px;
          font-family: var(--sidenav-titleFontFamily);
          font-size: var(--sidenav-titleFontSize);
          font-style: var(--sidenav-titleFontStyle);
          font-weight: var(--sidenav-titleFontWeight);
          color: var(--sidenav-titleFontColor);
          text-transform: var(--sidenav-titleFontTextTransform);
          letter-spacing: var(--sidenav-titleFontLetterSpacing);
        }
        dxc-sidenav-subtitle {
          margin-top: 15px;
          font-family: var(--sidenav-subtitleFontFamily);
          font-size: var(--sidenav-subtitleFontSize);
          font-style: var(--sidenav-subtitleFontStyle);
          font-weight: var(--sidenav-subtitleFontWeight);
          color: var(--sidenav-subtitleFontColor);
          text-transform: var(--sidenav-subtitleFontTextTransform);
          letter-spacing: var(--sidenav-subtitleFontLetterSpacing);
        }
        dxc-sidenav-link {
          margin-top: var(--sidenav-linkMarginTop);
          margin-right: var(--sidenav-linkMarginRight);
          margin-bottom: var(--sidenav-linkMarginBottom);
          margin-left: var(--sidenav-linkMarginLeft);
          cursor: pointer;
          font-family: var(--sidenav-linkFontFamily);
          font-size: var(--sidenav-linkFontSize);
          font-style: var(--sidenav-linkFontStyle);
          font-weight: var(--sidenav-linkFontWeight);
          color: var(--sidenav-linkFontColor);
          text-transform: var(--sidenav-linkFontTextTransform);
          letter-spacing: var(--sidenav-linkFontLetterSpacing);
          text-decoration: var(--sidenav-linkTextDecoration);
          a {
            text-decoration: inherit;
            color: inherit;
          }
        }
      }
    `;
  }
}
