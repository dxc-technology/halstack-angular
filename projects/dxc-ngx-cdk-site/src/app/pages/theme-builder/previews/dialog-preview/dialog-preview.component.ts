import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dialog-preview",
  templateUrl: "./dialog-preview.component.html",
})
export class DialogPreviewComponent implements OnInit {
  visible1 = false;
  visible2 = false;
  visible3 = false;

  constructor() {}

  ngOnInit(): void {}

  openDialog1() {
    this.visible1 = !this.visible1;
  }

  openDialog2() {
    this.visible2 = !this.visible2;
  }

  openDialog3() {
    this.visible3 = !this.visible3;
  }

}
