import { Component } from '@angular/core';

@Component({
  selector: 'slider-info',
  templateUrl: './slider-info.component.html',
  styleUrls: ['./slider-info.component.scss']
})
export class SliderInfoComponent {

  value: number = 0;

  constructor()  {}

  onChange(value) {
    this.value=value;
    console.log(value);
  }

  onUncontrolledChange(value) {
    console.log('uncontrolled: ' + value);
  }

  onDragEnd(value) {
    console.log('dragEnd: ' + value);
  }
}
