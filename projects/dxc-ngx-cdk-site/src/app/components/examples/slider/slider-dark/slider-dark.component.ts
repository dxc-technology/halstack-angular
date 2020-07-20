import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-dark',
  templateUrl: './slider-dark.component.html',
  styleUrls: ['./slider-dark.component.scss']
})
export class SliderDarkComponent implements OnInit {

  inputValue:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.inputValue = value;
    console.log(value);
  }
}
