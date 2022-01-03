import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { Subject } from "rxjs";
@Injectable()
export class DxcSelectHelper {
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
          ${inputs.disabled ? "var(--select-disabledColor)" : inputs.error ? "var(--select-errorColor)" : "#000000"};
        ${inputs.error && !inputs.disabled
          ? "box-shadow: inset 0 0 0 1px var(--select-errorColor);"
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
        cursor: ${inputs.disabled ? "not-allowed" : "pointer"};
        justify-content: space-between;
        margin-top: 4px;
        margin-bottom: 4px;
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
          width: ${inputs.searchable && inputs.multiple ? "" : "100%"};
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 4px;
          overflow: ${inputs.searchable && inputs.multiple ? "" : "hidden"};
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
            width: 80%;
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
            color: var(--select-errorColor);
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
            svg {
              fill: ${!inputs.disabled
                ? "var(--select-collapseIndicatorColor)"
                : "var(--select-disabledColor)"};
            }
          }
        }
        .searchContainer {
          display: flex;
          flex-direction: row;
          width: 100%;
          align-items: center;
          margin-right: 4px;
          .searchGrid {
            width: 100%;
            display: flex;
            margin-left: 8px;
            input {
              border: none;
              width: 100%;
              padding: 0px;
              height: 100%;
              text-align: left;
              font-family: var(--select-fontFamily);
              font-size: var(--select-valueFontSize);
              font-style: var(--select-valueFontStyle);
              font-weight: var(--select-valueFontWeight);
              color: ${inputs.disabled
                ? "var(--select-disabledColor)"
                : "var(--select-valueFontColor)"};
              :focus-visible,
              :focus,
              :focus-within {
                outline: none;
              }
              &.hiddenInput {
                visibility: hidden;
              }
              ::placeholder {
                font-family: var(--select-fontFamily);
                font-size: var(--select-placeholderFontSize);
                font-style: var(--select-placeholderFontStyle);
                font-weight: var(--select-placeholderFontWeight);
                color: ${inputs.disabled
                  ? "var(--select-disabledColor)"
                  : "var(--select-placeholderFontColor)"};
              }
            }
          }
          .inputClear {
            height: 24px;
            max-width: 24px;
            padding: 3px;
            font-size: 1rem;
            font-family: var(--select-fontFamily);
            border: 2px solid transparent;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: transparent;
            color: #000000;
            &:hover {
              background-color: var(--newInputText-hoverActionBackgroundColor);
              color: var(--newInputText-hoverActionIconColor);
            }
            &:focus {
              color: var(--newInputText-focusActionIconColor);
              border: 2px solid var(--newInputText-focusActionBorderColor);
              outline: none;
            }
            &:focus-visible {
              border: 2px solid var(--newInputText-focusActionBorderColor);
              outline: none;
            }
            &:active {
              border: 2px solid var(--newInputText-focusActionBorderColor);
              box-shadow: inset 0 0 0 1px
                var(--newInputText-activeActionBackgroundColor);
              outline: none;
              background-color: var(--newInputText-activeActionBackgroundColor);
              color: var(--newInputText-activeActionIconColor);
            }
            svg {
              line-height: 18px;
            }
          }
        }
      }
      .options {
        left: 0;
        margin-top: 4px;
        top: 100%;
        overflow: auto;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        background: var(--select-optionListBackgroundColor) 0% 0% no-repeat
          padding-box;
        border: 1px solid var(--select-optionListBorderColor);
        border-radius: 4px;
        opacity: 1;
        width: inherit;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 4px 0px;
        position: absolute;
        z-index: 100;
        max-height: 312px;
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
              height: 32px;
              display: flex;
              align-items: center;
              font-family: var(--select-fontFamily);
              font-size: var(--select-listItemFontSize);
              font-style: var(--select-listItemFontStyle);
              font-weight: var(--select-listGroupItemFontWeight);
              color: var(--select-listItemFontColor);
            }
            .optionLabel {
              padding: 2px 14px;
            }
          }
          &.lastItem .optionsGroup li.lastItemGroup,
          &.lastItem > dxc-select-option {
            .optionLabel {
              border-bottom: none;
            }
          }
          &.resultsNotFound {
            width: 100%;
            display: flex;
            align-items: center;
            height: 28px;
            flex-direction: row;
            padding: 0px 16px;
            box-sizing: border-box;
            .notFoundIcon {
              height: 100%;
              align-items: center;
              width: 24px;
              justify-content: center;
              margin-right: 4px;
              display: flex;
              svg {
                fill: #666666;
                height: 18px;
                width: 18px;
              }
            }
            span {
              color: #666666;
            }
          }
          .optionalContainer {
            width: 100%;
            height: 100%;
            :hover {
              background-color: #f2f2f2;
              cursor: pointer;
            }
            .optionalLabel {
              width: 100%;
              height: 32px;
              flex-direction: row;
              margin-left: 16px;
              margin-right: 16px;
              padding-top: 4px;
              padding-bottom: 4px;
              box-sizing: border-box;
              border-bottom: 1px solid var(--select-listItemDividerColor);
              display: flex;
              align-items: center;
            }
          }
        }
      }
      .inputLabel {
        font-family: var(--select-fontFamily);
        font-size: var(--select-labelFontSize);
        font-style: var(--select-labelFontStyle);
        font-weight: var(--select-labelFontWeight);
        color: ${inputs.disabled
          ? "var(--select-disabledColor)"
          : "var(--select-labelFontColor)"};
        line-height: var(--select-labelLineHeight);
      }
      .optional {
        font-family: var(--select-fontFamily);
        font-size: var(--select-labelFontSize);
        font-style: var(--select-labelFontStyle);
        font-weight: 400;
        color: ${inputs.disabled
          ? "var(--select-disabledColor)"
          : "var(--select-labelFontColor)"};
        line-height: var(--select-labelLineHeight);
      }
      .helperText {
        font-family: var(--select-fontFamily);
        font-size: var(--select-helperTextFontSize);
        font-style: var(--select-helperTextFontStyle);
        font-weight: var(--select-helperTextFontWeight);
        color: ${inputs.disabled
          ? "var(--select-disabledColor)"
          : "var(--select-helperTextFontColor)"};
        line-height: var(--select-helperTextLineHeight);
      }
      .errorMessage {
        font-family: var(--select-fontFamily);
        font-size: var(--select-errorMessageFontSize);
        font-style: var(--select-errorMessagetFontStyle);
        font-weight: var(--select-errorMessageFontWeight);
        color: ${inputs.disabled
          ? "var(--select-disabledColor)"
          : "var(--select-errorColor)"};
        line-height: var(--select-errorMessagetLineHeight);
      }
    `;
  }
}
