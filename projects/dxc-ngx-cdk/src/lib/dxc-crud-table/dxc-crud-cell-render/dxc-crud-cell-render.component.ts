
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-crud-cell-render',
  templateUrl: './dxc-crud-cell-render.component.html',
  styleUrls: ['./dxc-crud-cell-render.component.scss']
})
export class DxcCrudCellRenderComponent implements OnInit {

  @Input() rowData: any = null;
  @Input() resource: { [key: string]: string };
  @Input() gridResource: { [key: string]: string };
  @Input() columnName: string = '';
  @Input() formatColumns: any;
  @Input() isFirst: boolean = false;
  @Input() rowSelection:  'single' | 'multi' | 'none' = 'none'; 
  @Output() onRowClick = new EventEmitter<any>();
  @Output() onRowSelect = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  rowChecked = (rowData) => {
    this.onRowSelect.emit(rowData);
  }

  rowClick = (rowData) => {
    this.onRowClick.emit(rowData);
  }
}

