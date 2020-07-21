import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-default',
  templateUrl: './text-input-default.component.html',
  styleUrls: ['./text-input-default.component.scss']
})
export class TextInputDefaultComponent implements OnInit {

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
    console.log("text-input-default blur event");
  }

}
