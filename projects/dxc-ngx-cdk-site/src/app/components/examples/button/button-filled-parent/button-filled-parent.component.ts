import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-filled-parent',
  templateUrl: './button-filled-parent.component.html',
  styleUrls: ['./button-filled-parent.component.scss']
})
export class ButtonFilledParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log('ButtonFilledParentComponent clicked');
  }

}
