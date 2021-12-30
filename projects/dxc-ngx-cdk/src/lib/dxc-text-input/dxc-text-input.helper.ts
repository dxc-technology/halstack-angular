import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
@Injectable()
export class DxcTextInputHelper {
  sizes = {
    small: "240px",
    medium: "360px",
    large: "480px",
    fillParent: "100%",
  };

  constructor(private utils: CssUtils) {}
  debounced = (cb, time) => {
    const db = new Subject();
    const sub = db.pipe(debounceTime(time)).subscribe(cb);
    const func = (v) => db.next(v);
    func.unsubscribe = () => sub.unsubscribe();
    return func;
  };

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDisabledStyle() {
    return css`
      dxc-input-text-prefix {
        border-right: 1px solid var(--newInputText-disabledPrefixColor);
        color: var(--newInputText-disabledPrefixColor);
      }
      dxc-input-text-suffix {
        border-left: 1px solid var(--newInputText-disabledSuffixColor);
        color: var(--newInputText-disabledSuffixColor);
      }
      .inputLabel,
      .inputOptionalLabel {
        color: var(--newInputText-disabledLabelFontColor);
      }
      .helperText {
        color: var(--newInputText-disabledHelperTextFontColor);
      }
      .inputText {
        color: var(--newInputText-disabledValueFontColor);
      }
      .inputText::placeholder {
        color: var(--newInputText-disabledPlaceholderFontColor);
      }
      .inputAction {
        pointer-events: none;
        background-color: var(--newInputText-disabledActionBackgroundColor);
        color: var(--newInputText-disabledActionIconColor);
        fill: var(--newInputText-disabledActionIconColor);
      }
      .inputText,
      .inputAction {
        cursor: not-allowed;
      }
      .inputContainer,
      .inputContainer:hover {
        border: 1px solid var(--newInputText-disabledBorderColor);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--newInputText-disabledContainerFillColor);
      }
    `;
  }

