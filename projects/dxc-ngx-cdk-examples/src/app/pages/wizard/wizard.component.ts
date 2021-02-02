import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  stepsExample1: Array<any>;
  stepsExample2: Array<any>;
  stepsExample3: Array<any>;
  stepsExample4: Array<any>;

  currentStep: number;

  constructor() { 
    this.stepsExample1 = new Array<any>();
    this.stepsExample2 = new Array<any>();
    this.stepsExample3 = new Array<any>();
    this.stepsExample4 = new Array<any>();
    this.currentStep = 1;
  }

  ngOnInit() {
    this.stepsExample1.push(
      {label: "First step"},
      {label: "Second step"},
      {label: "Third step"},
      {label: "Forth step", valid: false}
    );
    this.stepsExample2.push(
      {label: "First step", iconSrc:"./assets/images/home.svg"},
      {label: "Second step", iconSrc:"./assets/images/home.svg"},
      {label: "Third step", iconSrc:"./assets/images/home.svg"},
      {label: "Forth step", iconSrc:"./assets/images/home.svg"}
    );
    this.stepsExample3.push(
      {
        label: "First step", 
        description: "My step description"
      },
      {
        label: "Second step", 
        description: "Another step description"
      },
      {
        label: "Third step", 
        description: "Almost finished"
      },
      {
        label: "Forth step", 
        description: "Disabled step",
        disabled: true
      }
    );
    this.stepsExample4.push(
      {
        label: "First step", 
        description: "My step description",
        valid: false
      },
      {
        label: "Second step", 
        description: "Another step description",
        valid: true
      },
      {
        label: "Third step", 
        description: "Almost finished"
      },
      {
        label: "Forth step", 
        description: "Disabled step",
        disabled: true
      }
    );
  }

  public myOnStepClick(i) {
    console.log("MyOnStepClick", i);
    this.currentStep++;
  }

}
