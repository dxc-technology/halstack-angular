import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'select-themed',
  templateUrl: './select-themed.component.html',
  styleUrls: ['./select-themed.component.scss']
})
export class SelectThemedComponent implements OnInit{

  inputValue:number;
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
    console.log(value)
  }

}
