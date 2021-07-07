import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dxc-cellrender',
  templateUrl: './cellrender.component.html',
  styleUrls: ['./cellrender.component.scss']
})
export class CellrenderComponent {
  public params: any;
  public gridAPIRow: any;

  agInit(params: any): void {
      this.params = params;
      this.gridAPIRow = params.data;
  }

  public invokeParentMethod() {
      this.params.context.componentParent.gridEventCall(this.params.colDef, this.params.data, 'click');
  }

  refresh(): boolean {
      return false;
  }
}
