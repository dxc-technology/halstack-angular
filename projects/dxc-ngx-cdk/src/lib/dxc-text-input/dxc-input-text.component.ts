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
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ElementRef,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from "@angular/core";

@Component({
  selector: "dxc-input-text",
  templateUrl: "./dxc-input-text.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils],
})
export class DxcTextInputComponent
  implements OnInit, OnChanges, AfterViewChecked {
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;

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

  @Output() public onClickSuffix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onClickPrefix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  prefixIndex = 0;
  suffixIndex = 0;
  prefixPointer = true;
  suffixPointer = true;

  loading = new BehaviorSubject(false);
  isError = new BehaviorSubject(false);
  renderedValue = "";
  private _valueChangeTrack: boolean;
  options;
  type: string;
  dxcAutocompleteMenu = this.getAutoCompleteStyle();

  @ViewChild("dxcSingleInput", { static: false }) singleInput: ElementRef;

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
  });

  constructor(private utils: CssUtils, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.renderedValue = this.value || "";
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
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

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this._valueChangeTrack = true;

    if(this.onClickSuffix.observers !== undefined){
      if (this.onClickSuffix.observers.length === 0) {
        this.suffixPointer = false;
      }
    }

    if(this.onClickPrefix.observers !== undefined){
      if (this.onClickPrefix.observers.length === 0) {
        this.prefixPointer = false;
      }
    }

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

  getDynamicStyle(inputs) {
    return css`
      min-height: 34px;
      max-height: 74px;
      ${this.calculateWidth(inputs)}
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      .prefixElement {
        margin-right: 12px;
        cursor: ${this.prefixPointer ? "pointer" : "default"};
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--inputText-focusColor);
        }
      }
      .suffixElement {
        margin-left: 8px;
        margin-right: 8px;
        cursor: ${this.suffixPointer ? "pointer" : "default"};
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--inputText-focusColor);
        }
      }
      &.disabled {
        cursor: default;
      }
      .mat-form-field {
        line-height: unset;
        width: 100%;
        max-height: 74px;
        input {
          min-height: 22px;
          text-overflow: ellipsis;
          color: var(--inputText-fontColor);
        }
        dxc-svg {
          width: 20px;
          height: 20px;
          display: flex;
          svg {
            fill: currentcolor;
          }
        }
        &.disabled {
          pointer-events: none;
          .mat-hint {
            opacity: var(--inputText-disabled);
          }
          .mat-form-field-underline {
            opacity: var(--inputText-disabled);
          }
          .mat-form-field-empty mat-label {
            opacity: var(--inputText-disabled);
          }
          &.mat-focused .mat-form-field-empty mat-label {
            opacity: var(--inputText-disabled);
          }
          .mat-form-field-label:not(.mat-form-field-empty) mat-label {
            opacity: var(--inputText-disabled);
          }
          .mat-form-field-wrapper {
            .mat-form-field-flex {
              .mat-form-field-infix input {
                opacity: var(--inputText-disabled);
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
            background-color: var(--inputText-fontColor);
          }
      `}
      .mat-form-field {
        &.mat-form-field-should-float {
          .mat-form-field-infix {
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
              color: var(--inputText-invalidColor);
            }
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

  getInvalidStyle(){
    return css`
      .mat-hint {
        color: var(--inputText-invalidColor);
      }
      .mat-form-field-ripple {
        background-color: var(--inputText-invalidColor) !important;
      }
      .mat-form-field-underline {
        background-color: var(--inputText-invalidColor);
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--inputText-invalidColor);
        }
      }
      .mat-form-field-empty mat-label {
        color: var(--inputText-fontColor);
      }
      &.mat-focused .mat-form-field-empty mat-label {
        color: var(--inputText-invalidColor);
      }
      .mat-form-field-label:not(.mat-form-field-empty) mat-label {
        color: var(--inputText-invalidColor);
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
        background-color: var(--inputText-hoverOptionBackgroundColor);
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
