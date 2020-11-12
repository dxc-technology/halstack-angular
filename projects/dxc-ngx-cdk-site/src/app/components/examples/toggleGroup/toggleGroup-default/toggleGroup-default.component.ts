import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleGroup-default',
  templateUrl: './toggleGroup-default.component.html',
  styleUrls: ['./toggleGroup-default.component.scss']
})
export class ToggleGroupDefaultComponent implements OnInit {

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
