import { Component } from "@angular/core";

@Component({
  selector: "tabs-info",
  templateUrl: "./tabs-info.component.html",
  styleUrls: ["./tabs-info.component.scss"]
})
export class TabsInfoComponent {

  constructor() {}

  tabClicked(tabId) {
    console.log("Tab clicked " + tabId);
  }
}
