import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy,
  ViewChild,
  forwardRef
} from "@angular/core";
import { ErrorStateMatcher } from "@angular/material/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../scss/utils";
import { ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { css } from "emotion";

@Component({
  selector: 'dxc-number',
  templateUrl: './dxc-number.component.html',
  styleUrls: ['./dxc-number.component.scss'],
  providers: [CssUtils, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcNumberComponent),
    multi: true
  }]
})
export class DxcNumberComponent implements OnInit, ControlValueAccessor {

  @HostBinding("class") className;

  @Input() public prefix: string;
  @Input() public suffix: string;
  @Input() public prefixIconSrc: string;
  @Input() public suffixIconSrc: string;

  @Input() public theme: string = "light";
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public multiline: boolean = false;
  @Input() public invalid: boolean = false;

  @Input() public label: String;
  @Input() public assistiveText: string;
  @Input() public name: string;
  @Input() public value: string;
  @Input() public placeholder: string;
  @Input() public allowVisibility = false;
  @Input() public margin: any;
  @Input() public size: string;
  @Input() minValue = 0;
  @Input() maxValue = -1;
  @Input() decimalPlace = 0;
  @Input() allowDecimal = false;
  
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null; 
  @Input('ariaRequired') ariaRequired: boolean = false;

  @Output() public onClickSuffix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onClickPrefix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  renderedValue = '';
  private _valueChangeTrack: boolean;

  @ViewChild('dxcSingleInput', { static: false }) singleInput: ElementRef;
  @ViewChild('dxcMultiInput', { static: false }) multiInput: ElementRef;

  selectionStart: number = 0;
  selectionEnd: number = 0;
  clicked: boolean = false;
  type = 'text';

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
    multiline: false,
    invalid: false,
    label: null,
    assistiveText: null,
    placeholder: null,
    name: null,
    value: null,
    margin: null,
    size: "medium"
  });

  public formControl = new FormControl();
  public matcher = new InvalidStateMatcher();

  constructor(private utils: CssUtils) {
  }
  public onTouched: () => void = () => { };
  public onChangeRegister = (val) => { };

  ngOnInit() {
    this.renderedValue = formatNumber(this.minValue, this.maxValue, this.allowDecimal, this.decimalPlace, this.value || '')
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngAfterViewChecked(): void {
    if (this._valueChangeTrack) {
      this._valueChangeTrack = false;
      this.multiline ? this.setCursorSelection(this.multiInput) : this.setCursorSelection(this.singleInput);
    }
  }


  writeValue(val: any): void {
    this.value = formatNumber(this.minValue, this.maxValue, this.allowDecimal, this.decimalPlace, val);
    this.renderedValue = this.value;
  }

  registerOnChange(fn: any): void {
    this.onChangeRegister = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState(value): void {
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...{disabled: value} });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this._valueChangeTrack = true;
    this.disabled = value;
  }
  
  public ngOnChanges(changes: SimpleChanges): void {
    this.renderedValue = formatNumber(this.minValue, this.maxValue, this.allowDecimal, this.decimalPlace, this.value || '')
    this.label = this.label || '';
    this.matcher.setInvalid(this.invalid);

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this._valueChangeTrack = true;
    this.onChangeRegister(this.renderedValue);
  }

  public onChanged($event: any): void {
    this.clicked = false;
    this.renderedValue = $event.target.value;
    // $event.target.value = formatNumber(this.minValue, this.maxValue, this.allowDecimal, this.decimalPlace, $event.target.value)
    this.onChange.emit($event.target.value);
    this.renderedValue = $event.target.value;
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
    this.renderedValue = formatNumber(this.minValue, this.maxValue, this.allowDecimal, this.decimalPlace, this.renderedValue);
    //let number = this.allowDecimal ? parseFloat(this.renderedValue) : parseInt(this.renderedValue);
    // if(isNaN(number)){
    //   number = 0;
    // }
    // this.renderedValue = number.toString();
    //
    this.onBlur.emit(this.renderedValue);
    this.onTouched();
    this.onChangeRegister(this.renderedValue);
  }

  public onClickSuffixHandler($event): void {
    this.onClickSuffix.emit($event);
  }

  public onClickPrefixHandler($event): void {
    this.onClickPrefix.emit($event);
  }

  private setCursorSelection(input: ElementRef) {
    if (!this.clicked && input) {
      // input.nativeElement.selectionStart = this.selectionStart;
      // input.nativeElement.selectionEnd = this.selectionEnd;
    }
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    // return css`
    //   width: ${this.sizes[inputs.size]};
    // `;
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
        cursor: not-allowed;
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


function formatNumber(minValue, maxValue, allowdecimalvalue, decimalPlace, value) {
  let transformedInput;
  if (value) {
    if (allowdecimalvalue) {
      const valString = value.toString();
      transformedInput = parseFloat(valString.replace(/[^0-9\.]/g, ''));
    } else {
      const valString = value.toString();
      transformedInput = parseFloat(valString.replace(/[[+-]?^0-9]/g, ''));
    }
    if(isNaN(transformedInput))
    {
      transformedInput = 0;
    }
    if(decimalPlace>0){
      transformedInput = parseFloat(parseFloat(transformedInput).toFixed(decimalPlace));
      }

      if(minValue)
      {
      if (parseFloat(transformedInput) < parseFloat(minValue)) {
      transformedInput = parseFloat(minValue);
      }
      }
      
      if (maxValue && maxValue !== -1) {
      if (parseFloat(transformedInput) > parseFloat(maxValue)) {
      transformedInput = parseFloat(maxValue);
      }
      }

    if (transformedInput !== 0) {
      const transformedInputV = transformedInput.toString();
      transformedInput = parseFloat(transformedInputV.replace(/\b(?:0*(\.\d+)|0+)/g, '$1'));    }

    if (transformedInput === '')
      transformedInput = 0;

    return transformedInput;
  }
  else {
    return minValue ? minValue : 0;
  }
}
