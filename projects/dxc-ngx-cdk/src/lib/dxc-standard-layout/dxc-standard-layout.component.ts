import {
  Component,
  OnInit,
  HostBinding,
  AfterViewInit,
  ContentChildren,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { HostListener, ViewChild, ElementRef, QueryList, ChangeDetectorRef } from '@angular/core';
import { responsiveSizes } from "../variables";
import { DxcStandardLayoutSidenavComponent } from './dxc-standard-layout-sidenav/dxc-standard-layout-sidenav.component';
@Component({
  selector: "dxc-standard-layout",
  templateUrl: "./dxc-standard-layout.component.html",
  providers: [CssUtils],
})
export class DxcStandardLayoutComponent implements OnInit, AfterViewInit {
  @HostBinding("class") className;

  innerWidth;
  isSidenav: boolean = false;
  isMenuShown: boolean = true;
  isModePush: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    innerWidth,
    isMenuShown: true,
    isModePush: false
  });

  @ViewChild('sidenav') sidenav: ElementRef;
  @ContentChildren(DxcStandardLayoutSidenavComponent) componentSidenav : QueryList<DxcStandardLayoutSidenavComponent>;

  updateCss() {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      innerWidth: this.innerWidth,
      isModePush: this.isModePush,
      isMenuShown: this.isMenuShown
    })}`;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.updateCss();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.updateCss();
  }

  ngAfterViewInit() {
    // if(this.components.toArray().length > 0){ // da error de: Expression has changed after it was checked
    //   this.isSidenav = true;
    //   this.cdr.detectChanges();
    //   this.updateCss();
    //   this.cdr.detectChanges();
    // }
    // this.components.toArray().forEach(component => {
    //   console.log(component);
    // });

    this.componentSidenav.toArray().forEach((component) => {
      component.isMenuShown.subscribe((isShown) => {
        console.log("isShown:",isShown);
        this.isMenuShown = isShown;
        this.updateCss();
      });        
  });
  }

  getDynamicStyle(inputs) {
    return css`
      min-height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
      dxc-header{
        width: 100%;
      }
      .content{
        display: flex;
        position: relative;
        .sidenav{
          min-height: 100vh;
        }
        .sidenav:empty{
          flex: 0 0 0 !important;
        }
        .main{
          transition: margin 0.4s ease-in-out;
          max-width: 1320px;
          width: 100%;
          margin: ${
            inputs.innerWidth <= responsiveSizes.mobileLarge ? "36px 6.4% 48px 6.4%" : 
            inputs.innerWidth > responsiveSizes.mobileLarge && inputs.innerWidth <= responsiveSizes.laptop ? "48px 9.6% 64px 9.6%" : 
            inputs.isMenuShown ? "64px 30px 80px 5.4%" : "64px 100px 80px 15.6%"
          };
        }
      }
      dxc-footer{
        width: 100%;
        margin-top: auto;
      }
    `;
  }

  getStyleWidthSidenav(inputs){
    if(this.isMenuShown){
      if(inputs.innerWidth <= responsiveSizes.tablet){
        return "60%";
      }
      else {
        return "300px";
      }
    }
    else {
      return "0px";
    }
  }

  getStyleMarginsMain(inputs){
    // inputs.innerWidth <= responsiveSizes.mobileLarge ? "36px 6.4% 48px 6.4%" : 
    // inputs.innerWidth > responsiveSizes.mobileLarge && inputs.innerWidth <= responsiveSizes.laptop ? "48px 9.6% 64px 9.6%" : 
    // inputs.isMenuShown ? "64px 30px 80px 5.4%" : "64px 100px 80px 15.6%"
    if(inputs.innerWidth <= responsiveSizes.mobileLarge){
      return css `
        ${
            inputs.innerWidth <= responsiveSizes.mobileLarge ? "36px 6.4% 48px 6.4%" : 
            inputs.innerWidth > responsiveSizes.mobileLarge && inputs.innerWidth <= responsiveSizes.laptop ? "48px 9.6% 64px 9.6%" : 
            inputs.isShown ? "64px 8.6% 80px 5.4%" : "64px 15.6% 80px 15.6%"
          };
      `;
    }
    else{
      return css `
        ${
            inputs.innerWidth <= responsiveSizes.mobileLarge ? "36px 6.4% 48px 6.4%" : 
            inputs.innerWidth > responsiveSizes.mobileLarge && inputs.innerWidth <= responsiveSizes.laptop ? "48px 9.6% 64px 9.6%" : 
            inputs.isShown ? "64px 8.6% 80px 5.4%" : "64px 15.6% 80px 15.6%"
          };
      `;
    }
  }
}
