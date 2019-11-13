import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
@Component({
  selector: "dxc-files-to-upload",
  templateUrl: "./dxc-files-to-upload.component.html",
  styleUrls: ["./dxc-files-to-upload.component.scss"]
})
export class DxcFilesToUploadComponent {
  @Input() filesToUpload;
  @Output() onAddFile = new EventEmitter<any>();
  @Output() upload = new EventEmitter<any>();
  @Input() summaryVisible = false;
  @HostBinding('class.reduced') reduced: boolean = false;

  overlay = false;

  public ngOnChanges() :void { 
    this.reduced = this.summaryVisible;
  }

  dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  dragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.overlay = false;
  }

  addFiles(event) {
    this.onAddFile.emit(event);
  }

  drop(event) {
    this.onAddFile.emit(event.dataTransfer.files);
    event.preventDefault();
    this.overlay = false;
  }

  showOverlay() {
    this.overlay = true;
  }

  handleUploadEvent() {
    this.upload.emit("upload");
  }
}
