import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  Output,
  HostBinding,
  OnChanges,
  EventEmitter,
  Input,
} from "@angular/core";
import { UploadService } from '../services/upload.service';
@Component({
  selector: "dxc-drag-and-drop",
  templateUrl: "./dxc-drag-and-drop.component.html",
  styleUrls: ["./dxc-drag-and-drop.component.scss"],
})
export class DxcDragAndDropComponent implements OnChanges {
  hoveringWithFile = false;
  @Output() onAddFile = new EventEmitter<any>();
  @Input() summaryVisible = false;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  visibleAlert = false;
  errorMessage = "";
  @HostBinding("class.reduced") reduced: boolean = false;

  constructor(private service: UploadService){}

  public ngOnInit() {
    this.service.success.subscribe((value) => {
      this.visibleAlert = value;
    });
    this.service.errorMessage.subscribe((value) => {
      this.errorMessage = value;
    });
  }

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

  handleVisibleAlert(){
    this.visibleAlert = !this.visibleAlert;
    this.service.setSuccess(this.visibleAlert);
    this.service.setErrorMessage("");
  }
}
