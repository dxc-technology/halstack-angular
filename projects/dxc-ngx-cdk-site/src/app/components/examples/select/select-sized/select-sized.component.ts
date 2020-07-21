import { Component } from '@angular/core';

@Component({
  selector: 'select-sized',
  templateUrl: './select-sized.component.html',
  styleUrls: ['./select-sized.component.scss']
})
export class SelectSizedComponent {

  inputValue:number;
  optionsWithOnlyIcons = [
    {
      value: 1,
      iconSrc: "assets/img/facebook-bl.svg"
    },
    {
      value: 2,
      iconSrc: "assets/img/twitter-bl.svg"
    },
    {
      value: 3,
      iconSrc: "assets/img/linkedin-bl.svg"
    }
  ];

  constructor() {}

  onChange(value) {
    this.inputValue = value;
    console.log(value)
  }

}
