import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-date',
  templateUrl: './new-date.component.html'
})
export class NewDateComponent implements OnInit {

  inputValue = "01-01-1995";

  error = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value){
    this.inputValue = value;
  }

  onBlur({ value, error }){
    this.inputValue = value;
    error ? this.error = "Fecha inválida." :  this.error = null;
  }

}
