import {
  Component,
  OnInit,
  HostBinding,
  AfterViewInit,
  ContentChildren,
  OnChanges,
  SimpleChanges,
  Input,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import {
  HostListener,
  ViewChild,
  ElementRef,
  QueryList,
  ChangeDetectorRef,
} from "@angular/core";
import { responsiveSizes } from "../variables";
import { DxcStandardLayoutSidenavComponent } from "./dxc-standard-layout-sidenav/dxc-standard-layout-sidenav.component";
import { delay } from 'rxjs/operators';
@Component({
  selector: "dxc-standard-layout",
  templateUrl: "./dxc-standard-layout.component.html",
  providers: [CssUtils],
})
export class DxcStandardLayoutComponent implements OnInit {
  @HostBinding("class") layoutStyles;

  innerWidth;
  isSidenav: boolean = false;
  isMenuShown;

  defaultInputs = new BehaviorSubject<any>({
    innerWidth,
  });

  @ContentChildren(DxcStandardLayoutSidenavComponent)
  componentSidenav: QueryList<DxcStandardLayoutSidenavComponent>;

  updateCss() {
    this.layoutStyles = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      innerWidth: this.innerWidth,
    })}`;
  }

  constructor(private cdRef: ChangeDetectorRef) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.updateCss();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.updateCss();
  }

  ngAfterViewChecked() {
    this.componentSidenav.first.isMenuShown
      .pipe(delay(0))
      .subscribe((isShown) => {
        this.isMenuShown = isShown;
      });
  }

  getDynamicStyle(inputs) {
    return css`
      min-height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
      dxc-header {
        width: 100%;
      }
      .content {
        display: flex;
        position: relative;
        .main {
          transition: margin 0.4s ease-in-out;
          max-width: 1320px;
          width: 100%;
          height: 100vh;
        }
      }
      dxc-footer {
        width: 100%;
        margin-top: auto;
      }
    `;
  }

  getStyleMarginsMain(inputs) {
    if (inputs.innerWidth <= responsiveSizes.mobileLarge) {
      return css`
        ${inputs.innerWidth <= responsiveSizes.mobileLarge
          ? "36px 6.4% 48px 6.4%"
          : inputs.innerWidth > responsiveSizes.mobileLarge &&
            inputs.innerWidth <= responsiveSizes.laptop
          ? "48px 9.6% 64px 9.6%"
          : inputs.isShown
          ? "64px 8.6% 80px 5.4%"
          : "64px 15.6% 80px 15.6%"};
      `;
    } else {
      return css`
        ${inputs.innerWidth <= responsiveSizes.mobileLarge
          ? "36px 6.4% 48px 6.4%"
          : inputs.innerWidth > responsiveSizes.mobileLarge &&
            inputs.innerWidth <= responsiveSizes.laptop
          ? "48px 9.6% 64px 9.6%"
          : inputs.isShown
          ? "64px 8.6% 80px 5.4%"
          : "64px 15.6% 80px 15.6%"};
      `;
    }
  }
}
