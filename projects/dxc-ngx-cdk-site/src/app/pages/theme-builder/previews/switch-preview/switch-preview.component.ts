import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-switch-preview",
  templateUrl: "./switch-preview.component.html",
})
export class SwitchPreviewComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onChange1(value) {
    this.checked1 = value;
  }
  onChange2(value) {
    this.checked2 = value;
  }
}
