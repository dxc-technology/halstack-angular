import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-multi',
  templateUrl: './text-input-multi.component.html',
  styleUrls: ['./text-input-multi.component.scss']
})
export class TextInputMultiComponent implements OnInit {

  inputValue: string;
  
  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.inputValue = value;
  }

}
