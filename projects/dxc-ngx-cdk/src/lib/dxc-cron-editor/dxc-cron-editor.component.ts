import { Component, Input, Output, OnInit, EventEmitter, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import { Days, MonthWeeks, Months } from './enums';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { CronOptions } from './cronoptions';
import { ConfigurationsetupService } from '../services/startup/configurationsetup.service';

export const CRON_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DxcCronEditorComponent),
  multi: true,
};

@Component({
  selector: 'dxc-cron-editor',
  templateUrl: './dxc-cron-editor.component.html',
  styleUrls: ['./dxc-cron-editor.component.scss'],
  providers: [CRON_VALUE_ACCESSOR]
})
export class DxcCronEditorComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() public backgroundColor: ThemePalette;
  @Input() public color: ThemePalette;
  @Input() public disabled: boolean;
  @Input() public options: CronOptions;
  @Input() public cronType:'expression' | 'cust' = 'expression';
  @Output() public cronTypeChange = new EventEmitter<string>();
  @Input() public resource: any;
  @Input()
  get cron(): string {
    return this.localCron;
  }
  set cron(value: string) {
    this.localCron = value;    
    this.onChange(this.localCron);
    if(this.cronChange)
    {
      this.cronChange.emit(this.localCron)
    }
  }
  // the name is an Angular convention, @Input variable name + "Change" suffix
  @Output() cronChange = new EventEmitter<string>();

  public activeTab: string;
  public selectOptions = this.getSelectOptions();
  public state: any;
  private localCron = '* 0 0 ? * * *';
  private defaultCron = '* 0 0 ? * * *';
  private isDirty: boolean;
  isExpression:boolean=true;
  expressionList: any = [];
  cronForm: FormControl;
  minutesForm: FormGroup;
  hourlyForm: FormGroup;
  dailyForm: FormGroup;
  weeklyForm: FormGroup;
  monthlyForm: FormGroup;
  yearlyForm: FormGroup;
  advancedForm: FormGroup;
  

  get isCronFlavorQuartz() {
    return this.options.cronFlavor === 'quartz';
  }

  get isCronFlavorStandard() {
    return this.options.cronFlavor === 'standard';
  }

  get yearDefaultChar() {
    return this.options.cronFlavor === 'quartz' ? '*' : '';
  }

  get weekDayDefaultChar() {
    return this.options.cronFlavor === 'quartz' ? '?' : '*';
  }

  get monthDayDefaultChar() {
    return this.options.cronFlavor === 'quartz' ? '?' : '*';
  }

  constructor(private fb: FormBuilder, private config : ConfigurationsetupService) { 
   // this.resources = config.configservice.Resources;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.cronType?.currentValue !=changes?.cronType?.previousValue)
    {
      if(this.advancedForm && this.advancedForm.get('subTab'))
      {
        this.advancedForm.get('subTab').setValue(changes?.cronType?.currentValue ? changes?.cronType?.currentValue : 'expression'); 
        this.cron = this.defaultCron;
        if(this.advancedForm != null && this.advancedForm.value !=null)
        {
          this.advancedForm.get('expression').setValue(this.cron); 
          this.setDefaultCustomExpression();
        }
      }
    }
  }

  /* Update the cron output to that of the selected tab.
   * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
   * the value of the form that goes into focus. */
  public onTabFocus(idx: number) {
    switch (idx) {
      case 0:
        this.minutesForm.setValue(this.minutesForm.value);
        break;
      case 1:
        this.hourlyForm.setValue(this.hourlyForm.value);
        break;
      case 2:
        this.dailyForm.setValue(this.dailyForm.value);
        break;
      case 3:
        this.weeklyForm.setValue(this.weeklyForm.value);
        break;
      case 4:
        this.monthlyForm.setValue(this.monthlyForm.value);
        break;
      case 5:
        this.yearlyForm.setValue(this.yearlyForm.value);
        break;
      case 6:
        this.advancedForm.setValue(this.advancedForm.value);
        break;
      default:
        throw (new Error('Invalid tab selected'));
    }
  }

  public async ngOnInit() {
    this.state = this.getDefaultState();
    this.expressionList = [
      {'name': 'Expression', 'value': 'expression'},
      {'name': 'Custom', 'value': 'cust'},
     ];
    this.handleModelChange(this.cron);
    const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
    this.cronForm = new FormControl('* 0 0 ? * * *');
    this.minutesForm = this.fb.group({
      hours: [0],
      minutes: [1],
      seconds: [0]
    });
    this.advancedForm = this.fb.group({
      subTab: ['expression'],
      expression: [this.cron != null && this.cron !='' ? this.cron : this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *'],
      custom: this.fb.group({
        // monthWeek: ['*'],
        startDays: ['none'],
        days: [['*']],
        startMonth: ['none'],
        month: [['*']],
        startYear: ['none'],
        year: ['*'],
        startHours: ['none'],
        hours: ['*'],
        startMinutes: ['none'],
        minutes: ['*'],
        startSeconds: ['none'],
        seconds: ['0'],
        hourType: ['*']
      })
    });
    this.cron = this.advancedForm.value.expression;
    this.advancedForm.valueChanges.subscribe(next => this.computeAdvancedExpression(next));
  }

  private setDefaultCustomExpression(){
    this.advancedForm.get('custom').setValue({
      days: ['*'],
      hourType: "*",
      hours: "*",
      minutes: "*",
      month: ['*'],
      seconds: "0",
      startDays: "none",
      startHours: "none",
      startMinutes: "none",
      startMonth: "none",
      startSeconds: "none",
      startYear: "none",
      year: "*"
    });
  }

  private computeAdvancedExpression(state: any) {
    this.cronType = state.subTab;
    this.cronTypeChange.emit(state.subTab);
    switch (state.subTab) {
      case 'expression':
        this.cron = state.expression;
        break;
      case 'cust':
        let shouldUpdate = false;
        if (state.custom.days.length <= 0) {
          state.custom.days = ['*'];
          shouldUpdate = true;
        }
        else if (state.custom.days.length > 1 && state.custom.days.indexOf('*') != -1) {
          state.custom.days.splice(state.custom.days.indexOf('*'), 1);
          shouldUpdate = true;
        }
        if (state.custom.month.length <= 0) {
          state.custom.month = ['*'];
          shouldUpdate = true;
        }
        else if (state.custom.month.length > 1 && state.custom.month.indexOf('*') != -1) {
          state.custom.month.splice(state.custom.month.indexOf('*'), 1);
          shouldUpdate = true;
        }
        if (shouldUpdate)
          this.advancedForm.patchValue({ 'days': state.custom.days, 'month': state.custom.month });
          this.cron = `${this.getStartFrom(state.custom.startSeconds)}${this.isCronFlavorQuartz ? state.custom.seconds : ''} ${this.getStartFrom(state.custom.startMinutes)}${state.custom.minutes} ${this.getStartFrom(state.custom.startHours)}${this.hourToCron(state.custom.hours, state.custom.hourType)} ${this.getStartFrom(state.custom.startDays)}${state.custom.days.join(',')} ${this.getStartFrom(state.custom.startMonth)}${state.custom.month.join(',')} ${this.weekDayDefaultChar} ${this.getCronYear(state.custom.startYear, state.custom.year)}`.trim();
        break;
      default:
        throw new Error('Invalid cron yearly subtab selection');
    }
    this.cronForm.setValue(this.cron);
  }

  public dayDisplay(day: string): string {
    return Days[day];
  }

  public monthWeekDisplay(monthWeekNumber: string): string {
    return MonthWeeks[monthWeekNumber];
  }

  public monthDisplay(month: number): string {
    return Months[month];
  }

  public monthDayDisplay(month: string): string {
    if (month === 'L') {
      return 'Last Day';
    } else if (month === 'LW') {
      return 'Last Weekday';
    } else if (month === '1W') {
      return 'First Weekday';
    } else {
      return `${month}${this.getOrdinalSuffix(month)}`;
    }
  }

  private getAmPmHour(hour: number) {
    return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
  }

  private getHourType(hour: number) {
    return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
  }

  private hourToCron(hour: number, hourType: string) {
    if (this.options.use24HourTime) {
      return hour;
    } else {
      return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
    }
  }

  private handleModelChange(cron: string) {
    if (this.isDirty) {
      this.isDirty = false;
      return;
    } else {
      this.isDirty = false;
    }

    if (!this.cronIsValid(cron)) {
      if (this.isCronFlavorQuartz) {
        throw new Error('Invalid cron expression, there must be 6 or 7 segments');
      }

      if (this.isCronFlavorStandard) {
        throw new Error('Invalid cron expression, there must be 5 segments');
      }
    }

    const origCron: string = cron;
    if (cron.split(' ').length === 5 && this.isCronFlavorStandard) {
      cron = `0 ${cron} *`;
    }

    const [seconds, minutes, hours, dayOfMonth, month, dayOfWeek] = cron.split(' ');

    if (cron.match(/\d+ 0\/\d+ \* 1\/1 \* [\?\*] \*/)) {
      this.activeTab = 'minutes';

      this.state.minutes.minutes = parseInt(minutes.substring(2), 10);
      this.state.minutes.seconds = parseInt(seconds, 10);
    } else if (cron.match(/\d+ \d+ 0\/\d+ 1\/1 \* [\?\*] \*/)) {
      this.activeTab = 'hourly';
      this.state.hourly.hours = parseInt(hours.substring(2), 10);
      this.state.hourly.minutes = parseInt(minutes, 10);
      this.state.hourly.seconds = parseInt(seconds, 10);
    } else if (cron.match(/\d+ \d+ \d+ 1\/\d+ \* [\?\*] \*/)) {
      this.activeTab = 'daily';
      this.state.daily.subTab = 'everyDays';
      this.state.daily.everyDays.days = parseInt(dayOfMonth.substring(2), 10);
      const parsedHours = parseInt(hours, 10);
      this.state.daily.everyDays.hours = this.getAmPmHour(parsedHours);
      this.state.daily.everyDays.hourType = this.getHourType(parsedHours);
      this.state.daily.everyDays.minutes = parseInt(minutes, 10);
      this.state.daily.everyDays.seconds = parseInt(seconds, 10);
    } else if (cron.match(/\d+ \d+ \d+ [\?\*] \* MON-FRI \*/)) {
      this.activeTab = 'daily';
      this.state.daily.subTab = 'everyWeekDay';
      const parsedHours = parseInt(hours, 10);
      this.state.daily.everyWeekDay.hours = this.getAmPmHour(parsedHours);
      this.state.daily.everyWeekDay.hourType = this.getHourType(parsedHours);
      this.state.daily.everyWeekDay.minutes = parseInt(minutes, 10);
      this.state.daily.everyWeekDay.seconds = parseInt(seconds, 10);
    } else if (cron.match(/\d+ \d+ \d+ [\?\*] \* (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))* \*/)) {
      this.activeTab = 'weekly';
      this.selectOptions.days.forEach(weekDay => this.state.weekly[weekDay] = false);
      dayOfWeek.split(',').forEach(weekDay => this.state.weekly[weekDay] = true);
      const parsedHours = parseInt(hours, 10);
      this.state.weekly.hours = this.getAmPmHour(parsedHours);
      this.state.weekly.hourType = this.getHourType(parsedHours);
      this.state.weekly.minutes = parseInt(minutes, 10);
      this.state.weekly.seconds = parseInt(seconds, 10);
    } else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) 1\/\d+ [\?\*] \*/)) {
      this.activeTab = 'monthly';
      this.state.monthly.subTab = 'specificDay';
      this.state.monthly.specificDay.day = dayOfMonth;
      this.state.monthly.specificDay.months = parseInt(month.substring(2), 10);
      const parsedHours = parseInt(hours, 10);
      this.state.monthly.specificDay.hours = this.getAmPmHour(parsedHours);
      this.state.monthly.specificDay.hourType = this.getHourType(parsedHours);
      this.state.monthly.specificDay.minutes = parseInt(minutes, 10);
      this.state.monthly.specificDay.seconds = parseInt(seconds, 10);
    } else if (cron.match(/\d+ \d+ \d+ [\?\*] 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
      const day = dayOfWeek.substr(0, 3);
      const monthWeek = dayOfWeek.substr(3);
      this.activeTab = 'monthly';
      this.state.monthly.subTab = 'specificWeekDay';
      this.state.monthly.specificWeekDay.monthWeek = monthWeek;
      this.state.monthly.specificWeekDay.day = day;
      this.state.monthly.specificWeekDay.months = parseInt(month.substring(2), 10);
      const parsedHours = parseInt(hours, 10);
      this.state.monthly.specificWeekDay.hours = this.getAmPmHour(parsedHours);
      this.state.monthly.specificWeekDay.hourType = this.getHourType(parsedHours);
      this.state.monthly.specificWeekDay.minutes = parseInt(minutes, 10);
      this.state.monthly.specificWeekDay.seconds = parseInt(seconds, 10);
    } else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) \d+ [\?\*] \*/)) {
      this.activeTab = 'yearly';
      this.state.yearly.subTab = 'specificMonthDay';
      this.state.yearly.specificMonthDay.month = parseInt(month, 10);
      this.state.yearly.specificMonthDay.day = dayOfMonth;
      const parsedHours = parseInt(hours, 10);
      this.state.yearly.specificMonthDay.hours = this.getAmPmHour(parsedHours);
      this.state.yearly.specificMonthDay.hourType = this.getHourType(parsedHours);
      this.state.yearly.specificMonthDay.minutes = parseInt(minutes, 10);
      this.state.yearly.specificMonthDay.seconds = parseInt(seconds, 10);
    } else if (cron.match(/\d+ \d+ \d+ [\?\*] \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
      const day = dayOfWeek.substr(0, 3);
      const monthWeek = dayOfWeek.substr(3);
      this.activeTab = 'yearly';
      this.state.yearly.subTab = 'specificMonthWeek';
      this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
      this.state.yearly.specificMonthWeek.day = day;
      this.state.yearly.specificMonthWeek.month = parseInt(month, 10);
      const parsedHours = parseInt(hours, 10);
      this.state.yearly.specificMonthWeek.hours = this.getAmPmHour(parsedHours);
      this.state.yearly.specificMonthWeek.hourType = this.getHourType(parsedHours);
      this.state.yearly.specificMonthWeek.minutes = parseInt(minutes, 10);
      this.state.yearly.specificMonthWeek.seconds = parseInt(seconds, 10);
    } else {
      this.activeTab = 'advanced';
      this.state.advanced.expression = origCron;
      if (this.advancedForm != null && origCron !== '' && origCron !=='0 0 0 1 1 ? *' && origCron !=='0 15 10 L-2 * ? *' ) {
        this.advancedForm.get('expression').setValue(origCron); 
      }
    }
  }

  private cronIsValid(cron: string): boolean {
    if (cron) {
      const cronParts = cron.split(' ');
      return (this.isCronFlavorQuartz && (cronParts.length === 6
        || cronParts.length === 7)
        || (this.isCronFlavorStandard && cronParts.length === 5));
    }

    return false;
  }


  private getDefaultState() {
    const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
    this.localCron = this.cron != null && this.cron !='' ? this.cron : this.isCronFlavorQuartz ? '* 0 0 ? * * *' : '0 0 1/1 * *';
    return {
      minutes: {
        minutes: 1,
        seconds: 0
      },
      hourly: {
        hours: 1,
        minutes: 0,
        seconds: 0
      },
      daily: {
        subTab: 'everyDays',
        everyDays: {
          days: 1,
          hours: this.getAmPmHour(defaultHours),
          minutes: defaultMinutes,
          seconds: defaultSeconds,
          hourType: this.getHourType(defaultHours)
        },
        everyWeekDay: {
          hours: this.getAmPmHour(defaultHours),
          minutes: defaultMinutes,
          seconds: defaultSeconds,
          hourType: this.getHourType(defaultHours)
        }
      },
      weekly: {
        MON: true,
        TUE: false,
        WED: false,
        THU: false,
        FRI: false,
        SAT: false,
        SUN: false,
        hours: this.getAmPmHour(defaultHours),
        minutes: defaultMinutes,
        seconds: defaultSeconds,
        hourType: this.getHourType(defaultHours)
      },
      monthly: {
        subTab: 'specificDay',
        specificDay: {
          day: '1',
          months: 1,
          hours: this.getAmPmHour(defaultHours),
          minutes: defaultMinutes,
          seconds: defaultSeconds,
          hourType: this.getHourType(defaultHours)
        },
        specificWeekDay: {
          monthWeek: '#1',
          day: 'MON',
          months: 1,
          hours: this.getAmPmHour(defaultHours),
          minutes: defaultMinutes,
          seconds: defaultSeconds,
          hourType: this.getHourType(defaultHours)
        }
      },
      yearly: {
        subTab: 'specificMonthDay',
        specificMonthDay: {
          month: 1,
          day: '1',
          hours: this.getAmPmHour(defaultHours),
          minutes: defaultMinutes,
          seconds: defaultSeconds,
          hourType: this.getHourType(defaultHours)
        },
        specificMonthWeek: {
          monthWeek: '#1',
          day: 'MON',
          month: 1,
          hours: this.getAmPmHour(defaultHours),
          minutes: defaultMinutes,
          seconds: defaultSeconds,
          hourType: this.getHourType(defaultHours)
        }
      },
      advanced: {
        subTab: 'expression',
        expression: this.cron != null && this.cron !='' ? this.cron : this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *'
      }
    };
  }

  private getOrdinalSuffix(value: string) {
    if (value.length > 1) {
      const secondToLastDigit = value.charAt(value.length - 2);
      if (secondToLastDigit === '1') {
        return 'th';
      }
    }

    const lastDigit = value.charAt(value.length - 1);
    switch (lastDigit) {
      case '1':
        return 'st';
      case '2':
        return 'nd';
      case '3':
        return 'rd';
      default:
        return 'th';
    }
  }

  private getSelectOptions() {
    return {
      months: this.getRange(1, 12),
      monthWeeks: ['#1', '#2', '#3', '#4', '#5', 'L'],
      days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      minutes: this.getRange(0, 59),
      fullMinutes: this.getRange(0, 59),
      seconds: this.getRange(0, 59),
      hours: this.getRange(1, 23),
      monthDays: this.getRange(1, 31),
      years: this.getRange(new Date().getFullYear(), new Date(new Date().getFullYear() + 50, new Date().getMonth(), new Date().getDate()).getFullYear()),
      monthDaysWithLasts: ['1W', ...[...this.getRange(1, 31).map(String)], 'LW', 'L'],
      monthDaysWithOutLasts: [...[...this.getRange(1, 31).map(String)]],
      hourTypes: ['AM', 'PM']
    };
  }


  private getRange(start: number, end: number): number[] {
    const length = end - start + 1;
    return Array.apply(null, Array(length)).map((_, i) => i + start);
  }

  private getStartFrom(value) {
    return (value === 'none' || value === 'None') ? '' : value+'/';
  }

  getCronYear(startyear, start) {
    var year = '';
    if (startyear != 'none')
        year = startyear;
    if (start != '*' && startyear != '')
        year = year + '-' + start;
    if (start != '*' && startyear === 'none')
        year = start;
    return year;
}


  /*
   * ControlValueAccessor
   */
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(obj: string): void { 
    this.cron = obj != null && obj !='' ? obj : this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *';
    this.handleModelChange(this.cron);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
