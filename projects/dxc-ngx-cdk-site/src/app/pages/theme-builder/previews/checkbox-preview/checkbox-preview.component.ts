import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-preview',
  templateUrl: './checkbox-preview.component.html'
})
export class CheckboxPreviewComponent implements OnInit {

  checked1: boolean = true;
  checked2: boolean = false;
  checked3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange1(value) {
    this.checked1 = value;
  }

  onChange2(value) {
    this.checked2 = value;
  }

  onChange3(value) {
    this.checked3 = value;
  }

}
