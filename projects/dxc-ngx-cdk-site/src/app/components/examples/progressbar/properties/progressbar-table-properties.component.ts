import { Component, OnInit, Input } from "@angular/core";
import { DataPropertiesTable } from "../../../../model/data-properties-table";

@Component({
  selector: "progressbar-table-properties",
  templateUrl: "./progressbar-table-properties.component.html",
  styleUrls: ["./progressbar-table-properties.component.scss"],
})
export class ProgressbarTablePropertiesComponent implements OnInit {
  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {}
}
