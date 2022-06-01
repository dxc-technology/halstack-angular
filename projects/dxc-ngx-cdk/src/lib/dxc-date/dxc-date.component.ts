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
  forwardRef,
  ElementRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import * as momentImported from "moment";
import { MatCalendar } from "@angular/material/datepicker";
import { Moment } from "moment";
import { MdePopoverTrigger } from "@material-extended/mde";
import { HostListener } from "@angular/core";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { DatePipe } from '@angular/common';
import { DateHelper } from './helpers/date-helper';
const moment = momentImported;

@Component({
  selector: "dxc-date",
  templateUrl: "./dxc-date.component.html",
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcDateComponent),
    multi: true
  }, CssUtils]
})
export class DxcDateComponent implements OnChanges, OnInit, ControlValueAccessor {
  @Input()
  get value() {
    return this.userDate;
  }
  set value(val: string) {
    if (val && val != '') {
      let date = (this.customOutput == true) ? this.helper.dateLostFocus(val, this.format) : val;
      this.renderedValue = date;
      this.date = date;
      if (date == '') {
        this.userDate = '';
        date = null;
      }

      let ustDate = '';
      if (date != null && date != '') {
        ustDate = (this.customOutput == true) ? this.helper.convertDateToUserFormat(moment(date, this.format.toUpperCase()).toDate()) : date;
      }
      this.userDate = ustDate;
      this.onChangeRegister(this.value);
    }
    else {
      this.userDate = val;
      this.renderedValue = val;
      this.date = val;
      this.onChangeRegister(this.value);
    }
    this.calculateComponentValues();
  }
  @Input() format: string = "dd-MM-yyyy";
  @Input() customOutput = false;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() name: string;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null;
  @Input('ariaRequired') ariaRequired: boolean = false;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
  private _required;
  @Input() assistiveText: string;
  @Input()
  get invalid(): boolean {
    return this._invalid;
  }
  set invalid(value: boolean) {
    this._invalid = coerceBooleanProperty(value);
  }
  private _invalid;
  @Input() margin: any;
  @Input() size: string;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  @HostListener("document:click", ["$event"])
  defaultInputs = new BehaviorSubject<any>({
    value: null,
    format: "dd-MM-yyyy",
    label: null,
    iconSrc: null,
    name: null,
    disabled: false,
    required: false,
    assistiveText: null,
    invalid: false,
    margin: null,
    size: "medium",
    tabIndexValue: 0
  });

  renderedValue: string;
  dateValue: Moment;
  popOverOffsetX: any;
  userDate: string = '';
  date: string = '';
  calendarDynamicStyle: any;
  @ViewChild('calender', { read: ElementRef, static: false }) calender: ElementRef;
  @ViewChild(MdePopoverTrigger, { static: false })
  _dxcTrigger: MdePopoverTrigger;
  @ViewChild("dxcCalendar", { static: false })
  _dxcCalendar: MatCalendar<Moment>;

  private _sizes = ["medium", "large", "fillParent"];

  private _isOpenClicked: boolean = false;
  private _isCalendarOpened: boolean = false;
  private _isSelectingDate: boolean = false;

  constructor(private helper: DateHelper, private datePipe: DatePipe) { }

  private calculateComponentValues(): void {
    this.size = this.size
      ? this._sizes.find((item) => item === this.size)
      : "medium";
    this.popOverOffsetX = this.size === "fillParent" ? null : "130";

    this.isDisabled = this.disabled;
    this.format = this.format
      ? this.format
      : this.defaultInputs.getValue().format;

    this.renderedValue = this.date;
    this.dateValue = this.getMomentValue(this.renderedValue, this.format);
  }

