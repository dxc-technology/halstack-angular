import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { responsiveSizes } from "../variables";
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-sidenav",
  templateUrl: "./dxc-sidenav.component.html",
  styleUrls: ["./dxc-sidenav.component.scss"],
  providers: [CssUtils]
})
export class DxcSidenavComponent implements OnInit {
  className;
  @Input() arrowDistance: string;
  @Input() mode: string = "overlay";
  @Input() padding: any;
  @Input()
  get displayArrow(): boolean { return this._displayArrow; }
  set displayArrow(value: boolean) {
    this._displayArrow = coerceBooleanProperty(value);
  }
  private _displayArrow = true;

  innerWidth;
  isResponsive;
  isShown:boolean = true;
  firstLoad:boolean = true;

  defaultInputs = new BehaviorSubject<any>({
    arrowDistance: "",
    padding: null,
    displayArrow: true
  });

  @ViewChild("sidenavContainer", { static: false }) sidenav: ElementRef;
  sidenavArrow: any;

  constructor(private utils: CssUtils,private cdr: ChangeDetectorRef) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.updateCss();
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      mode: this.mode,
      innerWidth: this.innerWidth,
      isResponsive: this.isResponsive,
      isShown: this.isShown
    })}`;
  }

  public arrowClicked() {
    this.isShown = !this.isShown;
    this.updateCss();
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
    this.cdr.detectChanges;
    this.firstLoad = false;
  }

  updateCss() {
    this.innerWidth = this.sidenav.nativeElement.clientWidth;
    if (this.innerWidth <= responsiveSizes.tablet) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
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
      isShown: this.isShown
    })}`;
  }

  getDynamicStyle(inputs) {
    return css`
      .sidenavContainerClass {
        display: flex;
        position: relative;

        .sidenavArrow {
          width: 42px;
          height: 42px;
          background-color: #D9D9D980;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: ${
            inputs.innerWidth <= responsiveSizes.tablet
              ? "calc(60% - 21px)"
              : "279px"
          };
          top: ${
            inputs.arrowDistance ? inputs.arrowDistance : "calc(50% - 21px)"
          };
          transform: ${
            inputs.isShown
              ? "translateX(0)"
              : !inputs.isShown
              ? inputs.innerWidth <= responsiveSizes.tablet
                ? this.firstLoad
                  ? "translateX(-" + (inputs.innerWidth * 0.6 - 15.6) + "px)"
                  : "translateX(-" + inputs.innerWidth * 0.6 + "px)"
                : "translateX(-297px)"
              : ""
          };
          transition: transform 0.4s ease-in-out;
          cursor: pointer;
          z-index: ${
            inputs.mode === "overlay" || this.isResponsive ? "401" : "auto"
          };
          .sidenavArrowImage {
            height: 18px;
            width: 18px;
            display: flex;
            align-items: center;
            margin-left: ${inputs.isShown ? "0px" : "10px"};
            transform: ${inputs.isShown ? "rotate(-180deg)" : "rotate(0deg)"};
            transition: margin 0.4s ease-in, transform 0.4s ease-in-out;
          }
        }

        dxc-sidenav-menu {
          display: flex;
          flex-direction: column;
          position: absolute;
          background-color: #f8f8f8;
          height: 100%;
          width: ${
            inputs.innerWidth <= responsiveSizes.tablet ? "60%" : "300px"
          };
          box-sizing: border-box;
          ${this.utils.getPaddings(inputs.padding)}
          z-index: ${
            inputs.mode === "overlay" || this.isResponsive ? "400" : "auto"
          };
          transform: ${
            inputs.isShown
              ? "translateX(0)"
              : !inputs.isShown
              ? "translateX(-100%)"
              : ""
          };
          transition: transform 0.4s ease-in-out;
        }

        dxc-sidenav-content {
          flex-grow: 1;
          height: 100%;
          ${this.utils.getPaddings(inputs.padding)}
          margin-left: ${
            inputs.isShown && inputs.mode === "push" && !inputs.isResponsive
              ? "300px"
              : "0"
          };
          transition: margin 0.4s ease-in-out;
        }
      }
    `;
  }
}
