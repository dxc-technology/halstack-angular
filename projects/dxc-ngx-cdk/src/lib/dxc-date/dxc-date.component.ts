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

import * as momentImported from "moment";
import { MatCalendar } from "@angular/material/datepicker";
import { Moment } from "moment";
import { MdePopoverTrigger } from "@material-extended/mde";
import { HostListener } from "@angular/core";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
const moment = momentImported;

@Component({
  selector: "dxc-date",
  templateUrl: "./dxc-date.component.html",
  providers: [CssUtils],
})
export class DxcDateComponent implements OnChanges, OnInit {
  @Input() value: any;
  @Input() format: string = "dd-MM-yyyy";
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() name: string;
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

  calendarDynamicStyle: any;

  @ViewChild(MdePopoverTrigger, { static: false })
  _dxcTrigger: MdePopoverTrigger;
  @ViewChild("dxcCalendar", { static: false })
  _dxcCalendar: MatCalendar<Moment>;

  private _sizes = ["medium", "large", "fillParent"];

  private _isOpenClicked: boolean = false;
  private _isCalendarOpened: boolean = false;
  private _isSelectingDate: boolean = false;

  constructor() {}

  private calculateComponentValues(): void {
    this.size = this.size
      ? this._sizes.find((item) => item === this.size)
      : "medium";
    this.popOverOffsetX = this.size === "fillParent" ? null : "130";

    this.isDisabled = this.disabled;
    this.format = this.format
      ? this.format
      : this.defaultInputs.getValue().format;

    this.renderedValue = this.value;
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
    this.onChange.emit(_dateReturn);

    if (!this.value) {
      this.renderedValue = value;
      this.dateValue = _dateValue;
    }
  }

  onSelectedChangeHandler(value: Moment) {
    let _stringValue = this.getDateStringValue(value, this.format);
    let _dateReturn = {
      stringValue: _stringValue,
      dateValue: value.isValid() ? value.toDate() : null,
    };
    this.onChange.emit(_dateReturn);
    if (!this.value) {
      this.dateValue = value;
      this.renderedValue = _stringValue;
    }
    this.closeCalendar();
  }

  onBlurHandler(value: string) {
    this.onBlur.emit(value);
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
          .includes("mat-calendar-table")
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
    this.resetCalendarState(true);
  }

  public closeCalendar() {
    this._dxcTrigger.closePopover();
    this.resetCalendarState();
  }

  public onSelectingDateHandler() {
    this._isSelectingDate = true;
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
