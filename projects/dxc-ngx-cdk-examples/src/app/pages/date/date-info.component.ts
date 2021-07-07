import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.scss']
})
export class DateInfoComponent implements OnInit {
  public pageForm: FormGroup;
  customOutput: boolean = true;
  inputValue: string = "1995/12/03";

  isInvalidDate: boolean = false;

  constructor(private fb: FormBuilder) { 
    this.pageForm = this.fb.group({
      dateCtrl: ['19951203']
    });
  }

  ngOnInit(): void {

  }

  onChange(event: any) {
    this.inputValue = event.stringValue;
    console.log('change: ' + JSON.stringify(event));
    this.checkDate(event.dateValue);
  };

  onUncontrolledChange(event: any) {
    console.log('uncontrolledchange: ' + JSON.stringify(event));
  }

  checkDate(dateValue: Date) {
    this.isInvalidDate = dateValue ? false : true;
  }
}
