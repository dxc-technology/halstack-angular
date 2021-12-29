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
  Optional,
} from "@angular/core";
import { css } from "emotion";
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
import { InputTextService } from "./services/inputText.service";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

@Component({
  selector: "dxc-input-text",
  templateUrl: "./dxc-input-text.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils, InputTextService],
})
export class DxcTextInputComponent
  implements OnInit, OnChanges, AfterViewChecked
{
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;
  @HostBinding("class.light") lightBackground: boolean = true;
  @HostBinding("class.dark") darkBackground: boolean = false;
  @HostBinding("class.prefixIcon") hasPrefixIcon: boolean = false;

  @Input() public prefix: string;
  @Input() public suffix: string;
  @Input() public prefixIconSrc: string;
  @Input() public suffixIconSrc: string;
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

  constructor(
    private utils: CssUtils,
    private ref: ChangeDetectorRef,
    private service: InputTextService,
    @Optional() public bgProviderService?: BackgroundProviderService
  ) {
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
    this.bindAutocompleteOptions();
    this.autocompleteFunction("");

    this.service.hasPrefixIcon.subscribe((value) => {
      if (value) {
        this.hasPrefixIcon = value;
      }
    });
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

    this.renderedValue = this.value || "";
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
    } else {
      $event.target.value = this.renderedValue;
    }
  }

  public onClickOption($event: any) {
    this.onChange.emit($event);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = $event;
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

  getNoIconStyle() {
    return css`
      &:focus {
        outline: none;
      }
      cursor: default;
    `;
  }

  getOnClickPrefixIconStyle() {
    return css`
      &:focus {
        outline: none;
      }
      cursor: default;
    `;
  }

  getStyleOnClickPrefixIconLight() {
    if (this.prefixPointer) {
      return css`
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: #005FCC;
        }
        cursor: pointer;
      `;
    } else {
      this.getNoIconStyle();
    }
  }

  getStyleOnClickSuffixIconLight() {
    if (this.suffixPointer) {
      return css`
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: #005FCC;
        }
        cursor: pointer;
      `;
    } else {
      this.getNoIconStyle();
    }
  }

  getStyleOnClickPrefixIconDark() {
    if (this.prefixPointer) {
      return css`
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: #005FCC;
        }
        cursor: pointer;
      `;
    } else {
      this.getNoIconStyle();
    }
  }

  getStyleOnClickSuffixIconDark() {
    if (this.suffixPointer) {
      return css`
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: #005FCC;
        }
        cursor: pointer;
      `;
    } else {
      this.getNoIconStyle();
    }
  }

  getDynamicStyle(inputs) {
    return css`
      min-height: 34px;
      max-height: 74px;
      ${this.calculateWidth(inputs)}
      ${this.utils.getMargins(inputs.margin)}
      ${this.getLightStyle()}
      ${this.getDarkStyle()}
      display: inline-flex;
      font-family: var(--inputText-fontFamily);
      &.prefixIcon {
        .mat-form-field .mat-form-field-label-wrapper .mat-form-field-label {
          margin-left: 32px;
          width: 100%;
        }
      }
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
      }
      .prefixElement {
        margin-right: 12px;
      }
      .suffixElement {
        margin-left: 8px;
        margin-right: 8px;
      }
      .mat-form-field-prefix span {
        font-size: var(--inputText-prefixLabelFontSize);
        font-style: var(--inputText-prefixLabelFontStyle);
        font-weight: var(--inputText-prefixLabelFontWeight);
      }
      .mat-form-field-suffix span {
        font-size: var(--inputText-suffixLabelFontSize);
        font-style: var(--inputText-suffixLabelFontStyle);
        font-weight: var(--inputText-suffixLabelFontWeight);
      }
      .mat-form-field.mat-focused .mat-form-field-ripple {
        height: calc(var(--inputText-underlineThickness) * 2) !important;
      }
      .mat-form-field {
        font-family: var(--inputText-fontFamily);
        line-height: unset;
        width: 100%;
        max-height: 74px;
        input {
          color: var(--inputText-valueFontColor);
          font-size: var(--inputText-valueFontSize);
          font-style: var(--inputText-valueFontStyle);
          font-weight: var(--inputText-valueFontWeight);
          min-height: 22px;
          text-overflow: ellipsis;
        }
        img,
        svg {
          width: 20px;
          height: 20px;
        }
        &.disabled {
          pointer-events: none;
        }
      }
      .mat-form-field {
        &.mat-form-field-should-float {
          .mat-form-field-infix {
            padding-bottom: 6px;
          }
          mat-label {
            font-size: var(--inputText-labelFontSize);
            font-family: var(--inputText-fontFamily);
            font-style: var(--inputText-labelFontStyle);
            font-weight: var(--inputText-labelFontWeight);
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
          margin-top: 7px;
        }
        .mat-form-field-infix {
          padding-top: 6px;
          display: flex;
        }
      }
      .mat-form-field-flex {
        align-items: center;
        .mat-form-field-infix {
          color: var(--inputText-labelFontColor);
          font-size: var(--inputText-labelFontSize);
          font-family: var(--inputText-fontFamily);
          font-style: var(--inputText-labelFontStyle);
          font-weight: var(--inputText-labelFontWeight);
          border-top: unset;
        }
      }
      .mat-hint {
        font-family: var(--inputText-fontFamily);
        font-size: var(--inputText-assistiveTextFontSize);
        font-style: var(--inputText-assistiveTextFontStyle);
        font-weight: var(--inputText-assistiveTextFontWeight);
      }
      .mat-form-field-appearance-standard .mat-form-field-underline {
        height: var(--inputText-underlineThickness);
      }
    `;
  }

  getInvalidLightStyle() {
    return css`
      .mat-hint {
        color: var(--inputText-errorColor);
      }
      .mat-form-field-ripple {
        background-color: var(--inputText-errorColor) !important;
        height: 0px !important;
      }
      .mat-form-field-underline {
        background-color: var(--inputText-underlineColor) !important;
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--inputText-errorColor);
        }
      }
      .mat-form-field.mat-form-field-should-float mat-label {
        color: var(--inputText-errorColor) !important;
      }
      &.mat-focused .mat-form-field-empty mat-label {
        color: var(--inputText-errorColor);
      }
      .mat-form-field-label:not(.mat-form-field-empty) mat-label {
        color: var(--inputText-errorColor);
      }
    `;
  }

  getInvalidDarkStyle() {
    return css`
      .mat-hint {
        color: var(--inputText-errorColorOnDark);
      }
      .mat-form-field-ripple {
        background-color: var(--inputText-errorColorOnDark) !important;
        height: 0px !important;
      }
      .mat-form-field-underline {
        background-color: var(--inputText-underlineColorOnDark) !important;
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--inputText-errorColorOnDark);
          outline-style: solid !important;
        }
      }
      .mat-form-field.mat-form-field-should-float mat-label {
        color: var(--inputText-errorColorOnDark) !important;
      }
      &.mat-focused .mat-form-field-empty mat-label {
        color: var(--inputText-errorColorOnDark);
      }
      .mat-form-field-label:not(.mat-form-field-empty) mat-label {
        color: var(--inputText-errorColorOnDark);
      }
    `;
  }

  getAutoCompleteStyle() {
    return css`
      padding: 0px 2px;
      border-color: var(--inputText-optionBorderColor);
      border-width: var(--inputText-optionBorderThickness);
      border-style: var(--inputText-optionBorderStyle);
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
        background-color: var(--inputText-optionBackgroundColor);
        padding-bottom:  var(--inputText-optionPaddingBottom);
        padding-top:  var(--inputText-optionPaddingTop);
        height: 36px;
        .mat-option-text {
          color: var(--inputText-optionFontColor);
          font-family: var(--inputText-fontFamily);
          font-size: var(--inputText-optionFontSize);
          font-style: var(--inputText-optionFontStyle);
          font-weight: var(--inputText-optionFontWeight);
        }
      }
      .mat-option.mat-selected:not(:hover):not(.mat-option-disabled) {
        color: var(--inputText-optionFontColor);
      }
      .mat-option:hover:not(.mat-option-disabled) {
        background-color: var(--inputText-hoverOptionBackgroundColor);
        .mat-option-text{
          color: var(--inputText-hoverOptionColor);
        }
      }
      .mat-option:focus:not(.mat-option-disabled) {
        outline: -webkit-focus-ring-color auto 2px;
        outline-color: #005FCC;
        outline-style: solid !important;
        outline-offset: -1px;
      }
      .mat-option:active:not(.mat-option-disabled) {
        background-color: var(--inputText-selectedOptionBackgroundColor);
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

  getLightStyle() {
    return css`
      &.light {
        &.disabled {
          cursor: not-allowed;
          dxc-input-prefix-icon,
          dxc-input-suffix-icon {
            .containerIcon {
              fill: var(--inputText-disabledColor);
            }
          }
          .prefixElement,
          .suffixElement {
            fill: var(--inputText-disabledColor);
            color: var(--inputText-disabledColor);
          }
          .mat-hint {
            color: var(--inputText-disabledColor);
          }
          .mat-form-field-underline {
            background-color: var(--inputText-disabledColor) !important;
          }
          .mat-form-field-empty mat-label {
            color: var(--inputText-disabledColor);
          }
          &.mat-focused .mat-form-field-empty mat-label {
            color: var(--inputText-disabledColor);
          }
          .mat-form-field-label:not(.mat-form-field-empty) mat-label {
            color: var(--inputText-disabledColor);
          }
          .mat-form-field-wrapper {
            .mat-form-field-flex {
              .mat-form-field-infix input {
                color: var(--inputText-disabledColor);
              }
            }
          }
        }
        .onClickIconElement {
          .containerIcon {
            &:focus {
              outline: -webkit-focus-ring-color auto 1px;
              outline-color: #005FCC;
            }
          }
        }
        .mat-form-field.mat-focused .mat-form-field-label {
          color: var(--inputText-labelFontColor) !important;
        }
        .mat-form-field.mat-focused .mat-form-field-ripple {
          background-color: ${this.invalid
            ? "var(--inputText-errorColor) !important"
            : "var(--inputText-underlineFocusColor) !important"};
        }
        .mat-form-field {
          input {
            caret-color: var(--inputText-valueFontColor);
            color: var(--inputText-valueFontColor);
          }
        }
        dxc-input-suffix-icon {
          color: var(--inputText-suffixIconColor);
        }
        dxc-input-prefix-icon {
          color: var(--inputText-prefixIconColor);
        }
        .mat-form-field-prefix span {
          color: var(--inputText-prefixLabelFontColor);
        }
        .mat-form-field-suffix span {
          color: var(--inputText-suffixLabelFontColor);
        }
        label.mat-form-field-label {
          color: var(--inputText-labelFontColor);
        }
        input::placeholder {
          color: var(--inputText-labelFontColor);
        }
        .mat-form-field {
          .mat-form-field-label-wrapper {
            .mat-form-field-label {
              span {
                color: var(--inputText-errorColor);
              }
            }
          }
        }
        ${this.invalid
          ? this.getInvalidLightStyle()
          : css`
              .mat-hint {
                color: var(--inputText-assistiveTextFontColor);
              }
              .mat-form-field-underline {
                background-color: var(--inputText-underlineColor) !important;
                .mat-form-field-ripple {
                  height: 0px;
                  background-color: var(
                    --inputText-underlineFocusColor
                  ) !important;
                }
              }
            `}
        .prefixElement {
          ${this.getStyleOnClickPrefixIconLight()}
          color: var(--inputText-prefixIconColor);
          fill: var(--inputText-prefixIconColor);
        }
        .suffixElement {
          ${this.getStyleOnClickSuffixIconLight()}
          color: var(--inputText-suffixIconColor);
          fill: var(--inputText-suffixIconColor);
        }
      }
    `;
  }

  getDarkStyle() {
    return css`
      &.dark {
        &.disabled {
          cursor: not-allowed;
          dxc-input-prefix-icon,
          dxc-input-suffix-icon {
            .containerIcon {
              fill: var(--inputText-disabledColorOnDark);
            }
          }
          .prefixElement,
          .suffixElement {
            fill: var(--inputText-disabledColorOnDark);
            color: var(--inputText-disabledColorOnDark);
          }
          .mat-hint {
            color: var(--inputText-disabledColorOnDark);
          }
          .mat-form-field-underline {
            background-color: var(
              --inputText-disabledColorOnDark
            ) !important;
          }
          .mat-form-field-empty mat-label {
            color: var(--inputText-disabledColorOnDark);
          }
          &.mat-focused .mat-form-field-empty mat-label {
            color: var(--inputText-disabledColorOnDark);
          }
          .mat-form-field-label:not(.mat-form-field-empty) mat-label {
            color: var(--inputText-disabledColorOnDark);
          }
          .mat-form-field-wrapper {
            .mat-form-field-flex {
              .mat-form-field-infix input {
                color: var(--inputText-disabledColorOnDark);
              }
            }
          }
        }
        .onClickIconElement {
          .containerIcon {
            &:focus {
              outline: -webkit-focus-ring-color auto 1px;
              outline-color: #005FCC;
            }
          }
        }
        .mat-form-field.mat-focused .mat-form-field-label {
          color: var(--inputText-labelFontColorOnDark) !important;
        }
        .mat-form-field.mat-focused .mat-form-field-ripple {
          background-color: ${this.invalid
            ? "var(--inputText-errorColorOnDark) !important"
            : "var(--inputText-underlineFocusColorOnDark) !important"};
        }
        .mat-form-field {
          input {
            caret-color: var(--inputText-valueFontColorOnDark);
            color: var(--inputText-valueFontColorOnDark);
          }
        }
        label.mat-form-field-label {
          color: var(--inputText-labelFontColorOnDark);
        }
        dxc-input-suffix-icon {
          color: var(--inputText-suffixIconColorOnDark);
          fill: var(--inputText-suffixIconColorOnDark);
        }
        dxc-input-prefix-icon {
          color: var(--inputText-prefixIconColorOnDark);
          fill: var(--inputText-prefixIconColorOnDark);
        }
        .mat-form-field-prefix span {
          color: var(--inputText-prefixLabelFontColorOnDark);
        }
        .mat-form-field-suffix span {
          color: var(--inputText-suffixLabelFontColorOnDark);
        }
        label.mat-form-field-label {
          color: var(--inputText-labelFontColorOnDark);
        }
        input::placeholder {
          color: var(--inputText-labelFontColorOnDark);
        }
        .mat-form-field {
          .mat-form-field-label-wrapper {
            .mat-form-field-label {
              span {
                color: var(--inputText-errorColorOnDark);
              }
            }
          }
        }
        ${this.invalid
          ? this.getInvalidDarkStyle()
          : css`
              .mat-hint {
                color: var(--inputText-assistiveTextFontColorOnDark);
              }
              .mat-form-field-underline {
                background-color: var(
                  --inputText-underlineColorOnDark
                ) !important;
                .mat-form-field-ripple {
                  height: 0px;
                  background-color: var(
                    --inputText-underlineColorOnDark
                  ) !important;
                }
              }
            `}
        .prefixElement {
          ${this.getStyleOnClickPrefixIconDark()}
        }
        .suffixElement {
          ${this.getStyleOnClickSuffixIconDark()}
        }
      }
    `;
  }
}
