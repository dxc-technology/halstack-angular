import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'select-default',
  templateUrl: './select-default.component.html',
  styleUrls: ['./select-default.component.scss']
})
export class SelectDefaultComponent implements OnInit{

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
