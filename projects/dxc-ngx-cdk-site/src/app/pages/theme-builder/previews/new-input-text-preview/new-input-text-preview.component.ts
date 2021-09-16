import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-input-text-preview",
  templateUrl: "./new-input-text-preview.component.html",
})
export class NewInputTextPreviewComponent implements OnInit {
  constructor() {}

  controlledValue = "c";

  numberValue = "12";

  errorMessage = "";

  numberOnChange(event) {
    this.numberValue = event.value;
  }

  lengthLimit={min: 2, max: 5}

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
    if (!event.value.includes("x")) {
      this.controlledValue = event.value;
    }
  }

  click() {
    console.log("click");
  }

  ngOnInit(): void {}
}
