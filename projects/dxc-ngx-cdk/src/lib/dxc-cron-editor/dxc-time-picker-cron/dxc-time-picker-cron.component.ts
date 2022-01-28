import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { CronOptions } from '../cronoptions';
export interface TimePickerModel {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
@Component({
  selector: 'dxc-time-picker-cron',
  templateUrl: './dxc-time-picker-cron.component.html',
  styleUrls: ['./dxc-time-picker-cron.component.scss']
})
export class DxcTimePickerComponent {
  @Input() public disabled;
  @Input() public use24HourTime = true;
  @Input() public hideHours = false;
  @Input() public hideMinutes = false;
  @Input() public hideSeconds = true;
  @Input() public includeEvery = false;
  @Input() public includeNone = false;
  @Input() public showStart = false;
  @Input() public resource: any;
  @Input() public options: CronOptions;
  public minutes =  [...range(0, 59) ];
  public seconds = [...range(0, 59) ];
  public hourTypes = ['AM', 'PM'];

  get hours(): number[] {
    return this.use24HourTime ? [... range(0, 23)] : [... range(0, 12)];
  }

  constructor(public parent: ControlContainer) { }

}
