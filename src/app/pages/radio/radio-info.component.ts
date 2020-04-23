import { Component } from '@angular/core';

@Component({
  selector: 'radio-info',
  templateUrl: './radio-info.component.html',
  styleUrls: ['./radio-info.component.scss']
})
export class RadioInfoComponent {

  checked = false;
  constructor() {}

  onChange(value){
    this.checked = value;
    console.debug(value);
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }

}
