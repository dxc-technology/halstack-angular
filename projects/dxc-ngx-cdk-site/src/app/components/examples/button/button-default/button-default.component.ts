import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss']
})
export class ButtonDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onClick(){
    console.log('Click on button primary mode');
  }

}
