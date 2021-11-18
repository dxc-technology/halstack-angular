import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { Subject } from "rxjs";
@Injectable()
export class DxcNewSelectHelper {
  sizes = {
    small: "240px",
    medium: "360px",
    large: "480px",
    fillParent: "100%",
  };

  constructor(private utils: CssUtils) {}

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      flex-direction: column;
      ${this.utils.getMargins(inputs.margin)}
      ${this.calculateWidth(inputs)}
      .container {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #000000;
        border-radius: 4px;
        opacity: 1;
        width: inherit;
        padding: 9px 8px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        height: 40px;
        outline: 0;
        ${!inputs.searchable ? "cursor: pointer;" : ""}
        input {
          border: none;
          width: 100%;
          padding: 0px;
          margin-left: 8px;
          height: 100%;
          :focus-visible,
          :focus,
          :focus-within {
            outline: none;
          }
        }
        :focus-within {
          border: 1px solid #0095ff;
          box-shadow: inset 0 0 0 1px #0095ff;
        }
        .valueContainer{
          display:flex;
          flex-direction: row;
          span{
            text-align: left;
            font: normal normal normal 16px/22px Open Sans;
            letter-spacing: 0px;
            color: #000000;
          }
          .notSelectedLabel{
            text-align: left;
            font: normal normal normal 16px/22px Open Sans;
            letter-spacing: 0px;
            color: #666666;
          }
        }
      }
      .options {
        margin: 4px 0px 0px 0px;
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #808080;
        border-radius: 4px;
        opacity: 1;
        width: inherit;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 4px 0px;
        li {
          list-style-type: none;
          text-align: left;
          font: normal normal normal 14px/19px Open Sans;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
          height: 38px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          border: 2px solid transparent;
          padding: 2px 6px;
          .label {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: 8px;
          }
          :hover{
            background-color: #F2F2F2;
            cursor: pointer;
          }
          :focus, :focus-within, :active{
            border: 2px solid #0095ff;
          }
          :active{
            background-color: #E6E6E6;
          }
          &.selected{
            background-color: #E6E6E6;
            :hover{
              background-color: #CCCCCC;
            }
          }
        }
      }
      .inputLabel {
        font-family: var(--newSelect-fontFamily);
        font-size: var(--newSelect-labelFontSize);
        font-style: var(--newSelect-labelFontStyle);
        font-weight: var(--newSelect-labelFontWeight);
        color: var(--newSelect-labelFontColor);
        margin-bottom: 4px;
      }
      .helperText {
        font-family: var(--newSelect-fontFamily);
        font-size: var(--newSelect-helperTextFontSize);
        font-style: var(--newSelect-helperTextFontStyle);
        font-weight: var(--newSelect-helperTextFontWeight);
        color: var(--newSelect-helperTextFontColor);
        margin-bottom: 4px;
      }
    `;
  }
}
