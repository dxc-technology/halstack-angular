import { Component } from '@angular/core';

@Component({
  selector: 'switch-info',
  templateUrl: './switch-info.component.html',
  styleUrls: ['./switch-info.component.scss']
})
export class SwitchInfoComponent {

  constructor() {}
  checked = false;

  onChange($event) {  
    this.checked= $event;
    console.log($event);
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }
}
