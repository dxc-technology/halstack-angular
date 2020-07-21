import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-fill-parent',
  templateUrl: './text-input-fill-parent.component.html',
  styleUrls: ['./text-input-fill-parent.component.scss']
})
export class TextInputFillParentComponent implements OnInit {

  inputValue: string;
  
  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.inputValue = value;
  }
  
}
