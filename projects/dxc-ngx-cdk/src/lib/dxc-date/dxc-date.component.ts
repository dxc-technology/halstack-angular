import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnInit,
  ViewChild
} from "@angular/core";

import { ErrorStateMatcher, MatDatepicker } from "@angular/material";

import { FormControl } from "@angular/forms";
import * as momentImported from 'moment';
const moment = momentImported;

export enum Formats {
  "MM/DD/YYYY",
  "DD/MM/YYYY",
  "YYYY/MM/DD",
  "YYYY-MM-DD",
  "DD-MM-YYYY",
  "MM-DD-YYYY",
  "DD.MM.YYYY",
  "MM.DD.YYYY",
  "YYYY.MM.DD"
}

@Component({
  selector: "dxc-date",
  templateUrl: "./dxc-date.component.html",
  styleUrls: [
    "./dxc-date.component.scss",
    "./dxc-light-date.scss",
    "./dxc-dark-date.scss"
  ]
})
export class DxcDateComponent implements OnChanges, OnInit {
  @Input() min: any;
  @Input() max: any;
  @Input() value: Date;
  @Input() theme: string;
  @Input() invalid: boolean;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() assistiveText: string;
  @Input() iconSrc: string;
  @Input() name: string;
  @Input() id: string;
  @Input() format: string;
  @Input() showMask: boolean;
  @Input() label: string;

  @Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public inputChange: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  public maskObject: {};
  public matcher = new InvalidStateMatcher();
  public formControl = new FormControl();

  @ViewChild('picker',{static:true}) picker: MatDatepicker<any>;

  public ngOnInit(): void {
    this.format = this.format != null ? this.format.toUpperCase() : Formats[Formats["DD-MM-YYYY"]];
    this.checkFormat();
   
    this.picker.openedStream.subscribe( () => {
        this.picker._datepickerInput['_dateFormats'].display.dateInput = this.format.toUpperCase();
    })
    this.maskObject = { format: this.format, showMask: this.showMask };

  }

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.isDisabled = this.disabled;
    this.value = this.value || new Date();
    this.maskObject = { format: this.format, showMask: this.showMask };
    this.matcher.setInvalid(this.invalid);
  }

  public valueChanged($event: any): void {
    let _dateValue = moment($event.targetElement.value, this.format, true);
    if (_dateValue.isValid()) {
      this.value = $event.target.value;
      this.valueChange.emit(this.value);
    }
  }

  public dateInput($event: any): void {
    this.valueChange.emit($event.targetElement.value);
  }

  /**
   * Check the user format and throw an error if it is not compatible
   */
  private checkFormat(): void {
    const isFormatCorrect = Object.values(Formats).includes(this.format);
    if (!isFormatCorrect) {
      throw new Error("Invalid Date format");
    }
  }


}
/** Error when invalid control is dirty, touched, or submitted. */
class InvalidStateMatcher implements ErrorStateMatcher {
  private invalid: boolean;
  isErrorState(): boolean {
    return this.invalid;
  }

  public setInvalid(invalid: boolean): void {
    this.invalid = invalid;
  }
}
