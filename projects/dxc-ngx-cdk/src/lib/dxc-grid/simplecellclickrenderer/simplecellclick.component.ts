import { Component, OnInit } from '@angular/core';
import { ICellEditorComp } from 'ag-grid-community';
@Component({
  selector: 'dxc-simplecellclick',
  templateUrl: './simplecellclick.component.html',
  styleUrls: ['./simplecellclick.component.scss']
})
export class SimplecellclickComponent implements ICellEditorComp {

  constructor() { }
 
  public params: any;
  private cellValue: any;

  agInit(params: any): void {
      this.params = params;
      this.cellValue = params.value;
      this.params.context.componentParent.gridEventCall(this.params.colDef, this.params.data, 'click');
  }

  getValue() {
    return this.cellValue;
  }

  getGui(): HTMLElement {
    return  document.createElement('div');
  }

  destroy?(): void {
  }


}
