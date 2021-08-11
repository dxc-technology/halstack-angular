import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
@Injectable()
export class DxcNewInputTextHelper {
  constructor(private utils: CssUtils) {}
  debounced = (cb, time) => {
    const db = new Subject();
    const sub = db.pipe(debounceTime(time)).subscribe(cb);
    const func = (v) => db.next(v);
    func.unsubscribe = () => sub.unsubscribe();
    return func;
  };

  getDisabledStyle() {
    return css`
      .inputLabel,
      .inputOptionalLabel {
        color: var(--input-disabledLabelColor);
      }
      .helperText {
        color: var(--input-disabledHelperTextFontColor);
      }
      .inputText {
        color: var(--input-disabledValueFontColor);
      }
      .inputText::placeholder {
        color: var(--input-disabledPlaceholderFontColor);
      }
      .inputSuffix {
        border-left: 1px solid var(--input-disabledSuffixColor);
        color: var(--input-disabledSuffixColor);
      }
      .inputPrefix {
        border-right: 1px solid var(--input-disabledPrefixColor);
        color: var(--input-disabledPrefixColor);
      }
      .inputAction {
        pointer-events: none;
        color: var(--input-disabledActionColor);
        fill: var(--input-disabledActionColor);
      }
      .inputText,
      .inputAction {
        cursor: not-allowed;
      }
      .inputContainer,
      .inputContainer:hover {
        border: 1px solid var(--input-disabledOutlineColor);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--input-disabledContainerFillColor);
      }
    `;
  }

