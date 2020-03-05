import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnInit,
  ViewChild,
  SimpleChanges,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

import { ErrorStateMatcher, MatDatepicker } from "@angular/material";

import { FormControl } from "@angular/forms";
import * as momentImported from "moment";

const moment = momentImported;

export enum Formats {
  "MM/DD/YYYY",
  "DD/MM/YYYY",
  "YYYY/MM/DD",
  "YYYY-MM-DD",
  "DD-MM-YYYY",
  "MM-DD-YYYY",
  "DD.MM.YYYY",
  "MM.DD.YYYY",
  "YYYY.MM.DD"
}

@Component({
  selector: "dxc-date",
  templateUrl: "./dxc-date.component.html",
  styleUrls: [
    "./dxc-light-date.scss",
    "./dxc-dark-date.scss"
  ],
  providers: [CssUtils]
})
export class DxcDateComponent implements OnChanges, OnInit {
  @Input() min: any;
  @Input() max: any;
  @Input() value: Date;
  @Input() theme: string;
  @Input() invalid: boolean;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() assistiveText: string;
  @Input() iconSrc: string;
  @Input() name: string;
  @Input() id: string;
  @Input() format: string;
  @Input() showMask: boolean;
  @Input() label: string;
  @Input() margin: any;
  @Input() size: string;

  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onInputChange: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    min: null,
    max: null,
    value: null,
    theme: "light",
    invalid: false,
    disabled: false,
    disableRipple: false,
    required: false,
    assistiveText: null,
    iconSrc: null,
    name: null,
    id: null,
    format: "DD/MM/YYYY",
    showMask: true,
    label: null,
    margin: null,
    size: "medium"
  });

  public maskObject: {};
  public matcher = new InvalidStateMatcher();
  public formControl = new FormControl();

  @ViewChild("picker", { static: true }) picker: MatDatepicker<any>;

  sizes = {
    medium: "240px",
    large: "480px",
    fillParent: "100%"
  };

  constructor(private utils: CssUtils) {}

  public ngOnInit(): void {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.format =
      this.format != null
        ? this.format.toUpperCase()
        : this.defaultInputs.getValue().format;
    this.checkFormat();

    this.maskObject = { format: this.format, showMask: this.showMask };

    this.picker.openedStream.subscribe(() => {
      this.picker._datepickerInput[
        "_dateFormats"
      ].display.dateInput = this.format.toUpperCase();
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.isDisabled = this.disabled;
    this.value = this.value || new Date();
    this.maskObject = { format: this.format, showMask: this.showMask };
    this.matcher.setInvalid(this.invalid);
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public valueChanged($event: any): void {
    let _dateValue = moment($event.targetElement.value, this.format, true);
    if (_dateValue.isValid()) {
      this.value = $event.target.value;
      this.onChange.emit(this.value);
    }
  }

  public dateInput($event: any): void {
    this.onInputChange.emit($event.targetElement.value);
  }

  public dateFormat() {
    return this.format.toLowerCase().replace(/m/g, "M");
  }

  /**
   * Check the user format and throw an error if it is not compatible
   */
  private checkFormat(): void {
    const isFormatCorrect = Object.values(Formats).includes(this.format);
    if (!isFormatCorrect) {
      throw new Error("Invalid Date format");
    }
  }

  getDynamicStyle(inputs) {
    return css`
      &.disabled {
        cursor: not-allowed;
      }
      .disabled {
        cursor: not-allowed;
      }
      .mat-icon-button {
        width: 33px;
        height: 33px;
        .mat-button-ripple {
          width: 33px;
          height: 33px;
        }
      }
      .mat-form-field-suffix {
        margin-right: 8px;
      }

      .mat-form-field {
        ${this.utils.getMargins(inputs.margin)}
        ${this.utils.calculateWidth(this.sizes, inputs)}
        line-height: unset;
        &.form-field-should-float {
          label {
            color: black;
          }
        }
      }

      img {
        width: 20px;
        height: 20px;
      }

      .mat-form-field-wrapper {
      }
      .mat-datepicker-toggle-default-icon {
        width: 20px !important;
        height: 20px;
      }
      .mat-form-field-infix {
      }
      .mat-form-field-infix .mat-form-field-label-wrapper {
        display: flex;
        .mat-form-field-label {
          flex-direction: row-reverse;
          justify-content: flex-end;
          display: flex !important;
        }
      }

      .dxc-date-date-panel {
        padding: 20px;
        height: 314px;
        width: 256px;

        .mat-calendar-content {
          height: 88%;
        }
        .mat-calendar-table {
          height: 100%;
        }
        .mat-calendar-header {
          color: black;
          padding: 0px;
          .mat-calendar-controls {
            margin: 0px;
          }
          .mat-calendar-arrow {
            margin-left: 8px;
          }
        }
        div.mat-calendar-body-selected {
          border-color: #000000;
          background: #000000;
          color: #ffed00;
        }
        mat-month-view .mat-calendar-body-cell-content {
          width: 28px;
          height: 28px;
        }
        td:not(.mat-calendar-body-disabled) .mat-calendar-body-cell-content {
          &:hover {
            background-color: #d9d9d9 !important;
          }
          mat-multi-year-view .mat-calendar-body-cell-content,
          mat-year-view .mat-calendar-body-cell-content {
            width: 55px;
            height: 33px;
          }
          .mat-calendar-period-button {
            padding: 0px;
            height: 34px;
            width: 94px;
            &:hover {
              background: #00000012;
            }
          }
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
