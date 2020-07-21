import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-outlined',
  templateUrl: './toggle-outlined.component.html',
  styleUrls: ['./toggle-outlined.component.scss']
})
export class ToggleOutlinedComponent implements OnInit {

  selected :boolean;

  constructor() { }

  ngOnInit() {
    this.selected = false;
  }

  onClick() {
    this.selected = !this.selected;
  }

}
