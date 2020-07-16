import { Component } from "@angular/core";

@Component({
  selector: "app-overlay-progressbar",
  templateUrl: "./progressbar-overlay.component.html",
  styleUrls: ["./progressbar-overlay.component.scss"]
})
export class ProgressbarOverlayComponent {
  isVisible = false;

  constructor() {}
  showProgressbar() {
    this.isVisible = !this.isVisible;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }
}
