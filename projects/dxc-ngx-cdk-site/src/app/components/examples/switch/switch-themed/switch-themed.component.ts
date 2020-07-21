import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-themed',
  templateUrl: './switch-themed.component.html',
  styleUrls: ['./switch-themed.component.scss']
})
export class SwitchThemedComponent implements OnInit {

  checked:boolean;

  constructor() { }

  ngOnInit() {
    this.checked = true;
  }

  onChange(value) {
    this.checked = value;
    console.log(this.checked);
  }

}
