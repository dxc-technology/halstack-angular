import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-dark',
  templateUrl: './text-input-dark.component.html',
  styleUrls: ['./text-input-dark.component.scss']
})
export class TextInputDarkComponent implements OnInit {

  inputValue: string;
  
  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.inputValue = value;
    console.log("text-input-dark value changed: " + this.inputValue);
  }

  onPrefixClick() {
    console.log("text-input-dark prefix Clicked");
  }

  onSuffixClick() {
    console.log("text-input-dark suffix Clicked");
  }
  
  onBlur(event) {
    console.log("text-input-dark onBlur event");
  }
}
