import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-sized',
  templateUrl: './checkbox-sized.component.html',
  styleUrls: ['./checkbox-sized.component.scss']
})
export class CheckboxSizedComponent implements OnInit {

  checked:boolean;

  constructor() { }

  ngOnInit() {
    this.checked = false;
  }
  
  onChange(value) {
    this.checked = value;
    console.debug(value);
  }

}
