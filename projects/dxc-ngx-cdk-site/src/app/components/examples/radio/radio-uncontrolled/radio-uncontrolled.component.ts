import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-uncontrolled',
  templateUrl: './radio-uncontrolled.component.html',
  styleUrls: ['./radio-uncontrolled.component.scss']
})
export class RadioUncontrolledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }

}
