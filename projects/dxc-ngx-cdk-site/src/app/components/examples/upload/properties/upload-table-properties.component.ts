import { Component, OnInit, Input } from "@angular/core";
import { DataPropertiesTable } from "../../../../model/data-properties-table";

@Component({
  selector: "upload-table-properties",
  templateUrl: "./upload-table-properties.component.html",
  styleUrls: ["./upload-table-properties.component.scss"],
})
export class UploadTablePropertiesComponent implements OnInit {
  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {}
}
