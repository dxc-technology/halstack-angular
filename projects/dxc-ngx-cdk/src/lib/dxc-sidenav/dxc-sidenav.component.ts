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
import { responsiveSizes } from "./../variables";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { SidenavService } from "./services/sidenav.service";

@Component({
  selector: "dxc-sidenav",
  templateUrl: "./dxc-sidenav.component.html",
  styleUrls: ["./dxc-sidenav.component.scss"],
  providers: [CssUtils, SidenavService],
})
export class DxcSidenavComponent implements OnInit {
  @HostBinding("class") sidenavStyles;
  @Input() mode: string = "push";
  @Input() padding: any;
  @Input()
  get displayArrow(): boolean {
    return this._displayArrow;
  }
  set displayArrow(value: boolean) {
    this._displayArrow = coerceBooleanProperty(value);
  }
  _displayArrow = true;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

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

  constructor(private utils: CssUtils, private service: SidenavService) {}

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
    console.log(this.isShown);
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
    this.service.setTabIndexValue(this.tabIndexValue);
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
      z-index: auto;
      width: 300px;
      max-width: 300px;
      position: relative;
      height: 100%;
      background-color: var(--sidenav-backgroundColor);
      position: sticky;
      display: flex;
      .sidenavMenu {
        display: flex;
        flex-direction: column;
        ${this.utils.getPaddings(inputs.padding)}
        width: ${"calc(300px" +
        this.utils.getPaddingOrMargin(null, inputs.padding) +
        ")"};
        overflow-y: auto;
        overflow-x: hidden;
        font-family: var(--sidenav-customContentFontFamily);
        font-size: var(--sidenav-customContentFontSize);
        font-style: var(--sidenav-customContentFontStyle);
        font-weight: var(--sidenav-customContentFontWeight);
        color: var(--sidenav-customContentFontColor);
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
