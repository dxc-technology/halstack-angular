import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-input-masked',
  templateUrl: './text-input-masked.component.html',
  styleUrls: ['./text-input-masked.component.scss']
})
export class TextInputMaskedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    console.log(value);
  }
  
  onBlur(event) {
    console.log("text-input blur event");
  }

}
