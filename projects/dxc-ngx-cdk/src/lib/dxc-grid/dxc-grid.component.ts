import { DxcSearchComponent, IFilter } from '../dxc-search/dxc-search.component';
import { ConfigurationsetupService } from './../services/startup/configurationsetup.service';
import { DxcResizeService } from './../services/sizedetector/dxc-size-detector.service';
import { PagingAction } from './gridaction';
import {
  Component, OnInit, Input, Output, EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, DoCheck,
  ViewChild, ElementRef, AfterViewInit, OnDestroy
} from '@angular/core';
import * as Immutable from 'immutable';
import { Subscription } from 'rxjs';
import { saveAs } from 'file-saver';
import { GridService } from './../services/grid/grid.service';
import {
  IEventRequest, EventType, IEventResponse,
  IResource, RowSelectionType
} from './../models/grid/grid.model';
import { IRequest, EMethod, IResponse, IAdditionalParams } from './../models/startup/configuration.model';
import { CellrenderComponent } from './cellrender/cellrender.component';
import { SimplecellclickComponent } from './simplecellclickrenderer/simplecellclick.component';
import { GridHelper } from './../helpers/grid/helper';
import { GridOptions, ColDef, Module } from 'ag-grid-community';
import { HttpParams } from '@angular/common/http';
import { EAction } from './../models/startup/configuration.model';
import { gridaction, Action } from './gridaction';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as XLSX from 'xlsx';
import { DxcBaselookupComponent } from '../dxc-lookup/baselookup/dxc-baselookup.component';
import { ICodes } from '../models/lookup/lookup.model';
import { MessageService } from './../services/toaster/message.service';
import { LookupService } from '../services/lookup/lookup.service';
//import { BaseComponent } from '../basecomponent';
import { delay, filter } from 'rxjs/operators';
@Component({
  selector: 'dxc-grid',
  templateUrl: './dxc-grid.component.html',
  styleUrls: ['./dxc-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent extends DxcBaselookupComponent<any> implements AfterViewInit, OnDestroy {
  @ViewChild('assuregrid', { read: ElementRef, static: false }) field: ElementRef;
  @ViewChild('searchcomp', { static: false }) searchComp: DxcSearchComponent;

  gridApi;
  gridColumnApi;
  page = 1;
  frameworkComponents = { cellRenderer: CellrenderComponent, simplecellClickRenderer: SimplecellclickComponent };
  components = { simpleCellRenderer: SimpleCellRenderer };
  showmenu = false;
  toggle = Immutable.Map({});
  gridOptions: GridOptions;
  private watcherSubscription;
  gridEventSubscription: Subscription;
  additionalParams: IAdditionalParams = { gridId: '', totalCount: -1, pageSize: 0 };
  checked = true;
  paginationActions: Array<string> = ['prev', 'next', 'first', 'last'];
  visibilitySelected = [];
  actionSelected = '';
  columnVisibiltyOptions: { label?: string; value: any; iconSrc?: string }[];
  gridActionOptions = gridaction;
  gridColumnModalOpen = false;
  gridColumnModalVisibilityOpen = false;
  gridAction = Action;
  pdfMake = pdfMake;
  resource: IResource;
  searchBoxWidth = 0;
  paginatorWidth = 350;
  defaultColDef;
  displayPanel = true;
  links: any;
  filterQuery: HttpParams;
  hideGridSection = false;
  pagingAction = PagingAction;
  searchCriteria: Array<IFilter> = new Array<IFilter>();
  globalResource: { [key: string]: { description: string, type: string } };
  private gridReqURL = '';
  // private gridReqParams = new HttpParams();
  // tslint:disable-next-line: no-input-rename
  @Input('gridid') gridId: string;
  // tslint:disable-next-line: no-input-rename
  @Input('gridrequest') gridRequest: IRequest;
  @Input('resource') respourceAPI: IRequest;
  @Input('gridstaterequest') gridStateRequest: IRequest;
  @Input('paging') allowPaging = false;
  @Input('serversidefilter') allowServerSideFilter = false;
  @Input('clientsidefilter') allowCleintSideFilter = false;
  @Input('serversidesort') allowServerSideSort = false;
  @Input('clientsidesort') allowClientSideSort = false;
  @Input('allowrowselection') allowRowSelection = false;
  @Input('rowselection') rowSelectionType = RowSelectionType.SINGLE;
  @Input('width') width = 0;
  @Input('label') label = '';
  @Input('sharedparameter') sharedParameter = '';
  @Input() node = '';
  // tslint:disable-next-line: no-output-rename
  @Output('gridEvent') gridEvent: EventEmitter<IEventResponse> = new EventEmitter<IEventResponse>();
  inputValue = '';
  constructor(
    public gridService: GridService,
    public commonServiceEvent: GridHelper,
    public resizeService: DxcResizeService,
    public config: ConfigurationsetupService,
    public changeDetecorRef: ChangeDetectorRef,
    public messageService: MessageService,
    public lookupService: LookupService) {
    super(config, lookupService, commonServiceEvent, messageService, gridService);
  }

  ngOnInit() {
    this.gridReqURL = this.gridRequest.url;
    // this.gridReqParams = this.gridRequest.params;
    this.globalResource = this.config.configservice.Resources;
    this.resizeService.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        if (x > 2) {
          this.hideGridSection = false;
        } else {
          this.hideGridSection = true;
        }
      });
    this.gridOptions = this.commonServiceEvent.loadGridOptions(this);
    this.gridService.getState(this.gridStateRequest).subscribe((response) => {
      this.gridOptions.columnDefs = JSON.parse(response).columns;
      this.columnVisibiltyOptions =
        this.processColumnVisibiltyState(this.gridOptions.columnDefs);
      if (this.gridOptions.rowData.length > 0) {
        this.gridOptions.api.setColumnDefs(this.gridOptions.columnDefs);
      }
    });

    this.gridService.getResource(this.respourceAPI).subscribe((resource: IResource) => {
      this.resource = resource;
    });


    this.defaultColDef = {
      sortable: true,
      filter: false,
      resizable: true
    };

    if (this.allowRowSelection) {
      this.defaultColDef.checkboxSelection = isFirstColumn;
    };
    if (this.allowRowSelection && this.rowSelectionType == RowSelectionType.MULTI) {
      this.defaultColDef.headerCheckboxSelection = isFirstColumn;
    };

    this.gridEventSubscription = this.commonServiceEvent.gridEvent
      .subscribe((gridRequestEvent: IEventRequest) => {
        switch (gridRequestEvent.eventtype) {
          case EventType.RELOAD:
            this.gridRequestCall(gridRequestEvent.gridConfiguration, gridRequestEvent.gridConfiguration.params);
            break;
          default:
            break;
        }
      });
  }

  ngOnDestroy() {
    this.filterQuery = null;
    this.gridRequest = null;
  }
  onScroll() {
    console.log('scrolled!!');
  }

  ngAfterViewInit() {
    this.calcStyle();
    console.log(this.field);
  }

  searchChange = (action) => {
    switch (action) {
      case EAction.FOCUS:
        this.calcStyle(false);
        break;
      default:
        break;
    }
  }

  openPanel = () => {
    this.calcStyle(true);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridService.getData(this.gridRequest, this.gridRequest.params, this.gridRequest.headers).subscribe((response) => {
      this.commonServiceEvent.gridSelectedRows = Immutable.List([]);
      this.gridOptions.api.setColumnDefs(this.gridOptions.columnDefs);
      this.gridOptions.rowData = response._embedded[this.node];
      this.gridOptions.api.setRowData(this.gridOptions.rowData);

      if (response._links !== null &&
        response._links !== undefined &&
        response._links.self !== null &&
        response._links.self !== undefined
      ) {
        const parmValue = getURLParameter(response._links.self.href, '_num');
        this.additionalParams.pageSize = parseInt(parmValue);
        const parmValueTotal = getURLParameter(response._links.self.href, '_count');
        this.additionalParams.totalCount = parseInt(parmValueTotal);
      } else {
        this.additionalParams.pageSize = response.count;
      }
      this.links = response._links;
      //// this.commonServiceEvent.gridAdditonalParams(this.gridId, response.additionalParams);
      this.changeDetecorRef.markForCheck();
      if (this.sharedParameter && response[this.sharedParameter]) {
        this.label = (response[this.sharedParameter].label) ?
          response[this.sharedParameter].label : this.label;
      }
      if (params.api && params.api.sizeColumnsToFit) {
        params.api.sizeColumnsToFit();
      }
      setTimeout(() => {
        params.api.resetRowHeights();
      }, 500);
    });
  }


  columnSelection(column: any) {
    this.gridColumnApi.setColumnVisible(column.field, column.hide);
    column.hide = !column.hide;
  }

  saveState = () => {
    const columnState = this.gridColumnApi.getColumnState();
    const sortState = this.gridApi.getSortModel();
    const originalColumnState = this.gridOptions.columnDefs;

    let colDef = Immutable.List([]);
    colDef = buildColumnState(originalColumnState, columnState, sortState);
    this.gridService.saveState(colDef.toArray(), this.gridId).subscribe((response) => {
      console.log(response);
    });
    this.gridColumnApi.setColumnState(colDef);
    this.gridColumnModalVisibilityOpen = false;
    this.gridColumnModalOpen = false;
  }

  onFirstDataRendered(params) {
    if (params.api && params.api.sizeColumnsToFit) {
      params.api.sizeColumnsToFit();
    }
  }
  onSelectionChanged(event) {
    const row = event.api.getSelectedNodes();
    this.commonServiceEvent.gridSelectedRow(row);
    const arg = {
      eventtype: EventType.SELECTION
    };
    this.gridEvent.emit(arg);
  }

  restorestate = () => {
    this.gridService.restoreState(this.gridId).subscribe((response) => {
      const gridContextMenu = Immutable.Map(JSON.parse(response));
      this.gridOptions.columnDefs = JSON.parse(response).columns;
      this.gridColumnApi.setColumnState(JSON.parse(response).columns);
      this.changeDetecorRef.markForCheck();
    });
  }

  pinSelection(column: any, key) {
    this.gridColumnApi.setColumnPinned(column.field, key);
    column.pinned = key;
  }

  onHeaderChange = (column: any) => {
    const col = this.gridOptions.columnApi.getColumn(column.colId);

    // obtain the column definition from the column
    const colDef = col.getColDef();

    // update the header name
    colDef.headerName = column.headerName;

    // the column is now updated. to reflect the header change, get the grid refresh the header
    this.gridOptions.api.refreshHeader();
  }

  onFilterChanged(parms) {
    if (!this.allowServerSideFilter) {
      return;
    }
    const filterManager = parms.api.filterManager.allFilters;
    const columns: Array<string> = Object.keys(filterManager);
    let filterQuery = new HttpParams();
    if (columns.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      const queryKeys = this.gridRequest.params ? this.gridRequest.params.keys() : [];
      queryKeys.forEach((key) => {
        let value = this.gridRequest.params ? this.gridRequest.params.get(key) : null;
        if (value === undefined || value == null) {
          value = this.filterQuery.get(key);
        }
        filterQuery = filterQuery.append(key, value);
      });

      for (let i = 0; i < columns.length; i++) {
        const filterVal = filterManager[columns[i]].filterPromise.resolution.getModel();
        if (filterVal && filterVal.filter && filterVal.filter !== '') {
          filterQuery = filterQuery.append(columns[i], filterVal.filter);
        }
      }
      this.gridUpdateRequestCall(this.gridRequest, this.gridRequest.params);
    }
  }

  onFilterModified(parms) {
  }

  onColumnResized(event) {
    if (event.finished) {
      this.gridApi.resetRowHeights();
    }
  }

  onSortChanged(parms) {
    if (!this.allowServerSideSort) {
      return;
    }
    const sortinManager = parms.api.getSortModel();
    if (sortinManager.length > 0) {
      let parmsQueryReq = new HttpParams();
      parmsQueryReq = parmsQueryReq.append('_sort', (sortinManager[0].sort === 'desc' ? '-' : '') + sortinManager[0].colId);
      const initialQueryKeys = this.gridRequest.params ? this.gridRequest.params.keys() : [];
      // // const filterQueryKeys = this.filterQuery ? this.filterQuery.keys() : [];

      initialQueryKeys.forEach((key) => {
        if (key.indexOf('_sort') < 0) {
          parmsQueryReq = parmsQueryReq.append(key, this.gridRequest.params.get(key));
        }
      });

      if (this.searchCriteria.length > 0) {
        this.searchCriteria.forEach(filter => {
          if (parmsQueryReq.has(filter.field)) {
            parmsQueryReq = parmsQueryReq.delete(filter.field);
          }
          parmsQueryReq = parmsQueryReq.set(filter.field, filter.value);
        });
      }

      if (parmsQueryReq.has('_start')) {
        parmsQueryReq.delete('_start');
      }
      parmsQueryReq = parmsQueryReq.set('_start', (((this.page - 1) * this.additionalParams.pageSize) + 1).toString());


      this.gridUpdateRequestCall(this.gridRequest, parmsQueryReq);
    }
  }

  pagingCall = ($event) => {
    let action = $event.eventHandler;
    let recordFetchLink: IRequest = {
      url: '',
      methodtype: EMethod.GET
    }
    switch (action.toLowerCase()) {
      case 'first':
        recordFetchLink.url = this.links.first.href;
        break;
      case 'next':
        recordFetchLink.url = this.links.next.href;
        break;
      case 'prev':
        recordFetchLink.url = this.links.prev.href;
        break;
      case 'last':
        recordFetchLink.url = this.links.last.href;
        break;
      default:
        break;
    }

    if (recordFetchLink.url === null) {
      return;
    }


    this.page = $event.pageNumber;
    this.nextRecord(recordFetchLink, $event.pageNumber);
  }

  searchCall = (searchCriteria: Array<IFilter>) => {
    if (this.allowCleintSideFilter) {
      this.gridOptions.api.setFilterModel(null);
      searchCriteria.forEach((col: IFilter) => {
        const filterInstance = this.gridApi.getFilterInstance(col.field);
        switch (col.type) {
          case 'string':
            filterInstance.setModel({ type: 'constains', filter: col.value });
            break;
          case 'number':
            filterInstance.setModel({ type: 'equals', filter: col.value });
            break;
          default:
            filterInstance.setModel({ type: 'constains', filter: col.value });
            break;
        }
        filterInstance.applyModel();
      });
      this.gridApi.onFilterChanged();
    } else if (this.allowServerSideFilter) {
      this.searchCriteria = [...searchCriteria];
      let parmsQueryReq = new HttpParams();
      const initialQueryKeys = this.gridRequest.params ? this.gridRequest.params.keys() : [];

      initialQueryKeys.forEach((key) => {
        if (key.indexOf('_sort') < 0) {
          parmsQueryReq = parmsQueryReq.append(key, this.gridRequest.params.get(key));
        }
      });

      if (searchCriteria.length > 0) {
        searchCriteria.forEach(filter => {
          if (parmsQueryReq.has(filter.field)) {
            parmsQueryReq = parmsQueryReq.delete(filter.field);
          }
          parmsQueryReq = parmsQueryReq.set(filter.field, filter.value);
        });
      }
      const sortinManager = this.gridApi.getSortModel();
      if (sortinManager !== null && sortinManager.length > 0) {
        if (parmsQueryReq.has('_sort')) {
          parmsQueryReq.delete('_sort');
        }
        parmsQueryReq = parmsQueryReq.append('_sort', (sortinManager[0].sort === 'desc' ? '-' : '') + sortinManager[0].colId);
      }


      if (parmsQueryReq.has('_start')) {
        parmsQueryReq.delete('_start');
      }
      parmsQueryReq = parmsQueryReq.set('_start', '1');
      this.page = 1;
      this.gridRequest.url = this.gridReqURL;
      this.gridUpdateRequestCall(this.gridRequest, parmsQueryReq);
      this.searchCriteria = [...searchCriteria];
    }
  }


  visibilityChange = (fields: Array<string>) => {
    this.columnVisibiltyOptions.forEach((field) => {
      this.gridColumnApi.setColumnVisible(field.value, !(fields.indexOf(field.value) < 0));
    });
  }

  gridActionChange = (action) => {
    // tslint:disable-next-line: radix
    switch (parseInt(action)) {
      case Action.SAVE:
        this.saveState();
        break;
      case Action.REFRESH:
        this.gridApi.setSortModel(null);
        this.searchCriteria = new Array<IFilter>();
        this.searchComp.removeAll();
        this.filterQuery = new HttpParams();
        const queryKeys = this.gridRequest.params ? this.gridRequest.params.keys() : [];
        if (queryKeys.length > 0) {
          queryKeys.forEach(key => {
            let value = this.gridRequest.params ? this.gridRequest.params.get(key) : null;
            this.filterQuery = this.filterQuery.set(key, value);
          });
        }
        this.filterQuery = this.filterQuery.set('_start', '1');

        this.page = 1;
        this.gridRequestCall(this.gridRequest, this.filterQuery);
        break;
      case Action.EXCEL:
        // const params = { processCellCallback: exportToColumn };
        // this.gridApi.exportDataAsCsv(params);
        this.exportXLSX();
        break;
      case Action.PDF:
        ////this.generatePdf();
        this.pdfExport();
        break;
      case Action.RESTORE:
        this.restorestate();
        break;
      case Action.EDIT:
        this.gridColumnModalOpen = true;
        break;
      case Action.VISIBILTY:
        this.gridColumnModalVisibilityOpen = true;
        break;
      default:
        break;
    }
    this.actionSelected = '';
  }

  processColumnVisibiltyState(colDef: Array<ColDef>) {
    const options: { label?: string; value: any; iconSrc?: string }[] = [];
    colDef.forEach((col) => {
      const option: { label?: string; value: any; iconSrc?: string } = { value: '' };
      option.value = col.field,
        option.label = col.headerName;
      if (!col.hide) {
        this.visibilitySelected.push(col.field);
      }
      options.push(option);
    }
    );
    return options;
  }


  exportXLSX = () => {
    const data = [
      [] // header row
    ];
    const rows = this.gridOptions.rowData;
    const sheet = {};
    let j = 0;
    const columns = this.gridOptions.columnDefs;
    const leftCol = [];
    const midCol = [];
    const rightCol = [];
    columns.forEach((col: any) => {
      if ((col.headerName) && (col.headerName !== '')) {
        if (col.pinnedLeft && col.pinnedLeft === true) {
          leftCol.push(col);
        } else if (col.pinnedRight && col.pinnedRight === true) {
          rightCol.push(col);
        } else {
          midCol.push(col);
        }
      }
    });

    const fin = leftCol.concat(midCol).concat(rightCol);

    fin.forEach((col, i) => {
      // hide column header in export
      let showColHeader = true;
      if (col.exportToCol != null
        && col.exportToCol !== '' && col.exportToCol === false) {
        showColHeader = false;
      }

      if (col.headerName) {
        if (!col.hide && col.headerName !== '') {
          const loc = XLSX.utils.encode_cell({
            r: 0,
            c: j
          });
          if (showColHeader) {
            sheet[loc] = {
              v: col.headerName
            };
            j++;
          }

        }
      }
    });
    let endLoc;
    rows.forEach((row, ri) => {

      ri += 1;

      let ci = 0;
      fin.forEach((col) => {
        if (col.field !== 'selectionRowHeaderCol') {

          // hide column from export to excel
          let showCol = true;
          if (col.exportToCol != null &&
            col.exportToCol !== ''
            && col.exportToCol === false) {
            showCol = false;
          }
          if (showCol && !col.hide) {
            const loc = XLSX.utils.encode_cell({
              r: ri,
              c: ci
            });

            if (col.exportToCol != null &&
              col.exportToCol !== '' &&
              col.exportToCol.length > 0) {

              let val = '';
              col.exportToCol.forEach((item) => {
                // val += row.entity[item.col];
                val += (row.entity[item.col]
                  && row.entity[item.col] != null) ? row.entity[item.col] + ' ' : '';
              });

              sheet[loc] = {
                v: val,
                t: 's'
              };

            } else {

              //if (col.colDef.visible) {
              sheet[loc] = {
                v: ((row[col.field])
                  && row[col.field] != null) ?
                  row[col.field] : '',
                t: 's'
              };
            }
            endLoc = loc;
            ci += 1;
          }

        }

      });
    });
    const aaa: any = 'A1';
    sheet['!ref'] = XLSX.utils.encode_range({
      s: aaa,
      e: endLoc
    });
    const workbook = {
      SheetNames: ['Sheet1'],
      Sheets: {
        Sheet1: sheet
      }
    };
    const wopts = {
    };
    const wbout = XLSX.write(workbook, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    });

    saveAs(new Blob([s2ab(wbout)], {
      type: ''
    }), this.gridId + '.xlsx');

    function s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
  }
  // gridColumnModalClose = () => {

  // }

  gridColumnModalClose = () => {
    this.gridColumnModalOpen = !this.gridColumnModalOpen;
  }

  gridColumnModalVisibilityClose = () => {
    this.gridColumnModalVisibilityOpen = !this.gridColumnModalVisibilityOpen;
  }

  generatePdf() {
    let keysArray = [];//Object.keys(this.gridOptions.rowData[0]);
    this.gridOptions.columnDefs.forEach((column) => {
      keysArray.push(column['field']);
    });
    let documentDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            //  widths: [ '*', 'auto', 100, '*' ],

            body: [
            ]
          }
        }
      ],
      styles: {
        footerStyle: {
          fontSize: 10,
          bold: true,
          margin: [40, 0, 0, 0]
        },
        header: {
          fontSize: 20,
          bold: true,
          margin: [40, 20, 0, 0]
        }
      }
    };
    documentDefinition.content[0].table.body.push(keysArray);
    for (let i = 0; i < this.gridOptions.rowData.length; i++) {
      const row = [];
      for (let j = 0; j < keysArray.length; j++) {
        const key = keysArray[j];
        row.push(this.gridOptions.rowData[i][key]);
      }
      documentDefinition.content[0].table.body.push(row);
    }
    //const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    const tableLayouts = {
      exampleLayout: {
        hLineWidth: (i, node) => {
          if (i === 0 || i === node.table.body.length) {
            return 0;
          }
          return (i === node.table.headerRows) ? 2 : 1;
        },
        vLineWidth: (i, node) => {
          return (i === 0 || i === node.table.widths.length) ? 2 : 1;
        },
        hLineColor: (i, node) => {
          return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
        },
        paddingLeft: (i, node) => {
          return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
        },
        paddingRight: (i, node) => {
          return (i === node.table.widths.length - 1) ? 0 : 8;
        }
      }
    };
    this.pdfMake.createPdf(documentDefinition, tableLayouts).open();
  }

  pdfExport = () => {
    const exportColumnHeaders = this.getColumnHeaders();
    const exportData = this.getData(exportColumnHeaders);
    const docDefinition = this.prepareAsPdf(exportColumnHeaders, exportData);
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)

    if (isIEOrEdge) {
      this.downloadPDF(this.label, docDefinition);
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }

  downloadPDF = (fileName, docDefinition) => {
    const D = document;
    const a = D.createElement('a');
    const strMimeType = 'application/octet-stream;charset=utf-8';
    let rawFile;
    let ieVersion;

    ieVersion = /*@cc_on!@*/false || !!document['documentMode'];

    const doc = pdfMake.createPdf(docDefinition);
    let blob;

    doc.getBuffer((buffer) => {
      blob = new Blob([buffer]);

      // IE10+
      if (navigator.msSaveBlob) {
        return navigator.msSaveBlob(
          blob, fileName
        );
      }

      // Previously:  && ieVersion < 10
      // ieVersion now returns a boolean for the
      // sake of sanity. We just check `msSaveBlob` first.
      if (ieVersion) {
        const frame = D.createElement('iframe');
        document.body.appendChild(frame);

        frame.contentWindow.document.open('text/html', 'replace');
        frame.contentWindow.document.write(blob);
        frame.contentWindow.document.close();
        frame.contentWindow.focus();
        frame.contentWindow.document.execCommand('SaveAs', true, fileName);

        document.body.removeChild(frame);
        return true;
      }
    });
  }

  getColumnHeaders = () => {
    let headers = [];
    this.gridOptions.columnDefs.forEach((gridCol: any, index) => {
      if ((!gridCol.hide) &&
        gridCol.exporterSuppressExport !== true) {
        headers.push({
          name: gridCol.field,
          displayName: gridCol.headerName,
          width: gridCol.width,
          exportToCol: gridCol.gridCol,
          align: gridCol.type === 'number' ? 'right' : 'left'
        });
      }
    });
    headers = headers.slice(0, 11);
    return headers;
  }

  getData = (columnHeader) => {
    const data = [];
    this.gridOptions.rowData.forEach((row, index) => {
      if (row.exporterEnableExporting !== false) {
        const extractedRow = [];
        columnHeader.forEach((gridCol: any, index) => {

          const cellValue = row[gridCol.name];
          const extractedField = {
            value:
              this.exporterFieldCallback(row, gridCol, cellValue)
          };
          extractedRow.push(extractedField);
        });

        data.push(extractedRow);
      }
    });
    return data;
  }

  formatRowAsPdf = () => {
    return (row) => {
      return row.map(this.formatFieldAsPdfString);
    };
  }

  prepareAsPdf = (exportColumnHeaders, exportData) => {
    const headerWidths = this.calculatePdfHeaderWidths(exportColumnHeaders);

    const headerColumns = exportColumnHeaders.map((header) => {
      return { text: header.headerName === undefined ? header.displayName : header.headerName, style: 'tableHeader' };
    });

    const stringData = exportData.map(this.formatRowAsPdf());

    const allData = [headerColumns].concat(stringData);

    let docDefinition: any = {
      pageOrientation: 'landscape',
      pageSize: 'A4',
      content: [{
        style: 'tableStyle',
        table: {
          headerRows: 1,
          widths: headerWidths,
          body: allData
        }
      }],
      styles: {
        tableStyle: {
          padding: [0, 0, 0, 0]
        },
        tableHeader: {
          fontSize: 9,
          bold: true,
          italics: false,
          color: 'black'
        }
      },
      defaultStyle: {
        fontSize: 7
      }
    };



    docDefinition.header = {
      text: this.label,
      style: 'headerStyle'
    };

    ////if (grid.options.exporterPdfFooter) {
    docDefinition.footer = function (currentPage, pageCount) {
      return {
        text: currentPage.toString() + ' of ' + pageCount.toString(),
        style: 'footerStyle'
      };
    };
    //// }

    ////  docDefinition = () => {
    docDefinition.styles.footerStyle = {
      fontSize: 10,
      bold: true,
      margin: [40, 0, 0, 0]
    };
    docDefinition.styles.headerStyle = {
      fontSize: 10,
      bold: true,
      margin: [40, 20, 0, 0]
    };
    //// return docDefinition;
    //// };
    return docDefinition;

  }


  calculatePdfHeaderWidths = (exportHeaders) => {
    let baseGridWidth = 0;
    exportHeaders.forEach((value) => {
      if (typeof (value.width) === 'number') {
        baseGridWidth += value.width;
      }
    });

    let extraColumns = 0;
    exportHeaders.forEach((value) => {
      if (value.width === '*') {
        extraColumns += 100;
      }
      if (typeof (value.width) === 'string' && value.width.match(/(\d)*%/)) {
        // tslint:disable-next-line: radix
        const percent = parseInt(value.width.match(/(\d)*%/)[0]);

        value.width = baseGridWidth * percent / 100;
        extraColumns += value.width;
      }
    });

    const gridWidth = baseGridWidth + extraColumns;

    return exportHeaders.map((header) => {
      return header.width === '*' ? header.width : header.width *
        675 / gridWidth;
    });

  }

  exporterFieldCallback = (row, col, value) => {
    if (col.exportToCol && col.exportToCol !== null
      && col.exportToCol !== '') {
      let val = '';

      col.exportToCol.forEach((item) => {
        val += row[item.col] ? row[item.col] + ' ' : '';
      });
      value = val.trim();
    }
    return value;
  }

  formatFieldAsPdfString = (field) => {
    let returnVal;
    if (field.value == null) { // we want to catch anything null-ish, hence just == not ===
      returnVal = '';
    } else if (typeof (field.value) === 'number') {
      returnVal = field.value.toString();
    } else if (typeof (field.value) === 'boolean') {
      returnVal = (field.value ? 'TRUE' : 'FALSE');
    } else if (typeof (field.value) === 'string') {
      returnVal = field.value.replace(/"/g, '""');
    } else {
      returnVal = JSON.stringify(field.value).replace(/^"/, '').replace(/"$/, '');
    }

    if (field.alignment && typeof (field.alignment) === 'string') {
      returnVal = { text: returnVal, alignment: field.alignment };
    }

    return returnVal;
  }

  private gridUpdateRequestCall = (request: IRequest, filterQuery?: HttpParams): any => {
    this.gridRequestCall(request, filterQuery);
  }

  private gridRequestCall = (gridRequest: IRequest, filterQuery: HttpParams) => {
    this.watcherSubscription = this.gridService.getData(gridRequest, filterQuery, this.gridRequest.headers).subscribe((response) => {
      this.gridOptions.rowData = response._embedded[this.node];
      ///this.gridId = response.additionalParams['gridId'];

      if (response._links !== null &&
        response._links !== undefined &&
        response._links.self !== null &&
        response._links.self !== undefined
      ) {
        const parmValue = getURLParameter(response._links.self.href, '_num');
        this.additionalParams.pageSize = parseInt(parmValue);
        const parmValueTotal = getURLParameter(response._links.self.href, '_count');
        this.additionalParams.totalCount = parseInt(parmValueTotal);
      } else {
        this.additionalParams.pageSize = response.count;
      }
      this.links = response._links;
      this.gridOptions.api.setRowData(this.gridOptions.rowData);
      /// this.additionalParams = response.additionalParams;
      ///this.commonServiceEvent.gridAdditonalParams(this.gridId, response.additionalParams);
      this.changeDetecorRef.markForCheck();
      if (this.gridApi && this.gridApi.sizeColumnsToFit) {
        this.gridApi.sizeColumnsToFit();
      }
      setTimeout(() => {
        this.gridApi.resetRowHeights();
		this.watcherSubscription.unsubscribe();
      }, 500);
      
    });
  }

  private nextRecord = (pageRequest: IRequest, pageNumber: number) => {
    this.gridUpdateRequestCall(pageRequest);
  }

  private calcStyle = (displayPanelV: boolean = true) => {
    if (this.width === 0) {
      this.width = this.field.nativeElement.clientWidth;
    }
    const widthLeft = this.width - this.paginatorWidth;
    if (widthLeft < 400) {
      if (!displayPanelV) {
        this.searchBoxWidth = this.width - 100;
      } else {
        this.searchBoxWidth = 350;
      }
      this.displayPanel = displayPanelV;
    } else {
      this.searchBoxWidth = widthLeft - 40;
    }
  }

  gridEventCall = (colDef: any, data: any, eventType: any) => {
    const arg = {
      cell: colDef,
      data,
      eventtype: EventType.CLICK
    };
    this.gridEvent.emit(arg);
  }
}

