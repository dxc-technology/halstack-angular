import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DxcTextInputComponent } from "../dxc-text-input/dxc-text-input.component";
import { DxcNewDateHelper } from "./dxc-new-date.helper";
import * as momentImported from "moment";
import { MatCalendar } from "@angular/material/datepicker";
import { Moment } from "moment";
import { MdePopoverTrigger } from "@material-extended/mde";
import { CssUtils } from "../utils";

const moment = momentImported;

@Component({
  selector: "dxc-new-date",
  templateUrl: "./dxc-new-date.component.html",
  providers: [DxcNewDateHelper, CssUtils],
})
export class DxcNewDateComponent implements OnInit {
  @HostBinding("class") className;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string;

  @Input()
  helperText: string;

  @Input() format: string = "dd-MM-yyyy";

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get placeholder(): boolean {
    return this._placeholder;
  }
  set placeholder(value: boolean) {
    this._placeholder = coerceBooleanProperty(value);
  }
  private _placeholder = false;

  @Input()
  get optional(): boolean {
    return this._optional;
  }
  set optional(value: boolean) {
    this._optional = coerceBooleanProperty(value);
  }
  private _optional = false;

  @Input()
  get clearable(): boolean {
    return this._clearable;
  }
  set clearable(value: boolean) {
    this._clearable = coerceBooleanProperty(value);
  }
  private _clearable = false;

  @Input()
  error = undefined;

  @Input()
  pattern = "";

  @Input()
  length = { min: undefined, max: undefined };

  @Input()
  margin: Object | string;

  @Input() size: string = "medium";

  @Input()
  tabIndex: number;

  defaultInputs = new BehaviorSubject<any>({
    error: "",
    clearable: false,
    optional: false,
    disabled: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: "",
    size: "medium",
    format: "dd-MM-yyyy",
    tabIndex: 0,
    placeholder: false,
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onError = new EventEmitter<any>(true);

  @Output()
  onBlur = new EventEmitter<any>();

  @ViewChild("dxcInput", { static: false })
  dxcInputRef: DxcTextInputComponent;

  renderedValue: string;
  dateValue: Moment;
  popOverOffsetX: any;
  calendarDynamicStyle: any;

  @ViewChild(MdePopoverTrigger, { static: false })
  _dxcTrigger: MdePopoverTrigger;
  @ViewChild("dxcCalendar", { static: false })
  _dxcCalendar: MatCalendar<Moment>;
  @ViewChild("dxcCalendar", { read: ElementRef }) calendar: ElementRef;

  private _sizes = ["medium", "large", "fillParent"];

  private _isOpenClicked: boolean = false;
  private _isCalendarOpened: boolean = false;
  private _isSelectingDate: boolean = false;

  private controlled: boolean;

  @HostListener("document:click", ["$event"])
  public onClickOutsideHandler(event) {
    this.removeRippleCalendarControls();
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

  constructor(
    private helper: DxcNewDateHelper,
    private cdRef: ChangeDetectorRef
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.dxcInputRef && this.dxcInputRef.inputRef) {
      this.controlled
        ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
        : (this.renderedValue = this.dxcInputRef.inputRef.nativeElement.value);
    }
    this.calculateComponentValues();

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });

    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    this.calendarDynamicStyle = `${this.helper.getCalendarContentStyle()}`;
  }

  ngOnInit(): void {
    this.calculateComponentValues();
    if (this.value === undefined) {
      this.value = "";
      this.controlled = false;
    } else {
      this.controlled = true;
    }

    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    this.calendarDynamicStyle = `${this.helper.getCalendarContentStyle()}`;
  }

  ngAfterViewInit() {
    this.dxcInputRef.actionButton.nativeElement.ariaLabel = "Choose Date";
  }

  private calculateComponentValues(): void {
    this.size = this.size
      ? this._sizes.find((item) => item === this.size)
      : "medium";
    this.popOverOffsetX = this.size === "fillParent" ? null : "130";

    this.format = this.format
      ? this.format
      : this.defaultInputs.getValue().format;

    this.renderedValue = this.value;
    this.dateValue = this.getMomentValue(this.renderedValue, this.format);
  }

  removeRippleCalendarControls() {
    Array.from(
      this.calendar.nativeElement
        .getElementsByClassName("mat-calendar-header")[0]
        .getElementsByClassName("mat-button-ripple mat-ripple")
    ).forEach((el: Element) => el.remove());
  }

  handleOnChange(value: string) {
    if (this._isCalendarOpened) this.closeCalendar();
    let _dateValue = this.getMomentValue(value, this.format);
    let _dateReturn = {
      value: value,
      date: _dateValue.isValid() ? _dateValue.toDate() : null,
    };
    this.onChange.emit(_dateReturn);

    this.controlled
      ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
      : (this.value = value);

    if (!this.value) {
      this.renderedValue = value;
      this.dateValue = _dateValue;
    }
  }

  handleOnBlur(event) {
    this.onBlur.emit({ value: event.value, error: event.error });
    if (!this.controlled) {
      this.renderedValue = event.value;
      this.cdRef.detectChanges();
    }
  }

  onSelectedChangeHandler(value: Moment) {
    let _stringValue = this.getDateStringValue(value, this.format);
    let _dateReturn = {
      value: _stringValue,
      date: value.isValid() ? value.toDate() : null,
    };
    this.onChange.emit(_dateReturn);
    if (!this.value) {
      this.dateValue = value;
      this.renderedValue = _stringValue;
    }
    this.closeCalendar();
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

  public handleCalendar() {
    if (this._isCalendarOpened) {
      if (!this._isOpenClicked && !this._isSelectingDate) {
        this.closeCalendar();
      } else {
        this._isOpenClicked = false;
      }
    } else {
      this._dxcCalendar.activeDate = this.dateValue.isValid()
        ? this.dateValue
        : moment();
      this._dxcCalendar.currentView = "month";
      this._dxcTrigger.openPopover();
      this.resetCalendarState(true);
    }
  }

  public closeCalendar() {
    this._dxcTrigger.closePopover();
    this.resetCalendarState();
  }

  public onSelectingDateHandler() {
    this._isSelectingDate = true;
  }

  private resetCalendarState(value: boolean = false) {
    this._isOpenClicked =
      this._isCalendarOpened =
      this._isSelectingDate =
        value;
  }

  private getMomentValue(value: string, format: string) {
    return moment(value, format.toUpperCase(), true);
  }

  private getDateStringValue(value: Moment, format: string) {
    return value.format(format.toUpperCase());
  }
}
