import {
  Component,
  OnInit,
  HostBinding,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { HostListener, ViewChild, ElementRef } from '@angular/core';
import { responsiveSizes } from "../variables";
@Component({
  selector: "dxc-standard",
  templateUrl: "./dxc-standard.component.html",
  providers: [CssUtils],
})
export class DxcStandardComponent implements OnInit {
  @HostBinding("class") className;

  innerWidth;

  defaultInputs = new BehaviorSubject<any>({
    innerWidth
  });

  @ViewChild('footer', { read: ElementRef }) contentRef: ElementRef;

  updateCss() {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      innerWidth: this.innerWidth
    })}`;
  }

  constructor(private utils: CssUtils) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.updateCss();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.updateCss();
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
      .main{
        max-width: 1320px;
        margin: ${
          inputs.innerWidth <= responsiveSizes.mobileLarge ? "36px 6.4% 48px 6.4%" : 
          inputs.innerWidth > responsiveSizes.mobileLarge && inputs.innerWidth <= responsiveSizes.tablet ? "48px 9.6% 64px 9.6%" : 
          "65px 15.6% 80px 15.6%"
        };
      }
      dxc-footer{
        width: 100%;
        margin-top: auto;
      }
    `;
  }
}