function SimpleCellRenderer(params) {
  const eDiv = document.createElement('div');
  eDiv.innerHTML = '<span class="my-css-class"><b><a class="btn-simple">' + params.data[params.colDef.field] + '</a ></b></span>';
  const eButton = eDiv.querySelectorAll('.btn-simple')[0];
  eButton.addEventListener('click', () => {
    params.context.componentParent.gridEventCall(params.colDef, params.data, 'click');
  });

  return eDiv;
}

function buildColumnState(originalColumnState, columnState, sortState) {
  let colDef = Immutable.List([]);
  for (let i = 0; i < columnState.length; i++) {
    const column = originalColumnState.filter(x => x.field === columnState[i].colId)[0];
    if (column) {
      colDef = colDef.push({
        colId: columnState[i].colId,
        headerName: column.headerName ? column.headerName.replace(':', '') : '',
        field: columnState[i].colId,
        minWidth: column.minWidth,
        width: columnState[i].width,
        filter: column.filter,
        hide: columnState[i].hide,
        cellRenderer: column.cellRenderer,
        filterParams: column.filterParams,
        suppressFilter: column.suppressFilter,
        sortable: column.sortable,
        autoHeight: column.autoHeight,
        cellClass: column.cellClass,
        draggable: column.draggable,
        resizeable: column.resizeable,
        pinned: columnState[i].pinned
      });
    }
  }

  return colDef;
}

