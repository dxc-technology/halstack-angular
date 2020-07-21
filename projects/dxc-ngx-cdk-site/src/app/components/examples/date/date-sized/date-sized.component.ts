import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-sized',
  templateUrl: './date-sized.component.html',
  styleUrls: ['./date-sized.component.scss']
})
export class DateSizedComponent implements OnInit {

  invalid:boolean;
  value:Date;

  constructor()  {}

  ngOnInit(): void {
    this.invalid = false;
  }

  onChange(event)  {
    this.value = 
    event.dateValue!== null && event.dateValue !== undefined ?  new Date(event.dateValue) : null;
    this.invalid = event.dateValue=== null || event.dateValue === undefined ? true : false;
  };
  
}
