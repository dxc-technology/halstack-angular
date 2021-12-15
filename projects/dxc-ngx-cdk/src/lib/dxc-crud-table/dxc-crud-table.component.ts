import { DxcConfirmationDialogService } from './../dxc-confirmation-dialog/dxc-confirmation-dialog.service';
import { ConfigurationsetupService } from './../services/startup/configurationsetup.service';
import { FormGroup, FormControl, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MessageService } from './../services/toaster/message.service';
import { IRequest, EFieldsType, ViewMode, IDropdownProperties, ITextEditorproperties, EAction, ICheckboxProperties, IFormUpdateEventFormat, IOrghLookupProperties, ICodeLookupProperties } from './../models/startup/configuration.model';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, forwardRef, AfterViewInit, OnDestroy, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DxcCrudService } from './dxc-crud-service/dxc-crud.service';
import { List } from 'immutable';
import { ELookupType, Mode, GridMode, Code, EUserLookupOptions } from './../models/lookup/lookup';
import { CrudGridHelper } from './../helpers/crud-grid/crud-grid-helper';
import { DxcResizeService } from './../services/sizedetector/dxc-size-detector.service';
import { DateHelper } from '../helpers/date/date-helper';
import { Button } from './../models/startup/configuration.model';
import { delay, filter } from 'rxjs/operators';
import { TextEditorService } from '../dxc-text-editor/text-editor/text-editor.service';
import { I } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';

