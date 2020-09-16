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
import { MatCalendar } from '@angular/material/datepicker';
import { Moment } from 'moment';
import { MdePopoverTrigger } from '@material-extended/mde';
const moment = momentImported;

@Component({
  selector: "dxc-date",
  templateUrl: "./dxc-date.component.html",
  providers: [CssUtils]
})
export class DxcDateComponent implements OnChanges, OnInit {

  @Input() value: any;
  @Input() format: string = 'dd-MM-yyyy';
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() name: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() assistiveText: string;
  @Input() invalid: boolean;
  @Input() margin: any;
  @Input() size: string;

  @Output() public onInputChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    value: null,
    format: "dd-MM-yyyy",
    label: null,
    theme: "light",
    iconSrc: null,
    name: null,
    disabled: false,
    required: false,
    assistiveText: null,
    invalid: false,
    margin: null,
    size: "medium"
  });

  renderedValue: string;
  dateValue: Moment;
  calendarIconSrc: string;
  popOverOffsetX: any;

  calendarDynamicStyle: any;

  @ViewChild(MdePopoverTrigger, {static: false}) _dxcTrigger: MdePopoverTrigger;
  @ViewChild('dxcCalendar', {static: false}) _dxcCalendar: MatCalendar<Moment>;

  private _sizes = ['medium', 'large', 'fillParent'];

  private _isOpenClicked: boolean = false;
  private _isCalendarOpened: boolean = false;
  private _isSelectingDate: boolean = false;

  constructor(private utils: CssUtils) {}

  private calculateComponentValues(): void {
    this.size = this.size ? this._sizes.find(item => item===this.size) : 'medium';
    this.popOverOffsetX = this.size==='fillParent' ? null : '130';

    this.isDisabled = this.disabled;
    this.format = this.format ? this.format : this.defaultInputs.getValue().format;

    this.renderedValue = this.value;
    this.dateValue = this.getMomentValue(this.renderedValue, this.format);
    this.calendarIconSrc =  "assets/calendar.svg";
  }

  public ngOnInit(): void {
    this.calculateComponentValues();

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.calendarDynamicStyle = `${this.getCalendarContentStyle()}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.calculateComponentValues();

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.calendarDynamicStyle = `${this.getCalendarContentStyle()}`;
  }

  onInputChangeHandler(value: string){
    if (this._isCalendarOpened) this.closeCalendar();
    let _dateValue = this.getMomentValue(value, this.format);
    let _dateReturn = {
      stringValue: value,
      dateValue: _dateValue.isValid() ? _dateValue.toDate() : null
    }
    this.onInputChange.emit(_dateReturn);

    if (!this.value) {
      this.renderedValue = value;
      this.dateValue = _dateValue;
    }
  }

  onSelectedChangeHandler(value: Moment) {
    let _stringValue = this.getDateStringValue(value, this.format);
    let _dateReturn = {
      stringValue: _stringValue,
      dateValue: value.isValid() ? value.toDate() : null
    }
    this.onInputChange.emit(_dateReturn);
    if (!this.value) {
      this.dateValue = value;
      this.renderedValue = _stringValue;
    }
    this.closeCalendar();
  }

  onBlurHandler(value: string){
    this.onBlur.emit(value);
  }

  public onClickOutsideHandler() {
    if (this._isCalendarOpened) {
        if (!this._isOpenClicked && !this._isSelectingDate) {
        this.closeCalendar();
      } else {
        this._isOpenClicked=false;
        this._isSelectingDate=false;
      }
    }
  }

  public openCalendar(event: any) {
    this._dxcCalendar.activeDate = this.dateValue.isValid() ? this.dateValue : moment();
    this._dxcCalendar.currentView='month';
    this._dxcTrigger.openPopover();
    this.resetCalendarState(true);
  }

  public closeCalendar() {
    this._dxcTrigger.closePopover();
    this.resetCalendarState();
  }

  public onSelectingDateHandler() {
    this._isSelectingDate=true;
  }

  private resetCalendarState(value: boolean = false) {
    this._isOpenClicked=this._isCalendarOpened=this._isSelectingDate=value;
  }

  private getMomentValue(value:string, format:string){
    return moment(value, format.toUpperCase(), true);
  }

  private getDateStringValue(value:Moment, format:string){
    return value.format(format.toUpperCase());
  }

  getCalendarContentStyle () {
    return css`
      width: 297px;
      background: var(--date-pickerBackgroundColor);

      .mat-calendar {
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
      .mat-calendar-body-selected {
        border-color: var(--date-pickerSelectedDateBackgroundColor);
        background-color: var(--date-pickerSelectedDateBackgroundColor);
        color: var(--date-pickerSelectedDateColor);
        &.mat-calendar-body-today {
          border: none;
          box-shadow: none;
        }
      }
      mat-month-view .mat-calendar-body-cell-content {
        width: 28px;
        height: 28px;
      }

      td:not(.mat-calendar-body-disabled) .mat-calendar-body-cell-content {
        &:not(.mat-calendar-body-selected):hover {
          background-color:  var(--date-pickerHoverDateBackgroundColor) !important;
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
  getDynamicStyle(inputs) {
    return css`
      &.disabled {
        cursor: not-allowed !important;
      }
      .disabled {
        cursor: not-allowed !important;
      }
      .mat-form-field{
        .mat-form-field-wrapper{
          .mat-form-field-underline{
            &:focus {
              outline: -webkit-focus-ring-color auto 1px;
              outline-color: var(--date-focusColor);
            }
          }
        }
        img{
          cursor:pointer;
        }
      }
    `;
  }
}
