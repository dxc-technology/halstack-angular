import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-assistive',
  templateUrl: './select-assistive.component.html',
  styleUrls: ['./select-assistive.component.scss']
})
export class SelectAssistiveComponent implements OnInit {

  inputValue: number;
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

  constructor() {}
  
  ngOnInit() {
    this.inputValue = 1;
  }

  onChange(value) {
    this.inputValue = value;
  }

}
