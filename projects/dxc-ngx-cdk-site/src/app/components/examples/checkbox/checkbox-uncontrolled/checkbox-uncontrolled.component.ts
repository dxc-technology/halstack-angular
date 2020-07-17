import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-uncontrolled',
  templateUrl: './checkbox-uncontrolled.component.html',
  styleUrls: ['./checkbox-uncontrolled.component.scss']
})
export class CheckboxUncontrolledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }

}
