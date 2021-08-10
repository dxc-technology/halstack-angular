import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";

@Injectable()
export class DxcNewInputPasswordHelper {
  constructor(private utils: CssUtils) {}

  getDynamicStyle(inputs) {
    return css`
      input::-ms-reveal {
        display: none;
      }
    `;
  }
}
