import { Component } from '@angular/core';

@Component({
  selector: 'select-icons',
  templateUrl: './select-icons.component.html',
  styleUrls: ['./select-icons.component.scss']
})
export class SelectIconsComponent {

  inputValue;
  optionsWithIcons = [
    {
      value: 1,
      label: "Facebook",
      iconSrc: "assets/img/facebook-bl.svg"
    },
    {
      value: 2,
      label: "Twitter",
      iconSrc: "assets/img/twitter-bl.svg"
    },
    {
      value: 3,
      label: "Linkedin",
      iconSrc: "assets/img/linkedin-bl.svg"
    }
  ];

  constructor() {}

  onChange(value) {
    this.inputValue = value;
    console.log(value)
  }

}
