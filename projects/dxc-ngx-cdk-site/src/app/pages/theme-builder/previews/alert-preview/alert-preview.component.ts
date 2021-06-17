import { Component, OnInit } from "@angular/core";
import { Stylable } from "../../../../components/theme-builder/model/stylable";

@Component({
  selector: "app-alert-preview",
  templateUrl: "./alert-preview.component.html",
})
export class AlertPreviewComponent implements OnInit {
  visible = false;

  constructor() {}

  ngOnInit(): void {}

  handleVisible() {
    this.visible = !this.visible;
  }
}
