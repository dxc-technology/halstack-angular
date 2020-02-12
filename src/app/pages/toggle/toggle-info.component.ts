import { Component } from '@angular/core';

@Component({
  selector: 'toggle-info',
  templateUrl: './toggle-info.component.html',
  styleUrls: ['./toggle-info.component.scss']
})
export class ToggleInfoComponent {

  selected = true;

  onClick() {
    this.selected = !this.selected;
  }

  constructor()  {}

}
