import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs-preview",
  templateUrl: "./tabs-preview.component.html",
})
export class TabsPreviewComponent implements OnInit {
  @HostBinding("class") className;

  activeTabIndex1: number;
  trueNotificationNumber = true;

  constructor() {}


  ngOnInit(): void {
  }

  tabClicked1(event) {
    this.activeTabIndex1 = event;
  }
}