  getDisabledDarkStyle() {
    return css`
      .inputLabel,
      .inputOptionalLabel {
        color: var(--input-disabledLabelColorOnDark);
      }
      .helperText {
        color: var(--input-disabledHelperTextFontColorOnDark);
      }
      .inputText {
        color: var(--input-disabledValueFontColorOnDark);
      }
      .inputText::placeholder {
        color: var(--input-disabledPlaceholderFontColorOnDark);
      }
      .inputSuffix {
        border-left: 1px solid var(--input-disabledSuffixColorOnDark);
        color: var(--input-disabledSuffixColorOnDark);
      }
      .inputPrefix {
        border-right: 1px solid var(--input-disabledPrefixColorOnDark);
        color: var(--input-disabledPrefixColorOnDark);
      }
      .inputAction {
        pointer-events: none;
        color: var(--input-disabledActionColorOnDark);
        fill: var(--input-disabledActionColorOnDark);
      }
      .inputText,
      .inputAction {
        cursor: not-allowed;
      }
      .inputContainer,
      .inputContainer:hover {
        border: 1px solid var(--input-disabledOutlineColorOnDark);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--input-disabledContainerFillColorOnDark);
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      ${this.utils.getMargins(inputs.margin)}

      dxc-new-input-text-action{
        div {
          width: 24px;
          height: 24px;
        }
        svg{
          width: 18px !important;
          height: 100%;
        }
      }

      .overlay:not(.overlayVisible) {
        display: none;
      }
      .overlay.overlayVisible {
        display: block;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index
      }
      .inputLabel, .inputOptionalLabel {
        color: var(--input-labelFontColor);
        font-family: var(--input-fontFamily);
        font-size: var(--input-labelFontSize);
        font-style: var(--input-labelFontStyle);
        font-weight: var(--input-labelFontWeight);
        line-height: 1.75em;
        height: 24px;
      }
      .inputOptionalLabel {
        font-weight: var(--input-optionalLabelFontWeight);
      }

      .helperText {
        color: var(--input-helperTextFontColor);
        font-family: var(--input-fontFamily);
        font-size: var(--input-helperTextFontSize);
        font-style: var(--input-helperTextFontStyle);
        font-weight: var(--input-helperTextFontWeight);
        line-height: 1.5em;
        height: 18px;
      }

      .inputContainer {
        position: relative;
        display: flex;
        align-items: center;
        height: 38px;
        border: ${
          inputs.error
            ? `1px solid var(--input-errorOutlineColor)`
            : "1px solid var(--input-enabledOutlineColor)"
        };
        ${
          inputs.error
            ? `box-shadow: inset 0 0 0 1px var(--input-errorOutlineColor);`
            : ""
        };
        border-radius: 4px;
        margin: 4px 0;
        padding-right: 12px;
        ${inputs.prefix ? `padding-left: 12px;` : ""};
        &:hover {
          border-color: var(--input-hoverOutlineColor);
          box-shadow: none;
        }
        &:focus-within {
          border: 1px solid var(--input-focusOutlineColor);
          box-shadow: inset 0 0 0 1px var(--input-focusOutlineColor);
        }
      }

      .inputText {
        height: calc(100% - 2px);
        width: 100%;
        background: none;
        border: none;
        outline: none;
        padding-left: 16px;
        color: var(--input-valueFontColor);
        font-family: var(--input-fontFamily);
        font-size: var(--input-valueFontSize);
        font-style: var(--input-valueFontStyle);
        font-weight: var(--input-valueFontWeight);
        caret-color: var(--input-valueFontColor);
        &::placeholder {
          color: var(--input-placeholderFontColor);
        }
      }

      .inputAction {
        height: 24px;
        max-width: 24px;
        margin-left: 4px;
        font-size: 1rem;
        font-family: var(--input-fontFamily);
        border: 1px solid transparent;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: transparent;
        padding: 0;
        color: var(--input-valueFontColor);
        &:hover {
          background-color: var(--input-hoverActionBackgroundColor);
        }
        &:focus {
          border: 1px solid var(--input-focusActionBackgroundColor);
          box-shadow: inset 0 0 0 1px var(--input-focusActionBackgroundColor);
          outline: none;
        }
        &:focus-visible {
          border: 1px solid var(--input-focusActionBackgroundColor);
          box-shadow: inset 0 0 0 1px var(--input-focusActionBackgroundColor);
          outline: none;
        }
        &:active {
          border: 1px solid var(--input-activeActionBackgroundColor);
          box-shadow: inset 0 0 0 1px var(--input-activeActionBackgroundColor);
          outline: none;
          background-color: var(--input-activeActionBackgroundColor);
        }
        svg {
          line-height: 18px;
          width: 100%;
          height: 100%;
        }
      }
      .inputErrorIcon {
        height: 18px;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        color: var(--input-errorIconColor);
        padding-left: 4px;
        svg {
          font-size: 1.25rem;
          line-height: 22px;
          height: 18px;
          width: 18px;
        }
      }

      .inputPrefix,
      .inputSuffix {
        height: calc(1rem * 1.5);
        line-height: calc(1rem * 1.5);
        font-family: var(--input-fontFamily);
        pointer-events: none;
      }
      .inputPrefix {
        border-right: 1px solid var(--input-prefixLabelColor);
        padding: 0 calc(1rem * 0.5) 0 0;
        color: var(--input-prefixLabelColor);
        font-size: var(--input-prefixFontSize);
        font-style: var(--input-prefixFontStyle);
        font-weight: var(--input-prefixFontWeight);
      }
      .inputSuffix {
        border-left: 1px solid var(--input-suffixLabelColor);
        margin-left: 4px;
        padding: 0 0 0 calc(1rem * 0.5);
        color: var(--input-suffixLabelColor);
        font-size: var(--input-suffixFontSize);
        font-style: var(--input-suffixFontStyle);
        font-weight: var(--input-suffixFontWeight);
      }
      .inputErrorMessage {
        font-family: var(--input-fontFamily);
        color: var(--input-errorMessageColor);
        font-size: var(--input-errorFontSize);
        font-style: var(--input-errorFontStyle);
        font-weight: var(--input-errorFontWeight);
        line-height: 1.5em;
        height: 18px;
      }

      dxc-new-input-text-action {
        display: flex;
      }
      .options {
        display: none;
        &.visible {
          display: block;
        }
        position: absolute;
        left: 0;
        top: calc(100% + 4px);
        background-color: white;
        box-sizing: border-box;
        border: 1px solid #707070;
        border-radius: 4px;
        width: 100%;
        z-index: 1;
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: auto;
        overflow-x: hidden;
        max-height: 160px;
        li {
          font-family: var(--input-fontFamily);
          font-size: var(--input-inputFontSize);
          font-style: var(--input-inputFontStyle);
          font-weight: var(--input-inputFontWeight);
          line-height: 1.75em;

          padding-top: calc((39px - 1.75em) / 2);
          padding-bottom: calc((39px - 1.75em) / 2);
          padding-left: 1em;

          cursor: pointer;
          &.selected {
            background-color: #f2f2f2;
          }
          &.active.selected {
            background-color: #cccccc;
          }
        }

        &.fetchingError{
          border: 1px solid var(--input-errorOutlineColor);
          li{
            align-items: center;
            display: flex;
            background-color: #FFE3E6;
            svg{
              height: 18px;
              width: 18px;
              fill: var(--input-errorIconColor);
            }
            span{
              margin-left: 8px;
            }
          }
        }

        &::-webkit-scrollbar {
          width: 3px;
        }
        &::-webkit-scrollbar-track {
          background-color: var(--inputText-scrollBarTrackColor);
          opacity: 0.34;
          border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: var(--inputText-scrollBarThumbColor);
          border-radius: 3px;
        }
      }

      ${inputs.darkBackground ? this.getDarkStyle(inputs) : ""}
      
      ${
        inputs.disabled
          ? inputs.darkBackground
            ? this.getDisabledDarkStyle()
            : this.getDisabledStyle()
          : ""
      }
    `;
  }

