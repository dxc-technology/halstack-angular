import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';
@Component({
  selector: 'app-spinner-table-properties',
  templateUrl: './spinner-table-properties.component.html',
  styleUrls: ['./spinner-table-properties.component.scss']
})
export class SpinnerTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
