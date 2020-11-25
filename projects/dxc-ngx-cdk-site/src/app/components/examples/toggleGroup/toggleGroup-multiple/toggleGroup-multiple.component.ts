import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleGroup-multiple',
  templateUrl: './toggleGroup-multiple.component.html',
  styleUrls: ['./toggleGroup-multiple.component.scss']
})
export class ToggleGroupMultipleComponent implements OnInit {

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
