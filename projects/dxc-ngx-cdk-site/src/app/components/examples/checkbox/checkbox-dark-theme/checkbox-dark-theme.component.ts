import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-dark-theme',
  templateUrl: './checkbox-dark-theme.component.html',
  styleUrls: ['./checkbox-dark-theme.component.scss']
})
export class CheckboxDarkThemeComponent implements OnInit {

  checked:boolean;

  constructor() { }

  ngOnInit() {
    this.checked = true;
  }
  
  onChange(value) {
    this.checked = value;
    console.debug(value);
  }

}
