import { Component, Output, EventEmitter, Input } from "@angular/core";
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { UploadService } from "../../services/upload.service";
@Component({
  selector: "dxc-files-preview",
  templateUrl: "./dxc-files-preview.component.html",
  styleUrls: ["./dxc-files-preview.component.scss"],
})
export class DxcFilesPreviewComponent {
  @Output() showOverlay = new EventEmitter<any>();
  @Input() filesList;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  constructor(private service: UploadService){}

  public ngOnInit() {
    this.service.setSuccess(false);
    this.service.setErrorMessage("");
  }

  dragEnter(event) {
    event.preventDefault();
    event.stopPropagation();
    this.showOverlay.emit(true);
  }
}
