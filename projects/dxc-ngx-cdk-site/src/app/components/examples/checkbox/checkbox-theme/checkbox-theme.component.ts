import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from '../../../../model/data-properties-table';

@Component({
  selector: 'checkbox-theme',
  templateUrl: './checkbox-theme.component.html',
  styleUrls: ['./checkbox-theme.component.scss']
})
export class CheckboxThemeComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
   }

  ngOnInit() {
  }

}
