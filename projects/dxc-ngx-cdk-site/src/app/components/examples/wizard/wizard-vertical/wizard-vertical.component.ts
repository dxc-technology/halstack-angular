import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-vertical',
  templateUrl: './wizard-vertical.component.html',
  styleUrls: ['./wizard-vertical.component.scss']
})
export class WizardVerticalComponent implements OnInit {

  steps: Array<any>;

  constructor() { 
    this.steps = new Array<any>();
  }

  ngOnInit() {
    this.steps.push(
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

}
