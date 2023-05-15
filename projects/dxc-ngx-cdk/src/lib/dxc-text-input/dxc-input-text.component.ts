import {
  Component,
  OnChanges,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy,
  ViewChild,
  ContentChildren,
  QueryList,
  forwardRef
} from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  ElementRef,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from "@angular/core";
import { DxcInputPrefixIconComponent } from "./dxc-input-prefix-icon/dxc-input-prefix-icon.component";
import { DxcInputSuffixIconComponent } from "./dxc-input-suffix-icon/dxc-input-suffix-icon.component";
import { InputTextService } from './services/inputText.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "dxc-input-text",
  templateUrl: "./dxc-input-text.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils, InputTextService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcTextInputComponent),
    multi: true
  }],
})
export class DxcTextInputComponent
  implements OnInit, OnChanges, AfterViewChecked, ControlValueAccessor {
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  @Input() public prefix: string;
  @Input() public suffix: string;
  @Input() public prefixIconSrc: string;
  @Input() public suffixIconSrc: string;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null;
  @Input('ariaRequired') ariaRequired: boolean = false;
  @Input() public maxLength: number;
  @Input() public minLength: number;
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
  @Input()
  get isMasked(): boolean {
    return this._isMasked;
  }
  set isMasked(value: boolean) {
    this._isMasked = coerceBooleanProperty(value);
  }
  private _isMasked;
  @Input() public label: String;
  @Input() public assistiveText: string;
  @Input() public name: string;
  @Input() public value: string;
  @Input() public placeholder: string;
  @Input() public autocompleteOptions: any;
  @Input() public autocomplete: string = "off";
  @Input() public margin: any;
  @Input() public size: string;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() public onClickSuffix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onClickPrefix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onKeyPress: EventEmitter<any> = new EventEmitter<any>();

  prefixPointer = false;
  suffixPointer = false;

  loading = new BehaviorSubject(false);
  isError = new BehaviorSubject(false);
  renderedValue = "";
  private _valueChangeTrack: boolean;
  options;
  type: string;
  dxcAutocompleteMenu = this.getAutoCompleteStyle();

  @ViewChild("dxcSingleInput", { static: false }) singleInput: ElementRef;

  @ContentChildren(DxcInputPrefixIconComponent)
  dxcInputPrefixIcon: QueryList<DxcInputPrefixIconComponent>;

  @ContentChildren(DxcInputSuffixIconComponent)
  dxcInputSuffixIcon: QueryList<DxcInputSuffixIconComponent>;

  selectionStart: number = 0;
  selectionEnd: number = 0;
  clicked: boolean = false;

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
  };

  defaultInputs = new BehaviorSubject<any>({
    prefix: null,
    suffix: null,
    prefixIconSrc: null,
    suffixIconSrc: null,
    disabled: false,
    required: false,
    invalid: false,
    label: null,
    assistiveText: null,
    placeholder: null,
    name: null,
    value: null,
    margin: null,
    size: "medium",
    isMasked: false,
    tabIndexValue: 0,
  });

  constructor(private utils: CssUtils, private ref: ChangeDetectorRef, private service: InputTextService) { }

  public onTouched: () => void = () => { };
  public onChangeRegister = (val) => { };

  onInputKeyPress($event): void {
    this.onKeyPress.emit($event);
  }

  writeValue(val: any): void {
    this.renderedValue = val || "";
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

  ngOnInit() {
    this.renderedValue = this.value || "";
    //this.onChangeRegister(this.renderedValue);
    this.bindAutocompleteOptions();
    this.autocompleteFunction("");
  }

  private bindAutocompleteOptions() {
    if (this.autocompleteOptions && Array.isArray(this.autocompleteOptions)) {
      this.options = this.autocompleteOptions;
    }
  }

  ngAfterViewChecked(): void {
    if (this._valueChangeTrack) {
      this._valueChangeTrack = false;
      this.setCursorSelection(this.singleInput);
    }

    if (this.dxcInputPrefixIcon && this.dxcInputPrefixIcon.length !== 0) {
      this.prefixIconSrc = "";
    }

    if (this.dxcInputSuffixIcon && this.dxcInputSuffixIcon.length !== 0) {
      this.suffixIconSrc = "";
    }

    this.ref.detectChanges();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.isMasked) {
      this.type = "password";
    } else {
      this.type = "text";
    }
    this.isDisabled = this.disabled;

    if (changes.value != null) {
      this.renderedValue = this.value || "";
      this.onChangeRegister(this.renderedValue);
    }
    this.label = this.label || "";

    this.service.setIsDisabled(this.disabled);

    if (
      this.onClickSuffix.observers !== undefined &&
      this.onClickSuffix.observers.length !== 0
    ) {
      this.suffixPointer = true;
    }

    if (
      this.onClickPrefix.observers !== undefined &&
      this.onClickPrefix.observers.length !== 0
    ) {
      this.prefixPointer = true;
    }

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
    this.selectionStart = $event.target.selectionStart;
    this.selectionEnd = $event.target.selectionEnd;
    this.onChange.emit($event.target.value);
    this.autocompleteFunction($event.target.value);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = $event.target.value;
      this.onChangeRegister(this.renderedValue);
    } else {
      $event.target.value = this.renderedValue;
    }
  }

  public onClickOption($event: any) {
    this.onChange.emit($event);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = $event;
      this.onChangeRegister(this.renderedValue);
    } else {
      this.singleInput.nativeElement.value = this.renderedValue;
    }
  }

  autocompleteFunction(value) {
    if (
      value !== undefined &&
      this.autocompleteOptions &&
      Array.isArray(this.autocompleteOptions)
    ) {
      const inputValue = value.toLowerCase();
      this.options = this.autocompleteOptions.filter((option) =>
        option.toLowerCase().includes(inputValue)
      );
    } else if (
      this.autocompleteOptions &&
      typeof this.autocompleteOptions === "function"
    ) {
      this.loading.next(true);
      this.isError.next(false);
      this.autocompleteOptions(value).subscribe(
        (autocompleteOptionsList) => {
          this.options = autocompleteOptionsList;
          this.ref.markForCheck();
          this.loading.next(false);
        },
        (err) => {
          this.isError.next(true);
          this.loading.next(false);
          this.ref.markForCheck();
        }
      );
    } else if (this.autocompleteOptions) {
      this.isError.next(true);
      this.loading.next(false);
      this.ref.markForCheck();
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
    this.onTouched();
    this.onBlur.emit(this.renderedValue);
  }

  public onClickSuffixHandler($event: any): void {
    this.onClickSuffix.emit($event);
  }

  public onClickPrefixHandler($event: any): void {
    this.onClickPrefix.emit($event);
  }

  private setCursorSelection(input: ElementRef) {
    if (!this.clicked && input) {
      input.nativeElement.selectionStart = this.selectionStart;
      input.nativeElement.selectionEnd = this.selectionEnd;
    }
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getStyleOnClickPrefixIcon() {
    if (this.prefixPointer) {
      return css`
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--inputText-focusColor);
        }
        cursor: pointer;
      `;
    } else {
      return css`
        &:focus {
          outline: none;
        }
        cursor: default;
      `;
    }
  }

  getStyleOnClickSuffixIcon() {
    if (this.suffixPointer) {
      return css`
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--inputText-focusColor);
        }
        cursor: pointer;
      `;
    } else {
      return css`
        &:focus {
          outline: none;
        }
        cursor: default;
      `;
    }
  }

  getDynamicStyle(inputs) {
    return css`
      min-height: 34px;
      max-height: 74px;
      ${this.calculateWidth(inputs)}
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      font-family: var(--fontFamily);
      dxc-input-prefix-icon,
      dxc-input-suffix-icon {
        display: flex;
        cursor: default;
        &:focus {
          outline: none;
        }
        .containerIcon {
          &:focus {
            outline: none;
          }
        }
      }
      dxc-input-prefix-icon {
        margin-right: 12px;
      }
      dxc-input-suffix-icon {
        margin-left: 8px;
        margin-right: 8px;
      }
      .onClickIconElement {
        cursor: pointer !important;
        .containerIcon {
          &:focus {
            outline: -webkit-focus-ring-color auto 1px !important;
            outline-color: var(--inputText-focusColor) !important;
          }
        }
      }
      .prefixElement {
        margin-right: 12px;
        ${this.getStyleOnClickPrefixIcon()}
      }
      .suffixElement {
        margin-left: 8px;
        margin-right: 8px;
        ${this.getStyleOnClickSuffixIcon()}
      }
      &.disabled {
        cursor: not-allowed;
        dxc-input-prefix-icon,
        dxc-input-suffix-icon {
          .containerIcon {
            fill: var(--inputText-disabledFontColor);
          }
        }
        .prefixElement,
        .suffixElement {
          fill: var(--inputText-disabledFontColor);
          color: var(--inputText-disabledFontColor);
        }
      }
      .mat-form-field.mat-focused .mat-form-field-label {
        color: var(--inputText-focusColor) !important;
      }
      .mat-form-field.mat-focused .mat-form-field-ripple {
        background-color: ${this.invalid
        ? "var(--inputText-error) !important"
        : "var(--inputText-focusColor) !important"};
      }
      .mat-mdc-form-field {
        font-family: var(--fontFamily);
        line-height: unset;
        width: 100%;
        max-height: 74px;
        input {
          min-height: 22px;
          text-overflow: ellipsis;
          color: var(--inputText-fontColor);
        }
        img,
        svg {
          width: 20px;
          height: 20px;
        }
        &.disabled {
          pointer-events: none;
          .mat-hint {
            color: var(--inputText-disabledFontColor);
          }
          .mat-form-field-empty mat-label {
            color: var(--inputText-disabledFontColor);
          }
          &.mat-focused .mat-form-field-empty mat-label {
            color: var(--inputText-disabledFontColor);
          }
          .mat-form-field-label:not(.mat-form-field-empty) mat-label {
            color: var(--inputText-disabledFontColor);
          }
          .mat-form-field-wrapper {
            .mat-mdc-form-field-flex {
              .mat-mdc-form-field-infix input {
                color: var(--inputText-disabledFontColor);
              }
            }
          }
        }
      }

      label.mat-form-field-label {
        color: var(--inputText-fontColor);
      }
      input::placeholder {
        color: var(--inputText-placeholderColor);
      }
      ${this.invalid
        ? this.getInvalidStyle()
        : css`
            .mat-hint {
              color: var(--inputText-fontColor);
            }
            .mat-form-field-underline {
              .mat-form-field-ripple {
                background-color: var(--inputText-fontColor) !important;
              }
            }
          `}
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
              color: var(--inputText-error);
            }
          }
        }
        .mat-form-field-subscript-wrapper {
          margin-top: 6px;
        }
        .mat-mdc-form-field-infix {
          padding-top: 6px;
          display: flex;
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

  getInvalidStyle() {
    return css`
      .mat-hint {
        color: var(--inputText-error);
      }
      .mat-form-field-ripple {
        background-color: var(--inputText-error) !important;
      }
      .mat-form-field-underline {
        background-color: var(--inputText-fontColor) !important;
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--inputText-error);
        }
      }
      .mat-form-field.mat-form-field-should-float mat-label {
        color: var(--inputText-error) !important;
      }
      &.mat-focused .mat-form-field-empty mat-label {
        color: var(--inputText-error);
      }
      .mat-form-field-label:not(.mat-form-field-empty) mat-label {
        color: var(--inputText-error);
      }
    `;
  }

  getAutoCompleteStyle() {
    return css`
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
      .mat-option {
        color: var(--inputText-hoverOptionColor);
      }
      .mat-option.mat-selected:not(:hover):not(.mat-option-disabled) {
        background-color: var(
          --inputText-selectedOptionBackgroundColor
        ) !important;
        color: var(--inputText-hoverOptionColor);
      }
      .mat-option:hover:not(.mat-option-disabled),
      .mat-option:focus:not(.mat-option-disabled) {
        background-color: var(--inputText-selectedOptionBackgroundColor);
        color: var(--inputText-hoverOptionColor);
      }
      .errorOption {
        .mat-option-text {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    `;
  }
}
