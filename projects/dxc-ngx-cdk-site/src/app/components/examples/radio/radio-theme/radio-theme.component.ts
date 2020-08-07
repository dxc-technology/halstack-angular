import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from '../../../../model/data-properties-table';

@Component({
  selector: 'radio-theme',
  templateUrl: './radio-theme.component.html',
  styleUrls: ['./radio-theme.component.scss']
})
export class RadioThemeComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() {
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
   }

  ngOnInit() {
  }

}
