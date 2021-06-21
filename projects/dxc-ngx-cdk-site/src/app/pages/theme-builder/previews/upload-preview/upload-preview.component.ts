import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upload-preview",
  templateUrl: "./upload-preview.component.html",
})
export class UploadPreviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  async fileUpload(file) {
    const result = await new Promise((resolve) => setTimeout(resolve, 8000));
    return result;
  }
}
