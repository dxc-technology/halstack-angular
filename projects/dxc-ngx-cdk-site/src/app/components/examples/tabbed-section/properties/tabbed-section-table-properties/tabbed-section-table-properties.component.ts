import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';

@Component({
  selector: 'app-tabbed-section-table-properties',
  templateUrl: './tabbed-section-table-properties.component.html',
  styleUrls: ['./tabbed-section-table-properties.component.scss']
})
export class TabbedSectionTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {
  }

}
