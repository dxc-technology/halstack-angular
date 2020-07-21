import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-modes',
  templateUrl: './button-modes.component.html',
  styleUrls: ['./button-modes.component.scss']
})
export class ButtonModesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log('click');
  }

}
