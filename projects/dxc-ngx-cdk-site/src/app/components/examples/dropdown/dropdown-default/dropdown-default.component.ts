import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-default',
  templateUrl: './dropdown-default.component.html',
  styleUrls: ['./dropdown-default.component.scss']
})
export class DropdownDefaultComponent {

  constructor() {}
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

}
