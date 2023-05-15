import {
  Component,
  OnInit,
  HostBinding,
  ContentChildren,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "@emotion/css";
import { CssUtils } from "../utils";
import { HostListener, QueryList } from "@angular/core";
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

  customFooter;
  defaultFooter = false;

  defaultInputs = new BehaviorSubject<any>({
    innerWidth,
    isModePush: true,
  });

  @ContentChildren(DxcHeaderComponent)
  dxcHeader: QueryList<DxcHeaderComponent>;

  @ContentChildren(DxcApplicationLayoutHeaderComponent)
  dxcCustomHeader: QueryList<DxcApplicationLayoutHeaderComponent>;

  @ContentChildren(DxcFooterComponent)
  dxcFooter: QueryList<DxcFooterComponent>;

  @ContentChildren(DxcApplicationLayoutFooterComponent)
  dxcCustomFooter: QueryList<DxcApplicationLayoutFooterComponent>;

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

  ngAfterContentInit() {
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

    if (this.dxcFooter.length === 0 && this.dxcCustomFooter.length !== 0) {
      this.customFooter = "customFooter";
    } else if (this.dxcFooter.length === 1) {
      this.customFooter = "customDxcFooter";
    } else if (
      this.dxcFooter.length === 0 &&
      this.dxcCustomFooter.length === 0
    ) {
      this.defaultFooter = true;
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
        max-height: 64px;
        mat-toolbar {
          z-index: 500;
          mat-toolbar-row {
            height: 64px !important;
          }
        }
      }
      dxc-application-layout-header {
        width: 100%;
        z-index: 500;
        max-height: 64px;
        overflow: hidden;
      }
      dxc-application-layout-header, dxc-header {
        position: fixed;
        z-index: 500;
      }
      .application-content {
        display: flex;
        position: relative;
        height: 100%;
        margin-top: 64px;
        .sidenav {
          background-color: var(--sidenav-backgroundColor);
        }
      }
      div.main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        dxc-application-layout-main {
          transition: width 0.4s ease-in-out;
          width: 100%;
          height: fit-content;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      }
      dxc-application-layout-sidenav {
        ${this.isModePush && this.isMenuShown ? "width: 300px; height: 100%; display: block;" : ""}
        .sidenavContainerClass {
          max-height: 100vh;
          position: fixed;
        }
      }
      dxc-footer {
        width: 100%;
        transition: width 0.4s ease-in-out;
      }
    `;
  }
}
