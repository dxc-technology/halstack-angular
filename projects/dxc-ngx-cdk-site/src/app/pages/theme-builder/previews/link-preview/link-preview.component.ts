import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-link-preview",
  templateUrl: "./link-preview.component.html",
})
export class LinkPreviewComponent implements OnInit {
  underlined: boolean = true;
  newWindow: boolean = true;
  inheritColor: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log("Click on Link");
  }
}
