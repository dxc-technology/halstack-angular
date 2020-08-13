import {
  Component,
  OnChanges,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { ErrorStateMatcher } from "@angular/material";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  ElementRef,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "dxc-input-text",
  templateUrl: "./dxc-input-text.component.html",
  styleUrls: ["./dxc-light-input.scss", "./dxc-dark-input.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils]
})
export class DxcTextInputComponent
  implements OnInit, OnChanges, AfterViewChecked {
  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  @Input() public prefix: string;
  @Input() public suffix: string;
  @Input() public prefixIconSrc: string;
  @Input() public suffixIconSrc: string;

  @Input() public theme: string = "light";
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public invalid: boolean = false;
  @Input() public isMasked: boolean;

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

  loading = new BehaviorSubject(false);
  isError = new BehaviorSubject(false);
  renderedValue = "";
  private _valueChangeTrack: boolean;
  options;
  type:string;

  dxcAutocompleteMenu = this.getAutoCompleteStyle();

  @ViewChild("dxcSingleInput", { static: false }) singleInput: ElementRef;

  selectionStart: number = 0;
  selectionEnd: number = 0;
  clicked: boolean = false;

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%"
  };

  defaultInputs = new BehaviorSubject<any>({
    prefix: null,
    suffix: null,
    prefixIconSrc: null,
    suffixIconSrc: null,
    theme: "light",
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
    isMasked: false
  });

  public formControl = new FormControl();
  public matcher = new InvalidStateMatcher();

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
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    if(this.isMasked){
      this.type = "password";
    }
    else{
      this.type = "text";
    }
    this.isDisabled = this.disabled;

    this.renderedValue = this.value || "";
    this.label = this.label || "";
    this.matcher.setInvalid(this.invalid);

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
      this.options = this.autocompleteOptions.filter(option =>
        option.toLowerCase().includes(inputValue)
      );
    } else if (
      this.autocompleteOptions &&
      typeof this.autocompleteOptions === "function"
    ) {
      this.loading.next(true);
      this.isError.next(false);
      this.autocompleteOptions(value).subscribe(
        autocompleteOptionsList => {
          this.options = autocompleteOptionsList;
          this.ref.markForCheck();
          this.loading.next(false);
        },
        err => {
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

  public onClickSuffixHandler($event): void {
    this.onClickSuffix.emit($event);
  }

  public onClickPrefixHandler($event): void {
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
      }
      .suffixElement {
        margin-left: 8px;
        margin-right: 8px;
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
        }
        img {
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

  getAutoCompleteStyle() {
    return css`
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: var(--lightGrey, #d9d9d9);
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--darkGrey, #666666);
        border-radius: 3px;
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

/** Error when invalid control is dirty, touched, or submitted. */
class InvalidStateMatcher implements ErrorStateMatcher {
  private invalid: boolean;
  isErrorState(): boolean {
    return this.invalid;
  }

  public setInvalid(invalid: boolean): void {
    this.invalid = invalid;
  }
}
