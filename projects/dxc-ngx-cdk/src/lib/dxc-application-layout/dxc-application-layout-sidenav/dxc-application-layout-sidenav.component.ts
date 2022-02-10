import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  HostListener,
  ViewChild,
  ElementRef,
  OnChanges,
  HostBinding,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../../utils";
import { responsiveSizes } from "../../variables";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { SidenavService } from "./services/sidenav.service";

type Mode = "push" | "overlay";

type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

@Component({
  selector: "dxc-application-layout-sidenav",
  templateUrl: "./dxc-application-layout-sidenav.component.html",
  styleUrls: [],
  providers: [CssUtils],
})
export class DxcApplicationLayoutSidenavComponent implements OnInit, OnChanges {
  @HostBinding("class") sidenavStyles;
  /**
   * Default action over the content of the page, overlay the content or push to the right ('push' | 'overlay').
   * In lower resolutions the mode will always be overlay.
   */
  @Input() mode: Mode = "push";
  /**
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  @Input() padding: Space | Padding;
  /**
   * If false, the arrow button is hidden.
   * In lower resolutions the arrow will be always displayed.
   */
  @Input()
  get displayArrow(): boolean {
    return this._displayArrow;
  }
  set displayArrow(value: boolean) {
    this._displayArrow = coerceBooleanProperty(value);
  }
  _displayArrow = true;

  firstClick: boolean = false; //remove animation on first load
  innerWidth;
  isResponsive = true;
  isShown: boolean;

  defaultInputs = new BehaviorSubject<any>({
    displayArrow: true,
    padding: null,
  });

  @ViewChild("sidenavContainer", { static: false }) sidenav: ElementRef;
  sidenavArrow: any;

  constructor(
    private utils: CssUtils,
    private sidenavService: SidenavService
  ) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.updateCss();
  }

  ngOnInit() {
    this.updateState();
    this.sidenavStyles = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      mode: this.mode,
      innerWidth: this.innerWidth,
      isResponsive: this.isResponsive,
      isShown: this.isShown,
    })}`;
  }

  public arrowClicked() {
    this.isShown = !this.isShown;
    this.firstClick = true;
    this.sidenavService.showMenu(this.isShown);
    this.updateCss();
  }

  public arrowKey($event) {
    if ($event.keyCode && $event.keyCode === 32) {
      $event.preventDefault();
      this.isShown = !this.isShown;
      this.updateCss();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    if (this.sidenav) {
      this.updateCss();
    }
  }

  updateState() {
    this.innerWidth = window.innerWidth;
    this.sidenavService.setPushMode(this.mode === "push");
    if (this.innerWidth <= responsiveSizes.tablet) {
      this.isResponsive = true;
      if (!this.displayArrow) {
        this.displayArrow = true;
      }
    } else {
      this.isResponsive = false;
      if (!this.displayArrow && !this.isShown) {
        this.isShown = true;
      }
    }
    this.isShown =
      this.isShown !== undefined
        ? this.isShown
        : this.innerWidth <= responsiveSizes.tablet
        ? false
        : true;
    this.sidenavService.showMenu(this.isShown);
  }

  updateCss() {
    this.updateState();
    this.sidenavStyles = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      mode: this.mode,
      innerWidth: this.innerWidth,
      isResponsive: this.isResponsive,
      isShown: this.isShown,
    })}`;
  }

  getDynamicStyle(inputs) {
    return css`
      z-index: 400;
      position: ${(inputs.mode === "overlay" && this.displayArrow) ||
      inputs.isResponsive
        ? "absolute"
        : "relative"};
      height: ${inputs.mode === "overlay" || inputs.isResponsive ? "100%" : ""};
      .sidenavContainerClass {
        background-color: var(--sidenav-backgroundColor);
        display: flex;
        position: sticky;
        height: 100%;
        .sidenavMenu {
          ${this.isShown ? this.utils.getPaddings(inputs.padding) : ""}
          width: ${inputs.isShown
            ? "calc(300px" +
              this.utils.getPaddingOrMargin(null, inputs.padding) +
              ")"
            : "0px"};
          overflow-y: auto;
          overflow-x: hidden;
          transform: ${inputs.isShown
            ? "translateX(0)"
            : !inputs.isShown
            ? "translateX(-100%) !important"
            : ""};
          opacity: ${inputs.isShown ? "1" : "0"};
          visibility: ${inputs.isShown ? "visible" : "hidden"};
          transition: ${this.firstClick
            ? "transform 0.4s ease-in-out, opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, width 0.4s ease-in-out, padding 0.4s ease-in-out;"
            : "width 0.4s ease-in-out"};
          &::-webkit-scrollbar {
            width: 2px;
          }
          &::-webkit-scrollbar-track {
            background-color: #d9d9d9;
            border-radius: 3px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #66666626;
            border-radius: 3px;
          }
        }
        .sidenavArrow {
          visibility: ${!this.displayArrow ? "hidden" : "visible"};
          width: 42px;
          height: 42px;
          background-color: var(--sidenav-arrowContainerColor);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          left: ${this.isShown ? "calc(300px - 21px)" : "calc(0px - 21px)"};
          top: calc(50% - 21px);
          transition: ${this.firstClick
            ? "transform 0.4s ease-in-out, left 0.4s ease-in-out;"
            : ""};
          cursor: pointer;
          z-index: ${inputs.mode === "overlay" || this.isResponsive
            ? "401"
            : "auto"};
          .sidenavArrowImage {
            height: 18px;
            width: 18px;
            display: flex;
            align-items: center;
            margin-left: ${inputs.isShown ? "0px" : "10px"};
            transform: ${inputs.isShown
              ? "rotate(-180deg)"
              : "rotate(0deg) !important"};
            transition: ${this.firstClick
              ? "margin 0.4s ease-in, transform 0.4s ease-in-out; "
              : ""};
            fill: var(--sidenav-arrowColor);
          }
        }
      }
    `;
  }
}
