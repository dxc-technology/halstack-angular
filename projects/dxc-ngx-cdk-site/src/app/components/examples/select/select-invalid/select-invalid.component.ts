import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'select-invalid',
  templateUrl: './select-invalid.component.html',
  styleUrls: ['./select-invalid.component.scss']
})
export class SelectInvalidComponent implements OnInit{

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
