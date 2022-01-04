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
        color: var(--textarea-disabledLabelFontColor);
      }
      .helperText {
        color: var(--textarea-disabledHelperTextFontColor);
      }
      .textarea,
      .textarea:hover {
        color: var(--textarea-disabledValueFontColor);
        border: 1px solid var(--textarea-disabledBorderColor);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--textarea-disabledContainerFillColor);
      }
      .textarea::placeholder {
        color: var(--textarea-disabledPlaceholderFontColor);
      }
    `;
  }

  getDisabledDarkStyle() {
    return css`
      .textareaLabel,
      .textareaOptionalLabel {
        color: var(--textarea-disabledLabelFontColorOnDark);
      }
      .helperText {
        color: var(--textarea-disabledHelperTextFontColorOnDark);
      }
      .textarea,
      .textarea:hover {
        color: var(--textarea-disabledValueFontColorOnDark);
        border: 1px solid var(--textarea-disabledBorderColorOnDark);
        box-shadow: none;
        cursor: not-allowed;
        background-color: var(--textarea-disabledContainerFillColorOnDark);
      }
      .textarea::placeholder {
        color: var(--textarea-disabledPlaceholderFontColorOnDark);
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
          border: 1px solid var(--textarea-errorBorderColor);
          box-shadow: inset 0 0 0 1px var(--textarea-errorBorderColor);
          &:hover {
            border-color: var(--textarea-hoverErrorBorderColor);
            box-shadow: inset 0 0 0 1px var(--textarea-hoverErrorBorderColor);
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
        color: var(--textarea-labelFontColor);
        font-family: var(--textarea-fontFamily);
        font-size: var(--textarea-labelFontSize);
        font-style: var(--textarea-labelFontStyle);
        font-weight: var(--textarea-labelFontWeight);
        line-height: var(--textarea-labelLineHeight);
        min-height: 24px;
      }
      .textareaOptionalLabel {
        font-weight: var(--textarea-optionalLabelFontWeight);
      }

      .helperText {
        color: var(--textarea-helperTextFontColor);
        font-family: var(--textarea-fontFamily);
        font-size: var(--textarea-helperTextFontSize);
        font-style: var(--textarea-helperTextFontStyle);
        font-weight: var(--textarea-helperTextFontWeight);
        line-height: var(--textarea-helperTextLineHeight);
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
        color: var(--textarea-valueFontColor);
        font-family: var(--textarea-fontFamily);
        font-size: var(--textarea-valueFontSize);
        font-style: var(--textarea-valueFontStyle);
        font-weight: var(--textarea-valueFontWeight);
        caret-color: var(--textarea-valueFontColor);
        border: ${
          inputs.error
            ? `1px solid var(--textarea-errorBorderColor)`
            : "1px solid var(--textarea-enabledBorderColor)"
        };
        ${
          inputs.error && !inputs.disabled
            ? `border-color: transparent; box-shadow: 0 0 0 2px var(--textarea-errorBorderColor);`
            : ""
        };
        &::placeholder {
          color: var(--textarea-placeholderFontColor);
        }
        &:hover {
            ${
              inputs.error
                ? `border-color: transparent;
                   box-shadow: 0 0 0 2px var(--textarea-hoverErrorBorderColor);`
                : `border-color: var(--textarea-hoverBorderColor);`
            };
        }
        &:focus-within {
            border: 1px solid transparent;
            box-shadow: 0 0 0 2px var(--textarea-focusBorderColor);
            outline: none;
        }
      }
      .textareaErrorMessage {
        font-family: var(--textarea-fontFamily);
        color: var(--textarea-errorMessageColor);
        font-size: var(--textarea-errorFontSize);
        font-style: var(--textarea-errorFontStyle);
        font-weight: var(--textarea-errorFontWeight);
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
        color: var(--textarea-labelFontColorOnDark);
      }
      .helperText {
        color: var(--textarea-helperTextFontColorOnDark);
      }
      .textarea {
        color: var(--textarea-valueFontColorOnDark);
        caret-color: var(--textarea-valueFontColorOnDark);
        &::placeholder {
          color: var(--textarea-placeholderFontColorOnDark);
        }
        border: ${inputs.error
          ? `1px solid var(--textarea-errorBorderColorOnDark)`
          : "1px solid var(--textarea-enabledBorderColorOnDark)"};
        ${inputs.error
          ? `box-shadow: 0 0 0 2px var(--textarea-errorBorderColorOnDark);`
          : ""};
        &:hover {
          ${inputs.error
            ? `border-color: transparent;
                box-shadow: 0 0 0 2px var(--textarea-hoverErrorBorderColorOnDark);`
            : `border-color: var(--textarea-hoverBorderColorOnDark);`};
        }
        &:focus-within {
          border: 1px solid transparent;
          box-shadow: 0 0 0 2px var(--textarea-focusBorderColorOnDark);
          outline: none;
        }
      }
      .textareaErrorMessage {
        color: var(--textarea-errorMessageColorOnDark);
      }
    `;
  }
}
