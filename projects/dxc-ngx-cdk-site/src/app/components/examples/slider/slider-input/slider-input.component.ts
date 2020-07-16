import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.scss']
})
export class SliderInputComponent implements OnInit {

  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.value=value;
    console.log(value);
  }

  onDragEnd(value) {
    console.log('dragEnd: ' + value);
  }

}
