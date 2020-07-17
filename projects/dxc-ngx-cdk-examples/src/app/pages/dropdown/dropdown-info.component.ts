import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-info',
  templateUrl: './dropdown-info.component.html',
  styleUrls: ['./dropdown-info.component.scss']
})
export class DropdownInfoComponent {

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
