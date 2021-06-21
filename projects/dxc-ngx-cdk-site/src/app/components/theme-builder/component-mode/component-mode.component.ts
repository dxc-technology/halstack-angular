import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { css } from "emotion";
import { Stylable } from "../model/stylable";
@Component({
  selector: "tbuilder-component-mode",
  templateUrl: "./component-mode.component.html",
})
export class ComponentModeComponent implements OnInit, Stylable {

  @HostBinding("class") className;

  @Input() mode: string;

  @Input() text: string;

  constructor() {}

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }

  getDynamicStyle = () => {
    return css`
      .modeContainer {
        ${this.mode === "dark"
          ? css`
              background-color: #000000;
            `
          : css`
              background-color: transparent;
            `}
        padding-bottom: 10px;
        padding-left: 10px;
      }

      .previewsContainer {
        display: flex;
        justify-content: flex-start;
        padding-left: 10px;
      }

      .modeTitle {
        font: Bold 12px/17px Open Sans;
        letter-spacing: 1.88px;
        text-transform: uppercase;
        padding: 20px 0 10px 10px;
        ${this.mode === "dark"
          ? css`
              color: #ffffff;
            `
          : css`
              color: #000000;
            `}
      }
    `;
  };
}