  getDisabledDarkStyle() {
    return css`
      dxc-input-text-prefix {
        border-right: 1px solid var(--newInputText-disabledPrefixColorOnDark);
        color: var(--newInputText-disabledPrefixColorOnDark);
      }
      dxc-input-text-suffix {
        border-left: 1px solid var(--newInputText-disabledSuffixColorOnDark);
        color: var(--newInputText-disabledSuffixColorOnDark);
      }
      .inputLabel,
      .inputOptionalLabel {
        color: var(--newInputText-disabledLabelFontColorOnDark);
      }
      .helperText {
        color: var(--newInputText-disabledHelperTextFontColorOnDark);
      }
      .inputText {
        color: var(--newInputText-disabledValueFontColorOnDark);
      }
      .inputText::placeholder {
        color: var(--newInputText-disabledPlaceholderFontColorOnDark);
      }
      .inputAction {
        pointer-events: none;
        background-color: var(--newInputText-disabledActionBackgroundColorOnDark);
        color: var(--newInputText-disabledActionIconColorOnDark);
        fill: var(--newInputText-disabledActionIconColorOnDark);
      }
      .inputText,
      .inputAction {
        cursor: not-allowed;
      }
      .inputContainer,
      .inputContainer:hover {
        border: 1px solid var(--newInputText-disabledBorderColorOnDark);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--newInputText-disabledContainerFillColorOnDark);
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      ${this.utils.getMargins(inputs.margin)}
      ${this.calculateWidth(inputs)}

      &.hasError {
        .inputContainer {
          border: 1px solid var(--newInputText-errorBorderColor);
          box-shadow: inset 0 0 0 1px var(--newInputText-errorBorderColor);
          &:hover {
            border-color: var(--newInputText-hoverErrorBorderColor);
            box-shadow: inset 0 0 0 1px var(--newInputText-hoverErrorBorderColor);
          }
        }
      }

      dxc-text-input-action{
        div {
          width: 24px;
          height: 24px;
        }
        svg{
          width: 18px !important;
          height: 100%;
        }
      }

      dxc-input-text-prefix, dxc-input-text-suffix{
        height: calc(1rem * 1.5);
        line-height: calc(1rem * 1.5);
        font-family: var(--newInputText-fontFamily);
        pointer-events: none;
      }

      dxc-input-text-suffix{
        border-left: 1px solid var(--newInputText-suffixColor);
        margin-right: calc(1rem * 0.5);
        margin-left: calc(1rem * 0.25);
        padding: 0 0 0 calc(1rem * 0.5);
        color: var(--newInputText-suffixColor);
        font-size: var(--newInputText-suffixFontSize);
        font-style: var(--newInputText-suffixFontStyle);
        font-weight: var(--newInputText-suffixFontWeight);
      }

      dxc-input-text-prefix{
        border-right: 1px solid var(--newInputText-prefixColor);
        margin-left: calc(1rem * 0.25);
        padding: 0 calc(1rem * 0.5) 0 0;
        color: var(--newInputText-prefixColor);
        font-size: var(--newInputText-prefixFontSize);
        font-style: var(--newInputText-prefixFontStyle);
        font-weight: var(--newInputText-prefixFontWeight);
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
        color: var(--newInputText-labelFontColor);
        font-family: var(--newInputText-fontFamily);
        font-size: var(--newInputText-labelFontSize);
        font-style: var(--newInputText-labelFontStyle);
        font-weight: var(--newInputText-labelFontWeight);
        line-height: var(--newInputText-labelLineHeight);
        min-height: 24px;
      }
      .inputOptionalLabel {
        font-weight: var(--newInputText-optionalLabelFontWeight);
      }

      .helperText {
        color: var(--newInputText-helperTextFontColor);
        font-family: var(--newInputText-fontFamily);
        font-size: var(--newInputText-helperTextFontSize);
        font-style: var(--newInputText-helperTextFontStyle);
        font-weight: var(--newInputText-helperTextFontWeight);
        line-height: var(--newInputText-helperTextLineHeight);
        min-height: 18px;
      }

      .inputContainer {
        position: relative;
        display: flex;
        align-items: center;
        height: 38px;
        border: ${
          inputs.error
            ? `1px solid var(--newInputText-errorBorderColor)`
            : "1px solid var(--newInputText-enabledBorderColor)"
        };
        ${
          inputs.error
            ? `box-shadow: inset 0 0 0 1px var(--newInputText-errorBorderColor);`
            : ""
        };
        border-radius: 4px;
        padding: 0 calc(1rem * 0.5);
        &:hover {
          ${
            inputs.error
              ? `border-color: var(--newInputText-hoverErrorBorderColor);
                 box-shadow: inset 0 0 0 1px var(--newInputText-hoverErrorBorderColor);`
              : `border-color: var(--newInputText-hoverBorderColor);`
          };
        }
        &:focus-within {
          border: 1px solid var(--newInputText-focusBorderColor);
          box-shadow: inset 0 0 0 1px var(--newInputText-focusBorderColor);
        }
      }

      .inputText {
        height: calc(100% - 2px);
        width: 100%;
        background: none;
        border: none;
        outline: none;
        padding: 0 calc(1rem * 0.5);
        color: var(--newInputText-valueFontColor);
        font-family: var(--newInputText-fontFamily);
        font-size: var(--newInputText-valueFontSize);
        font-style: var(--newInputText-valueFontStyle);
        font-weight: var(--newInputText-valueFontWeight);
        caret-color: var(--newInputText-valueFontColor);
        &::placeholder {
          color: var(--newInputText-placeholderFontColor);
        }

      }

      .inputAction {
        height: 24px;
        max-width: 24px;
        padding: 3px;
        font-size: 1rem;
        font-family: var(--newInputText-fontFamily);
        border: 1px solid var(--newInputText-actionBackgroundColor);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--newInputText-actionBackgroundColor);
        color: var(--newInputText-actionIconColor);
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
          box-shadow: inset 0 0 0 1px var(--newInputText-activeActionBackgroundColor);
          outline: none;
          background-color: var(--newInputText-activeActionBackgroundColor);
          color: var(--newInputText-activeActionIconColor);
        }
        svg {
          line-height: 18px;
        }
      }
      .inputErrorIcon {
        height: 18px;
        width: 18px;
        margin-right: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        color: var(--newInputText-errorIconColor);
        svg {
          line-height: 18px;
          height: 18px;
          width: 18px;
        }
      }
      .inputErrorMessage {
        font-family: var(--newInputText-fontFamily);
        color: var(--newInputText-errorMessageColor);
        font-size: var(--newInputText-errorFontSize);
        font-style: var(--newInputText-errorFontStyle);
        font-weight: var(--newInputText-errorFontWeight);
        line-height: 1.5em;
        min-height: 18px;
      }

      dxc-text-input-action {
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
          color: var(--newInputText-listOptionFontColor);
          font-family: var(--newInputText-listOptionFontFamily);
          font-size: var(--newInputText-listOptionFontSize);
          font-weight: var(--newInputText-listOptionFontWeight);
          line-height: 1.75em;
          padding-top: calc((39px - 1.75em) / 2);
          padding-bottom: calc((39px - 1.75em) / 2);
          padding-left: 1em;
          cursor: pointer;
          &.selected {
            background-color: var(--newInputText-hoverListOptionBackgroundColor);
          }
          &.active.selected {
            background-color: var(--newInputText-activeListOptionBackgroundColor);
          }
          b{
            font-weight: var(--newInputText-listOptionTypedFontWeight);
          }
          &.systemMessage{
            color: var(--newInputText-systemMessageFontColor);
            font-family: var(--newInputText-systemMessageFontFamily);
            font-size: var(--newInputText-systemMessageFontSize);
            font-weight: var(--newInputText-systemMessageFontWeight);
          }
        }

        &.fetchingError{
          border: 1px solid var(--newInputText-errorMessageBorderColor);
          li{
            font-family: var(--newInputText-errorMessageFontFamily);
            font-size: var(--newInputText-errorMessageFontSize);
            font-weight: var(--newInputText-errorMessageFontWeight);
            align-items: center;
            display: flex;
            background-color: var(--newInputText-errorMessageBackgroundColor);
            svg{
              height: 18px;
              width: 18px;
              fill: var(--newInputText-errorIconColor);
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
      dxc-input-text-prefix {
        border-right: 1px solid var(--newInputText-prefixColorOnDark);
        color: var(--newInputText-prefixColorOnDark);
      }
      dxc-input-text-suffix {
        border-left: 1px solid var(--newInputText-suffixColorOnDark);
        color: var(--newInputText-suffixColorOnDark);
      }
      .inputLabel,
      .inputOptionalLabel {
        color: var(--newInputText-labelFontColorOnDark);
      }
      .helperText {
        color: var(--newInputText-helperTextFontColorOnDark);
      }
      .inputText {
        color: var(--newInputText-valueFontColorOnDark);
        caret-color: var(--newInputText-valueFontColorOnDark);
        &::placeholder {
          color: var(--newInputText-placeholderFontColorOnDark);
        }
      }
      .inputContainer {
        border: ${inputs.error
          ? `1px solid var(--newInputText-errorBorderColorOnDark)`
          : "1px solid var(--newInputText-enabledBorderColorOnDark)"};
        ${inputs.error
          ? `box-shadow: inset 0 0 0 1px var(--newInputText-errorBorderColorOnDark);`
          : ""};
        &:hover {
          ${inputs.error
            ? `border-color: var(--newInputText-hoverErrorBorderColorOnDark);
                   box-shadow: inset 0 0 0 1px var(--newInputText-hoverErrorBorderColorOnDark);`
            : `border-color: var(--newInputText-hoverBorderColorOnDark);`};
        }
        &:focus-within {
          border: 1px solid var(--newInputText-focusBorderColorOnDark);
          box-shadow: inset 0 0 0 1px var(--newInputText-focusBorderColorOnDark);
        }
      }
      .inputAction {
        border: 1px solid var(--newInputText-actionBackgroundColorOnDark);
        background-color: var(--newInputText-actionBackgroundColorOnDark);
        color: var(--newInputText-actionIconColorOnDark);
        &:hover {
          color: var(--newInputText-hoverActionIconColorOnDark);
          background-color: var(--newInputText-hoverActionBackgroundColorOnDark);
        }
        &:focus {
          color: var(--newInputText-focusActionIconColorOnDark);
          border: 2px solid var(--newInputText-focusActionBorderColorOnDark);
        }
        &:focus-visible {
          color: var(--newInputText-focusActionIconColorOnDark);
          border: 2px solid var(--newInputText-focusActionBorderColorOnDark);
        }
        &:active {
          border: 2px solid var(--newInputText-focusActionBorderColorOnDark);
          box-shadow: inset 0 0 0 1px
            var(--newInputText-activeActionBackgroundColorOnDark);
          background-color: var(--newInputText-activeActionBackgroundColorOnDark);
          color: var(--newInputText-activeActionIconColorOnDark);
        }
      }
      .inputErrorIcon {
        color: var(--newInputText-errorIconColorOnDark);
      }
      .inputErrorMessage {
        color: var(--newInputText-errorMessageColorOnDark);
      }
    `;
  }
}
