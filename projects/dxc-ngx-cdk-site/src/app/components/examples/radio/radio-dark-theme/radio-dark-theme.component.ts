import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-dark-theme',
  templateUrl: './radio-dark-theme.component.html',
  styleUrls: ['./radio-dark-theme.component.scss']
})
export class RadioDarkThemeComponent implements OnInit {

  checked:boolean;

  constructor() { }

  ngOnInit() {
    this.checked = false;
  }

  onChange(){
    this.checked = !this.checked;
  }
}
