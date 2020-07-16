import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-dark',
  templateUrl: './toggle-dark.component.html',
  styleUrls: ['./toggle-dark.component.scss']
})
export class ToggleDarkComponent implements OnInit {

  selected :boolean;

  constructor() { }

  ngOnInit() {
    this.selected = false;
  }

  onClick() {
    this.selected = !this.selected;
  }

}
