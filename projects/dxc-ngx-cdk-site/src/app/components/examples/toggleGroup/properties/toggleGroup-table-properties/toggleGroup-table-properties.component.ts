import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';
import { Router } from '@angular/router';

@Component({
  selector: 'toggleGroup-table-properties',
  templateUrl: './toggleGroup-table-properties.component.html',
  styleUrls: ['./toggleGroup-table-properties.component.scss']
})
export class ToggleGroupTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor(private router: Router) { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {
  }

}
