import { Component, Output, EventEmitter, Input } from "@angular/core";
@Component({
  selector: "dxc-files-preview",
  templateUrl: "./dxc-files-preview.component.html",
  styleUrls: ["./dxc-files-preview.component.scss"],
})
export class DxcFilesPreviewComponent {
  @Output() showOverlay = new EventEmitter<any>();
  @Input() filesList;

  public ngOnInit() {}

  dragEnter(event) {
    event.preventDefault();
    event.stopPropagation();
    this.showOverlay.emit(true);
  }
}
