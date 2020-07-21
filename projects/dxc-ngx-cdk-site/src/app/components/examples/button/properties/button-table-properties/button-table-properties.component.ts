import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from '../../../../../model/data-properties-table';
@Component({
  selector: 'app-button-table-properties',
  templateUrl: './button-table-properties.component.html',
  styleUrls: ['./button-table-properties.component.scss']
})
export class ButtonTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
