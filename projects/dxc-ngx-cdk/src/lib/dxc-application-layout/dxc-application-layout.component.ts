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
import { SidenavService } from "./dxc-application-layout-sidenav/services/sidenav.service";
import { DxcHeaderComponent } from "../dxc-header/dxc-header.component";
import { DxcApplicationLayoutHeaderComponent } from "./dxc-application-layout-header/dxc-application-layout-header.component";
import { DxcFooterComponent } from '../dxc-footer/dxc-footer.component';
import { DxcApplicationLayoutFooterComponent } from './dxc-application-layout-footer/dxc-application-layout-footer.component';

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
    private cdRef: ChangeDetectorRef) {
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

    if (this.dxcFooter.length === 0 && this.dxcCustomFooter.length !== 0) {
      this.customFooter = "customFooter";
    } else if (this.dxcFooter.length === 1) {
      this.customFooter = "customDxcFooter";
    } else if (this.dxcFooter.length === 0 && this.dxcCustomFooter.length === 0) {
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
        height: fit-content;

        .main{
          width: 100%;
          padding-top: 68px;
        }
      }
      dxc-application-layout-sidenav {
        .sidenavContainerClass {
          top: 68px;
          max-height: calc(100vh - 68px);
        }
      }
      dxc-application-layout-main {
        width: 100%;
        height: fit-content;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .main {
          padding-top: 68px;

          margin-left: ${(this.isMenuShown && this.isModePush ? "" : "-297px")};
        }
      }
      dxc-footer {
        width: 100%;
        margin-left: ${((this.isModePush && !this.isMenuShown) || !this.isModePush) ? "-300px" : ""};
        transition: margin 0.4s ease-in-out;
      }
    `;
  }

}
