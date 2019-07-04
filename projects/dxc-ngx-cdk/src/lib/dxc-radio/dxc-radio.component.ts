import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-radio',
  templateUrl: './dxc-radio.component.html',
  styleUrls: ['./dxc-radio.component.scss','./dxc-light-radio.component.scss','./dxc-dark-radio.component.scss'],
})
export class DxcRadioComponent implements OnInit {
  @Input() checked: boolean;
  @Input() theme: string;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean | string;
  @Input() label: string;
  @Input() name: string;
  @Input() labelPosition: string;
  @Input() value: any;
  @Output() checkedChange: EventEmitter<any>;

  @HostBinding('class.light') isLight: boolean = true;
  @HostBinding('class.dark') isDark: boolean = false;

  public ngOnChanges() :void { 
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.labelPosition === 'after' ?  'after': 'before'
  }
  
  constructor() {
    this.checkedChange = new EventEmitter();
  }

  ngOnInit() {
    if (this.disabled === '' || this.disabled === true) {
    }
  }

  onChange(event: any) {
    this.checkedChange.emit(event.source.checked);
  }
 }