  getDarkStyle(inputs) {
    return css`
      .inputLabel,
      .inputOptionalLabel {
        color: var(--input-labelFontColorOnDark);
      }
      .helperText {
        color: var(--input-helperTextFontColorOnDark);
      }
      .inputText {
        color: var(--input-valueFontColorOnDark);
        caret-color: var(--input-valueFontColorOnDark);
        &::placeholder {
          color: var(--input-placeholderFontColorOnDark);
        }
      }
      .inputContainer{
        border: ${
          inputs.error
            ? `1px solid var(--input-errorOutlineColorOnDark)`
            : "1px solid var(--input-enabledOutlineColorOnDark)"
        };
        ${
          inputs.error
            ? `box-shadow: inset 0 0 0 1px var(--input-errorOutlineColorOnDark);`
            : ""
        };
        &:hover {
          border-color: var(--input-hoverOutlineColorOnDark);
        }
        &:focus-within {
          border: 1px solid var(--input-focusOutlineColorOnDark);
          box-shadow: inset 0 0 0 1px var(--input-focusOutlineColorOnDark);
        }
      }
      .inputAction {
        color: var(--input-valueFontColorOnDark);
        &:hover {
          background-color: var(--input-hoverActionBackgroundColorOnDark);
        }
        &:focus {
          border: 1px solid var(--input-focusActionBackgroundColorOnDark);
          box-shadow: inset 0 0 0 1px var(--input-focusActionBackgroundColorOnDark);
        }
        &:focus-visible {
          border: 1px solid var(--input-focusActionBackgroundColorOnDark);
          box-shadow: inset 0 0 0 1px var(--input-focusActionBackgroundColorOnDark);
        }
        &:active {
          border: 1px solid var(--input-activeActionBackgroundColorOnDark);
          box-shadow: inset 0 0 0 1px var(--input-activeActionBackgroundColorOnDark);
          background-color: var(--input-activeActionBackgroundColorOnDark);
        }
      }
      .inputPrefix {
        border-right: 1px solid var(--input-prefixLabelColorOnDark);
        color: var(--input-prefixLabelColorOnDark);
      }
      .inputSuffix {
        border-left: 1px solid var(--input-suffixLabelColorOnDark);
        color: var(--input-suffixLabelColorOnDark);
      }
      .inputErrorIcon {
        color: var(--input-errorIconColorOnDark);
      }
      .inputErrorMessage {
        color: var(--input-errorMessageColorOnDark);
      }
    `;
  }
}
