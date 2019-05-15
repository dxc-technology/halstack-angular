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
  @Input() indeterminate: boolean | string;
  @Input() checked: boolean;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean | string;
  @Input() required: boolean | string;
  @Input() text: string;
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

  ngOnInit() {
    if (this.required === '') {
      this.required = true;
    } else if (this.required === 'false') {
      this.required = false;
    } else if (this.required === 'true') {
      this.required = true;
    }

    if (this.disabled === '' || this.disabled === true) {
      this.required = false;
    }

    if (this.indeterminate === '') {
      this.indeterminate = true;
    } else if (this.indeterminate === 'false') {
      this.indeterminate = false;
    } else if (this.indeterminate === 'true') {
      this.indeterminate = true;
    }
  }

  onChange(change: any) {
    this.change.emit(change);
  }

  onIndeterminateChange(change: any) {
    this.indeterminateChange.emit(change);
  }
}
