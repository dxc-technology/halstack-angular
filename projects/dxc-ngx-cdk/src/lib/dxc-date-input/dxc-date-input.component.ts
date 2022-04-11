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
import { DxcDateInputHelper } from "./dxc-date-input.helper";
import * as momentImported from "moment";
import { MatCalendar } from "@angular/material/datepicker";
import { Moment } from "moment";
import { MdePopoverTrigger } from "@material-extended/mde";
import { CssUtils } from "../utils";
import {
  DateInputProperties,
  EmittedValue,
  Space,
  Spacing,
} from "./dxc-date-input.types";

const moment = momentImported;

@Component({
  selector: "dxc-date-input",
  templateUrl: "./dxc-date-input.component.html",
  providers: [DxcDateInputHelper, CssUtils],
})
export class DxcDateInputComponent implements OnInit {
  @HostBinding("class") className;

  /**
   * Text to be placed above the date.
   */
  @Input() label: string;
  /**
   * Name attribute of the input element.
   */
  @Input() name: string;
  /**
   * Value of the input element. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  @Input() value: string;
  /**
   * Helper text to be placed above the date.
   */
  @Input() helperText: string;
  /**
   * The format in which the date value will be displayed. User must follow this format when editing the value or it will be considered as an invalid date.
   * In this case, the onBlur and onChange events will be called with an internal error as a parameter reporting the situation.
   */
  @Input() format: string = "dd-MM-yyyy";
  /**
   * If true, the component will be disabled.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  /**
   * If true, the date format will appear as placeholder in the field.
   */
  @Input()
  get placeholder(): boolean {
    return this._placeholder;
  }
  set placeholder(value: boolean) {
    this._placeholder = coerceBooleanProperty(value);
  }
  private _placeholder = false;
  /**
   * If true, the date will be optional, showing (Optional) next to the label. Otherwise, the field will be considered required
   * and an error will be passed as a parameter to the OnBlur and onChange events when it has not been filled.
   */
  @Input()
  get optional(): boolean {
    return this._optional;
  }
  set optional(value: boolean) {
    this._optional = coerceBooleanProperty(value);
  }
  private _optional = false;
  /**
   * If true, the date input will have an action to clear the entered value.
   */
  @Input()
  get clearable(): boolean {
    return this._clearable;
  }
  set clearable(value: boolean) {
    this._clearable = coerceBooleanProperty(value);
  }
  private _clearable = false;
  /**
   * If it is defined, the component will change its appearance, showing the error below the date input component.
   * If it is not defined, the error messages will be managed internally, but never displayed on its own.
   */
  @Input() error: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Spacing;
  /**
   * Size of the component.
   */
  @Input() size: "medium" | "large" | "fillParent" = "medium";
  /**
   * Value of the tabindex attribute.
   */
  @Input() tabIndexValue: number = 0;

  @Input()
  autocomplete: string = "off";

  defaultInputs = new BehaviorSubject<DateInputProperties>({
    error: "",
    clearable: false,
    optional: false,
    disabled: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: null,
    size: "medium",
    format: "dd-MM-yyyy",
    tabIndexValue: 0,
    placeholder: false,
    autocomplete: "off",
  });

  /**
   * This event will emit in case the user types within the input element of the component. An object including the string value,
   * the error and the date value will be emitted. If the string value is a valid date, error will be null.
   * Also, if the string value is not a valid date, date will be null.
   */
  @Output() onChange = new EventEmitter<EmittedValue>();
  /**
   * This event will emit in case the input element loses the focus. An object including the string value,
   * the error and the date value will be emitted. If the string value is a valid date, error will be null.
   * Also, if the string value is not a valid date, date will be null.
   */
  @Output() onBlur = new EventEmitter<EmittedValue>();
  /**
   * Reference to the component.
   */
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

  private _sizes: ("medium" | "large" | "fillParent")[] = [
    "medium",
    "large",
    "fillParent",
  ];

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
    private helper: DxcDateInputHelper,
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

  handleOnChange(value) {
    if (this._isCalendarOpened) this.closeCalendar();
    let _dateValue = this.getMomentValue(value.value, this.format);
    let _dateReturn = {
      value: value.value,
      error: value.error,
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
    let _dateValue = this.getMomentValue(event.value, this.format);
    this.onBlur.emit({
      value: event.value,
      error: event.error,
      date: _dateValue.isValid() ? _dateValue.toDate() : null,
    });
    if (!this.controlled) {
      this.renderedValue = event.value;
      this.dateValue = _dateValue;
      this.cdRef.detectChanges();
    }
  }

  onSelectedChangeHandler(value: Moment) {
    let _stringValue = this.getDateStringValue(value, this.format);
    let _dateReturn = {
      value: _stringValue,
      date: value.isValid() ? value.toDate() : null,
      error: this.dxcInputRef.error,
    };
    this.onChange.emit(_dateReturn);
    if (!this.controlled) {
      this.dateValue = value;
      this.renderedValue = _stringValue;
    }
    this.onBlur.emit(_dateReturn);
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
