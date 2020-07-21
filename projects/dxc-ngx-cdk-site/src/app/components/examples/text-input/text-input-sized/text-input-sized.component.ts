import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-sized',
  templateUrl: './text-input-sized.component.html',
  styleUrls: ['./text-input-sized.component.scss']
})
export class TextInputSizedComponent implements OnInit {

  inputValue: string;
  
  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.inputValue = value;
  }
}
