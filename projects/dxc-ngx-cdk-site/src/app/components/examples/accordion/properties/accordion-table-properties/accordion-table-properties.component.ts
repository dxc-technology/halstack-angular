import { Component, OnInit, Input } from "@angular/core";
import { DataPropertiesTable } from "../../../../../model/data-properties-table";

@Component({
  selector: "accordion-table-properties",
  templateUrl: "./accordion-table-properties.component.html",
  styleUrls: ["./accordion-table-properties.component.scss"],
})
export class AccordionTablePropertiesComponent implements OnInit {
  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {}
}
