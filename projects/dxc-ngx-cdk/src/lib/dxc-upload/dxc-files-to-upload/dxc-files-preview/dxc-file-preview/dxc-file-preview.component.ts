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

  public ngOnInit() {}

  public onCloseHandler(): void {
    this.file.removeFile();
  }
}
