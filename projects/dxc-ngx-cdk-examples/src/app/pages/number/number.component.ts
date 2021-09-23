import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-number",
  templateUrl: "./number.component.html",
})
export class NumberComponent implements OnInit {
  value = "";

  errorMessage = "";

  onChange(event) {
    this.value = event;
  }

  onBlur({ value, error }) {
    this.value = value;
    this.errorMessage = error ? "Custom error" : null;
  }

  constructor() {}

  ngOnInit(): void {}
}
