import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-text-mode',
  templateUrl: './button-text-mode.component.html',
  styleUrls: ['./button-text-mode.component.scss']
})
export class ButtonTextModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Hello world");
  }

}
