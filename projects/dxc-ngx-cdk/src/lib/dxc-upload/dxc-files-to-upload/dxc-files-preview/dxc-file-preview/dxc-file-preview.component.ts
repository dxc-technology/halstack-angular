import { Component, Output, Input, OnChanges, EventEmitter } from "@angular/core";
@Component({
  selector: "dxc-file-preview",
  templateUrl: "./dxc-file-preview.component.html",
  styleUrls: ["./dxc-file-preview.component.scss"]
})
export class DxcFilePreviewComponent {

  @Input() file;
  fileFormat = "default";

  public ngOnInit() {
    if (this.file.format.includes("image")) {
      this.fileFormat ="image";
    } else if (this.file.format.includes("video")) {
      this.fileFormat = "video";
    } else if (this.file.format.includes("audio")) {
      this.fileFormat = "audio";
    }
  }

  public onCloseHandler(): void {
    this.file.removeFile();
  }
}
