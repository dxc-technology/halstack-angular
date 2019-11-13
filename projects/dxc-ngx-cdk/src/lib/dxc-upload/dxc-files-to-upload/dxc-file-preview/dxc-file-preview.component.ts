import {
  Component,
  Output,
  OnChanges,
  EventEmitter,
  Input
} from "@angular/core";
import { DxcFilePreviewRowComponent } from "./dxc-file-preview-row/dxc-file-preview-row.component";
@Component({
  selector: "dxc-file-preview",
  templateUrl: "./dxc-file-preview.component.html",
  styleUrls: ["./dxc-file-preview.component.scss"]
})
export class DxcFilePreviewComponent {
  @Output() showOverlay = new EventEmitter<any>();
  @Input() filesList;

  public ngOnInit() {}

  dragEnter(event) {
    event.preventDefault();
    event.stopPropagation();
    this.showOverlay.emit(true);
  }
  
}
