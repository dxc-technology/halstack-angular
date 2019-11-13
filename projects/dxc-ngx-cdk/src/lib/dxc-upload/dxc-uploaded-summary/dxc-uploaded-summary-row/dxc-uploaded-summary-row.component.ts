import { Component, Output, OnChanges, EventEmitter, Input } from "@angular/core";
@Component({
  selector: "dxc-uploaded-summary-row",
  templateUrl: "./dxc-uploaded-summary-row.component.html",
  styleUrls: ["./dxc-uploaded-summary-row.component.scss"]
})
export class DxcUploadedSummaryRowComponent implements OnChanges {

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

  public ngOnChanges(): void {}

}
