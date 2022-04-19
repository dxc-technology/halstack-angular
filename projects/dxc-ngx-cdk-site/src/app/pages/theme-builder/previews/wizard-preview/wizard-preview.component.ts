import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wizard-preview",
  templateUrl: "./wizard-preview.component.html",
})
export class WizardPreviewComponent implements OnInit {
  current = 0;
  constructor() {}

  ngOnInit(): void {}

  onStepClick(value) {
    this.current = value;
    console.log(value);
  }
}
