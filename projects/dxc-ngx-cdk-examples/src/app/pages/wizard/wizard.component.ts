import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.scss"],
})
export class WizardComponent implements OnInit {
  currentStep: number;
  currentStep2: number;

  constructor() {
    this.currentStep = 0;
    this.currentStep2 = 1;
  }

  ngOnInit() {}

  public myOnStepClick(i) {
    console.log("MyOnStepClick", i);
    this.currentStep++;
  }
  public myOnStepClick2(i) {
    console.log("MyOnStepClick", i);
  }
}
