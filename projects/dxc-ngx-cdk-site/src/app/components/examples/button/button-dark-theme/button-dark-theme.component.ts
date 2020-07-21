import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-dark-theme',
  templateUrl: './button-dark-theme.component.html',
  styleUrls: ['./button-dark-theme.component.scss']
})
export class ButtonDarkThemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onClick(){
    console.log('Click on button dark theme');
  }

}
