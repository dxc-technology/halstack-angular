import { Component, OnInit, Input } from "@angular/core";
import { DataPropertiesTable } from "../../../../model/data-properties-table";

@Component({
  selector: "input-text-properties",
  templateUrl: "./input-text-properties.component.html",
})
export class InputTextPropertiesComponent implements OnInit {
  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {}
}
