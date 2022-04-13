import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-group-preview',
  templateUrl: './toggle-group-preview.component.html'
})
export class ToggleGroupPreviewComponent implements OnInit {


  controlledOptions: Array<any>  = [{label: 'Goku', value:"1"},{label: 'Broli', value:"2"},{label: 'Vegeta', value:"3"}];
  controlledSingleOptions: Array<any>  = [{label: 'Ikki', value:"1"},{label: 'Seiya', value:"2"},{label: 'Aioras', value:"3"}];

  value: Array<string>;
  singleValue: string;


  constructor() {


  }

  ngOnInit(): void {
    this.value = ['1','2'];
    this.singleValue = "1";
  }

  callbackFunction(event){
    console.log("callback function:", event);
    this.value = event;
  }

  callbackFunction2(event){
    console.log("callback function2:", event);
    this.singleValue = event;
  }

}
