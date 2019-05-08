import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-checkbox',
  templateUrl: './dxc-checkbox.component.html',
  styleUrls: ['./dxc-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DxcCheckboxComponent implements OnInit {
  @Input() @Output() ngModel: string;
  @Input() @Output() indeterminate: boolean;
  @Input() checked: boolean;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() name: string;
  @Input() id: string;
  @Input() labelPosition: string;
  @Input() value: string;
  @Output() change: any;
  @Output() indeterminateChange: any;
  constructor() {
    this.change = new EventEmitter();
    this.indeterminateChange = new EventEmitter();
  }

  ngOnInit() {}

  onChange(change: any) {
    this.change.emit(change);
  }

  onIndeterminateChange(change: any) {
    this.indeterminateChange.emit(change);
  }
}
