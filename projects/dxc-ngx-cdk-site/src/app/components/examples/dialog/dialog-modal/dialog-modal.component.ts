import { Component } from "@angular/core";

@Component({
  selector: "dialog-modal",
  templateUrl: "./dialog-modal.component.html",
  styleUrls: ["./dialog-modal.component.scss"]
})
export class DialogModalComponent {
  visible = false;

  constructor() {}
  openDialog() {
    this.visible = !this.visible;
  }

}
