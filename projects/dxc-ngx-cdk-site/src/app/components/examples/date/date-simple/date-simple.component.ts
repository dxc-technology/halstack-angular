import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-simple',
  templateUrl: './date-simple.component.html',
  styleUrls: ['./date-simple.component.scss']
})
export class DateSimpleComponent implements OnInit {

  isInvalidDate:boolean= false;
  inputValue:string;

  constructor() { }

  ngOnInit(): void {
    this.inputValue = '03/10/2020';
  }

  onChange(event)  {
    this.inputValue = event.stringValue;
    console.log('change: ' + JSON.stringify(event));
    this.checkDate(event.dateValue);
  }

  checkDate(dateValue: Date ) {
    this.isInvalidDate=dateValue ? false : true;
  }
}
