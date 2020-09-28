import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'textarea-info',
  templateUrl: './textarea-info.component.html',
  styleUrls: ['./textarea-info.component.scss']
})
export class TextareaInfoComponent implements OnInit {

  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

    /**
   * 
   * @param value OnChange function , controlling value. It only changes when new 
   * length value is equal or less than 5
   */
  onChange(value) {
    if (value.length<=5){
      this.inputValue = value;
    }
    
  }
  
  onBlur(event) {
    console.log("textarea-default blur event");
  }

}
