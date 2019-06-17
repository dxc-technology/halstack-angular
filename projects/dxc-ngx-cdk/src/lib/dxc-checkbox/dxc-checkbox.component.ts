import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-checkbox',
  templateUrl: './dxc-checkbox.component.html',
  styleUrls: ['./dxc-checkbox.component.scss','./dxc-light-checkbox.component.scss','./dxc-dark-checkbox.component.scss']
})
export class DxcCheckboxComponent implements OnInit {
  @Input() ngModel: string;
  @Input() indeterminate: boolean | string;
  @Input() theme: string;
  @Input() checked: boolean;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean | string;
  @Input() required: boolean | string;
  @Input() text: string;
  @Input() name: string;
  @Input() id: string;
  @Input() labelPosition: string;
  @Input() value: string;
  @Output() ngModelChange: EventEmitter<any>;
  @Output() change: EventEmitter<any>;
  @Output() indeterminateChange: EventEmitter<any>;

  @HostBinding('class.light') isLight: boolean = true;
  @HostBinding('class.dark') isDark: boolean = false;


  public ngOnChanges() :void { 
    if(this.theme  === 'dark') {
      this.isDark = true;
      this.isLight = false;
    }
  }

  constructor() {
    this.ngModelChange = new EventEmitter();
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

  onNgModelChange(event: any) {
    this.ngModelChange.emit(event);
  }

  onChange(event: any) {
    this.change.emit({ event, dxcCheckbox: this });
  }

  onIndeterminateChange(event: any) {
    this.indeterminateChange.emit(event);
  }
}
