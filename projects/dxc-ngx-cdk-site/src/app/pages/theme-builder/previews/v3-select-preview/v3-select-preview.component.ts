import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select-preview",
  templateUrl: "./v3-select-preview.component.html",
})
export class V3SelectPreviewComponent implements OnInit {
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

  optionsWithIconAndLabels = [
    {
      value: 1,
      iconSrc: "assets/img/home.svg",
      label: "Home"
    },
    {
      value: 2,
      iconSrc: "assets/img/home.svg",
      label: "House"
    },
    {
      value: 3,
      iconSrc: "assets/img/home.svg",
      label: "Home"
    }
  ];

  multipleSelected = [""];

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    this.multipleSelected = event;
  }
}
