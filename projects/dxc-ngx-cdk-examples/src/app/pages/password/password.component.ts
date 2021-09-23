import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-password",
  templateUrl: "./password.component.html",
})
export class PasswordComponent implements OnInit {
  controlledValue = "c";

  lengthLimit = { min: 2, max: 5 };

  errorMessage = "";

  constructor() {}

  ngOnInit(): void {}

  change(event) {
    this.controlledValue = event;
  }

  onBlur({ value, error }) {
    this.controlledValue = value;
    error ? this.errorMessage = "Custom error" : this.errorMessage = null;
  }
}
