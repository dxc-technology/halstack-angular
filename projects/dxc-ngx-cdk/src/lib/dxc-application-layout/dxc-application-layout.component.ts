import {
  Component,
  OnInit,
  HostBinding,
  ContentChildren,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { HostListener, QueryList } from "@angular/core";
import { responsiveSizes } from "../variables";
import { SidenavService } from "./dxc-application-layout-sidenav/services/sidenav.service";
import { DxcHeaderComponent } from "../dxc-header/dxc-header.component";
import { DxcApplicationLayoutHeaderComponent } from "./dxc-application-layout-header/dxc-application-layout-header.component";
import { DxcFooterComponent } from "../dxc-footer/dxc-footer.component";
import { DxcApplicationLayoutFooterComponent } from "./dxc-application-layout-footer/dxc-application-layout-footer.component";
@Component({
  selector: "dxc-application-layout",
  templateUrl: "./dxc-application-layout.component.html",
  providers: [CssUtils, SidenavService],
})
export class DxcApplicationLayoutComponent implements OnInit {
  @HostBinding("class") layoutStyles;

  innerWidth;
  isMenuShown;
  isModePush;

  customHeader;
  defaultHeader = false;

  defaultInputs = new BehaviorSubject<any>({
    innerWidth,
    isModePush: true,
  });

  @ContentChildren(DxcHeaderComponent)
  dxcHeader: QueryList<DxcHeaderComponent>;

  @ContentChildren(DxcApplicationLayoutHeaderComponent)
  dxcCustomHeader: QueryList<DxcApplicationLayoutHeaderComponent>;


  constructor(
    private service: SidenavService,
    private cdRef: ChangeDetectorRef
  ) {
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

  ngAfterViewChecked() {
    if (this.dxcHeader.length === 0 && this.dxcCustomHeader.length !== 0) {
      this.customHeader = "customHeader";
    } else if (this.dxcHeader.length === 1) {
      this.customHeader = "customDxcHeader";
    } else if (
      this.dxcHeader.length === 0 &&
      this.dxcCustomHeader.length === 0
    ) {
      this.defaultHeader = true;
    }
    this.cdRef.detectChanges();
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
      z-index: 400;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      height: 100vh;
      dxc-header {
        width: 100%;
        max-height: 68px;
        mat-toolbar {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 500;
          mat-toolbar-row {
            height: 68px !important;
          }
        }
      }
      dxc-application-layout-header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 500;
        max-height: 68px;
        overflow: hidden;
      }
      .content {
        display: flex;
        position: relative;
      }
      dxc-application-layout-sidenav {
        .sidenavContainerClass {
          top: 68px;
          max-height: calc(100vh - 68px);
        }
      }
      dxc-application-layout-main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        transition: width 0.4s ease-in-out;
        .main {
          max-width: 1320px;
          width: ${this.calculateMainWidth(inputs)};
          margin: ${this.getStyleMarginsMain(inputs)};
          transition: margin 0.4s ease-in-out;
        }
      }
      dxc-footer {
        width: 100%;
        margin-top: auto;
        max-height: 128px;
        overflow: hidden;
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

  calculateMainWidth(inputs) {
    if (inputs.innerWidth <= responsiveSizes.mobileLarge) {
      return "calc(100% - 6.4% - 6.4%)";
    } else if (
      inputs.innerWidth > responsiveSizes.mobileLarge &&
      inputs.innerWidth <= responsiveSizes.laptop
    ) {
      return "calc(100% - 9.6% - 9.6%)";
    } else {
      return this.isMenuShown && this.isModePush
        ? "calc(100% - 8.6% - 5.4%)"
        : "calc(100% - 15.6% - 15.6%)";
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
      return "64px - 80px";
    }
  }
  
}
