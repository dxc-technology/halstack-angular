import { Injectable } from '@angular/core';
import { css } from 'emotion';
import { CssUtils } from '../utils';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Injectable()

export class DxcNewInputTextHelper{

  constructor(private utils: CssUtils) {

  }
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
        color: var(--input-disabledLabelFontColor);
      }
      .helperText {
        color: var(--input-disabledHelperTextLabelFontColor);
      }
      .inputErrorMessage,
      .inputErrorIcon {
        color: var(--input-disabledErrorFontColor);
      }
      .inputText {
        cursor: not-allowed;
        color: var(--input-disabledInputTextFontColor);
        &::placeholder {
          color: var(--input-disabledPlaceholderFontColor);
        }
      }
      .inputContainer,
      .inputContainer:hover {
        border: 1px solid var(--input-disabledBorderColor);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--input-disabledBackgroundColor);
      }
      .inputAction {
        pointer-events: none;
        color: var(--input-disabledActionIconColor);
        svg {
          fill: var(--input-disabledActionIconColor);
        }
      }
      .inputPrefix {
        border-right: 1px solid var(--input-disabledPrefixFontColor);
      }
      .inputSuffix {
        border-left: 1px solid var(--input-disabledSuffixFontColor);
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      ${this.utils.getMargins(inputs.margin)}

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
        border: ${inputs.error
          ? `1px solid var(--input-errorColor)`
          : "1px solid #666666"};
        ${inputs.error
          ? `box-shadow: inset 0 0 0 1px var(--input-errorColor);`
          : ""};
        border-radius: 4px;
        margin: 4px 0;
        padding-right: 12px;
        ${inputs.prefix ? `padding-left: 12px;` : ""};
        &:hover {
          border-color: var(--input-borderColor);
          box-shadow: none;
        }
        &:focus-within {
          border: 1px solid var(--input-borderColor);
          box-shadow: inset 0 0 0 1px var(--input-borderColor);
        }
      }

      .inputText {
        height: calc(100% - 2px);
        width: 100%;
        background: none;
        border: none;
        outline: none;
        padding-left: 16px;
        color: var(--input-inputTextFontColor);
        font-family: var(--input-fontFamily);
        font-size: var(--input-inputTextFontSize);
        font-style: var(--input-inputTextFontStyle);
        font-weight: var(--input-inputTextFontWeight);
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
        color: var(--input-actionIconColor);
        &:hover {
          background-color: var(--input-actionBackgroundColor);
        }
        &:focus {
          border: 1px solid var(--input-actionBorderColor);
          box-shadow: inset 0 0 0 1px var(--input-actionBorderColor);
          outline: none;
        }
        &:focus-visible {
          border: 1px solid var(--input-actionBorderColor);
          box-shadow: inset 0 0 0 1px var(--input-actionBorderColor);
          outline: none;
        }
        &:active {
          border: 1px solid var(--input-actionBorderColor);
          box-shadow: inset 0 0 0 1px var(--input-actionBorderColor);
          outline: none;
          background-color: var(--input-actionHoverbackgroundColor);
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
        color: var(--input-errorColor);
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
        border-right: 1px solid var(--input-prefixBorderColor);
        padding: 0 calc(1rem * 0.5) 0 0;
        color: var(--input-prefixFontColor);
        font-size: var(--input-prefixFontSize);
        font-style: var(--input-prefixFontStyle);
        font-weight: var(--input-prefixFontWeight);
      }

      .inputSuffix {
        border-left: 1px solid var(--input-suffixBorderColor);
        margin-left: 4px;
        padding: 0 0 0 calc(1rem * 0.5);
        color: var(--input-suffixFontColor);
        font-size: var(--input-suffixFontSize);
        font-style: var(--input-suffixFontStyle);
        font-weight: var(--input-suffixFontWeight);
      }

      .inputErrorMessage {
        font-family: var(--input-fontFamily);
        color: var(--input-errorColor);
        font-size: var(--input-errorFontSize);
        font-style: var(--input-errorFontStyle);
        font-weight: var(--input-errorFontWeight);
        line-height: 1.5em;
        height: 18px;
      }

      dxc-new-input-text-action {
        display: flex;
      }

      ${inputs.disabled ? this.getDisabledStyle() : ""}

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
          &:hover {
            background-color: #f2f2f2;
          }
          &:active {
            background-color: #cccccc;
          }
          &.selected {
            background-color: #fabada;
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
    `;
  }


}
