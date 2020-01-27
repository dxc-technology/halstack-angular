import { Component, Output, HostBinding, OnChanges, EventEmitter, Input } from "@angular/core";
@Component({
  selector: "dxc-drag-and-drop",
  templateUrl: "./dxc-drag-and-drop.component.html",
  styleUrls: ["./dxc-drag-and-drop.component.scss"]
})
export class DxcDragAndDropComponent implements OnChanges {
  hoveringWithFile = false;
  @Output() onAddFile = new EventEmitter<any>();
  @Input() summaryVisible = false;
  @HostBinding('class.reduced') reduced: boolean = false;

  public ngOnInit() {}

  public ngOnChanges(): void {
    this.reduced = this.summaryVisible;
  }

  dragOver(event) {
    this.hoveringWithFile = true;
    event.preventDefault();
  }

  dragLeave(event) {
    this.hoveringWithFile = false;
    event.preventDefault();
  }

  drop(event) {
    this.hoveringWithFile = false;
    this.onAddFile.emit(event.dataTransfer.files);
    event.preventDefault();
  }

  onFileInput(event) {
    this.onAddFile.emit(event.target.files);
  }
}
