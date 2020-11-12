import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleGroup-disabled',
  templateUrl: './toggleGroup-disabled.component.html',
  styleUrls: ['./toggleGroup-disabled.component.scss']
})
export class ToggleGroupDisabledComponent implements OnInit {

  options = [
    {
      label: "Facebook",
      value: 1
    },
    {
      label: "Twitter",
      value: 2
    },
    {
      label: "Linkedin",
      value: 3
    },
    {
      label: "Facebook",
      value: 4
    },
    {
      label: "Twitter",
      value: 5
    },
    {
      label: "Linkedin",
      value: 6
    }
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
