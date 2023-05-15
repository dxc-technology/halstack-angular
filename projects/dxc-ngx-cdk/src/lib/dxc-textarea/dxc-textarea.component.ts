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
  forwardRef
} from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs";
import { UntypedFormControl } from "@angular/forms";
import { CssUtils } from "../utils";
import { coerceNumberProperty, coerceBooleanProperty } from "@angular/cdk/coercion";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "dxc-textarea",
  templateUrl: "./dxc-textarea.component.html",
  providers: [CssUtils, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcTextareaComponent),
    multi: true
  }],
})
export class DxcTextareaComponent
  implements OnInit, OnChanges, AfterViewChecked, ControlValueAccessor {
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;
  @HostBinding("class.invalid") isInvalid: boolean = false;
  @HostBinding("class.required") isRequired: boolean = false;

  @Input() public value: string;
  @Input() public autosizeMaxRows = 5;
  @Input() public autosizeMinRows = 2;
  @Input() public textareaAutosize = true;

  @Input() public maxLength: number;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null;
  @Input('ariaRequired') ariaRequired: boolean = false;
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
  private controlled = true;
  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  renderedValue = "";
  private _valueChangeTrack: boolean;
  options;
  type: string = 'textarea';

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
    tabIndexValue: 0
  });

  public formControl = new UntypedFormControl();

  constructor(private utils: CssUtils) {
    this.numRows = 4;
  }

  ngOnInit() {
    this.renderedValue = this.value || "";
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    //this.onChangeRegister(this.renderedValue);
  }

  ngAfterViewChecked(): void {
    if (this._valueChangeTrack) {
      this._valueChangeTrack = false;
    }
  }

  public onTouched: () => void = () => { };
  public onChangeRegister = (val) => { };

  writeValue(val: any): void {
    this.renderedValue = val || "";
    this.controlled = false;
  }

  registerOnChange(fn: any): void {
    this.onChangeRegister = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(boolv: boolean): void {
    this.disabled = boolv;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.isDisabled = this.disabled;
    this.isInvalid = this.invalid;
    this.isRequired = this.required;
    if (this.controlled) {
      this.renderedValue = this.value || "";
      this.onChangeRegister(this.renderedValue);
    }
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
    this.onChangeRegister(this.renderedValue);
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
      display: inline-flex;
      font-family: var(--fontFamily);
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: var(--textarea-scrollBarTrackColor);
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--textarea-scrollBarThumbColor);
        border-radius: 3px;
      }
      &.disabled {
        cursor: default;
      }
      .mat-mdc-form-field {
        font-family: var(--fontFamily);
        line-height: unset;
        width: 100%;
        textarea {
          min-height: 22px;
          text-overflow: ellipsis;
          color: var(--textarea-fontColor);
        }
        &.disabled {
          pointer-events: none;
          textarea {
            color: var(--textarea-disabledFontColor);
          }
          .mat-hint {
            color: var(--textarea-disabledFontColor);
          }
          .mat-form-field-underline {
            background-color: var(--textarea-disabledFontColor);
          }
          .mat-form-field-empty mat-label {
            color: var(--textarea-disabledFontColor);
          }
          &.mat-focused .mat-form-field-empty mat-label {
            color: var(--textarea-disabledFontColor);
          }
          .mat-form-field-label:not(.mat-form-field-empty) mat-label {
            color: var(--textarea-disabledFontColor);
          }
          .mat-form-field-wrapper {
            .mat-mdc-form-field-flex {
              .mat-mdc-form-field-infix input {
                color: var(--textarea-disabledFontColor);
              }
            }
          }
        }
      }
      .mat-hint {
        color: var(--textarea-fontColor);
      }
      .mat-form-field.mat-focused .mat-form-field-label{
        color: var(--inputText-focusColor) !important;
      }
      .mat-form-field.mat-focused .mat-form-field-ripple{
        background-color: var(--inputText-focusColor);
      }
      .mat-form-field-underline {
        background-color: var(--textarea-fontColor);
      }
      label.mat-form-field-label {
        color: var(--textarea-fontColor);
      }
      input::placeholder {
        color: var(--textarea-placeholderColor);
      }
      &.required {
        .mat-hint {
          color: var(--textarea-fontColor);
        }
        .mat-form-field-underline {
          background-color: var(--textarea-fontColor);
        }
        label.mat-form-field-label {
          color: var(--textarea-fontColor);
        }
        input::placeholder {
          color: var(--textarea-placeholderColor);
        }
        .mat-form-field-ripple{
          background-color: var(--textarea-fontColor);
        }
        .mat-input-element{
          caret-color: var(--textarea-fontColor);
        }
        .mat-form-field-required-marker{
          color: var(--textarea-error) !important;
        }
      }
      &.invalid {
        .mat-hint {
          color: var(--textarea-error);
        }
        .mat-form-field-underline {
          .mat-form-field-ripple {
            background-color: var(--textarea-error);
          }
        }
        .mat-form-field-empty mat-label {
          color: var(--textarea-fontColor);
        }
        &.mat-focused .mat-form-field-empty mat-label {
          color: var(--textarea-error);
        }
        .mat-form-field-label:not(.mat-form-field-empty) mat-label {
          color: var(--textarea-error);
        }
        .mat-label{
          color: var(--textarea-error) !important;
        }
        .mat-mdc-form-field {
          &.mat-form-field-should-float {
            mat-label {
              color: var(--textarea-error);
            }
          }
        }
        label.mat-form-field-label {
          color: var(--textarea-error);
        }
      }
      .mat-mdc-form-field {
        &.mat-form-field-should-float {
          .mat-mdc-form-field-infix {
            padding-bottom: 7px;
          }
          mat-label {
            font-size: 15px;
          }
        }
        .mat-form-field-label-wrapper {
          display: flex;
          .mat-form-field-label {
            flex-direction: row-reverse;
            justify-content: flex-end;
            display: flex;
            span {
              color: var(--textarea-fontColor);
            }
          }
        }
        .mat-form-field-subscript-wrapper {
          margin-top: 6px;
        }
        .mat-mdc-form-field-infix {
          padding-top: 6px;
        }
      }
      .mat-mdc-form-field-flex {
        align-items: center;
        .mat-mdc-form-field-infix {
          border-top: unset;
        }
      }
    `;
  }
}
