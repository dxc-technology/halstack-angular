import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-uncontrolled-multiple',
  templateUrl: './select-uncontrolled-multiple.component.html',
  styleUrls: ['./select-uncontrolled-multiple.component.scss']
})
export class SelectUncontrolledMultipleComponent implements OnInit {

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

  onUncontrolledChange(event) {
    console.log(event);
  }

}
