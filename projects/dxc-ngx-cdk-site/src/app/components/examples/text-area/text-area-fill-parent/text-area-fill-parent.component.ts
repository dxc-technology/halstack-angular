import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-area-fill-parent',
  templateUrl: './text-area-fill-parent.component.html',
  styleUrls: ['./text-area-fill-parent.component.scss']
})
export class TextAreaFillParentComponent implements OnInit {

  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.inputValue = value;
  }
}
