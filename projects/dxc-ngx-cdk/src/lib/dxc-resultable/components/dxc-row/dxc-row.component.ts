import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr',
  template: `<ng-container cdkCellOutlet></ng-container>`})
export class DxcRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
