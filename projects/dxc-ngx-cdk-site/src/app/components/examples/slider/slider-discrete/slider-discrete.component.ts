import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-discrete',
  templateUrl: './slider-discrete.component.html',
  styleUrls: ['./slider-discrete.component.scss']
})
export class SliderDiscreteComponent implements OnInit {

  inputValue:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
   this.inputValue = value;
   console.log(this.inputValue)
  }
}