function exportToColumn(params) {
  if (params.column.colDef.exportToCol) {
    let val = '';
    params.column.colDef.exportToCol.forEach((column) => {
      val += params.node.data[column.name] ? params.node.data[column.name] : '';
    });
    return val;
  } else {
    return params.value;
  }
}

function isFirstColumn(params) {
  const displayedColumns = params.columnApi.getAllDisplayedColumns();
  const thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
}

function removeURLParameter(url, parameter) {
  //prefer to use l.search if you have a location/link object
  var urlparts = url.split('?');
  if (urlparts.length >= 2) {

    var prefix = encodeURIComponent(parameter) + '=';
    var pars = urlparts[1].split(/[&;]/g);

    //reverse iteration as may be destructive
    for (var i = pars.length; i-- > 0;) {
      //idiom for string.startsWith
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }

    url = urlparts[0] + '?' + pars.join('&');
    return url;
  } else {
    return url;
  }
}

function getURLParameter(url, parameter) {
  let value = '';
  const urlparts = url.split('?');
  if (urlparts.length >= 2) {

    const prefix = encodeURIComponent(parameter) + '=';
    const pars = urlparts[1].split(/[&;]/g);

    for (let i = pars.length; i-- > 0;) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        value = pars[i].split('=')[1];
        break;
      }
    }
    return value;
  }
}