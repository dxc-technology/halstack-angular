import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select-preview",
  templateUrl: "./select-preview.component.html",
})
export class SelectPreviewComponent implements OnInit {
  optionsWithoutIcon = [
    {
      value: "1",
      label: "Facebook",
    },
    {
      value: "2",
      label: "Twitter",
    },
    {
      value: "3",
      label: "Linkedin",
    },
  ];

  multipleSelected = [""];

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    this.multipleSelected = event;
  }
}
