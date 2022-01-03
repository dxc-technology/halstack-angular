import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnChanges,
  AfterViewChecked,
  Optional,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { FormControl } from "@angular/forms";
import { CssUtils } from "../utils";
import {
  coerceNumberProperty,
  coerceBooleanProperty,
} from "@angular/cdk/coercion";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

@Component({
  selector: "v3-dxc-textarea",
  templateUrl: "./v3-dxc-textarea.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils],
})
export class V3DxcTextareaComponent
  implements OnInit, OnChanges, AfterViewChecked
{
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;
  @HostBinding("class.invalid") isInvalid: boolean = false;
  @HostBinding("class.required") isRequired: boolean = false;
  @HostBinding("class.light") lightBackground: boolean = true;
  @HostBinding("class.dark") darkBackground: boolean = false;

  @Input() public value: string;
  @Input() public label: String;
  @Input() public assistiveText: string;
  @Input() public name: string;
  @Input() public placeholder: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
  private _required = false;
  @Input()
  get invalid(): boolean {
    return this._invalid;
  }
  set invalid(value: boolean) {
    this._invalid = coerceBooleanProperty(value);
  }
  private _invalid = false;
  @Input() public margin: any;
  @Input() public size: string;

  @Input()
  get numRows(): number {
    return this._numRows;
  }
  set numRows(value: number) {
    this._numRows = coerceNumberProperty(value);
  }
  private _numRows;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  renderedValue = "";
  private _valueChangeTrack: boolean;
  options;
  type: string;

  clicked: boolean = false;

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
  };

  defaultInputs = new BehaviorSubject<any>({
    value: null,
    label: null,
    assistiveText: null,
    name: null,
    numRows: 4,
    placeholder: null,
    disabled: false,
    required: false,
    invalid: false,
    margin: null,
    size: "medium",
    tabIndexValue: 0,
  });

  public formControl = new FormControl();

  constructor(
    private utils: CssUtils,
    @Optional() public bgProviderService?: BackgroundProviderService
  ) {
    this.numRows = 4;
    this.bgProviderService.$changeColor.subscribe((value) => {
      if (value === "dark") {
        this.lightBackground = false;
        this.darkBackground = true;
      } else if (value === "light") {
        this.lightBackground = true;
        this.darkBackground = false;
      }
    });
  }

  ngOnInit() {
    this.renderedValue = this.value || "";
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;

  }

  ngAfterViewChecked(): void {
    if (this._valueChangeTrack) {
      this._valueChangeTrack = false;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.isDisabled = this.disabled;
    this.isInvalid = this.invalid;
    this.isRequired = this.required;

    this.renderedValue = this.value || "";
    this.label = this.label || "";

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this._valueChangeTrack = true;
  }

  public onChanged($event: any): void {
    this.clicked = false;
    this.onChange.emit($event.target.value);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = $event.target.value;
    } else {
      $event.target.value = this.renderedValue;
    }
  }

  /**
   * internal click event handler
   *
   * @param $event
   */
  public onClickHandle($event): void {
    this.clicked = true;
  }

  /**
   *Executed when input lost the focus
   */
  public onBlurHandle($event: any): void {
    this.onBlur.emit(this.renderedValue);
  }

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
      height: auto;
      ${this.calculateWidth(inputs)}
      ${this.utils.getMargins(inputs.margin)}
      ${this.getLightStyle()}
      ${this.getDarkStyle()}
      display: inline-flex;
      &.disabled {
        cursor: default;
      }
      .mat-form-field {
        line-height: unset;
        width: 100%;
        textarea {
          min-height: 22px;
          text-overflow: ellipsis;
          font-weight: var(--v3Textarea-valueFontWeight);
          font-style: var(--v3Textarea-valueFontStyle);
          font-size: var(--v3Textarea-valueFontSize);
          line-height: var(--v3Textarea-valueLineHeight);
          letter-spacing: var(--v3Textarea-valueLetterSpacing);
          font-family: var(--v3Textarea-fontFamily);
        }
        textarea::-webkit-scrollbar {
          width: 3px;
        }
        textarea::-webkit-scrollbar-track{
          opacity: 0.34;
        }
        textarea::-webkit-scrollbar-track,
        textarea::-webkit-scrollbar-thumb {
          border-radius: 3px;
        }
        &.disabled {
          pointer-events: none;
        }
      }
      .mat-form-field.mat-focused .mat-form-field-ripple {
        height: 2px !important;
      }
      .mat-form-field-underline {
        .mat-form-field-ripple {
          height: 0px;
        }
      }
      .mat-hint {
        font-family: var(--v3Textarea-fontFamily);
        font-size: var(--v3Textarea-assistiveTextFontSize);
        font-style: var(--v3Textarea-assistiveTextFontStyle);
        font-weight: var(--v3Textarea-assistiveTextFontWeight);
        letter-spacing: var(--v3Textarea-assistiveTextLetterSpacing);
      }
      .mat-form-field.mat-form-field-should-float mat-label,
      .mat-form-field-label {
        font-family: var(--v3Textarea-fontFamily);
        font-size: var(--v3Textarea-labelFontSize);
        font-style: var(--v3Textarea-labelFontStyle);
        font-weight: var(--v3Textarea-labelFontWeight);
        letter-spacing: var(--v3Textarea-labelLetterSpacing);
      }
      .mat-form-field {
        &.mat-form-field-should-float {
          .mat-form-field-infix {
            padding-bottom: 7px;
          }
        }
        .mat-form-field-label-wrapper {
          display: flex;
          .mat-form-field-label {
            flex-direction: row-reverse;
            justify-content: flex-end;
            display: flex;
          }
        }
        .mat-form-field-subscript-wrapper {
          margin-top: 6px;
        }
        .mat-form-field-infix {
          padding-top: 6px;
        }
      }
      .mat-form-field-flex {
        align-items: center;
        .mat-form-field-infix {
          border-top: unset;
        }
      }
    `;
  }

  getLightStyle() {
    return css`
      &.light {
        .mat-form-field {
          textarea {
            color: var(--v3Textarea-valueFontColor);
            caret-color: var(--v3Textarea-valueFontColor);
          }
          textarea::-webkit-scrollbar-track {
            background-color: var(--v3Textarea-scrollBarTrackColor);
            opacity: 0.34;
          }
          textarea::-webkit-scrollbar-thumb {
            background-color: var(--v3Textarea-scrollBarThumbColor);
          }
          &.disabled {
            textarea,
            .mat-hint,
            .mat-form-field-empty mat-label,
            .mat-form-field-label:not(.mat-form-field-empty) mat-label,
            &.mat-focused .mat-form-field-empty mat-label {
              color: var(--v3Textarea-disabledColor);
            }
            .mat-form-field-underline {
              background-color: var(--v3Textarea-disabledColor);
            }
            .mat-form-field-wrapper {
              .mat-form-field-flex {
                .mat-form-field-infix input {
                  color: var(--v3Textarea-disabledColor);
                }
              }
            }
          }
        }
        .mat-hint {
          color: var(--v3Textarea-assistiveTextFontColor);
        }
        label.mat-form-field-label {
          color: var(--v3Textarea-labelFontColor);
        }
        .mat-form-field.mat-focused .mat-form-field-ripple {
          background-color: var(--v3Textarea-underlineFocusColor);
        }
        .mat-form-field-underline {
          background-color: var(--v3Textarea-underlineColor);
          height: var(--v3Textarea-underlineThickness);
        }
        input::placeholder {
          color: var(--v3Textarea-valueFontColor);
        }
        &.required {
          .mat-form-field-required-marker {
            color: var(--v3Textarea-errorColor) !important;
          }
          .mat-form-field.mat-focused .mat-form-field-ripple,
          .mat-form-field.mat-form-field-invalid .mat-form-field-ripple {
            background-color: var(--v3Textarea-labelFontColor);
          }
        }
        &.invalid {
          .mat-hint {
            color: var(--v3Textarea-errorColor);
          }
          .mat-form-field-ripple {
            background-color: var(--v3Textarea-errorColor) !important;
            height: 0px !important;
          }
          &.mat-focused .mat-form-field-empty mat-label {
            color: var(--v3Textarea-errorColor) !important;
          }
          .mat-form-field {
            &.mat-form-field-should-float {
              mat-label {
                color: var(--v3Textarea-errorColor);
              }
            }
          }
        }
      }
    `;
  }

  getDarkStyle() {
    return css`
      &.dark {
        .mat-form-field {
          textarea {
            color: var(--v3Textarea-valueFontColorOnDark);
            caret-color: var(--v3Textarea-valueFontColorOnDark);
          }
          textarea::-webkit-scrollbar-track {
            background-color: var(--v3Textarea-scrollBarTrackColorOnDark);
            opacity: 0.34;
          }
          textarea::-webkit-scrollbar-thumb {
            background-color: var(--v3Textarea-scrollBarThumbColorOnDark);
          }
          &.disabled {
            textarea,
            .mat-hint,
            .mat-form-field-empty mat-label,
            .mat-form-field-label:not(.mat-form-field-empty) mat-label,
            &.mat-focused .mat-form-field-empty mat-label {
              color: var(--v3Textarea-disabledColorOnDark);
            }
            .mat-form-field-underline {
              background-color: var(--v3Textarea-disabledColorOnDark);
            }
            .mat-form-field-wrapper {
              .mat-form-field-flex {
                .mat-form-field-infix input {
                  color: var(--v3Textarea-disabledColorOnDark);
                }
              }
            }
          }
        }
        .mat-hint {
          color: var(--v3Textarea-assistiveTextFontColorOnDark);
        }
        label.mat-form-field-label {
          color: var(--v3Textarea-labelFontColorOnDark);
        }
        .mat-form-field.mat-focused .mat-form-field-ripple {
          background-color: var(--v3Textarea-underlineFocusColorOnDark);
        }
        .mat-form-field-underline {
          background-color: var(--v3Textarea-underlineColorOnDark);
        }
        input::placeholder {
          color: var(--v3Textarea-valueFontColorOnDark);
        }
        &.required {
          .mat-form-field-required-marker {
            color: var(--v3Textarea-errorColorOnDark) !important;
          }
          .mat-form-field.mat-focused .mat-form-field-ripple,
          .mat-form-field.mat-form-field-invalid .mat-form-field-ripple {
            background-color: var(--v3Textarea-labelFontColorOnDark);
          }
        }
        &.invalid {
          .mat-hint {
            color: var(--v3Textarea-errorColorOnDark);
          }
          .mat-form-field-ripple {
            background-color: var(--v3Textarea-errorColorOnDark) !important;
            height: 0px !important;
          }
          &.mat-focused .mat-form-field-empty mat-label {
            color: var(--v3Textarea-errorColorOnDark) !important;
          }
          .mat-form-field {
            &.mat-form-field-should-float {
              mat-label {
                color: var(--v3Textarea-errorColorOnDark);
              }
            }
          }
        }
      }
    `;
  }
}
