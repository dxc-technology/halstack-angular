import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-simple',
  templateUrl: './radio-simple.component.html',
  styleUrls: ['./radio-simple.component.scss']
})
export class RadioSimpleComponent implements OnInit {

  checked:boolean;

  constructor() { }

  ngOnInit() {
    this.checked = false;
  }

  onChange(value){
    this.checked = value;
    console.info("Radio Simple checked event: " + value);
  }
}
