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
      iconSrc:"https://img.icons8.com/android/24/000000/facebook.png"
    },
    {
      value: 2,
      label: "Twitter"
      ,
      iconSrc:"https://img.icons8.com/android/24/000000/twitter.png"
    },
    {
      value: 3,
      label: "Linkedin"
      ,
      iconSrc:"https://img.icons8.com/android/24/000000/linkedin.png"
    }
  ];

}
