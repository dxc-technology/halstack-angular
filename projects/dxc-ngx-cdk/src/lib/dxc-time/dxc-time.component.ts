import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-time',
  templateUrl: './dxc-time.component.html',
  styleUrls: ['./dxc-time.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcTimeComponent),
    multi: true
  }]
})
export class DxcTimeComponent implements OnInit, ControlValueAccessor {
  @Input() disabled = false;
  @Output() defaultTimeChange = new EventEmitter<string>();
  @Input() arialabel = "";
  @Input() iconarialabel = "";
  @Input()
  get format() {
    return this._format;
  };
  set format(val) {
    if (val && parseInt(val.toString()) === parseInt(val.toString())) {
      this._format = parseInt(val.toString());
    }
    else {
      this._format = 24;
    }
  };

  @Input() min: string = '00:00';
  @Input() max: string = "23:59";

  @Input()
  get defaultTime() {
    return this.userTime;
  }
  set defaultTime(val: string) {
    this.userTime = (!val ? '' : val);
    this.value = this.convertTimeToControlFormat(val);
    this.defaultTimeChange.emit(this.defaultTime);
  }

  userTime: string = '';
  value: string = "";
  _format: number = 12;
  public onTouched: () => void = () => { };
  onChangeRegister = (val) => {

  }

  constructor() { }

  ngOnInit() {
  }

  timeChanged = (val: string) => {
    this.defaultTime = this.convertTimeToUserFormat(val);
    this.onChangeRegister(this.defaultTime);
    this.defaultTimeChange.emit(val);
  }

  writeValue(val: any): void {
    this.defaultTime = val;
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


  private convertTimeToControlFormat(time: string): string {
    let returnTime = '';
    if (time && time != '') {
      returnTime = (time.substr(0, 2) == '' ? '00:' : time.substr(0, 2).concat(':'));
      returnTime = returnTime.concat(time.substr(2, 2) == '' ? '00' : time.substr(2, 2));
      if (this.format == 12)
        returnTime = returnTime.concat((time.substr(0, 2) == '' ? 0 : parseInt(time.substr(0, 2))) < 12 ? ' AM' : ' PM');
    }
    return returnTime;
  }

  private convertTimeToUserFormat(time: string): string {
    let returnTime = '';
    if (time && time != '' && time.split(':').length > 1) {
      let hours = Number(time.match(/^(\d+)/)[1]);
      let minutes = Number(time.match(/:(\d+)/)[1]);
      if (this.format == 12) {
        let sufix = time.match(/\s(.*)$/)[1];
        hours = (sufix == "PM" && hours < 12) ? (hours + 12) : (sufix == "AM" && hours == 12) ? (hours - 12) : hours;
      }
      let sHours = hours < 10 ? "0".concat(hours.toString()) : hours.toString();
      let sMinutes = minutes < 10 ? "0".concat(minutes.toString()) : minutes.toString();
      returnTime = (sHours.concat(sMinutes.concat('00')));
    }
    else {
      returnTime = time.concat('');
    }
    return returnTime;
  }

}
