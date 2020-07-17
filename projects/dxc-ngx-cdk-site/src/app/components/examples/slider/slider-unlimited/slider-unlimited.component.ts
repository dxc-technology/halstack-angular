import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-unlimited',
  templateUrl: './slider-unlimited.component.html',
  styleUrls: ['./slider-unlimited.component.scss']
})
export class SliderUnlimitedComponent implements OnInit {

  inputValue:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(value){
    this.inputValue = value;
    console.log(value)
  }


}
