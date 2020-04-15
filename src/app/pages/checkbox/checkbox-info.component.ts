import { Component } from '@angular/core';

@Component({
  selector: 'checkbox-info',
  templateUrl: './checkbox-info.component.html',
  styleUrls: ['./checkbox-info.component.scss']
})
export class CheckboxInfoComponent {

  constructor()  {}
  checked = false;
  onChange(value) {
    this.checked = false;
    console.debug(this.checked);
  }

  onUncontrolledChange(value) {
    console.debug(value);
  }

}
