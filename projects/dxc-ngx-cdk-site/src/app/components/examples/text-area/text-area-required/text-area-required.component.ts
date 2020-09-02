import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-area-required',
  templateUrl: './text-area-required.component.html',
  styleUrls: ['./text-area-required.component.scss']
})
export class TextAreaRequiredComponent implements OnInit {

  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.inputValue = value;
  }
}
