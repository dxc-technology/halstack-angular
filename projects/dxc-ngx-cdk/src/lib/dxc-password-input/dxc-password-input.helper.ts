import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";

@Injectable()
export class DxcPasswordInputHelper {
  constructor(private utils: CssUtils) {}

  getDynamicStyle(inputs) {
    return css`
      input::-ms-reveal {
        display: none;
      }
    `;
  }
}
