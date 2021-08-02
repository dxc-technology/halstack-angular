import { DxcConfirmationDialogService } from './../dxc-confirmation-dialog/dxc-confirmation-dialog.service';
import { ConfigurationsetupService } from './../services/startup/configurationsetup.service';
import { FormGroup, FormControl, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MessageService } from './../services/toaster/message.service';
import { IRequest, EFieldsType, ViewMode, IDateProperties, IFieldsBaseProperties, IDropdownProperties, EMethod, EAction, ICheckboxProperties, IFormUpdateEventFormat, IOrghLookupProperties, ICodeLookupProperties } from './../models/startup/configuration.model';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, forwardRef, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CrudTableService } from '../services/crud-table/crud-table.service';
import { ServiceRequest, baseGridStatePath, baseResourcePath, baseUsersPath } from './../service-resource.constant';
import { HttpParams } from '@angular/common/http';
import { ELookupType, Mode, GridMode, Code, EUserLookupOptions } from './../models/lookup/lookup';
import { CrudGridHelper } from './../helpers/crud-grid/crud-grid-helper';
import { LocalStorageService } from './../services/localstorage/dxc-localstorage.service';
import { DateHelper } from '../helpers/date/date-helper';

const ResourceRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET
};

const GridStateRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET
};

const UserGridStateRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET
};

const UserGridRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET,
};

const OrghResourceRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET
};

const TreeSourceRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET,
  params: new HttpParams()
};

const OrghGridStateRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET
};

