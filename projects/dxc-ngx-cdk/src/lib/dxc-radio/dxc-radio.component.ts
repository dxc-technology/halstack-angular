import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-radio',
  templateUrl: './dxc-radio.component.html',
  styleUrls: ['./dxc-radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DxcRadioComponent implements OnInit {
  @Input() checked: boolean;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() name: string;
  @Input() labelPosition: string;
  @Input() value: any;
  @Output() checkedChange: EventEmitter<any>;

  constructor() {
    this.checkedChange = new EventEmitter();
  }

  ngOnInit() {
  }

  onChange(event: any) {
    this.checkedChange.emit(event.source.checked);
  }
 }

