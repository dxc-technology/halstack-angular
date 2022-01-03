import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";

@Injectable()
export class DxcNumberInputHelper {
  constructor(private utils: CssUtils) {}

  getDynamicStyle(inputs) {
    return css`
      // Chrome, Safari, Edge, Opera
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      // Firefox
      input[type="number"] {
        -moz-appearance: textfield;
      }
    `;
  }
}
