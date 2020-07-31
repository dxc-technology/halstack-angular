import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-hover',
  templateUrl: './dropdown-hover.component.html',
  styleUrls: ['./dropdown-hover.component.scss']
})
export class DropdownHoverComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
