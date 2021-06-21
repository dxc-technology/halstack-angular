import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs-preview",
  templateUrl: "./tabs-preview.component.html",
})
export class TabsPreviewComponent implements OnInit {
  activeTabIndex1: number;

  constructor() {}

  ngOnInit(): void {}

  tabClicked1(event) {
    this.activeTabIndex1 = event;
  }
}
