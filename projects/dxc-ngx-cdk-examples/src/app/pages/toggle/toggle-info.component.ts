import { Component } from '@angular/core';

@Component({
  selector: 'toggle-info',
  templateUrl: './toggle-info.component.html',
  styleUrls: ['./toggle-info.component.scss']
})
export class ToggleInfoComponent {

  selected = true;

  onClick(value) {
    this.selected = value;
    console.log(value);
  }

  onUncontrolledClick(value) {
    console.log('uncontrolled: ' + value);
  }

  constructor()  {}

}
