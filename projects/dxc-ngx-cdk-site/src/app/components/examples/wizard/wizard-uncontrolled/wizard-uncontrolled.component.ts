import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-uncontrolled',
  templateUrl: './wizard-uncontrolled.component.html',
  styleUrls: ['./wizard-uncontrolled.component.scss']
})
export class WizardUncontrolledComponent implements OnInit {

  steps: Array<any>;

  constructor() {
    this.steps = new Array<any>();
   }

  ngOnInit() {
    this.steps.push(
      {label: "First step"},
      {label: "Second step"},
      {label: "Third step"},
      {label: "Forth step", valid: false}
    );
  }

  onStepClick(value){
    console.log(value);
  }

}
