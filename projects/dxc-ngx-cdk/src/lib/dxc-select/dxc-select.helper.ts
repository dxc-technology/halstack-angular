import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";

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
        background: ${inputs.disabled
          ? "var(--select-disabledInputBackgroundColor) 0% 0% no-repeat padding-box"
          : "#ffffff 0% 0% no-repeat padding-box"};
        border: 1px solid
          ${inputs.disabled
            ? "var(--select-disabledInputBorderColor)"
            : inputs.error
            ? "transparent"
            : "var(--select-enabledInputBorderColor)"};
        ${inputs.error && !inputs.disabled
          ? "box-shadow: 0 0 0 2px var(--select-errorInputBorderColor);"
          : ""}
        border-radius: 0.25rem;
        opacity: 1;
        width: 100%;
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
            ? "border: 1px solid var(--select-hoverInputBorderColor);"
            : ""}
        }
        :focus-within {
          ${!inputs.disabled
            ? "border: 1px solid transparent; box-shadow: 0 0 0 2px var(--select-focusInputBorderColor);"
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
              background: var(--select-selectionIndicatorBackgroundColor) 0% 0%
                no-repeat padding-box;
              display: flex;
              justify-content: center;
              text-align: left;
              font: normal normal 600 11px/15px Open Sans;
              letter-spacing: 0.98px;
              color: var(--select-selectionIndicatorFontColor);
              border-bottom-left-radius: 0.125rem;
              border-top-left-radius: 0.125rem;
              align-items: center;
              border-left: 1px solid var(--select-selectionIndicatorBorderColor);
              border-top: 1px solid var(--select-selectionIndicatorBorderColor);
              border-bottom: 1px solid var(--select-selectionIndicatorBorderColor);
            }
            .removeContainer {
              width: 24px;
              height: 22px;
              background: var(--select-enabledSelectionIndicatorActionBackgroundColor) 0% 0% no-repeat padding-box;
              border: 1px solid var(--select-selectionIndicatorBorderColor);
              display: flex;
              justify-content: center;
              text-align: left;
              font: normal normal 600 11px/15px Open Sans;
              letter-spacing: 0.98px;
              color: var(--select-selectionIndicatorFontColor);
              border-bottom-right-radius: 0.125rem;
              border-top-right-radius: 0.125rem;
              align-items: center;
              outline: none;
              svg {
                height: 16px;
                width: 16px;
                fill: var(--select-enabledSelectionIndicatorActionIconColor);
              }
              &:hover {
                background: var(--select-hoverSelectionIndicatorActionBackgroundColor);
                svg {
                  fill: var(--select-hoverSelectionIndicatorActionIconColor);
                }
              }
              &:active {
                background: var(--select-activeSelectionIndicatorActionBackgroundColor);
                svg {
                  fill: var(--select-activeSelectionIndicatorActionIconColor);
                }
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
            color: var(--select-errorIconColor);
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
              line-height:var(--select-valueLineHeight);
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
            background-color: var(--select-actionBackgroundColor);
            color: var(--select-actionIconColor);
            &:hover {
              background-color: var(--select-hoverActionBackgroundColor);
              color: var(--select-hoverActionIconColor);
            }
            &:active {
              background-color: var(--select-activeActionBackgroundColor);
              color: var(--select-activeActionIconColor);
            }
            svg {
              line-height: 18px;
            }
          }
        }
      }
      .options {
        left: 0;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        top: 100%;
        overflow: auto;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        background: var(--select-listDialogBackgroundColor) 0% 0% no-repeat
          padding-box;
        border: 1px solid var(--select-listDialogBorderColor);
        border-radius: 4px;
        opacity: 1;
        width: inherit;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0px;
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
            .groupLabelElement {
              padding-left: 16px;
              text-align: left;
              height: 32px;
              display: flex;
              align-items: center;
              font-family: var(--select-fontFamily);
              font-size: var(--select-listItemFontSize);
              font-style: var(--select-listItemFontStyle);
              font-weight: var(--select-listGroupItemFontWeight);
              color: var(--select-listOptionFontColor);
            }
            .optionLabel {
              padding: 2px 0px 2px 14px;
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
            cursor: default;
            .notFoundIcon {
              height: 100%;
              align-items: center;
              width: 24px;
              justify-content: center;
              margin-right: 4px;
              display: flex;
              svg {
                fill: var(--select-systemMessageFontColor);
                height: 18px;
                width: 18px;
              }
            }
            span.systemMessage {
              color: var(--select-systemMessageFontColor);
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
        font-weight: var(--select-optionalLabelFontWeight);
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
          : "var(--select-errorMessageColor)"};
        line-height: var(--select-errorMessagetLineHeight);
      }
    `;
  }
}
