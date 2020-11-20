import { Component, OnInit, HostBinding, ContentChildren } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { HostListener, QueryList } from "@angular/core";
import { responsiveSizes } from "../variables";
import { DxcStandardLayoutSidenavComponent } from "./dxc-standard-layout-sidenav/dxc-standard-layout-sidenav.component";
import { SidenavService } from "./dxc-standard-layout-sidenav/services/sidenav.service";
@Component({
  selector: "dxc-standard-layout",
  templateUrl: "./dxc-standard-layout.component.html",
  providers: [CssUtils, SidenavService],
})
export class DxcStandardLayoutComponent implements OnInit {
  @HostBinding("class") layoutStyles;

  innerWidth;
  isMenuShown;
  isModePush;

  defaultInputs = new BehaviorSubject<any>({
    innerWidth,
    isModePush: true,
  });

  @ContentChildren(DxcStandardLayoutSidenavComponent)
  componentSidenav: QueryList<DxcStandardLayoutSidenavComponent>;

  constructor(private service: SidenavService) {
    this.service.isMenuShown.subscribe((value) => {
      this.isMenuShown = value;
      this.updateCss();
    });
    this.service.isPushMode.subscribe((value) => {
      this.isModePush = value;
      this.updateCss();
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.updateCss();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.updateCss();
  }

  updateCss() {
    this.layoutStyles = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      innerWidth: this.innerWidth,
      isModePush: this.isModePush,
    })}`;
  }

  getDynamicStyle(inputs) {
    return css`
      z-index:400;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: #fabada;
      margin: 0;
      display: flex;
      flex-direction: column;
      dxc-header {
        width: 100%;
        min-height: 68px;
        mat-toolbar {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 500;
          mat-toolbar-row {
            min-height: 68px !important;
          }
        }
      }
      .content {
        display: flex;
        position: relative;
        .main {
          display: flex;
          justify-content: center;
          transition: margin 0.4s ease-in-out;
          width: 100%;
          margin: ${this.getStyleMarginsMain(inputs)};
          height: calc(100vh - ${this.getMainVerticalPadding(inputs)});
        }
      }
      dxc-standard-layout-main {
        width: 100%;
        max-width: 1320px;
      }
      dxc-footer {
        width: 100%;
        margin-top: auto;
      }
    `;
  }

  getStyleMarginsMain(inputs) {
    if (inputs.innerWidth <= responsiveSizes.mobileLarge) {
      return "36px 6.4% 48px 6.4%";
    } else if (
      inputs.innerWidth > responsiveSizes.mobileLarge &&
      inputs.innerWidth <= responsiveSizes.laptop
    ) {
      return "48px 9.6% 64px 9.6%";
    } else {
      return this.isMenuShown && this.isModePush
        ? "64px 8.6% 80px 5.4%"
        : "64px 15.6% 80px 15.6%";
    }
  }

  getMainVerticalPadding(inputs) {
    if (inputs.innerWidth <= responsiveSizes.mobileLarge) {
      return "36px - 48px";
    } else if (
      inputs.innerWidth > responsiveSizes.mobileLarge &&
      inputs.innerWidth <= responsiveSizes.laptop
    ) {
      return "48px - 64px";
    } else {
      return "64px - 80px"
    }
  }
}
