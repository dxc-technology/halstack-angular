import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.scss']
})
export class DateInfoComponent  implements OnInit{


  inputValue:string = "1995/12/03";

  isInvalidDate:boolean= false;

  ngOnInit(): void {
    
  }

  onChange(event: any)  {
    this.inputValue = event.stringValue;
    console.log('change: ' + JSON.stringify(event));
    this.checkDate(event.dateValue);
  };

  onUncontrolledChange(event: any) {
    console.log('uncontrolledchange: ' + JSON.stringify(event));
  }

  checkDate(dateValue: Date ) {
    debugger;
    this.isInvalidDate=dateValue ? false : true;
  }
}
