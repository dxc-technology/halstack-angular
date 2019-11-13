import { Component, Output, OnChanges, EventEmitter, Input } from "@angular/core";
@Component({
  selector: "dxc-uploaded-summary",
  templateUrl: "./dxc-uploaded-summary.component.html",
  styleUrls: ["./dxc-uploaded-summary.component.scss"]
})
export class DxcUploadedSummaryComponent implements OnChanges {

  @Input() filesSummary = [];
  @Input() successfulCount;

  public ngOnInit() {}

  public ngOnChanges(): void {}

}
