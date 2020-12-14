import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-uncontrolled',
  templateUrl: './slider-uncontrolled.component.html',
  styleUrls: ['./slider-uncontrolled.component.scss']
})
export class SliderUncontrolledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }
  
  formatLabel(value: number) {
    return `${value}$`;
  }

}
