import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-default',
  templateUrl: './toggle-default.component.html',
  styleUrls: ['./toggle-default.component.scss']
})
export class ToggleDefaultComponent implements OnInit {

  selected :boolean;

  constructor() {  }

  ngOnInit() {
    this.selected = false;
  }

  onClick() {
    this.selected = !this.selected;
  }

}
