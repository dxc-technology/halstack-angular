import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-continuous',
  templateUrl: './slider-continuous.component.html',
  styleUrls: ['./slider-continuous.component.scss']
})
export class SliderContinuousComponent implements OnInit {

  inputValue:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.inputValue = value;
    console.log(value);
  }
  
}
