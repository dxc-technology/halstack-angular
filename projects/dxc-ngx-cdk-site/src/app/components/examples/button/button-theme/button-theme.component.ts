import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from '../../../../model/data-properties-table';

@Component({
  selector: 'button-theme',
  templateUrl: './button-theme.component.html',
  styleUrls: ['./button-theme.component.scss']
})
export class ButtonThemeComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;
  
  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
   }

  ngOnInit() {
  }

}
