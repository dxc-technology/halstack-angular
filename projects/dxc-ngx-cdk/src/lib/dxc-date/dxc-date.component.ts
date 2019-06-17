import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'dxc-date',
  templateUrl: './dxc-date.component.html',
  styleUrls: ['./dxc-date.component.scss']
})
export class DxcDateComponent implements OnInit {
  @Input() @Output() ngModel: string;
  @Input() icon: string;
  @Input() startView: string;
  @Input() startAt: Date;
  @Input() min: Date;
  @Input() max: Date;
  @Input() floatLabel: string;
  @Input() appearance: string;
  @Input() mask: string;
  @Input() text: string;
  @Input() filter: any;
  @Input() disabled: string | boolean;
  @Output() dateInput: EventEmitter<any>;
  @Output() dateChange: EventEmitter<any>;

  allDisabled: boolean;
  popupDisabled: boolean;
  inputDisabled: boolean;
  constructor(private adapter: DateAdapter<any>) {
    this.dateInput = new EventEmitter();
    this.dateChange = new EventEmitter();
    this.adapter.setLocale(navigator.language);
  }

  ngOnInit() {
    if (this.startView === '' || !this.startView) {
      this.startView = 'month';
    }
    if (!this.startAt) {
      this.startAt = new Date();
    }
    if (this.disabled === '') {
      this.allDisabled = true;
      this.popupDisabled = true;
      this.inputDisabled = true;
    } else if (this.disabled === 'input') {
      this.allDisabled = true;
      this.inputDisabled = false;
    } else if (this.disabled === 'popup') {
      this.allDisabled = false;
      this.popupDisabled = true;
    }
  }

  addEvent(type: string, event: any) {
    if (type === 'input') {
      this.dateInput.emit(event);
    } else if (type === 'change') {
      this.dateChange.emit(event);
    }
  }
}
