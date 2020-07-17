import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-themed',
  templateUrl: './wizard-themed.component.html',
  styleUrls: ['./wizard-themed.component.scss']
})
export class WizardThemedComponent implements OnInit {

  steps: Array<any>;

  constructor() {
    this.steps = new Array<any>();
   }

  ngOnInit() {
    this.steps.push(
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
  }

}
