import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  HostListener,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnChanges,
  EventEmitter,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../../utils";
import { responsiveSizes } from "../../variables";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { BtnArrowService } from './services/btnArrow.service';   
import { Output } from '@angular/core';

@Component({
  selector: "dxc-standard-layout-sidenav",
  templateUrl: "./dxc-standard-layout-sidenav.component.html",
  styleUrls: ["./dxc-standard-layout-sidenav.component.scss"],
  providers: [CssUtils],
})
export class DxcStandardLayoutSidenavComponent implements OnInit, OnChanges {
  className;
  @Input() mode: string = "overlay";
  // @Input() padding: any;
  // @Input()
  // get displayArrow(): boolean {
  //   return this._displayArrow;
  // }
  // set displayArrow(value: boolean) {
  //   this._displayArrow = coerceBooleanProperty(value);
  // }
  displayArrow = true;

  isClicked: boolean = false;
  innerWidth;
  isResponsive = true;
  isShown: boolean = true;

  defaultInputs = new BehaviorSubject<any>({
    displayArrow: true,
  });

  @ViewChild("sidenavContainer", { static: false }) sidenav: ElementRef;
  sidenavArrow: any;

  @Output() updateValue = new EventEmitter<boolean>();

  constructor(private utils: CssUtils, private cdr: ChangeDetectorRef, private _arrowService: BtnArrowService) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (this.isResponsive === false && this.displayArrow === false) {
      this.isShown = true;
    }
    this.updateCss();
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      mode: this.mode,
      innerWidth: this.innerWidth,
      isResponsive: this.isResponsive,
      isShown: this.isShown,
    })}`;
  }

  public arrowClicked() {
    this.isShown = !this.isShown;
    this.isClicked = true;
    this._arrowService.showMenu(this.isShown);
    this.updateValue.emit(this.isShown);
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

  ngAfterViewInit() {
    this.updateCss();
    this.cdr.detectChanges();
  }

  updateCss() {
    this.innerWidth = this.sidenav.nativeElement.clientWidth;
    if (this.innerWidth <= responsiveSizes.tablet) {
      this.isResponsive = true;
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
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      mode: this.mode,
      innerWidth: this.innerWidth,
      isResponsive: this.isResponsive,
      isShown: this.isShown,
    })}`;
  }

  getDynamicStyle(inputs) {
    return css`
      min-height: 100vh;
      height: 100%;
      .sidenavContainerClass {
        display: flex;
        position: relative;
        height: inherit;
        width: 100%;
        .sidenavMenu{
          width: inherit;
          height: inherit;
          background-color: var(--sidenav-backgroundColor);
          z-index: ${inputs.mode === "overlay" || inputs.isResponsive
            ? "400"
            : "auto"};
          transform: ${inputs.isShown
            ? "translateX(0)"
            : !inputs.isShown
            ? "translateX(-100%) !important"
            : ""};
          opacity: ${inputs.isShown ? "1" : "0"};
          visibility: ${inputs.isShown ? "visible" : "hidden"};
          transition: ${this.isClicked
            ? "transform 0.4s ease-in-out, opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;"
            : ""};
        }
        .sidenavArrow {
          width: 42px;
          height: 42px;
          background-color: var(--sidenav-arrowContainerColor);
          opacity: var(--sidenav-arrowContainerOpacity);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: ${inputs.arrowPosition === "fixed" ? "fixed" : "absolute"};
          left: ${inputs.innerWidth <= responsiveSizes.tablet
            ? "calc(100% - 21px)"
            : "279px"};
          top: calc(50% - 21px);
          transform: ${inputs.isShown
            ? "translateX(0)"
            : !inputs.isShown
            ? inputs.innerWidth <= responsiveSizes.tablet
              ? "translateX(-" + inputs.innerWidth + "px) !important"
              : "translateX(-300px) !important"
            : ""};
          transition: ${this.isClicked ? "transform 0.4s ease-in-out;" : ""};
          cursor: pointer;
          z-index: ${inputs.mode === "overlay" || this.isResponsive
            ? "401"
            : "auto"};
          &:focus {
            outline: -webkit-focus-ring-color auto 1px;
            outline-color: var(--sidenav-focusColor);
          }
          .sidenavArrowImage {
            height: 18px;
            width: 18px;
            display: flex;
            align-items: center;
            margin-left: ${inputs.isShown ? "0px" : "10px"};
            transform: ${inputs.isShown
              ? "rotate(-180deg)"
              : "rotate(0deg) !important"};
            transition: ${this.isClicked
              ? "margin 0.4s ease-in, transform 0.4s ease-in-out; "
              : ""};
            fill: var(--sidenav-arrowColor);
          }
        }
        /* dxc-standard-layout-main {
          box-sizing: border-box;
          flex-grow: 1;
          height: 100%;
          margin-left: ${inputs.isShown &&
            inputs.mode === "push" &&
            !inputs.isResponsive
              ? ""
              : !inputs.isResponsive
              ? "-300px"
              : "-60%"};
          transition: ${this.isClicked ? "margin 0.4s ease-in-out;" : ""};
          width: ${inputs.isShown &&
            inputs.mode === "push" &&
            !inputs.isResponsive
              ? "calc(100% - 300px)"
              : "calc(100%)"};
        } */
      }
    `;
  }
}
