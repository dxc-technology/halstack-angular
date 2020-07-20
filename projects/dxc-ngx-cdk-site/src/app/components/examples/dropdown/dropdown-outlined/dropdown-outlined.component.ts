import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-outlined',
  templateUrl: './dropdown-outlined.component.html',
  styleUrls: ['./dropdown-outlined.component.scss']
})
export class DropdownOutlinedComponent {

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
