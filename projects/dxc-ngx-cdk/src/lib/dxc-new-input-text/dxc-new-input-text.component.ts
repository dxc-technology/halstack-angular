import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-new-input-text",
  templateUrl: "./dxc-new-input-text.component.html",
  providers: [CssUtils],
})
export class DxcNewInputTextComponent implements OnInit, OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled = false;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string = "";

  @Input()
  helperText: string;

  hasAction = () => this.onActionClick.observers.length;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  prefix = "";

  @Input()
  suffix = "";

  @Input()
  optional = false;

  @Input()
  clearable = false;

  @Input()
  error = "";

  @Input()
  placeholder = "";

  @Input()
  margin: Object | string;

  random: string;

  defaultInputs = new BehaviorSubject<any>({
    placeholder: "",
    error: "",
    clearable: false,
    optional: false,
    suffix: "",
    prefix: "",
    disabled: false,
    helperText: "",
    value: "",
    name: "",
    label: "",
    margin: "",
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onActionClick = new EventEmitter<any>();

  onDefaultClearAction = new EventEmitter<any>();

  size: string;

  tabIndex: number;

  constructor(private utils: CssUtils) {}

  ngOnInit(): void {
    this.random = `input-${Math.floor(Math.random() * 1000000000000000) + 1}`;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.isDisabled = this.disabled;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isDisabled = this.disabled;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  handleOnChange(event) {
    this.onChange.emit(event.target.value);
  }

  hanleDefaultClearAction(event) {
    this.onDefaultClearAction.emit(event.target.value);
  }

  handleActionOnClick(event) {
    this.onActionClick.emit(event.target.value);
  }

  handleOnBlur(event) {
    this.onBlur.emit(event.target.value);
  }

  getDisabledStyle() {
    return css`
      &.disabled {
        .inputLabel,
        .inputOptionalLabel,
        .helperText,
        .inputText,
        .inputPrefix, 
        .inputPrefix,
        .inputSuffix, 
        .inputErrorMessage, 
        .inputErrorIcon, 
        .inputText::placeholder {
          color: var(--input-disabledColor);
        }
        .inputText, .inputAction {
          cursor: not-allowed;
        }
        .inputContainer,
        .inputContainer:hover,
        .inputContainer:focus-within {
          border: 1px solid var(--input-disabledColor);
          box-shadow: none;
          cursor: not-allowed;
        }
        .inputAction {
          &:hover,
          &:active {
            background-color: transparent;
          }
          &:focus,
          &:focus-visible,
          &:active {
            border: 1px solid transparent;
            box-shadow: inset 0 0 0 0px transparent;
          }
        }
        .inputErrorIcon svg, .inputAction svg{
          fill: var(--input-disabledColor);
        }
        .inputPrefix {
          border-right: 1px solid var(--input-disabledColor);
        }
        .inputSuffix {
          border-left: 1px solid var(--input-disabledColor);
        }
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      flex-direction: column;
      ${this.utils.getMargins(inputs.margin)}
      ${this.getDisabledStyle()}
      .inputLabel, .inputOptionalLabel {
        color: var(--input-labelFontColor);
        font-family: var(--input-fontFamily);
        font-size: var(--input-labelFontSize);
        font-style: var(--input-labelFontStyle);
        font-weight: var(--input-labelFontWeight);
        line-height: 1.75em;
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
      }

      .inputContainer {
        display: flex;
        align-items: center;
        height: calc(calc(1rem * 2.5) - calc(1px * 2));
        border: ${this.error
          ? `1px solid var(--input-errorColor)`
          : "1px solid #666666"};
        ${this.error
          ? `box-shadow: inset 0 0 0 1px var(--input-errorColor);`
          : ""};
        border-radius: 4px;
        margin: calc(1rem * 0.25) 0;
        padding: 0 calc(1rem * 0.5);

        &:hover {
          border-color: #a46ede;
          box-shadow: none;
        }
        &:focus-within {
          border: 1px solid #a46ede;
          box-shadow: inset 0 0 0 1px #a46ede;
        }
      }

      .inputText {
        height: 100%;
        width: 100%;
        background: none;
        border: none;
        outline: none;
        padding: 0 calc(1rem * 0.5);
        color: var(--input-customContentFontColor);
        font-family: var(--input-fontFamily);
        font-size: var(--input-customContentFontSize);
        font-style: var(--input-customContentFontStyle);
        font-weight: var(--input-customContentFontWeight);
      }

      .inputAction {
        height: calc(calc(1rem * 1.5) - calc(1px * 2));
        width: calc(calc(1rem * 1.5) - calc(1px * 2));
        margin: 0 calc(1rem * 0.25) 0 calc(1rem * 0.25);
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

        &:hover {
          background-color: #f2f2f2;
        }
        &:focus {
          border: 1px solid #a46ede;
          box-shadow: inset 0 0 0 1px #a46ede;
          outline: none;
        }
        &:focus-visible {
          border: 1px solid #a46ede;
          box-shadow: inset 0 0 0 1px #a46ede;
          outline: none;
        }
        &:active {
          border: 1px solid #a46ede;
          box-shadow: inset 0 0 0 1px #a46ede;
          outline: none;
          background-color: #d9d9d9;
        }
        svg {
          line-height: 18px;
          width: 100%;
          height: 100%;
        }
      }
      .inputErrorIcon {
        height: calc(24px - (1px * 2));
        width: calc(24px - (1px * 2));
        margin-right: calc(1rem * 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        color: var(--input-errorColor);

        svg {
          font-size: 1.25rem;
          line-height: 22px;
        }
      }

      .inputPrefix,
      .inputSuffix {
        height: calc(1rem * 1.5);
        line-height: calc(1rem * 1.5);
        font-size: 1rem;
        font-family: var(--input-fontFamily);
        pointer-events: none;
        color: #666666;
      }
      .inputPrefix {
        border-right: 1px solid #999999;
        padding: 0 calc(1rem * 0.5) 0 0;
      }

      .inputSuffix {
        border-left: 1px solid #999999;
        margin-left: calc(1rem * 0.25);
        padding: 0 0 0 calc(1rem * 0.5);
      }

      .inputErrorMessage {
        font-family: var(--input-fontFamily);
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--input-errorColor);
        line-height: 1.5em;
      }
    `;
  }
}
