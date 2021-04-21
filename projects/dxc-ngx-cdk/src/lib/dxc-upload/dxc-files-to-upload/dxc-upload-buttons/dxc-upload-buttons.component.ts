import { Component, Output, OnChanges, EventEmitter, Input } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-upload-buttons",
  templateUrl: "./dxc-upload-buttons.component.html",
  styleUrls: ["./dxc-upload-buttons.component.scss"],
})
export class DxcUploadButtonsComponent implements OnChanges {
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  @Output() onAddFile = new EventEmitter<any>();
  @Output() upload = new EventEmitter<any>();
  @Output() showOverlay = new EventEmitter<any>();

  public ngOnInit() {}

  public ngOnChanges(): void {}

  margins = { right: "medium", left: "small" };

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
