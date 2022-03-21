import { Component, OnInit, Input } from "@angular/core";
import { DataPropertiesTable } from "../../../../../model/data-properties-table";

@Component({
  selector: "examples-properties-resultset-table",
  templateUrl: "./resultset-table-properties.component.html",
  styleUrls: ["./resultset-table-properties.component.scss"],
})
export class ResultsetTablePropertiesComponent implements OnInit {
  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {}
}
