import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-default',
  templateUrl: './slider-default.component.html',
  styleUrls: ['./slider-default.component.scss']
})
export class SliderDefaultComponent implements OnInit {

  inputValue:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.inputValue = value;
    console.log(value);
  }
}