  public ngOnInit(): void {
    this.calculateComponentValues();

    this.className = `${this.getDynamicStyle()}`;
    this.calendarDynamicStyle = `${this.getCalendarContentStyle()}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.calculateComponentValues();

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });

    this.className = `${this.getDynamicStyle()}`;
    this.calendarDynamicStyle = `${this.getCalendarContentStyle()}`;
  }

  onInputChangeHandler(value: string) {
    if (this._isCalendarOpened) this.closeCalendar();
    let _dateValue = this.getMomentValue(value, this.format);
    let _dateReturn = {
      stringValue: value,
      dateValue: _dateValue.isValid() ? _dateValue.toDate() : null,
    };
    if (!this.customOutput) {
      this.onChange.emit(_dateReturn);
    }
    if (!this.value || !this.customOutput) {
      this.value = value;
      this.dateValue = _dateValue;
      if (this.customOutput) {
        this.onChange.emit(this.value);
      }
    }

    if (this.customOutput == true) {
      if (_dateReturn.dateValue instanceof Date) {
        this.value = this.datePipe.transform(_dateReturn.dateValue, this.format);
      }

      else if (_dateReturn.stringValue.length > 10) {
        this.value = _dateReturn.stringValue.substring(0, 10);
      }
      else if (_dateReturn.stringValue.length == 0) {
        this.value = '';
      }
      else {
        this.value = _dateReturn.stringValue;
        return false;
      }
    }
  }

  onSelectedChangeHandler(value: Moment) {
    let _stringValue = this.getDateStringValue(value, this.format);
    let _dateReturn = {
      stringValue: _stringValue,
      dateValue: value.isValid() ? value.toDate() : null,
    };
    if (!this.customOutput) {
      this.onChange.emit(_dateReturn);
    }
    if (!this.value || this.customOutput) {
      this.dateValue = value;
      this.value = _stringValue;
      if (this.customOutput) {
        this.onChange.emit(this.value);
      }
    }
    this.closeCalendar();
  }

  onBlurHandler(value: string) {
    if (this.customOutput == true) {
      if (value != '' && value != null) {
        this.value = value;
      }
      else {
        this.value = '';
      }
      this.onChangeRegister(this.value);
    }
    this.onBlur.emit(value);
  }

  onKeyPress($event) {
    var keyCode = $event.keyCode || $event.charCode;
    var value = String.fromCharCode(keyCode);
    if (!$event.ctrlKey && !value.match(/^[0-9\/]+$/) && keyCode != 9 && keyCode != 37 &&
      keyCode != 39 && keyCode != 8 && keyCode != 46 && keyCode != 35 && keyCode != 36) {
      $event.preventDefault();
    }
  }

  @HostListener("document:click", ["$event"])
  public onClickOutsideHandler(event) {
    if (
      event.target.offsetParent &&
      event.target.offsetParent?.getAttribute("class")
    ) {
      if (
        !event.target.offsetParent
          .getAttribute("class")
          .includes("mde-popover-panel") &&
        !event.target.offsetParent
          .getAttribute("class")
          .includes("mat-calendar-period") &&
        !event.target.offsetParent
          .getAttribute("class")
          .includes("mat-calendar-table") &&
          !event.target.getAttribute("class")
          .includes("mat-calendar-previous-button") &&
          !event.target.getAttribute("class")
          .includes("mat-calendar-next-button") &&
          !event.target.getAttribute("class")
          .includes("mat-calendar")

      ) {
        this.checkOpenCalendar();
      }
    } else {
      this.checkOpenCalendar();
    }
  }

  private checkOpenCalendar() {
    if (this._isCalendarOpened) {
      if (!this._isOpenClicked && !this._isSelectingDate) {
        this.closeCalendar();
      } else {
        this._isOpenClicked = false;
        this._isSelectingDate = false;
      }
    }
  }

  public openCalendar() {
    this._dxcCalendar.activeDate = this.dateValue.isValid()
      ? this.dateValue
      : moment();
    this._dxcCalendar.currentView = "month";
    this._dxcTrigger.openPopover();
    setTimeout(() => {
      this.calender.nativeElement.focus();
    }, 100);
    this.resetCalendarState(true);
  }

  public closeCalendar() {
    this._dxcTrigger.closePopover();
    this.resetCalendarState();
  }

  public onSelectingDateHandler() {
    this._isSelectingDate = true;
  }

  public onTouched: () => void = () => { };
  onChangeRegister = (val) => { };

  writeValue(val: any): void {
    if (val && val != '') {
      this.value = this.helper.convertDateToControlFormat(val, this.format);
    }
    else {
      this.value = null;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeRegister = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(value): void {
    this.disabled = value;
  }

  formAtDateStrtoObj = (dateStr: string, format: string) => {
    if (dateStr) {
      if (dateStr.toString().length == 10) {
        return moment(dateStr, format.toUpperCase()).toDate();
      }
    }
  }

  private resetCalendarState(value: boolean = false) {
    this._isOpenClicked = this._isCalendarOpened = this._isSelectingDate = value;
  }

  private getMomentValue(value: string, format: string) {
    return moment(value, format.toUpperCase(), true);
  }

  private getDateStringValue(value: Moment, format: string) {
    return value.format(format.toUpperCase());
  }

  getCalendarContentStyle() {
    return css`
      width: 297px;
      background: var(--date-pickerBackgroundColor);
      .caln-btn button{
        padding: 0px;
        margin: 0px;
      }
      .mat-calendar {
        font-family: var(--fontFamily);
        width: 100%;
      }
      .mat-calendar-content {
        height: 88%;
      }
      .mat-calendar-table {
        height: 100%;
      }
      .mat-calendar-header {
        color: var(--date-color);
        padding: 0px;
        margin-bottom: 5px;
        .mat-calendar-controls {
          margin: 0px;
        }
        .mat-calendar-arrow {
          margin-left: 8px;
        }
      }
      .mat-calendar-table-header th {
        font-size: 12px;
      }

      .mat-calendar-period-button {
        font-size: 16px;
      }
      .mat-calendar-body-today:not(.mat-calendar-body-selected) {
        border-color: var(--date-pickerActualDate);
      }
      .mat-calendar-body-selected {
        border-color: var(--date-pickerSelectedDateBackgroundColor);
        background-color: var(--date-pickerSelectedDateBackgroundColor);
        color: var(--date-pickerSelectedDateColor) !important;
        &.mat-calendar-body-today {
          border: none;
          box-shadow: none;
        }
      }
      mat-month-view .mat-calendar-body-cell-content {
        width: 28px;
        height: 28px;
        color: var(--date-pickerFontColor);
      }

      td:not(.mat-calendar-body-disabled) .mat-calendar-body-cell-content {
        &:not(.mat-calendar-body-selected):hover {
          background-color: var(
            --date-pickerHoverDateBackgroundColor
          ) !important;
          color: var(--date-pickerHoverDateFontColor) !important;
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
    `;
  }
  getDynamicStyle() {
    return css`
      &.disabled {
        cursor: not-allowed !important;
      }
      .disabled {
        cursor: not-allowed !important;
      }
      .mat-form-field {
        .mat-form-field-wrapper {
          .mat-form-field-underline {
            &:focus {
              outline: -webkit-focus-ring-color auto 1px;
              outline-color: var(--date-focusColor);
            }
          }
        }
      }
      &:not(.disabled) {
        dxc-input-suffix-icon {
          cursor: pointer !important;
          &:focus {
            outline: -webkit-focus-ring-color auto 1px;
            outline-color: var(--date-focusColor);
          }
        }
      }
    `;
  }
}
