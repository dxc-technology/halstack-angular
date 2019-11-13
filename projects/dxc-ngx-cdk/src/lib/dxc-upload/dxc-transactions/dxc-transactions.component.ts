import { Component, Output, OnChanges, EventEmitter, Input } from "@angular/core";
@Component({
  selector: "dxc-transactions",
  templateUrl: "./dxc-transactions.component.html",
  styleUrls: ["./dxc-transactions.component.scss"]
})
export class DxcTransactionsComponent implements OnChanges {

  @Input() filesSummary = [];
  @Input() successfulCount;

  public ngOnInit() {}

  public ngOnChanges(): void {}

}
