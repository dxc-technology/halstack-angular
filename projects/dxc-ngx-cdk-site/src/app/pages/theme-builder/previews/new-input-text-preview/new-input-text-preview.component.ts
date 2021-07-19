import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-input-text-preview",
  templateUrl: "./new-input-text-preview.component.html",
})
export class NewInputTextPreviewComponent implements OnInit {
  constructor() {}

  controlledValue = "controlled value";

  options: Array<any> = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
  ];

  changeValue(event) {
    if (!event.includes("x")) {
      this.controlledValue = event;
    }
  }

  click() {
    console.log("click");
  }

  ngOnInit(): void {}
}
