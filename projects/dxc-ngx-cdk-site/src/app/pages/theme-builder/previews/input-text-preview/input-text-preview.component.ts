import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-text-preview",
  templateUrl: "./input-text-preview.component.html",
})
export class InputTextPreviewComponent implements OnInit {
  countries = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
  ];

  constructor() {}

  ngOnInit(): void {}
}
