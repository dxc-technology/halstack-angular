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
import { css } from "@emotion/css";
import { CssUtils } from "../utils";
import { responsiveSizes } from "./../variables";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { SidenavService } from './services/sidenav.service';

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
        dxc-sidenav-title {
          font: 24px / 33px var(--fontFamily);
          letter-spacing: 0px;
          color: rgba(0, 0, 0, 0.87);
          margin: 15px 0px;
        }
        dxc-sidenav-subtitle {
          font: 12px / 17px var(--fontFamily);
          letter-spacing: 1.88px;
          color: rgba(0, 0, 0, 0.6);
          text-transform: uppercase;
          margin-top: 15px;
        }
        dxc-sidenav-link {
          text-decoration: none;
          font: 14px / 19px var(--fontFamily);
          letter-spacing: 0.24px;
          color: rgba(0, 0, 0, 0.6);
          margin: 6px 18px;
          cursor: pointer;
          a {
            text-decoration: inherit;
            color: inherit;
          }
        }
      }
    `;
  }
}
