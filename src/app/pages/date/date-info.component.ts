import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.scss']
})
export class DateInfoComponent  implements OnInit{


  inputValue:Date;

  validDate = true;
  
  ngOnInit(): void {
    this.inputValue = new Date("1995/12/03");
  }

  onChange(event)  {
    this.validDate = event.isValid;
    this.inputValue = this.validDate ?  new Date(event) : null;
  };
  constructor()  {}

}
