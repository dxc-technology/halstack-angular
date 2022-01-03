import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
@Injectable()
export class DxcTextareaHelper {
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
      .textareaLabel,
      .textareaOptionalLabel {
        color: var(--newTextarea-disabledLabelFontColor);
      }
      .helperText {
        color: var(--newTextarea-disabledHelperTextFontColor);
      }
      .textarea,
      .textarea:hover {
        color: var(--newTextarea-disabledValueFontColor);
        border: 1px solid var(--newTextarea-disabledBorderColor);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--newTextarea-disabledContainerFillColor);
      }
      .textarea::placeholder {
        color: var(--newTextarea-disabledPlaceholderFontColor);
      }
    `;
  }

  getDisabledDarkStyle() {
    return css`
      .textareaLabel,
      .textareaOptionalLabel {
        color: var(--newTextarea-disabledLabelFontColorOnDark);
      }
      .helperText {
        color: var(--newTextarea-disabledHelperTextFontColorOnDark);
      }
      .textarea,
      .textarea:hover {
        color: var(--newTextarea-disabledValueFontColorOnDark);
        border: 1px solid var(--newTextarea-disabledBorderColorOnDark);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--newTextarea-disabledContainerFillColorOnDark);
      }
      .textarea::placeholder {
        color: var(--newTextarea-disabledPlaceholderFontColorOnDark);
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
        .textareaContainer {
          border: 1px solid var(--newTextarea-errorBorderColor);
          box-shadow: inset 0 0 0 1px var(--newTextarea-errorBorderColor);
          &:hover {
            border-color: var(--newTextarea-hoverErrorBorderColor);
            box-shadow: inset 0 0 0 1px var(--newTextarea-hoverErrorBorderColor);
          }
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
      .textareaLabel, .textareaOptionalLabel {
        color: var(--newTextarea-labelFontColor);
        font-family: var(--newTextarea-fontFamily);
        font-size: var(--newTextarea-labelFontSize);
        font-style: var(--newTextarea-labelFontStyle);
        font-weight: var(--newTextarea-labelFontWeight);
        line-height: var(--newTextarea-labelLineHeight);
        min-height: 24px;
      }
      .textareaOptionalLabel {
        font-weight: var(--newTextarea-optionalLabelFontWeight);
      }

      .helperText {
        color: var(--newTextarea-helperTextFontColor);
        font-family: var(--newTextarea-fontFamily);
        font-size: var(--newTextarea-helperTextFontSize);
        font-style: var(--newTextarea-helperTextFontStyle);
        font-weight: var(--newTextarea-helperTextFontWeight);
        line-height: var(--newTextarea-helperTextLineHeight);
        min-height: 18px;
      }

      .textarea {
        ${
          inputs.verticalGrow === "manual"
            ? "resize: vertical;"
            : inputs.verticalGrow === "auto"
            ? `resize: none; overflow: hidden;`
            : "resize: none;"
        };
        margin: calc(1rem * 0.25) 0;
        padding: calc(1rem * 0.5) calc(1rem * 1);
        box-shadow: 0 0 0 2px transparent;
        border-radius: calc(1rem * 0.25);
        height: calc(100% - 2px);
        width: 100%;
        background: none;
        outline: none;
        underline: none;
        color: var(--newTextarea-valueFontColor);
        font-family: var(--newTextarea-fontFamily);
        font-size: var(--newTextarea-valueFontSize);
        font-style: var(--newTextarea-valueFontStyle);
        font-weight: var(--newTextarea-valueFontWeight);
        caret-color: var(--newTextarea-valueFontColor);
        border: ${
          inputs.error
            ? `1px solid var(--newTextarea-errorBorderColor)`
            : "1px solid var(--newTextarea-enabledBorderColor)"
        };
        ${
          inputs.error && !inputs.disabled
            ? `border-color: transparent; box-shadow: 0 0 0 2px var(--newTextarea-errorBorderColor);`
            : ""
        };
        &::placeholder {
          color: var(--newTextarea-placeholderFontColor);
        }
        &:hover {
            ${
              inputs.error
                ? `border-color: transparent;
                   box-shadow: 0 0 0 2px var(--newTextarea-hoverErrorBorderColor);`
                : `border-color: var(--newTextarea-hoverBorderColor);`
            };
        }
        &:focus-within {
            border: 1px solid transparent;
            box-shadow: 0 0 0 2px var(--newTextarea-focusBorderColor);
            outline: none;
        }
      }
      .textareaErrorMessage {
        font-family: var(--newTextarea-fontFamily);
        color: var(--newTextarea-errorMessageColor);
        font-size: var(--newTextarea-errorFontSize);
        font-style: var(--newTextarea-errorFontStyle);
        font-weight: var(--newTextarea-errorFontWeight);
        line-height: 1.5em;
        min-height: 18px;
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
      .textareaLabel,
      .textareaOptionalLabel {
        color: var(--newTextarea-labelFontColorOnDark);
      }
      .helperText {
        color: var(--newTextarea-helperTextFontColorOnDark);
      }
      .textarea {
        color: var(--newTextarea-valueFontColorOnDark);
        caret-color: var(--newTextarea-valueFontColorOnDark);
        &::placeholder {
          color: var(--newTextarea-placeholderFontColorOnDark);
        }
        border: ${inputs.error
          ? `1px solid var(--newTextarea-errorBorderColorOnDark)`
          : "1px solid var(--newTextarea-enabledBorderColorOnDark)"};
        ${inputs.error
          ? `box-shadow: 0 0 0 2px var(--newTextarea-errorBorderColorOnDark);`
          : ""};
        &:hover {
          ${inputs.error
            ? `border-color: transparent;
                box-shadow: 0 0 0 2px var(--newTextarea-hoverErrorBorderColorOnDark);`
            : `border-color: var(--newTextarea-hoverBorderColorOnDark);`};
        }
        &:focus-within {
          border: 1px solid transparent;
          box-shadow: 0 0 0 2px var(--newTextarea-focusBorderColorOnDark);
          outline: none;
        }
      }
      .textareaErrorMessage {
        color: var(--newTextarea-errorMessageColorOnDark);
      }
    `;
  }
}
