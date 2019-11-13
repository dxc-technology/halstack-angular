import { Component, Output, OnChanges, EventEmitter } from "@angular/core";

@Component({
  selector: "dxc-upload-buttons",
  templateUrl: "./dxc-upload-buttons.component.html",
  styleUrls: ["./dxc-upload-buttons.component.scss"]
})
export class DxcUploadButtonsComponent implements OnChanges {
  @Output() onAddFile = new EventEmitter<any>();
  @Output() upload = new EventEmitter<any>();
  @Output() showOverlay = new EventEmitter<any>();

  public ngOnInit() {}

  public ngOnChanges(): void {}

  onFileInput(event) {
    this.onAddFile.emit(event.target.files);
  }

  onUploadHandler() {
    this.upload.emit("upload");
  }

  dragEnter(event) {
    event.preventDefault();
    event.stopPropagation();
    this.showOverlay.emit(true);
  }
}