@Component({
  selector: 'dxc-crud-table',
  templateUrl: './dxc-crud-table.component.html',
  styleUrls: ['./dxc-crud-table.component.scss'],
  providers: [DxcCrudService, {
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
export class DxcCrudTableComponent implements OnInit, ControlValueAccessor, OnChanges, AfterViewInit, OnDestroy {
  @Input() addRel: string = 'add';
  @Input() editRel: string = 'edit';
  @Input() deleteRel: string = 'delete';
  @Input() reloadRel: string = 'reload';
  @Input() editMode: 'inline' | 'popup' = 'inline';
  @Input() rowSelection: 'single' | 'multi' | 'none' = 'none';
  @Input() saveIconName: string = 'save';
  @Input() allowSearch: boolean = true;
  @Input() allowPaging: boolean = false;
  @Input() pagingOptions: [string];
  @Input() gridToolbar: List<Button> = null;
  @Input() id: string = 'crudGrid';
  @Input() data: any;
  @Input() columns: any
  @Input() editableColumns: any;
  @Input() formatColumns: any;
  @Input() styleColumns: any = {};
  @Input() sourceRequest: IRequest;
  @Input() uniqueIdentifier = '';
  @Input() resource: { [key: string]: string };
  @Input() dataNodeName: string;
  @Input() parentForm: FormGroup;
  @Input() label: string;
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

  public suppgridForm: FormGroup;
  public claimsForm: FormGroup;
  displayedColumns: string[] = null;
  editableFields: any;
  selectedRowIndex: number = -1;
  message: string;
  expandedElement = null;
  loaded = false;
  dataSource = new MatTableDataSource(null);
  fieldsType = EFieldsType;
  viewMode = ViewMode[ViewMode.TAB];
  globalResource: { [key: string]: { description: string, type: string } };
  distributionValue: Code = { id: 0, desc: '', shortCode: '', table: '' };
  isEditForm = false;
  isPopupOpen = false;
  objDataToEmit: IFormUpdateEventFormat;
  fieldOptions = [];
  tableHeight: string;
  uniqueColumn: string;
  columnsarray = [];
  editablefieldsArray = [];
  validations: string;
  editFormToolbar: List<any>;
  selectedRowCount: number = 0;
  isMobile: boolean = false;
  noRecord: string = 'No record';
  filterValue: string = '';
  referenceRow: any = null;
  enableAccessKey: boolean;
  xsDataset: Observable<any>;
  
  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private helper: DxcCrudService, private messageService: MessageService,
    private confirmationDialogService: DxcConfirmationDialogService,
    private config: ConfigurationsetupService, private crudHelper: CrudGridHelper,
    private elRef: ElementRef,
    private dateHelper: DateHelper,
    private resizeService: DxcResizeService,
    private textEditorService: TextEditorService) {
    this.resizeService.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        if (x > 2) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  gridFocus($event) {
    this.enableAccessKey = $event;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gridToolbar && changes.gridToolbar.currentValue && changes.gridToolbar.currentValue.filter(buttons => { return (buttons.rel == this.deleteRel || buttons.rel == this.editRel) }).count() > 0 && this.rowSelection == 'none') {
      this.rowSelection = 'single';
    }
    if (changes.editableColumns?.currentValue != null) {
      this.editableFields = changes.editableColumns.currentValue;
      if (this.editableColumns?.viewmode != "TAB") {
        this.fieldOptions = this.editableFields.map(obj => ({ ...obj }));
      }
      else {
        this.fieldOptions = this.editableFields.section.map(obj => ({ ...obj }));
      }
    }
  }

  ngOnInit() {
    this.dataSource.data = [];
    this.globalResource = this.config.configservice.Resources;
    this.uniqueColumn = this.uniqueIdentifier;
    this.validations = this.config.configservice.Resources.gridGlobalRequiredValidation?.description;
    this.noRecord = this.config.configservice.Resources.gridNoRecord?.description;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.setTableHeight();
  }

  writeValue(val: any): void {
    this.loaded = false;
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
      setTimeout(() => {this.loaded = true;}, 200);
      this.setTableHeight();
    }
    if (this.editableColumns?.viewmode != "TAB") {
      this.fieldOptions = this.editableFields.map(obj => ({ ...obj }));
    }
    else {
      this.fieldOptions = this.editableFields.section.map(obj => ({ ...obj }));
    }

    if (this.gridToolbar && this.gridToolbar.filter(buttons => { return (buttons.rel == this.deleteRel || buttons.rel == this.editRel) }).count() > 0 && this.rowSelection == 'none') {
      this.rowSelection = 'single';
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeRegister = fn;
  }

  registerOnTouched(fn: any): void { }
  onChangeRegister = (val) => { }
  onChange(e: Event, value: any) { }
  onBlur = (data) => { }

  ngOnDestroy(): void {
    let dataToEmit = {
      action: EAction.ONUNLOAD,
      data: this.dataSource.data,
      form: this.claimsForm
    };
    this.formControlUpdater.emit(dataToEmit);
  }

  formToolbarClick = ($event, element) => {
    switch ($event?.rel) {
      case 'save':
        this.rowsave(element);
        break;
      case 'close':
        this.closeExpandRow(element)
        break;
    }
  }

  rowChecked = ($event) => {
    if (this.expandedElement != null || this.isEditForm == true) {
      this.messageService.Info(this.config.configservice.Resources.rowSelectionError?.description);
      return;
    }
    $event.isSelected = !$event.isSelected;
    let dataToEmit = {
      action: EAction.ONROWCHECKED,
      data: this.dataSource.data,
      form: this.claimsForm
    };
    this.formControlUpdater.emit(dataToEmit);
    this.selectedRowCount = this.dataSource.data.filter(row => { return row['isSelected'] == true }).length;
  }

  selectAllRow = () => {
    if (this.expandedElement != null || this.isEditForm == true) {
      this.messageService.Info(this.config.configservice.Resources.rowSelectionError?.description);
      return;
    }
    if (this.dataSource.data.filter(row => { return row['isSelected'] == true }).length < this.dataSource.data.length) {
      this.dataSource.data.forEach(row => { row['isSelected'] = true });
    }
    else {
      this.dataSource.data.forEach(row => { row['isSelected'] = false });
    }
    this.selectedRowCount = this.dataSource.data.filter(row => { return row['isSelected'] == true }).length;
  }

  gridSearch = (filterValue: string) => {
    var columnNames = this.columns;
    this.dataSource.filterPredicate = function (data: any, filter: string): boolean {
      const filteredColumns = columnNames.reduce((obj, key) => { obj[key] = data[key]; return obj; }, {});
      let dataList = (Object.values(filteredColumns)).filter((item) => (item && (item.toString().toLowerCase().indexOf(filter.toLowerCase()) > -1)));
      return dataList.length > 0 ? true : false;
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filterValue = filterValue;
  }

  crudToolbarClick = ($event) => {
    this.editFormToolbar = List<Button>([]);
    this.editFormToolbar = this.editFormToolbar.push({
      rel: 'save',
      title: this.saveIconName == 'save' ? this.globalResource.save?.description : this.globalResource.okayButtonText?.description,
      iconName: this.saveIconName,
      label: this.saveIconName == 'save' ? this.globalResource.save?.description : this.globalResource.okayButtonText?.description,
      accessKey: 's'
    });
    if (this.editableColumns?.viewmode != "TAB") {
      this.editFormToolbar = this.editFormToolbar.push({
        rel: 'close',
        title: this.globalResource.closes?.description,
        iconName: 'cancel',
        label: this.globalResource.closes?.description,
        accessKey: 'x'
      });
    }
    let selectedRows = this.getSelectedRow();
    if ($event) {
      switch ($event.rel) {
        case this.addRel:
          if(this.allowPaging){
            this.paginator.pageIndex = 0;
          }
          this.addRow();
          this.setFocus('.edit-form');
          break;
        case this.editRel:
          if (selectedRows.length <= 0) {
            this.messageService.Info(this.config.configservice.Resources.selectRowError?.description);
          }
          else if (selectedRows.length > 1) {
            this.messageService.Info(this.config.configservice.Resources.multiRowSelectError?.description);
          }
          else {
            this.expandRow(1, selectedRows[0]);
            this.setFocus('.edit-form');
          }
          break;
        case this.deleteRel:
          if (selectedRows.length <= 0) {
            this.messageService.Info(this.config.configservice.Resources.selectRowError?.description);
          }
          else {
            let deleteButton = this.gridToolbar.filter(buttons => { return buttons.rel == this.deleteRel });
            let deleteRequest = (deleteButton.count() > 0 && deleteButton.get(0).request) ? deleteButton.get(0).request : null;
            const options = {
              title: this.config.configservice.Resources.confirmation?.description,
              message: (this.parentForm.dirty && deleteRequest) ? this.config.configservice.Resources.crudGridDeleteSaveMsg?.description : this.config.configservice.Resources.confirmDeleteMsg?.description,
              cancelText: this.config.configservice.Resources.cancelButtonText?.description,
              confirmText: this.config.configservice.Resources.confirmTitle?.description
            };
            this.confirmationDialogService.confirm(options);
            this.confirmationDialogService.confirmed().subscribe(confirmed => {
              if (confirmed) {
                selectedRows.forEach((row, index) => {
                  this.deleteRow(row, deleteRequest, (selectedRows.length - 1 == index));
                });
              }
            });
          }
          break;
        case this.reloadRel:
          this.reload();
          break;
        default:
          if (selectedRows.length <= 0) {
            this.messageService.Error('Please select a row to perform the operation');
          }
          else {
            let dataToEmit = {
              action: EAction.ONROWCHECKED,
              data: this.dataSource.data,
              form: this.claimsForm
            };
            this.formControlUpdater.emit(dataToEmit);
          }
          break;
      }
    }
  }

  reload = () => {
    this.selectedRowCount = 0;
    this.dataSource.data.forEach(row => { row['isSelected'] = false });
    this.bindOptions();
  }

  onClosePopup = () => {
    this.isPopupOpen = !this.isPopupOpen;
    this.expandedElement = null;
    this.claimsForm = this.fb.group({});
    this.isEditForm = false;
    this.suppgridForm = this.fb.group({});
    this.selectedRowCount = 0;
    this.tableHeight = this.crudHelper.calculateFormHeight(false, this.tableHeight, this.dataSource.data, this.elRef);
    this.formControlUpdater.emit({ action: EAction.ONCLOSEPOPUP });
  }

  onRowClick = (row) => {
    this.action.emit(row);
  }

  deleteRow = (row, deleteRequest, showMessage) => {
    if (deleteRequest) {
      this.helper.deleteData(deleteRequest, this.uniqueIdentifier, row).subscribe((response) => {
        if (response == true) {
          this.removeRowFromDataSource(row);
          this.data = [...this.dataSource.data];
          this.setTableHeight();
          if (this.parentForm.dirty) {
            this.formControlUpdater.emit({ action: EAction.DELETEANDSAVE, columns: this.editableFields, data: row });
          } else {
            if (showMessage == true) {
            this.messageService.Success(this.resource.deleteSuccess);
            this.formControlUpdater.emit({ action: EAction.DELETEANDSAVE, columns: this.editableFields, data: row });
            }
          }
          this.selectedRowCount = this.dataSource.data.filter(row => { return row['isSelected'] == true }).length;
        } else {
          this.messageService.Error(response);
        }
      });
    } else {
      this.removeRowFromDataSource(row);
      this.setTableHeight();
      this.onChangeRegister(this.dataSource.data);
      this.formControlUpdater.emit({ action: EAction.DELETE, columns: this.editableFields, data: row });
    }
  }

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
    if (this.editableColumns?.viewmode === "TAB") {
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
      if (this.editableColumns?.viewmode != "TAB") {
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
        let editButton = this.gridToolbar.filter(buttons => { return buttons.rel == this.editRel })
        serverRequest = editButton.count() > 0 && editButton.get(0).request ? editButton.get(0).request : null;
        data[this.selectedRowIndex] = this.expandedElement;
      }
      else {
        let addButton = this.gridToolbar.filter(buttons => { return buttons.rel == this.addRel })
        serverRequest = addButton.count() > 0 && addButton.get(0).request ? addButton.get(0).request : null;
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
              else
                this.dataSource.data = data;
              selectedRowIndex = -1;
              // After save Event Emitter
              this.formControlUpdater.emit({ action: EAction.ADD, columns: this.editableFields, data: this.expandedElement });
              this.isPopupOpen = false;
              this.expandedElement = null;
              this.claimsForm = this.fb.group({});
              this.isEditForm = false;
              this.getData();
            } else {
              this.messageService.Error(response);
              this.updateOldData();
            }
          },
          (err) => {
            this.updateOldData();
          }
        );
      }
      else {
        this.onChangeRegister(data);
        this.dataSource.data = data;
        // After save Event Emitter
        this.formControlUpdater.emit({ action: EAction.ADD, columns: this.editableFields, data: this.expandedElement });
        this.claimsForm = this.fb.group({});
        this.expandedElement = null;
        // For save and continue future implementation
        //this.addRow();
      }
      // for Save
    } else {
      this.messageService.Error(objDataToEmit.error.msg);
      return false;
    }
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
    this.tableHeight = this.crudHelper.calculateFormHeight(false, this.tableHeight, this.dataSource.data, this.elRef);
    this.formControlUpdater.emit({ action: EAction.ONPANELCLOSE });
  }

  expandRow = (index, row) => {
    this.referenceRow = Object.assign({}, row);
    if (this.editMode == 'popup') {
      this.isPopupOpen = true;
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
      if (this.editableColumns?.viewmode != "TAB") {
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
      this.tableHeight = this.crudHelper.calculateFormHeight(true, this.tableHeight, this.dataSource.data, this.elRef);
    }
    this.registerFormValueChange(this.claimsForm);
    let objDataToEmit: IFormUpdateEventFormat;
    this.columnsarray = [];
    if (this.editableColumns?.viewmode === "TAB") {
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
    this.parentForm.markAsDirty();
  }

  bindOptions = () => {
    this.loaded = false;
    this.expandedElement = null;
    this.isEditForm = false;
    this.displayedColumns = this.columns;
    if (this.editableFields.viewmode != this.viewMode) {
      this.editableFields = this.fieldOptions.map(obj => ({ ...obj }));
      this.editableColumns = this.fieldOptions.map(obj => ({ ...obj }));
    }
    if (this.sourceRequest) {
      this.getData();
    } else {
      let isFormDirty = this.parentForm?.dirty;
      this.dataSource.data = [...this.data];
      this.dataSource.paginator = this.paginator;
      setTimeout(() => {this.loaded = true;}, 200);
      this.setTableHeight();
      this.onChangeRegister(this.dataSource.data);
      if(isFormDirty != true){
        this.parentForm.markAsPristine();
        this.parentForm.markAsUntouched();
      }
      this.formControlUpdater.emit({ action: EAction.ONRENDER, data: this.dataSource.data });
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
      setTimeout(() => {this.loaded = true;}, 200);
      this.setTableHeight();
      this.formControlUpdater.emit({ action: EAction.ONRENDER, data: this.dataSource.data });
    });
  }

  registerFormValueChange(formGroup: FormGroup) {
    if (this.editMode == 'popup' && this.editableColumns?.viewmode === "TAB") {
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
    this.selectedRowCount = 0;
  }

  isToShowRow = (index: number, row: any) => {
    if (!(row[this.uniqueColumn])) {
      return false;
    }
    return true;
  }

  setFocus = (selector: string) => {
    setTimeout(() => {
      let element = this.elRef.nativeElement.querySelector(selector);
      if (element)
        this.elRef.nativeElement.querySelector(selector).focus();
    }, 500);
  }

  rowSaveFields(col: any) {
    if (col && col.name.toLowerCase() != this.uniqueIdentifier.toLowerCase()) {
      let row = this.claimsForm.getRawValue();
      switch (col.fieldType) {
        case EFieldsType.dropdown:
          let dropdownFieldProp = (col as IDropdownProperties);
          let filteredRecord = (dropdownFieldProp.options as Array<{ label: '', value: '', iconSrc: '' }>).filter(option => { return option.value == row[dropdownFieldProp.name] });
          if (col.multiple) {
            filteredRecord = (dropdownFieldProp.options as Array<{ label: '', value: '', iconSrc: '' }>).filter(option => { return row[dropdownFieldProp.name].indexOf(option.value) > -1 })
          }
          this.expandedElement[col.name] = row[col.name];
          this.expandedElement[dropdownFieldProp.viewValue] = filteredRecord.length > 0 ? filteredRecord[0].label : '';
          let selectedValue = dropdownFieldProp.multiple && filteredRecord.length > 0 ? filteredRecord : row[dropdownFieldProp.valueProperty];
          this.expandedElement[dropdownFieldProp.valueProperty] = selectedValue;
          break;
        case EFieldsType.codeLookup:
        case EFieldsType.supplementalGrid:
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
          break;
        case EFieldsType.orghLookup:
          this.expandedElement[col.name] = row[col.name];
          this.expandedElement[col.label] = row[col.name].shortCode + " " + row[col.name].desc;
          this.expandedElement[col.valueProperty] = row[col.name].id;
          break;
        case EFieldsType.crudLookup:
          this.expandedElement[col.name] = row[col.name];
          this.expandedElement[col.label] = row[col.name].name;
          break;
        case EFieldsType.userLookup:
          this.expandedElement[col.name] = row[col.name];
          this.expandedElement[col.label] = row[col.name].name;
          this.expandedElement[col.valueProperty] = row[col.name].id;
          break;
        case EFieldsType.dxcDate:
          this.expandedElement[col.name] = row[col.name];
          break;
        case EFieldsType.textEditor:
          this.expandedElement[col.name] = row[col.name];
          this.expandedElement[col.planeText] = this.textEditorService.getPlaneText(row[col.name]);
          break;
        default:
          this.expandedElement[col.name] = row[col.name];
          break;
      }
    }
  }

  expandRowFields(col: any) {
    if (col) {
      if (col && col.name.toLowerCase() === this.uniqueIdentifier.toLowerCase()) {
        this.expandedElement[col.valueProperty] = 0;
        this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name],
          (col.required && col.required == true) ? Validators.required : null));
      }
      else {
        switch (col.fieldType) {
          case this.fieldsType.codeLookup:
          case this.fieldsType.supplementalGrid:
          case this.fieldsType.orghLookup:
          case this.fieldsType.crudLookup:
            if (!(this.expandedElement[col.name] instanceof Object)) {
              this.expandedElement[col.name] = { id: parseInt(this.expandedElement[col.name]), shortCode: "", desc: this.expandedElement[col.label], codeTable: "", relatedShortCode: "" };
            }
            else {
              this.expandedElement[col.name] = this.expandedElement[col.name];
            }
            this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name], (col.required && col.required == true) ? Validators.required : null));
            break;
          case this.fieldsType.dropdown:
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
            break;
          case this.fieldsType.textEditor:
            this.expandedElement[(col as ITextEditorproperties).planeText] = this.expandedElement[(col as ITextEditorproperties).planeText];
            this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name],
              (col.required && col.required == true) ? Validators.required : null));
            break;
          case this.fieldsType.dxcDate:
            this.expandedElement[col.name] = this.expandedElement[col.name];
            this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name], (col.required && col.required == true) ? Validators.required : null));
            break;
          default:
            this.expandedElement[col.name] = this.expandedElement[col.name];
            this.claimsForm.addControl(col.name, new FormControl(this.expandedElement[col.name],
              (col.required && col.required == true) ? Validators.required : null));
            break;
        }
      }
    }
  }

  addRowFields(col: any, crudFormModel: any) {
    if (col) {
      if (col && col.name.toLowerCase() === this.uniqueIdentifier.toLowerCase()) {
        crudFormModel[col.valueProperty] = 0;
        this.claimsForm.addControl(col.name, new FormControl(0,
          (col.required && col.required == true) ? Validators.required : null));
      } else {
        crudFormModel[col.name] = '';
        switch (col.fieldType) {
          case this.fieldsType.dropdown:
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
            break;
          case this.fieldsType.checkbox:
            this.claimsForm.addControl(col.name, new FormControl((col as ICheckboxProperties).checked,
              (col.required && col.required == true) ? Validators.required : null));
              const control = col as ICheckboxProperties;
                const formControlUpdater = this.formControlUpdater;
                this.claimsForm.get(col.name).valueChanges.subscribe((data) => {
                  this.parentForm.markAsDirty();
                  formControlUpdater.emit({ action: EAction.CHANGE, columns: this.editableFields, data: data, control: control, form: this.claimsForm });
                });
            break;
          case this.fieldsType.crudLookup:
            crudFormModel[col.name] = {};
            this.claimsForm.addControl(col.name, new FormControl(crudFormModel[col.name],
              (col.required && col.required == true) ? Validators.required : null));
            break;
          case this.fieldsType.codeLookup:
          case this.fieldsType.supplementalGrid:
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
            break;
          case this.fieldsType.orghLookup:
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
            break;
          default:
            this.claimsForm.addControl(col.name, new FormControl('',
              (col.required && col.required == true) ? Validators.required : null));
            break;
        }
      }
    }
  }

  trackTable = (index: number, item: any) => {
    return item;
  }

  endFocus($event: any) {
    this.setFocus('.edit-form');
  }

  returnFocusOut($event: any) {
    $event.nativeElement.tabindex = "-1";
  }

  private removeRowFromDataSource = (row) => {
    const index = this.dataSource.data.indexOf(row);
    this.dataSource.data.splice(index, 1);
    const data = this.dataSource.data;
    this.dataSource.data = [...data];
  }

  private updateOldData() {
    if (this.selectedRowIndex > -1) {
      this.expandedElement = Object.assign({}, this.referenceRow);
      let dataDef = [...this.dataSource.data];
      dataDef[this.selectedRowIndex] = this.expandedElement;
      this.dataSource.data[this.selectedRowIndex] = this.expandedElement;
      this.dataSource.data = [...dataDef];
    }
  }

  private addRow = () => {
    if (this.editMode == 'popup') {
      this.isPopupOpen = true;
    }
    this.isEditForm = false;
    this.selectedRowIndex = -1;
    let crudFormModel = {};
    crudFormModel[this.uniqueIdentifier] = "";
    this.claimsForm = this.fb.group({});
    if (this.editableColumns?.viewmode != "TAB") {
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
    this.tableHeight = this.crudHelper.calculateFormHeight(true, this.tableHeight, this.dataSource.data, this.elRef);
    let dataToEmit: IFormUpdateEventFormat;


    this.columnsarray = [];
    if (this.editableColumns?.viewmode === "TAB") {
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
    this.suppgridForm = this.claimsForm;
    this.parentForm.markAsDirty();
  }

  private getSelectedRow() {
    return this.dataSource.data.filter((row) => { return row['isSelected'] == true });
  }

  private setTableHeight() {
    setTimeout(() => {
      this.tableHeight = this.crudHelper.calculateTableHeight(this.dataSource.data, this.elRef);
      this.dataSource.paginator = this.paginator;
      this.xsDataset = this.dataSource.connect();
    }, 1000);
  }
}
