import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-label',
  templateUrl: './switch-label.component.html',
  styleUrls: ['./switch-label.component.scss']
})
export class SwitchLabelComponent implements OnInit {

  checked1:boolean;
  checked2:boolean;

  constructor() { }

  ngOnInit() {
    this.checked1 = true;
    this.checked2 = false;
  }

  onChange1(value) {
    this.checked1 = value;
    console.log("change1:",this.checked1);
  }
  onChange2(value) {
    this.checked2 = value;
    console.log("change2:",this.checked2);
  }

}
