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
      dxc-text-input-prefix {
        border-right: 1px solid var(--textInput-disabledPrefixColor);
        color: var(--textInput-disabledPrefixColor);
      }
      dxc-text-input-suffix {
        border-left: 1px solid var(--textInput-disabledSuffixColor);
        color: var(--textInput-disabledSuffixColor);
      }
      .inputLabel,
      .inputOptionalLabel {
        color: var(--textInput-disabledLabelFontColor);
      }
      .helperText {
        color: var(--textInput-disabledHelperTextFontColor);
      }
      .inputText {
        color: var(--textInput-disabledValueFontColor);
      }
      .inputText::placeholder {
        color: var(--textInput-disabledPlaceholderFontColor);
      }
      .inputAction {
        pointer-events: none;
        background-color: var(--textInput-disabledActionBackgroundColor);
        color: var(--textInput-disabledActionIconColor);
        fill: var(--textInput-disabledActionIconColor);
      }
      .inputText,
      .inputAction {
        cursor: not-allowed;
      }
      .inputContainer,
      .inputContainer:hover {
        border: 1px solid var(--textInput-disabledBorderColor);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--textInput-disabledContainerFillColor);
      }
    `;
  }

  getDisabledDarkStyle() {
    return css`
      dxc-text-input-prefix {
        border-right: 1px solid var(--textInput-disabledPrefixColorOnDark);
        color: var(--textInput-disabledPrefixColorOnDark);
      }
      dxc-text-input-suffix {
        border-left: 1px solid var(--textInput-disabledSuffixColorOnDark);
        color: var(--textInput-disabledSuffixColorOnDark);
      }
      .inputLabel,
      .inputOptionalLabel {
        color: var(--textInput-disabledLabelFontColorOnDark);
      }
      .helperText {
        color: var(--textInput-disabledHelperTextFontColorOnDark);
      }
      .inputText {
        color: var(--textInput-disabledValueFontColorOnDark);
      }
      .inputText::placeholder {
        color: var(--textInput-disabledPlaceholderFontColorOnDark);
      }
      .inputAction {
        pointer-events: none;
        background-color: var(--textInput-disabledActionBackgroundColorOnDark);
        color: var(--textInput-disabledActionIconColorOnDark);
        fill: var(--textInput-disabledActionIconColorOnDark);
      }
      .inputText,
      .inputAction {
        cursor: not-allowed;
      }
      .inputContainer,
      .inputContainer:hover {
        border: 1px solid var(--textInput-disabledBorderColorOnDark);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--textInput-disabledContainerFillColorOnDark);
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
          border: 1px solid var(--textInput-errorBorderColor);
          box-shadow: inset 0 0 0 1px var(--textInput-errorBorderColor);
          &:hover {
            border-color: var(--textInput-hoverErrorBorderColor);
            box-shadow: inset 0 0 0 1px var(--textInput-hoverErrorBorderColor);
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

      dxc-text-input-prefix, dxc-text-input-suffix{
        height: calc(1rem * 1.5);
        line-height: calc(1rem * 1.5);
        font-family: var(--textInput-fontFamily);
        pointer-events: none;
      }

      dxc-text-input-suffix{
        border-left: 1px solid var(--textInput-suffixColor);
        margin-right: calc(1rem * 0.5);
        margin-left: calc(1rem * 0.25);
        padding: 0 0 0 calc(1rem * 0.5);
        color: var(--textInput-suffixColor);
        font-size: var(--textInput-suffixFontSize);
        font-style: var(--textInput-suffixFontStyle);
        font-weight: var(--textInput-suffixFontWeight);
      }

      dxc-text-input-prefix{
        border-right: 1px solid var(--textInput-prefixColor);
        margin-left: calc(1rem * 0.25);
        padding: 0 calc(1rem * 0.5) 0 0;
        color: var(--textInput-prefixColor);
        font-size: var(--textInput-prefixFontSize);
        font-style: var(--textInput-prefixFontStyle);
        font-weight: var(--textInput-prefixFontWeight);
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
        color: var(--textInput-labelFontColor);
        font-family: var(--textInput-fontFamily);
        font-size: var(--textInput-labelFontSize);
        font-style: var(--textInput-labelFontStyle);
        font-weight: var(--textInput-labelFontWeight);
        line-height: var(--textInput-labelLineHeight);
        min-height: 24px;
      }
      .inputOptionalLabel {
        font-weight: var(--textInput-optionalLabelFontWeight);
      }

      .helperText {
        color: var(--textInput-helperTextFontColor);
        font-family: var(--textInput-fontFamily);
        font-size: var(--textInput-helperTextFontSize);
        font-style: var(--textInput-helperTextFontStyle);
        font-weight: var(--textInput-helperTextFontWeight);
        line-height: var(--textInput-helperTextLineHeight);
        min-height: 18px;
      }

      .inputContainer {
        position: relative;
        display: flex;
        align-items: center;
        height: 38px;
        border: ${
          inputs.error
            ? `1px solid var(--textInput-errorBorderColor)`
            : "1px solid var(--textInput-enabledBorderColor)"
        };
        ${
          inputs.error
            ? `box-shadow: inset 0 0 0 1px var(--textInput-errorBorderColor);`
            : ""
        };
        border-radius: 4px;
        padding: 0 calc(1rem * 0.5);
        &:hover {
          ${
            inputs.error
              ? `border-color: var(--textInput-hoverErrorBorderColor);
                 box-shadow: inset 0 0 0 1px var(--textInput-hoverErrorBorderColor);`
              : `border-color: var(--textInput-hoverBorderColor);`
          };
        }
        &:focus-within {
          border: 1px solid var(--textInput-focusBorderColor);
          box-shadow: inset 0 0 0 1px var(--textInput-focusBorderColor);
        }
      }

      .inputText {
        height: calc(100% - 2px);
        width: 100%;
        background: none;
        border: none;
        outline: none;
        padding: 0 calc(1rem * 0.5);
        color: var(--textInput-valueFontColor);
        font-family: var(--textInput-fontFamily);
        font-size: var(--textInput-valueFontSize);
        font-style: var(--textInput-valueFontStyle);
        font-weight: var(--textInput-valueFontWeight);
        caret-color: var(--textInput-valueFontColor);
        &::placeholder {
          color: var(--textInput-placeholderFontColor);
        }

      }

      .inputAction {
        height: 24px;
        max-width: 24px;
        padding: 3px;
        font-size: 1rem;
        font-family: var(--textInput-fontFamily);
        border: 1px solid var(--textInput-actionBackgroundColor);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--textInput-actionBackgroundColor);
        color: var(--textInput-actionIconColor);
        &:hover {
          background-color: var(--textInput-hoverActionBackgroundColor);
          color: var(--textInput-hoverActionIconColor);
        }
        &:focus {
          color: var(--textInput-focusActionIconColor);
          border: 2px solid var(--textInput-focusActionBorderColor);
          outline: none;
        }
        &:focus-visible {
          border: 2px solid var(--textInput-focusActionBorderColor);
          outline: none;
        }
        &:active {
          border: 2px solid var(--textInput-focusActionBorderColor);
          box-shadow: inset 0 0 0 1px var(--textInput-activeActionBackgroundColor);
          outline: none;
          background-color: var(--textInput-activeActionBackgroundColor);
          color: var(--textInput-activeActionIconColor);
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
        color: var(--textInput-errorIconColor);
        svg {
          line-height: 18px;
          height: 18px;
          width: 18px;
        }
      }
      .inputErrorMessage {
        font-family: var(--textInput-fontFamily);
        color: var(--textInput-errorMessageColor);
        font-size: var(--textInput-errorFontSize);
        font-style: var(--textInput-errorFontStyle);
        font-weight: var(--textInput-errorFontWeight);
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
          color: var(--textInput-listOptionFontColor);
          font-family: var(--textInput-listOptionFontFamily);
          font-size: var(--textInput-listOptionFontSize);
          font-weight: var(--textInput-listOptionFontWeight);
          line-height: 1.75em;
          padding-top: calc((39px - 1.75em) / 2);
          padding-bottom: calc((39px - 1.75em) / 2);
          padding-left: 1em;
          cursor: pointer;
          :hover{
            background-color: var(--textInput-hoverListOptionBackgroundColor);
          }
          &.focused {
            box-shadow: inset 0 0 0 2px #0095ff;
          }
          &.active.focused {
            background-color: var(--textInput-activeListOptionBackgroundColor);
          }
          b{
            font-weight: var(--textInput-listOptionTypedFontWeight);
          }
          &.systemMessage{
            color: var(--textInput-systemMessageFontColor);
            font-family: var(--textInput-systemMessageFontFamily);
            font-size: var(--textInput-systemMessageFontSize);
            font-weight: var(--textInput-systemMessageFontWeight);
          }
        }

        &.fetchingError{
          border: 1px solid var(--textInput-errorMessageBorderColor);
          li{
            font-family: var(--textInput-errorMessageFontFamily);
            font-size: var(--textInput-errorMessageFontSize);
            font-weight: var(--textInput-errorMessageFontWeight);
            align-items: center;
            display: flex;
            background-color: var(--textInput-errorMessageBackgroundColor);
            svg{
              height: 18px;
              width: 18px;
              fill: var(--textInput-errorIconColor);
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
      dxc-text-input-prefix {
        border-right: 1px solid var(--textInput-prefixColorOnDark);
        color: var(--textInput-prefixColorOnDark);
      }
      dxc-text-input-suffix {
        border-left: 1px solid var(--textInput-suffixColorOnDark);
        color: var(--textInput-suffixColorOnDark);
      }
      .inputLabel,
      .inputOptionalLabel {
        color: var(--textInput-labelFontColorOnDark);
      }
      .helperText {
        color: var(--textInput-helperTextFontColorOnDark);
      }
      .inputText {
        color: var(--textInput-valueFontColorOnDark);
        caret-color: var(--textInput-valueFontColorOnDark);
        &::placeholder {
          color: var(--textInput-placeholderFontColorOnDark);
        }
      }
      .inputContainer {
        border: ${inputs.error
          ? `1px solid var(--textInput-errorBorderColorOnDark)`
          : "1px solid var(--textInput-enabledBorderColorOnDark)"};
        ${inputs.error
          ? `box-shadow: inset 0 0 0 1px var(--textInput-errorBorderColorOnDark);`
          : ""};
        &:hover {
          ${inputs.error
            ? `border-color: var(--textInput-hoverErrorBorderColorOnDark);
                   box-shadow: inset 0 0 0 1px var(--textInput-hoverErrorBorderColorOnDark);`
            : `border-color: var(--textInput-hoverBorderColorOnDark);`};
        }
        &:focus-within {
          border: 1px solid var(--textInput-focusBorderColorOnDark);
          box-shadow: inset 0 0 0 1px var(--textInput-focusBorderColorOnDark);
        }
      }
      .inputAction {
        border: 1px solid var(--textInput-actionBackgroundColorOnDark);
        background-color: var(--textInput-actionBackgroundColorOnDark);
        color: var(--textInput-actionIconColorOnDark);
        &:hover {
          color: var(--textInput-hoverActionIconColorOnDark);
          background-color: var(--textInput-hoverActionBackgroundColorOnDark);
        }
        &:focus {
          color: var(--textInput-focusActionIconColorOnDark);
          border: 2px solid var(--textInput-focusActionBorderColorOnDark);
        }
        &:focus-visible {
          color: var(--textInput-focusActionIconColorOnDark);
          border: 2px solid var(--textInput-focusActionBorderColorOnDark);
        }
        &:active {
          border: 2px solid var(--textInput-focusActionBorderColorOnDark);
          box-shadow: inset 0 0 0 1px
            var(--textInput-activeActionBackgroundColorOnDark);
          background-color: var(--textInput-activeActionBackgroundColorOnDark);
          color: var(--textInput-activeActionIconColorOnDark);
        }
      }
      .inputErrorIcon {
        color: var(--textInput-errorIconColorOnDark);
      }
      .inputErrorMessage {
        color: var(--textInput-errorMessageColorOnDark);
      }
    `;
  }
}
