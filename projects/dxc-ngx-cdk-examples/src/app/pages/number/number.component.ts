import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html'
})
export class NumberComponent implements OnInit {

  numberValue = "12";

  numberOnChange(event) {
    this.numberValue = event.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
