import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';

@Component({
  selector: 'text-area-properties-table',
  templateUrl: './text-area-properties-table.component.html',
  styleUrls: ['./text-area-properties-table.component.scss']
})
export class TextAreaPropertiesTableComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {
  }

}
