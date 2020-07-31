import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';
@Component({
  selector: 'app-chip-table-properties',
  templateUrl: './chip-table-properties.component.html',
  styleUrls: ['./chip-table-properties.component.scss']
})
export class ChipTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
