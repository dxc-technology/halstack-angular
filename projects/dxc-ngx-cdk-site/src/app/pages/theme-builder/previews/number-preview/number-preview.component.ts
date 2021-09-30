import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-preview',
  templateUrl: './number-preview.component.html'
})
export class NumberPreviewComponent implements OnInit {

  numberValue = "12";

  constructor() { }

  ngOnInit(): void {
  }

  numberOnChange(event) {
    this.numberValue = event;
  }

}
