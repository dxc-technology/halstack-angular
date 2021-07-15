import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-input-text-preview",
  templateUrl: "./new-input-text-preview.component.html",
})
export class NewInputTextPreviewComponent implements OnInit {
  constructor() {}

  controlledValue = "controlled value";

  changeValue(event) {
    if (!event.includes("x")) {
      this.controlledValue = event;
    }
  }

  ngOnInit(): void {}
}
