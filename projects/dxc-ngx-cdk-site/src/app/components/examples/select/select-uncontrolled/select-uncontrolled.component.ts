import { Component } from '@angular/core';

@Component({
  selector: 'select-uncontrolled',
  templateUrl: './select-uncontrolled.component.html',
  styleUrls: ['./select-uncontrolled.component.scss']
})
export class SelectUncontrolledComponent{

  constructor() { }

  optionsWithoutIcon = [
    {
      value: 1,
      label: "Facebook"
    },
    {
      value: 2,
      label: "Twitter"
    },
    {
      value: 3,
      label: "Linkedin"
    }
  ];

  onUncontrolledChange(value) {
    console.log("Uncontrolled change: " + value);
  }

}
