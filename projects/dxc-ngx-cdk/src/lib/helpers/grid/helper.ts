import { Injectable } from '@angular/core';
import { IEventRequest, EventType } from '../../models/grid/grid.model';
import { IRequest } from '../../models/startup/configuration.model';
import * as Immutable from 'immutable';
import { Subject } from 'rxjs';
import { GridOptions } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class GridHelper {
  private gridEventCall = new Subject();
  private gridApi = null;
  private gridColumnApi = null;
  gridEvent = this.gridEventCall.asObservable();
  gridMap: any = {};
  gridSelectedRows: Immutable.List<any[]> = Immutable.List([]);
  gridEventRequest(eventType: string, gridRequest: IRequest) {
    const gridRequestEvent: IEventRequest = {
      eventtype: EventType.RELOAD,
      gridConfiguration: gridRequest
    };

    this.gridEventCall.next(gridRequestEvent);
  }

  gridSelectedRow(rows?: any) {
    if (rows) {
      this.gridSelectedRows = Immutable.List([]);
      for (let i = 0; i < rows.length; i++) {
        this.gridSelectedRows = this.gridSelectedRows.push(rows[i].data);
      }
    }
    return Immutable.fromJS(this.gridSelectedRows);
  }

  clearGridSelectedRow() {
    this.gridSelectedRows = Immutable.List([]);
  }

  gridAdditonalParams(gridId: string, additionalParams?: any) {
    if (additionalParams) {
      if (this.gridMap[gridId]) {
        this.gridMap[gridId].params = additionalParams;
      } else {
        this.gridMap[gridId] = {};
        this.gridMap[gridId].params = additionalParams;
      }
    }
    return this.gridMap[gridId].params;
  }

  loadGridOptions(option) {
    let options: GridOptions = {
      columnDefs: [],
      rowData: [],
      defaultColDef: {
        sortable: true,
        filter: false,
        resizable: true,
      },
      pagination: false,
      suppressPaginationPanel: true,
      floatingFilter: true,
      accentedSort: true,
      rowHeight: 35,
      context: {
        componentParent: option
      }
    };

    // // if (option.allowRowSelection) {
    // //   options.rowSelection = option.rowSelection;
    // //   // tslint:disable-next-line: no-string-literal
    // //   options['checkboxSelection'] = isFirstColumn;
    // //   // tslint:disable-next-line: no-string-literal
    // //   options['headerCheckboxSelection'] = isFirstColumn,
    // //     options.rowDeselection = true;
    // // }
    return options;

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}

