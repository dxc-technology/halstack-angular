import { Component } from "@angular/core";

@Component({
  selector: "dialog-default",
  templateUrl: "./dialog-default.component.html",
  styleUrls: ["./dialog-default.component.scss"]
})
export class DialogDefaultComponent {

  visible = false;

  constructor() {}
  
  openDialog() {
    this.visible = !this.visible;
  }

}
