import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DataPropertiesTable } from "../../../../../model/data-properties-table";

@Component({
  selector: "toggleGroup-table-properties",
  templateUrl: "./toggleGroup-table-properties.component.html",
  styleUrls: ["./toggleGroup-table-properties.component.scss"],
})
export class ToggleGroupTablePropertiesComponent implements OnInit {
  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor(private router: Router) {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {}
}
