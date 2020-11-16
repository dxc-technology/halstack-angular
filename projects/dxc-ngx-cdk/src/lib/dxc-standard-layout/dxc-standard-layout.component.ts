import {
  Component,
  OnInit,
  HostBinding,
  AfterViewInit,
  ContentChildren,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { HostListener, ViewChild, ElementRef, QueryList, ChangeDetectorRef } from '@angular/core';
import { responsiveSizes } from "../variables";
import { BtnArrowService } from './dxc-standard-layout-sidenav/services/btnArrow.service';   
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

  defaultInputs = new BehaviorSubject<any>({
    innerWidth,
    isMenuShown: true
  });

  @ViewChild('sidenav') sidenav: ElementRef;
  @ContentChildren(DxcStandardLayoutSidenavComponent) components : QueryList<DxcStandardLayoutSidenavComponent>;
  subscription: any;

  updateCss() {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      innerWidth: this.innerWidth,
      isSidenav: this.isSidenav,
      isMenuShown: this.isMenuShown
    })}`;
  }

  constructor(private cdr: ChangeDetectorRef, private service: BtnArrowService) {
    this.subscription = this.service.isMenuShown.subscribe(isShown => {
      this.isMenuShown = isShown;
    });
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
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

  onValueUpdated(newValue) {
    console.log("newVlaue:", newValue)
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
    this.components.toArray().forEach((compo) => {
      compo.updateValue.subscribe((bar) => console.log("bar:",bar));           
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
          width: ${inputs.innerWidth <= responsiveSizes.tablet
            ? "60%"
            : "300px"};
          flex: ${inputs.innerWidth <= responsiveSizes.tablet
            ? "0 0 60%"
            : "0 0 300px"}
        }
        .sidenav:empty{
          flex: 0 0 0 !important;
        }
        .main{
          max-width: 1320px;
          width: 100%;
          margin: ${this.getStyleMarginsMain(inputs)};
        }
      }
      dxc-footer{
        width: 100%;
        margin-top: auto;
      }
    `;
  }

  getStyleMarginsMain(inputs){
    if(inputs.isSidenav){
      return css `
        ${
            inputs.innerWidth <= responsiveSizes.mobileLarge ? "36px 6.4% 48px 6.4%" : 
            inputs.innerWidth > responsiveSizes.mobileLarge && inputs.innerWidth <= responsiveSizes.laptop ? "48px 9.6% 64px 9.6%" : 
            "64px 8.6% 80px 5.4%"
          };
      `;
    }
    else{
      return css `
        ${
            inputs.innerWidth <= responsiveSizes.mobileLarge ? "36px 6.4% 48px 6.4%" : 
            inputs.innerWidth > responsiveSizes.mobileLarge && inputs.innerWidth <= responsiveSizes.laptop ? "48px 9.6% 64px 9.6%" : 
            "64px 15.6% 80px 15.6%"
          };
      `;
    }
  }
}
