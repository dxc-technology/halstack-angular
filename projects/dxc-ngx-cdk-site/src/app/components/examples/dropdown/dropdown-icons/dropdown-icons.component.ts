import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-icons',
  templateUrl: './dropdown-icons.component.html',
  styleUrls: ['./dropdown-icons.component.scss']
})
export class DropdownIconsComponent {

  constructor() {}
  optionsWithIcon = [
    {
      value: 1,
      label: "Facebook"
      ,
      iconSrc:"assets/img/facebook.svg"
    },
    {
      value: 2,
      label: "Twitter"
      ,
      iconSrc:"assets/img/twitter.svg"
    },
    {
      value: 3,
      label: "Linkedin"
      ,
      iconSrc:"assets/img/linkedin.svg"
    }
  ];

}
