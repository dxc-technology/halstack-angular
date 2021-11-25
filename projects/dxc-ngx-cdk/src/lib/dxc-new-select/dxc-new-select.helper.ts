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
        border: 1px solid
          ${inputs.disabled ? "#999999" : inputs.error ? "#D0011B" : "#000000"};
        ${inputs.error && !inputs.disabled
          ? "box-shadow: inset 0 0 0 1px #D0011B;"
          : ""}
        border-radius: 4px;
        opacity: 1;
        width: inherit;
        padding: 8px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        height: 40px;
        outline: 0;
        cursor: ${inputs.disabled
          ? "not-allowed"
          : !inputs.searchable
          ? "pointer"
          : ""};
        justify-content: space-between;
        margin-top: 4px;
        margin-bottom: 4px;
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
        :hover {
          ${!inputs.error && !inputs.disabled
            ? "border: 1px solid #5F249F;"
            : ""}
        }
        :focus-within {
          ${!inputs.disabled
            ? "border: 1px solid #0095ff; box-shadow: inset 0 0 0 1px #0095ff;"
            : ""}
        }
        .valueContainer {
          display: flex;
          flex-direction: row;
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          .numberOfSelected {
            display: flex;
            width: 50px;
            .sizeContainer {
              width: 24px;
              height: 22px;
              background: #fafafa 0% 0% no-repeat padding-box;
              display: flex;
              justify-content: center;
              text-align: left;
              font: normal normal 600 11px/15px Open Sans;
              letter-spacing: 0.98px;
              color: #000000;
              border-bottom-left-radius: 4px;
              border-top-left-radius: 4px;
              align-items: center;
              border-left: 1px solid #cccccc;
              border-top: 1px solid #cccccc;
              border-bottom: 1px solid #cccccc;
            }
            .removeContainer {
              width: 24px;
              height: 22px;
              background: #ffffff 0% 0% no-repeat padding-box;
              border: 1px solid #cccccc;
              display: flex;
              justify-content: center;
              text-align: left;
              font: normal normal 600 11px/15px Open Sans;
              letter-spacing: 0.98px;
              color: #000000;
              border-bottom-right-radius: 4px;
              border-top-right-radius: 4px;
              align-items: center;
              outline: none;
              svg {
                height: 16px;
                width: 16px;
                fill: #000000;
              }
              :focus-visible,
              :active {
                border: 1px solid #0095ff;
                box-shadow: inset 0 0 0 1px #0095ff;
              }
            }
          }
          .selectedOptionContainer {
            margin-left: 8px;
            width: calc(100% - 60px);
          }
        }
        .iconsContainer {
          display: flex;
          flex-direction: row;
          .errorIcon {
            height: 18px;
            width: 18px;
            margin-right: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            color: #d0011b;
            svg {
              line-height: 18px;
              height: 18px;
              width: 18px;
            }
          }
          .expandIcon {
            display: flex;
            transform: rotate(0deg);
            &.opened {
              transform: rotate(180deg);
            }
            svg{
              fill: ${!inputs.disabled ? "#000000" : "#999999"};
            }
          }
        }
      }
      .options {
        overflow: auto;
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
        position: absolute;
        margin-top: 90px;
        z-index: 100;
        &.closed {
          visibility: hidden;
        }
        li {
          list-style-type: none;
          text-align: left;
          font: normal normal normal 14px/19px Open Sans;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 100%;
          .optionsGroup {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 0px;
            width: 100%;
            .groupLabel {
              padding-left: 16px;
              text-align: left;
              font: normal normal 600 14px/19px Open Sans;
              letter-spacing: 0px;
              color: #000000;
              height: 32px;
              display: flex;
              align-items: center;
            }
            .optionLabel {
              padding: 2px 14px;
            }
          }
          &.lastItem .optionsGroup li.lastItemGroup,
          &.lastItem > dxc-new-select-option {
            .optionLabel {
              border-bottom: none;
            }
          }
        }
      }
      .inputLabel {
        font-family: var(--newSelect-fontFamily);
        font-size: var(--newSelect-labelFontSize);
        font-style: var(--newSelect-labelFontStyle);
        font-weight: var(--newSelect-labelFontWeight);
        color: ${inputs.disabled
          ? "#999999"
          : "var(--newSelect-labelFontColor)"};
        line-height: 24px;
      }
      .helperText {
        font-family: var(--newSelect-fontFamily);
        font-size: var(--newSelect-helperTextFontSize);
        font-style: var(--newSelect-helperTextFontStyle);
        font-weight: var(--newSelect-helperTextFontWeight);
        color: ${inputs.disabled
          ? "#999999"
          : "var(--newSelect-helperTextFontColor)"};
        line-height: 18px;
      }
      .errorMessage {
        font-family: var(--newSelect-fontFamily);
        text-align: left;
        font: normal normal normal 12px/17px Open Sans;
        letter-spacing: 0px;
        color: #d0011b;
      }
    `;
  }
}
