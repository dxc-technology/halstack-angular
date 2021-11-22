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
        border: 1px solid ${inputs.error ? "#D0011B" : "#000000"};
        ${inputs.error ? "box-shadow: inset 0 0 0 1px #D0011B;" : ""}
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
        ${!inputs.searchable ? "cursor: pointer;" : ""}
        justify-content: space-between;
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
        .valueContainer {
          display: flex;
          flex-direction: row;
          width: 100%;
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
          span {
            text-align: left;
            font: normal normal normal 16px/22px Open Sans;
            letter-spacing: 0px;
            color: #000000;
            display: flex;
            align-items: center;
            margin-left: 8px;
            width: 100%;
          }
          .notSelectedLabel {
            text-align: left;
            font: normal normal normal 16px/22px Open Sans;
            letter-spacing: 0px;
            color: #666666;
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
          height: 32px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 100%;
          dxc-new-select-option {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            .optionLabel {
              display: flex;
              flex-direction: row;
              width: 100%;
              padding: 2px 6px;
              height: 100%;
              box-sizing: border-box;
              border: 2px solid transparent;
              .label {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                margin-left: 8px;
              }
              .checkIcon {
                display: flex;
                margin-right: 8px;
                align-items: center;
              }
              :hover {
                background-color: #f2f2f2;
                cursor: pointer;
              }
              &.focused,
              :active {
                border: 2px solid #0095ff;
              }
              :active {
                background-color: #e6e6e6;
              }
              &.selected {
                background-color: #e6e6e6;
                :hover {
                  background-color: #cccccc;
                }
                :active {
                  background-color: #bfbfbf;
                }
              }
            }
            .checkboxContainer {
              width: 100%;
              height: 100%;
              display: flex;
            }
          }
          .optionsGroup {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 0px;
            margin-top: 38px;
            width: 100%;
            .groupLabel {
              padding-left: 16px;
              text-align: left;
              font: normal normal 600 14px/19px Open Sans;
              letter-spacing: 0px;
              color: #000000;
            }
            .optionLabel {
              padding: 2px 14px;
            }
            dxc-checkbox{
              margin-left: 8px;
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
      .errorMessage {
        font-family: var(--newSelect-fontFamily);
        text-align: left;
        font: normal normal normal 12px/17px Open Sans;
        letter-spacing: 0px;
        color: #d0011b;
        margin-top: 4px;
      }
    `;
  }
}
