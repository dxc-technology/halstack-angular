import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-dark',
  templateUrl: './dropdown-dark.component.html',
  styleUrls: ['./dropdown-dark.component.scss']
})
export class DropdownDarkComponent {

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
