import { Component } from '@angular/core';

@Component({
  selector: 'select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent {

  multipleSelected = '';
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

  constructor() {}

  onChange(event) {
    this.multipleSelected = event.filter(item => (item!='2'));
    console.log(event);
  }

}
