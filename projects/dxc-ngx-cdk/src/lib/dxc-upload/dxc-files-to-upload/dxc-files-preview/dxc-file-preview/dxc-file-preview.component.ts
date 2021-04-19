import { Component, Input } from "@angular/core";
import { coerceNumberProperty } from '@angular/cdk/coercion';
@Component({
  selector: "dxc-file-preview",
  templateUrl: "./dxc-file-preview.component.html",
  styleUrls: ["./dxc-file-preview.component.scss"],
})
export class DxcFilePreviewComponent {
  @Input() file;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  fileFormat = "default";

  public ngOnInit() {
    if (this.file.format.includes("image")) {
      this.fileFormat = "image";
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
