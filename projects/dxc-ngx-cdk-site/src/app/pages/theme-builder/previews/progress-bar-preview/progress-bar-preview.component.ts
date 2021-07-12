import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress-bar-preview",
  templateUrl: "./progress-bar-preview.component.html",
})
export class ProgressBarPreviewComponent implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit(): void {}

  showProgressbar() {
    this.isVisible = !this.isVisible;
    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }
}
