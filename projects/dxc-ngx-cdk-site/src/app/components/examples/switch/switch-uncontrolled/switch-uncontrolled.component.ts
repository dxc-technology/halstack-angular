import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-uncontrolled',
  templateUrl: './switch-uncontrolled.component.html',
  styleUrls: ['./switch-uncontrolled.component.scss']
})
export class SwitchUncontrolledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }

}