@Component({
  selector: 'dxc-crud-table',
  templateUrl: './dxc-crud-table.component.html',
  styleUrls: ['./dxc-crud-table.component.scss'],
  providers: [CrudTableService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcCrudTableComponent),
    multi: true
  }],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DxcCrudTableComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  @Input() data: any;
  @Input() columns: any
  @Input() editableColumns: any;
  @Input() formatColumns: any = [];
  @Input() requiredField: string[];
  @Input() allowpagination = false;
  @Input() pageSizeOptions: [string];
  @Input() notification: any;
  @Input() searchable: boolean = true;
  @Input() multiple: boolean;

  @Input() maxChar: number;
  @Input() sourceRequest: IRequest;
  @Input() deleteRequest: IRequest;
  @Input() editRequest: IRequest;
  @Input() createRequest: IRequest;
  @Input() allowserverSideRequest = false;
  @Input() isAddRequired = false;
  @Input() label: string;
  @Input() isPopupVisible = false;
  @Input() isEditRequired = false;
  @Input() isDeleteRequired = false;
  @Input() isIconRequired = false;
  @Input() isEditIconRequired = false;
  @Input() uniqueIdentifier = '';
  @Input() resource: { [key: string]: string };
  @Input() columnWidth: { [key: string]: string };
  @Input() dataNodeName: string;
  @Input() parentForm: FormGroup;
  public suppgridForm: FormGroup;

  //Child to Parent
  @Output() action = new EventEmitter<any>();
  @Output() customColumnRenderer = new EventEmitter<any>();
  @Output() formControlUpdater = new EventEmitter<any>();
  @Output() stateChange = new EventEmitter<Code>();


  @Input()
  get state() {
    return this.distributionValue;
  }
  set state(value) {
    this.distributionValue = value;
    this.stateChange.emit(value);
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  public claimsForm: FormGroup;
  displayedColumns: string[] = null;
  editableFields: any;
  dateFields = [];
  paginationOptions = [];
  k: number;
  rowData: any;
  isSearchable: boolean;
  selectedRowIndex: number = -1;
  maxCharsInColumn: number;
  message: string;
  isEnabled: boolean;
  expandedElement = null;
  loaded = false;
  dataSource = new MatTableDataSource(null);
  fieldsType = EFieldsType;
  viewMode = ViewMode[ViewMode.TAB];
  globalResource: { [key: string]: string };
  isUnSavedData = false;
  gridStateRequest: IRequest = GridStateRequest;
  userGridStateRequest: IRequest = UserGridStateRequest;
  resourceRequest: IRequest = ResourceRequest;
  lookupResourceRequest: IRequest = ResourceRequest;
  lookupMode = Mode;
  GridModeValues = GridMode;
  lookupType = ELookupType;
  distributionValue: Code = { id: 0, desc: '', shortCode: '', table: '' };
  isEditForm = false;
  showPopup = false;
  objDataToEmit: IFormUpdateEventFormat;
  fieldOptions = [];
  tableHeight: string;
  saveIconName: string;
  uniqueColumn: string;
  userGridRequest = UserGridRequest;
  orghgridStateRequest: IRequest = OrghGridStateRequest;
  treeSourceRequest: IRequest = TreeSourceRequest;
  orghresourceRequest: IRequest = OrghResourceRequest;
  columnsarray = [];
  editablefieldsArray = [];
  userName: string;
  gridGlobalRequiredValidation: string;
  topNode = [{
    name: 'Organization Hierarchy',
    text: 'Organization Hierarchy',
    lastname: '3102016_PT21',
    ischild: '1',
    child_name: 'company',
    code: 'C',
    id: -20000,
    level: '1',
    children: [],
    icon: 'material-icons mdi mdi-file-tree icontree',
    state: { opened: true, disabled: true }
  }];

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private helper: CrudTableService, private messageService: MessageService,
    private confirmationDialogService: DxcConfirmationDialogService,
    private config: ConfigurationsetupService, private crudHelper: CrudGridHelper,
    private elRef: ElementRef, private _localStorageService: LocalStorageService,
    private dateHelper: DateHelper) {
    this.userName = this._localStorageService.get('userName');

    let url = '';
    let server = '';
    server = this.config.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice);
    url = server + '/' + baseGridStatePath.replace('{gridid}', 'codelookuptextnew');
    this.gridStateRequest.url = url;

    url = ''
    url = server + '/' + baseGridStatePath.replace('{gridid}', 'userlookuptextnew');
    this.userGridStateRequest.url = url;

    url = '';
    server = this.config.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice);
    url = server + '/' + baseResourcePath.replace('{pageid}', '9112');
    this.resourceRequest.url = url;

    url = '';
    server = this.config.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice);
    url = server + '/' + baseResourcePath.replace('{pageid}', '1018');
    this.orghresourceRequest.url = url;

    url = '';
    server = this.config.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice);
    url = server + '/' + baseGridStatePath.replace('{gridid}', 'orghierarchyGridNew');
    this.orghgridStateRequest.url = url;

    url = '';
    server = this.config.getServer(ServiceRequest.ENTITYSERVER, this.config.configservice);
    url = server + '/organisationhierarchy';
    this.treeSourceRequest.url = url;

    let params = new HttpParams();
    params = params.append('format', 'ux');
    params = params.append('defaultlevel', 'DT');
    params = params.append('isfromlookup', 'true');
    this.treeSourceRequest.params = new HttpParams();
    this.treeSourceRequest.params = params;

    url = '';
    server = this.config.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice);
    url = server + '/' + baseResourcePath.replace('{pageid}', '559');
    this.lookupResourceRequest.url = url;

    url = '';
    server = this.config.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice);
    url = server + '/' + baseUsersPath;
    this.userGridRequest.url = url;
    this.userGridRequest.params = new HttpParams()
      .set('start', '0')
  }

  ngOnInit() {
    this.isSearchable = this.searchable; // search
    this.maxCharsInColumn = this.maxChar; // maximum charatcters in a column
    this.dataSource.data = [];
    this.globalResource = this.config.configservice.Resource;
    this.saveIconName = this.createRequest ? 'save' : 'done';
    this.uniqueColumn = this.uniqueIdentifier;
    this.gridGlobalRequiredValidation = this.config.configservice.GlobalResource.gridGlobalRequiredValidation?.description;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  reload = () => {
    this.bindOptions();
  }

  // Search
  applyFilter(filterValue: string) {
    this.filterPredicate();
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setDataSourceAttributes = () => {
    this.dataSource.sort = this.sort;
  }

  openEdit(rowData: any, i: number) {
    this.k = i;
    this.highlight(rowData);
  }

  closeEdit(rowData: any) {
    this.k = -1;
    this.selectedRowIndex = -1;
  }

  formatDate(date) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return year + '-' + [monthIndex + 1] + '-' + day;
  }

  doneEdit(rowData: any) {
    for (let prop in rowData) {
      if (rowData[prop] instanceof Date) {
        rowData[prop] = this.formatDate(rowData[prop])
      }
    }
    rowData["operation"] = 'updated';
    this.action.emit(rowData);
  }

  openDialog(rowData: any): void {

    // const dialogRef = this.dialog.open(DialogComponent, {
    //   width: rowData === 'add' ? '300px' : '250px',
    //   data: rowData === 'add' ? { 'columns': this.columns, 'dateFields': this.dateColumns } : rowData
    // });

    // dialogRef.afterClosed().subscribe(result => {

    //   if (result.data && result.data.operation === 'deleted') { //doneDelete

    //     this.action.emit(result.data);
    //     this.removeFromArray(result.data)

    //     if (this.notification && this.notification.length > 0)
    //       this.UI_notifications(this.notification[0], this.notification[1]);
    //     else
    //       this.UI_notifications('', 'Delete action completed!');// default delete notification
    //   }

    //   if (result.data && result.data.operation === 'added') { //doneAdd

    //     this.action.emit(result.data);

    //     if (this.notification && this.notification.length > 0)
    //       this.UI_notifications(this.notification[0], this.notification[1]);
    //     else
    //       this.UI_notifications('', 'Add action completed!');// default add notification
    //   }
    // });
  }

  removeFromArray(elementToBeDeleted: string) {
    const index: number = this.data.indexOf(elementToBeDeleted);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.dataSource.data = this.data;
    }
  }

  // Highlight row on edit click
  highlight(row) {
    this.selectedRowIndex = row.id;
  }

  writeValue(val: any): void {
    this.displayedColumns = this.columns;
    this.editableFields = this.editableColumns;
    this.claimsForm = this.fb.group({});
    this.suppgridForm = this.fb.group({
    });

    if (this.sourceRequest) {
      this.getData();
    } else {
      this.data = val;
      this.dataSource.data = [...this.data];
      this.paginationOptions = this.pageSizeOptions; // page size options
      this.loaded = true;
      this.tableHeight = this.crudHelper.calculateTableHeight(this.dataSource.data);
    }
    if (this.editableColumns.viewmode != "TAB") {
      this.fieldOptions = this.editableFields.map(obj => ({ ...obj }));
    }
    else {
      this.fieldOptions = this.editableFields.section.map(obj => ({ ...obj }));
    }
  }

  filterPredicate() {
    var columnNames = this.columns;
    this.dataSource.filterPredicate = function (data: any, filter: string): boolean {
      const filteredColumns = columnNames.reduce((obj, key) => { obj[key] = data[key]; return obj; }, {});
      let dataList = (Object.values(filteredColumns)).filter((item) => (item && (item.toString().toLowerCase().indexOf(filter.toLowerCase()) > -1)));
      return dataList.length > 0 ? true : false;
    };
  }

  registerOnChange(fn: any): void {
    this.onChangeRegister = fn;
  }

  registerOnTouched(fn: any): void { }

  onChangeRegister = (val) => { }

  onClosePopup = () => {
    this.showPopup = !this.showPopup;
    this.expandedElement = null;
    this.claimsForm = this.fb.group({});
    this.isEditForm = false;
    this.suppgridForm = this.fb.group({});

    this.tableHeight = this.crudHelper.calculateFormHeight(false, this.tableHeight);
    this.formControlUpdater.emit({ action: EAction.ONCLOSEPOPUP });
  }

  addRow = () => {
    if (this.isPopupVisible) {
      this.showPopup = true;
    }
    if (this.isAddRequired) {
      if (Object.keys(this.claimsForm.controls).length) {
        return;
      }
      this.isEditForm = false;
      this.selectedRowIndex = -1;
      let crudFormModel = {};
      crudFormModel[this.uniqueIdentifier] = "";
      this.claimsForm = this.fb.group({});
      if (this.editableColumns.viewmode != "TAB") {
        this.editableFields.forEach((col) => {
          this.addRowFields(col, crudFormModel);
        });
      }
      else {
        this.editableFields.section.forEach((col1) => {
          col1.fields.forEach((col) => {
            this.addRowFields(col, crudFormModel);
          });
        });
      }
      this.registerFormValueChange(this.claimsForm);
      const data = [...this.dataSource.data];
      data.unshift(crudFormModel);

      this.expandedElement = crudFormModel;
      this.dataSource.data = [...data];
      this.tableHeight = this.crudHelper.calculateFormHeight(true, this.tableHeight);
      let dataToEmit: IFormUpdateEventFormat;


      this.columnsarray = [];
      if (this.editableColumns.viewmode === "TAB") {
        this.editableFields.section.forEach((col1) => {
          col1.fields.forEach((col) => {
            this.columnsarray.push(col);
          });
        });
        dataToEmit = {
          action: EAction.ONLOAD,
          columns: this.columnsarray,
          data: this.dataSource.data,
          error: { isError: false, msg: "" },
          form: this.claimsForm,
          control: this.columnsarray[0]
        };
      }
      else {
        dataToEmit = {
          action: EAction.ONLOAD,
          columns: this.editableFields,
          data: this.dataSource.data,
          error: { isError: false, msg: "" },
          form: this.claimsForm,
          control: this.editableFields.get(0)
        };
      }
      this.formControlUpdater.emit(dataToEmit);
    }

    this.suppgridForm = this.claimsForm;
    this.setFocus();
  }

  onRowSelection = (row) => {
    this.action.emit(row);
  }

  deleteRow = (row) => {
    const options = {
      title: this.config.configservice.Resource.confirmation,
      message: (this.parentForm.dirty && this.deleteRequest) ? this.config.configservice.Resource.crudGridDeleteSaveMsg : this.config.configservice.Resource.confirmDeleteMsg,
      cancelText: this.config.configservice.Resource.cancelButtonText,
      confirmText: this.config.configservice.Resource.confirmTitle
    };
    this.confirmationDialogService.confirm(options);
    this.confirmationDialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        if (this.deleteRequest) {
          this.helper.deleteData(this.deleteRequest, this.uniqueIdentifier, row).subscribe((response) => {
            if (response == true) {
              this.removeRowFromDataSource(row);
              this.data = [...this.dataSource.data];
              this.tableHeight = this.crudHelper.calculateTableHeight(this.dataSource.data);
              if (this.parentForm.dirty) {
                // After Delete Event Emitterv
                this.formControlUpdater.emit({ action: EAction.DELETEANDSAVE, columns: this.editableFields, data: row });
              } else {
                this.messageService.Success(this.resource.deleteSuccess);
                this.formControlUpdater.emit({ action: EAction.DELETEANDSAVE, columns: this.editableFields, data: row });
              }
              this.setFocus('searchInput');
            } else {
              this.messageService.Error(response);
            }
          });
        } else {
          this.removeRowFromDataSource(row);
          this.tableHeight = this.crudHelper.calculateTableHeight(this.dataSource.data);
          this.onChangeRegister(this.dataSource.data);
          // After Delete Event Emitter
          this.formControlUpdater.emit({ action: EAction.DELETE, columns: this.editableFields, data: row });
          this.setFocus('searchInput');
        }
      }
    });
  }

  private removeRowFromDataSource = (row) => {
    const index = this.dataSource.data.indexOf(row);
    this.dataSource.data.splice(index, 1);
    const data = this.dataSource.data;
    this.dataSource.data = [...data];
  }

  onChange(e: Event, value: any) { }

  rowsave = (row) => {
    if (this.claimsForm.invalid) {
      Object.values(this.claimsForm.controls).forEach(control => {
        if (control.errors && control.errors.required)
          control.markAsTouched();
      });
      return false;
    }
    // Befor Save Event Emitter
    let objDataToEmit: IFormUpdateEventFormat;


    this.columnsarray = [];
    if (this.editableColumns.viewmode === "TAB") {
      this.editableFields.section.forEach((col1) => {
        col1.fields.forEach((col) => {
          this.columnsarray.push(col);
        });
      });
      objDataToEmit = {
        action: EAction.BEFORESAVE,
        columns: this.columnsarray,
        data: this.claimsForm.getRawValue(),
        error: { isError: false, msg: "" },
        form: this.claimsForm,
        control: this.columnsarray[0]
      };
    }
    else {

      objDataToEmit = {
        action: EAction.BEFORESAVE,
        columns: this.editableFields,
        data: this.dataSource.data,
        error: { isError: false, msg: "" },
        form: this.claimsForm,
        control: this.editableFields.get(0)
      };
    }


    this.formControlUpdater.emit(objDataToEmit);
    if (this.claimsForm.invalid) {
      return false;
    }
    if (!objDataToEmit.error.isError) {
      if (!this.isEditForm) {
        const minUniqueIdentifier = Math.min.apply(null, this.dataSource.data.map((data) => data[this.uniqueIdentifier]));
        if (minUniqueIdentifier < 0) {
          this.expandedElement[this.uniqueIdentifier] = minUniqueIdentifier - 1;
        } else {
          this.expandedElement[this.uniqueIdentifier] = -1;
        }
      }
      if (this.editableColumns.viewmode != "TAB") {
        this.editableFields.forEach((col) => {
          this.rowSaveFields(col);
        });
      }
      else {
        this.editableFields.section.forEach((col1) => {
          col1.fields.forEach((col) => {
            this.rowSaveFields(col);
          });
        });
      }

      this.customColumnRenderer.emit(this.expandedElement);
      let serverRequest: IRequest = undefined;
      const data = this.dataSource.data;
      if (this.selectedRowIndex > -1) {
        serverRequest = this.editRequest;
        data[this.selectedRowIndex] = this.expandedElement;
      }
      else {
        serverRequest = this.createRequest;
      }

      if (this.dataNodeName === 'fieldlist') {
        this.expandedElement = serverRequest.body;
      }

      if (serverRequest != null && this.expandedElement) {
        let selectedRowIndex = this.selectedRowIndex;
        this.helper.saveData(serverRequest, this.expandedElement).subscribe(
          (response) => {
            if (response || response == true || response.msgStatus.msgStatusCd === 'Success') {
              this.claimsForm.markAsPristine();
              this.claimsForm.markAsUntouched();
              if (this.sourceRequest)
                this.getData();
              else if (selectedRowIndex > -1)
                this.dataSource.data = data;
              else this.getData();

              selectedRowIndex = -1;
              // After save Event Emitter
              this.formControlUpdater.emit({ action: EAction.ADD, columns: this.editableFields, data: this.expandedElement });
              this.showPopup = false;
              this.setFocus('searchInput');

            } else {
              this.messageService.Error(response);
            }
          },
          (err) => {
            this.getData();
          }
        );
      }
      else {
        this.onChangeRegister(data);
        this.dataSource.data = data;
        // After save Event Emitter
        this.formControlUpdater.emit({ action: EAction.ADD, columns: this.editableFields, data: this.expandedElement });
        this.setFocus('searchInput');
        // For save and continue future implementation
        //this.addRow();
      }
      // for Save
      this.expandedElement = null;
      this.claimsForm = this.fb.group({});
    } else {
      this.messageService.Error(objDataToEmit.error.msg);
      return false;
    }
    this.isEditForm = false;
  }

  // UI toast notifications
  UI_notifications(status: string, message: string) {
    this.closeEdit('UI_notifications');
  }

  closeExpandRow = (row) => {
    this.expandedElement = null;
    this.claimsForm = this.fb.group({});
    if (!this.isEditForm) {
      let dataDef = [...this.dataSource.data];
      const rowId = row[this.uniqueIdentifier];
      let index = -1;
      for (let i = 0; i < dataDef.length; i++) {
        if (dataDef[i][this.uniqueIdentifier] === rowId) {
          index = i;
          break;
        }
      }
      dataDef.splice(index, 1);
      this.dataSource.data = [...dataDef];
      this.onChangeRegister(this.dataSource.data);
    } else {
      this.isEditForm = false;
    }
    this.tableHeight = this.crudHelper.calculateFormHeight(false, this.tableHeight);
    this.formControlUpdater.emit({ action: EAction.ONPANELCLOSE });
  }

  editRow = (index, row) => {
    this.formControlUpdater.emit({ action: EAction.ONCUSTOMEDIT, data: row });

  }

  moveUp(element) {
    const index: number = this.dataSource.data.indexOf(element);
    if (index > 0) {
      this.move(index, index - 1);
    }


  }

  moveDown(element) {
    const index: number = this.dataSource.data.indexOf(element);
    if (index < this.dataSource.data.length) {
      this.move(index, index + 1);
    }

  }


  expandRow = (index, row) => {
    if (this.isPopupVisible) {
      this.showPopup = true;
    }

    this.isEditForm = true;
    if (this.dataNodeName === 'fieldlist') {

      row.selectedfieldType = row.fieldType.value;
      row.required = row.required == 'True' ? true : false;
      row.delete = row.delete == 'True' ? true : false;
      row.fasReportable = row.fasReportable == 'True' ? true : false;


    }
    this.selectedRowIndex = this.dataSource.filteredData.indexOf(row);
    this.expandedElement = this.expandedElement === row ? null : row;
    this.claimsForm = this.fb.group({});
    if (!(this.expandedElement === null)) {
      this.claimsForm.addControl(this.uniqueIdentifier, new FormControl(row[this.uniqueIdentifier]));
      if (this.editableColumns.viewmode != "TAB") {
        this.editableFields.forEach((col) => {
          this.expandRowFields(col);
        });
      }
      else {
        this.editableFields.section.forEach((col1) => {
          col1.fields.forEach((col) => {
            this.expandRowFields(col);
          });
        });
      }
      this.tableHeight = this.crudHelper.calculateFormHeight(true, this.tableHeight);
    }
    this.registerFormValueChange(this.claimsForm);
    // Edit Event dispatcher
    let objDataToEmit: IFormUpdateEventFormat;

    this.columnsarray = [];
    if (this.editableColumns.viewmode === "TAB") {
      this.editableFields.section.forEach((col1) => {
        col1.fields.forEach((col) => {
          this.columnsarray.push(col);
        });
      });
      objDataToEmit = {
        action: EAction.EDIT,
        columns: this.columnsarray,
        data: this.expandedElement,
        error: { isError: false, msg: "" },
        form: this.claimsForm,
        control: this.columnsarray[0]
      };
    }
    else {

      objDataToEmit = {
        action: EAction.EDIT,
        columns: this.editableFields,
        data: this.expandedElement,
        error: { isError: false, msg: "" },
        form: this.claimsForm,
        control: this.editableFields.get(0)
      };
    }

    this.formControlUpdater.emit(objDataToEmit);
    this.suppgridForm = this.claimsForm;
    this.setFocus();
  }

  bindOptions = () => {
    this.displayedColumns = this.columns;
    if (this.editableFields.viewmode != this.viewMode) {

      this.editableFields = this.fieldOptions.map(obj => ({ ...obj }));
      this.editableColumns = this.fieldOptions.map(obj => ({ ...obj }));

    }
    this.claimsForm = this.fb.group({});

    if (this.sourceRequest) {
      this.getData();
    } else {
      this.dataSource.data = [...this.data];
      this.paginationOptions = this.pageSizeOptions; // page size options
      this.dataSource.paginator = this.paginator; // pagination
      this.loaded = true;
      this.tableHeight = this.crudHelper.calculateTableHeight(this.dataSource.data);
      this.onChangeRegister(this.dataSource.data);
    }

    if (this.displayedColumns.length === 0) {
      //// future Implementation
    }

  }

  getData = () => {
    this.helper.getData(this.sourceRequest).subscribe((response) => {
      if (this.dataNodeName === 'fieldlist') {
        this.dataSource.data = response.fieldList._embedded.listrow;
        this.editablefieldsArray = response.fieldList._embedded.listrow;
        this.editablefieldsArray.forEach((field) => {
          field.selectedfieldType = field.fieldType.text;
          field.SelectedfieldId = field.fieldType.value;
        });
      }

      else if (this.dataNodeName === 'indexlist') {
        this.dataSource.data = response.indexList._embedded.listrow;
      }

      else {
        this.dataSource.data = response._embedded[this.dataNodeName];
      }
      this.tableHeight = this.crudHelper.calculateTableHeight(this.dataSource.data);
      this.formControlUpdater.emit({ action: EAction.ONRENDER, data: this.dataSource.data });
    });
  }

  onBlur = (data) => { }

  registerFormValueChange(formGroup: FormGroup) {
    if (this.isPopupVisible && this.editableColumns.viewmode === "TAB") {
      this.columnsarray = [];

      this.editableFields.section.forEach((col1) => {
        col1.fields.forEach((col) => {
          this.columnsarray.push(col);
        });
      });
      formGroup.valueChanges.subscribe(() => {
        let objDataToEmit: IFormUpdateEventFormat = {
          action: EAction.FORMDIRTY,
          columns: this.columnsarray,
          data: this.suppgridForm.getRawValue(),
          error: { isError: false, msg: "" },
          form: this.suppgridForm,
          control: this.columnsarray[0]
        };
        this.formControlUpdater.emit(objDataToEmit);
        this.parentForm.markAsDirty();
      });
    }



    else {

      formGroup.valueChanges.subscribe(() => {
        let objDataToEmit: IFormUpdateEventFormat = {
          action: EAction.FORMDIRTY,
          columns: this.editableFields,
          data: this.claimsForm.getRawValue(),
          error: { isError: false, msg: "" },
          form: this.claimsForm,
          control: this.editableFields.get(0)
        };
        this.formControlUpdater.emit(objDataToEmit);
        this.parentForm.markAsDirty();
      });
    }

  }

  isToShowRow = (index: number, row: any) => {
    if (!(row[this.uniqueColumn])) {
      return false;
    }
    return true;
  }

  setFocus = (id: string = "saveBtn") => {
    setTimeout(() => {
      let element = this.elRef.nativeElement.querySelector('#' + id);
      if (element)
        this.elRef.nativeElement.querySelector('#' + id).focus();
    }, 0);
  }

  rowSaveFields(col: any) {
    if (col && col.name.toLowerCase() !== 'action' && col.name.toLowerCase() != this.uniqueIdentifier.toLowerCase()) {
      let row = this.claimsForm.getRawValue();
      if (col.fieldType == EFieldsType.dropdown) {
        let dropdownFieldProp = (col as IDropdownProperties);
        let filteredRecord = (dropdownFieldProp.options as Array<{ label: '', value: '', iconSrc: '' }>).filter(option => { return option.value == row[dropdownFieldProp.name] });
        this.expandedElement[col.name] = row[col.name];
        this.expandedElement[dropdownFieldProp.viewValue] = filteredRecord.length > 0 ? filteredRecord[0].label : '';
        let selectedValue = dropdownFieldProp.multiple && filteredRecord.length > 0 ? filteredRecord : row[dropdownFieldProp.valueProperty];
        this.expandedElement[dropdownFieldProp.valueProperty] = selectedValue;
      } else if (col.fieldType == EFieldsType.codeLookup || col.fieldType == EFieldsType.supplementalGrid) {

        if (row && Array.isArray(row[col.name])) {

          this.expandedElement[col.name] = row[col.name];
          this.expandedElement[col.label] = row[col.name].map(function (a) { return a.shortCode + " " + a.desc }).join(',');
          row[col.name].forEach(element => {

            const filteredValue = row[col.name].filter((x) => (x.id === element.id));
            if (!filteredValue || filteredValue.length === 0) {
              this.expandedElement[col.valueProperty].push(element);

            }
          });
        }
        else {
          this.expandedElement[col.name] = row[col.name];
          this.expandedElement[col.label] = row[col.name].shortCode + " " + row[col.name].desc;
          this.expandedElement[col.valueProperty] = row[col.name].id;

        }




      }
      else if (col.fieldType == EFieldsType.orghLookup) {
        this.expandedElement[col.name] = row[col.name];
        this.expandedElement[col.label] = row[col.name].shortCode + " " + row[col.name].desc;
        this.expandedElement[col.valueProperty] = row[col.name].id;
      }
      else if (col.fieldType == EFieldsType.crudLookup) {
        this.expandedElement[col.name] = row[col.name];
        this.expandedElement[col.label] = row[col.name].name;
      }
      else if (col.fieldType == EFieldsType.userLookup) {
        this.expandedElement[col.name] = row[col.name];
        this.expandedElement[col.label] = row[col.name].name;
        this.expandedElement[col.valueProperty] = row[col.name].id;
      } else if (col.fieldType == EFieldsType.dxcDate) {
        this.expandedElement[col.name] = row[col.name]; //// this.dateHelper.convertDateToControlFormat(row[col.name], (col as IDateProperties).format);
      }
      else {
        this.expandedElement[col.name] = row[col.name];
      }
    }
  }

  expandRowFields(col: any) {
    if (col && col.name.toLowerCase() !== 'action') {
      if (col && col.name.toLowerCase() === this.uniqueIdentifier.toLowerCase()) {
        this.expandedElement[col.valueProperty] = 0;
        this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name],
          (col.required && col.required == true) ? Validators.required : null));
      } else {
        if (col.fieldType == this.fieldsType.codeLookup && !(this.expandedElement[col.name] instanceof Object)) {
          this.expandedElement[col.name] = { id: parseInt(this.expandedElement[col.name]), shortCode: "", desc: this.expandedElement[col.label], codeTable: "", relatedShortCode: "" };
        }
        if (col.fieldType == this.fieldsType.supplementalGrid && !(this.expandedElement[col.name] instanceof Object)) {
          this.expandedElement[col.name] = { id: parseInt(this.expandedElement[col.name]), shortCode: "", desc: this.expandedElement[col.label], codeTable: "", relatedShortCode: "" };
        }
        if (col.fieldType == this.fieldsType.orghLookup && !(this.expandedElement[col.name] instanceof Object)) {
          this.expandedElement[col.name] = { id: parseInt(this.expandedElement[col.name]), shortCode: "", desc: this.expandedElement[col.label], codeTable: "", relatedShortCode: "" };
        }
        if (col.fieldType == this.fieldsType.crudLookup && !(this.expandedElement[col.name] instanceof Object)) {
          this.expandedElement[col.name] = { id: parseInt(this.expandedElement[col.name]), shortCode: "", desc: this.expandedElement[col.label], codeTable: "", relatedShortCode: "" };

        }
        else
          this.expandedElement[col.name] = this.expandedElement[col.name];

        if (col.fieldType == this.fieldsType.dropdown) {
          this.expandedElement[(col as IDropdownProperties).viewValue] = this.expandedElement[(col as IDropdownProperties).viewValue];
          this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name],
            (col.required && col.required == true) ? Validators.required : null));

          if ((col as IDropdownProperties).isApplyChangeEvent) {
            const control = col as IDropdownProperties;
            const formControlUpdater = this.formControlUpdater;
            this.claimsForm.get(col.name).valueChanges.subscribe((data) => {
              this.parentForm.markAsDirty();
              formControlUpdater.emit({ action: EAction.CHANGE, columns: this.editableFields, data: data, control: control, form: this.claimsForm });
            });
          }
        }

        if (col.fieldType == this.fieldsType.dxcDate) {
          // // let date = this.dateHelper.convertDateToUserFormat(new Date(this.expandedElement[col.name]));
          this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name], (col.required && col.required == true) ? Validators.required : null));
        } else {
          this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name],
            (col.required && col.required == true) ? Validators.required : null));
        }
      }
    }
  }

  move(origin, destination) {
    var temp = this.dataSource.data[destination];
    this.dataSource.data[destination] = this.dataSource.data[origin];
    this.dataSource.data[origin] = temp;
    const data = this.dataSource.data;
    this.dataSource.data = [...data];
  }

  addRowFields(col: any, crudFormModel: any) {
    if (col && col.name.toLowerCase() !== 'action') {
      if (col && col.name.toLowerCase() === this.uniqueIdentifier.toLowerCase()) {
        crudFormModel[col.valueProperty] = 0;
        this.claimsForm.addControl(col.name, new FormControl(0,
          (col.required && col.required == true) ? Validators.required : null));
      } else {
        crudFormModel[col.name] = '';
        if (col.fieldType == this.fieldsType.dropdown) {
          crudFormModel[(col as IDropdownProperties).viewValue] = '';
          this.claimsForm.addControl(col.name, new FormControl(col.multiple ? [] : '', (col.required && col.required == true) ? Validators.required : null));

          if ((col as IDropdownProperties).isApplyChangeEvent) {
            const control = col as IDropdownProperties;
            const formControlUpdater = this.formControlUpdater;
            this.claimsForm.get(col.name).valueChanges.subscribe((data) => {
              this.parentForm.markAsDirty();
              formControlUpdater.emit({ action: EAction.CHANGE, columns: this.editableFields, data: data, control: control, form: this.claimsForm });
            });
          }

        } else if (col.fieldType == this.fieldsType.checkbox) {
          this.claimsForm.addControl(col.name, new FormControl((col as ICheckboxProperties).checked,
            (col.required && col.required == true) ? Validators.required : null));
        }
        else if (col.fieldType == this.fieldsType.crudLookup) {
          crudFormModel[col.name] = {};
          this.claimsForm.addControl(col.name, new FormControl(crudFormModel[col.name],
            (col.required && col.required == true) ? Validators.required : null));
        }
        else if (col.fieldType == this.fieldsType.codeLookup || col.fieldType == this.fieldsType.supplementalGrid || col.fieldType == this.fieldsType.userLookup) {
          crudFormModel[col.name] = {};
          this.claimsForm.addControl(col.name, new FormControl(crudFormModel[col.name],
            (col.required && col.required == true) ? Validators.required : null));

          if ((col as ICodeLookupProperties).isApplyChangeEvent) {
            const control = col as ICodeLookupProperties;
            const formControlUpdater = this.formControlUpdater;
            this.claimsForm.get(col.name).valueChanges.subscribe((data) => {
              this.parentForm.markAsDirty();
              formControlUpdater.emit({ action: EAction.CHANGE, columns: this.editableFields, data: data, control: control, form: this.claimsForm });
            });
          }

        }

        else if (col.fieldType == this.fieldsType.orghLookup) {
          crudFormModel[col.name] = {};
          this.claimsForm.addControl(col.name, new FormControl(crudFormModel[col.name],
            (col.required && col.required == true) ? Validators.required : null));

          if ((col as IOrghLookupProperties).isApplyChangeEvent) {
            const control = col as IOrghLookupProperties;
            const formControlUpdater = this.formControlUpdater;
            this.claimsForm.get(col.name).valueChanges.subscribe((data) => {
              this.parentForm.markAsDirty();
              formControlUpdater.emit({ action: EAction.CHANGE, columns: this.editableFields, data: data, control: control, form: this.claimsForm });
            });
          }

        }
        else {
          this.claimsForm.addControl(col.name, new FormControl('',
            (col.required && col.required == true) ? Validators.required : null));
        }
      }
    }
  }

}
