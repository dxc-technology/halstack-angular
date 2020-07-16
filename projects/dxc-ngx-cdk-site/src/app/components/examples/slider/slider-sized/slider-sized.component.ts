import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-sized',
  templateUrl: './slider-sized.component.html',
  styleUrls: ['./slider-sized.component.scss']
})
export class SliderSizedComponent implements OnInit {

  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.value=value;
    console.log(value);
  }

}
