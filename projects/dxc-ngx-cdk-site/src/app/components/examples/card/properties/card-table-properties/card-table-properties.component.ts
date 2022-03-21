import { Component, OnInit, Input } from "@angular/core";
import { DataPropertiesTable } from "../../../../../model/data-properties-table";

@Component({
  selector: "card-table-properties",
  templateUrl: "./card-table-properties.component.html",
  styleUrls: ["./card-table-properties.component.scss"],
})
export class CardTablePropertiesComponent implements OnInit {
  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {}
}
