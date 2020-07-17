import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-default',
  templateUrl: './wizard-default.component.html',
  styleUrls: ['./wizard-default.component.scss']
})
export class WizardDefaultComponent implements OnInit {

  steps: Array<any>;
  currentStep: number;

  constructor() {
    this.steps = new Array<any>();
    this.currentStep = 1;
   }

  ngOnInit() {
    this.steps.push(
      {label: "First step", iconSrc:"./assets/img/home.svg"},
      {label: "Second step", iconSrc:"./assets/img/home.svg"},
      {label: "Third step", iconSrc:"./assets/img/home.svg"},
      {label: "Forth step", iconSrc:"./assets/img/home.svg"}
    );
  }

  onStepClick(value){
    this.currentStep = value;
    console.log(value);
  }

}
