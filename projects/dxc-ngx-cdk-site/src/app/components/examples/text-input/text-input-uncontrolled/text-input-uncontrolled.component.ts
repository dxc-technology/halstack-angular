import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-uncontrolled',
  templateUrl: './text-input-uncontrolled.component.html',
  styleUrls: ['./text-input-uncontrolled.component.scss']
})
export class TextInputUncontrolledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    console.log(value);
    
  }
  
  onBlur(event) {
    console.log("text-input-default blur event");
  }
}
