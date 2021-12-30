import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-date',
  templateUrl: './new-date.component.html'
})
export class NewDateComponent implements OnInit {

  inputValue = "01-01-1995";

  value = "01-01-1995";

  error = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value){
    this.inputValue = value;
  }

  onChangeValue(value){
    this.value = value;
  }
  
  onBlur({ value, error }){
    this.value = value;
    error ? this.error = "Fecha inválida." :  this.error = null;
  }

}