import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-label-position',
  templateUrl: './radio-label-position.component.html',
  styleUrls: ['./radio-label-position.component.scss']
})
export class RadioLabelPositionComponent implements OnInit {

  checked1:boolean;
  checked2:boolean;

  constructor() {}

  ngOnInit() {
    this.checked1 = true;
    this.checked2 = false;
  }

  onChange1(){
    this.checked1 = !this.checked1;
  }
  onChange2(){
    this.checked2 = !this.checked2;
  }

}
