import { Component, OnInit, Input } from "@angular/core";
import { DataPropertiesTable } from "../../../../../model/data-properties-table";
@Component({
  selector: "box-table-properties",
  templateUrl: "./box-table-properties.component.html",
  styleUrls: ["./box-table-properties.component.scss"],
})
export class BoxTablePropertiesComponent implements OnInit {
  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {}
}
