import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.scss']
})
export class DateInfoComponent  implements OnInit{


  inputValue:Date;

  ngOnInit(): void {
    this.inputValue = new Date("1995/12/03");
  }

  onChange(event)  {
    this.inputValue = event.isValid ?  new Date(event) : null;
  };
  constructor()  {}

}
