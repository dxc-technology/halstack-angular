import { Component, Output, OnChanges, EventEmitter, Input } from "@angular/core";
@Component({
  selector: "dxc-transaction",
  templateUrl: "./dxc-transaction.component.html",
  styleUrls: ["./dxc-transaction.component.scss"]
})
export class DxcTransactionComponent implements OnChanges {

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
