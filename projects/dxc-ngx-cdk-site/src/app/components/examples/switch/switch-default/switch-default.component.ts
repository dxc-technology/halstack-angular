import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-default',
  templateUrl: './switch-default.component.html',
  styleUrls: ['./switch-default.component.scss']
})
export class SwitchDefaultComponent implements OnInit {

  checked:boolean

  constructor() { }

  ngOnInit() {
    this.checked = false;
  }

  onChange(value) {  
    this.checked= value;
    console.log(value);
  }

}
