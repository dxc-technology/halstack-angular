import { Component } from '@angular/core';

@Component({
  selector: 'date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.scss']
})
export class DateInfoComponent {

  inputValue = new Date("1995/12/03");

  onChange(event)  {
    this.inputValue = new Date(event);
  };
  constructor()  {}

}
