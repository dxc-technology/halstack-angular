import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-area-uncontrolled',
  templateUrl: './text-area-uncontrolled.component.html',
  styleUrls: ['./text-area-uncontrolled.component.scss']
})
export class TextAreaUncontrolledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    console.log(value);
    
  }
  
  onBlur(event) {
    console.log("textarea-default blur event");
  }
}
