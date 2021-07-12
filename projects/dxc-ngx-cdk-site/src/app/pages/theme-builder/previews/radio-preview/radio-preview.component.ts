import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-radio-preview",
  templateUrl: "./radio-preview.component.html",
})
export class RadioPreviewComponent implements OnInit {
  checked1: boolean = true;
  checked2: boolean = false;
  checked3: boolean = false;

  disabledCheck: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onChange1(event) {
    this.changeChecked(event, !event, !event);
  }
  onChange2(event) {
    this.changeChecked(!event, event, !event);
  }
  onChange3(event) {
    this.changeChecked(!event, !event, event);
  }

  private changeChecked(checked1, checked2, checked3) {
    this.checked1 = checked1;
    this.checked2 = checked2;
    this.checked3 = checked3;
  }
}
