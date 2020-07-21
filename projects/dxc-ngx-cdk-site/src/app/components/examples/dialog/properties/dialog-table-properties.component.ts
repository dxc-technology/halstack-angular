import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';

@Component({
  selector: 'app-dialog-table-properties',
  templateUrl: './dialog-table-properties.component.html',
  styleUrls: ['./dialog-table-properties.component.scss']
})
export class DialogTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
