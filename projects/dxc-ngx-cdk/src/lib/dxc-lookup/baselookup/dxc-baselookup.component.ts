import { ConfigurationsetupService } from './../../services/startup/configurationsetup.service';
import {
  Component, ElementRef, ViewChild, OnInit, Input, Output,
  EventEmitter, AfterViewInit, ViewEncapsulation, ContentChild, TemplateRef, OnDestroy, OnChanges
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER, T } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, of, observable, Subscription } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap, filter, catchError, finalize } from 'rxjs/operators';
import { LookupService } from '../../services/lookup/lookup.service';
import { EventType, RowSelectionType, IEventResponse } from '../../models/grid/grid.model';
import { IRequest, EMethod } from '../../models/startup/configuration.model';
import { ELookupType, Mode, GridMode } from '../../models/lookup/lookup';
import { GridHelper } from '../../helpers/grid/helper';
import { GridService } from '../../services/grid/grid.service';
import { EAction as Action, EAction } from '../../models/startup/configuration.model';
import { HttpParams } from '@angular/common/http';
import { GridComponent } from '../../dxc-grid/dxc-grid.component';
import { MessageService } from './../../services/toaster/message.service';

import { Action as GridAction } from '../../dxc-grid/gridaction';

@Component({
  selector: 'dxc-baselookup',
  templateUrl: './dxc-baselookup.component.html',
  styleUrls: ['./dxc-baselookup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DxcBaselookupComponent<T> implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('searchInput', { read: ElementRef, static: false }) searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('searchInput', { read: MatAutocompleteTrigger, static: false }) searchInputAutoTrigger;
  @ViewChild('input', { static: false }) searchInput2: MatAutocompleteTrigger;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild('lookupformfield', { read: ElementRef, static: false }) lookupformfield: ElementRef;
  @ViewChild('gridTemplate1', { read: ElementRef, static: false }) gridTemplate1: ElementRef;
  //@ViewChild('lookupGrid', { static: false }) lookupGrid: GridComponent;

  @Input('id') id: string;
  @Input('lookuptype') lookupType: ELookupType = ELookupType.SINGLE;
  @Input('mode') mode: Mode = Mode.SELECT;
  @Input('gridmode') gridMode: GridMode = GridMode.MODAl;
  @Input('label') label: string;
  @Input('removeiconarialabel') removeiconarialabel: string;
  @Input('addrequired') addrequired: boolean = false;
  @Input('minimumColumns') minimumColumns: number;
  @Input('maximumColumns') maximumColumns: number;
  @Input('autosearchrequired') autosearchrequired: boolean = true;
  @Input('key') key: string;
  @Input('required') required: boolean;
  @Input('sourcerequest') codeRequest: IRequest;
  @Input('resourcerequest') resourceRequest: IRequest;
  @Input() codeGridStateReq: IRequest;
  @Input('defaulttoolbar') defaulttoolbar: boolean = true;
  @Input('customtoolbar') customtoolbar: boolean = false;
  @Input('custompanel') customPanel = false;
  @Input('overridemodal') overrideModal = false;
  @Input('allowServerFilter') allowServerFilter: boolean = true;
  @Input() disabled = false;
  @Input('displayfn') displayFn: (input: T) => string;
  @Input('resultformatfn') resultFormatfn: (input: T) => T;
  @Input() node = '';
  @Input('setSelectionResult') setSelectionResult: (input: any, result: any) => [{}];
  @Input('lookupGridEvent') lookupGridEvent: (input: any) => boolean;
  @Input('gridstaterequest') gridStateRequest: IRequest;
  @Input('enablequicklookup') enableQuickLookup: boolean = true;
  @Input('quicklookuprequest') quickLookupRequest: IRequest;
  @Input('typeaheadlength') typeAheadLength = 0;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null; 
  @Input('ariaRequired') ariaRequired: boolean = false;

  @Output()
  resultChange: EventEmitter<T | Array<T>> = new EventEmitter<T | Array<T>>();

  @Output() lookupEvent: EventEmitter<EAction> = new EventEmitter<EAction>();


  @Input()
  get result() {
    return this.resultValue;
  }

  set result(val) {
    this.setResult(val);
    this.resultChange.emit(this.resultValue);
  }


  resultValue;
  @Input() isPanelOpen = false;

  @Output() isPanelOpenChange = new EventEmitter<boolean>();
  globalResource: { [key: string]: string };
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  lookupCtrl = new FormControl();
  filteredOptions: Observable<T[]>;
  lookupTypeValues = ELookupType;
  lookupModeValues = Mode;
  chipwidth = 332;
  displayValue = '';
  hideTemplateBox = false;
  RowSelectionTypeValues = RowSelectionType;
  gridModeValues = GridMode;
  calcRight = undefined;
  calcBottom = undefined;
  showGrid = true;
  showList: boolean = false;
  panelClosingSubscribe: Subscription = null;
  constructor(public config: ConfigurationsetupService,
    public lookupService: LookupService,
    public commonServiceEvent: GridHelper,
    public messageService: MessageService,
    public gridService: GridService) {
    console.log('this.type', this.lookupType);
  }

  @ContentChild(TemplateRef, { static: true })
  templateRef: TemplateRef<any>;


  ngOnInit() {
    this.globalResource = this.config.configservice.Resource;
    if (this.lookupType === this.lookupTypeValues.SINGLE) {
      this.removable = false;
    }
    this.configureFilteredOptions();
    if (this.lookupCtrl !== null) {
      if (this.disabled) {
        this.lookupCtrl.disable();
      } else {
        this.lookupCtrl.enable();
      }
    }
    this.lookupEvent.emit(Action.ONLOAD);
    this.showList = true;
    this.lookupDisplayFn(this.result);
  }

  ngOnChanges() {
    if (this.lookupCtrl !== null) {
      if (this.disabled) {
        this.lookupCtrl.disable();
      } else {
        this.lookupCtrl.enable();
      }
    }
  }

  ngOnDestroy() {
    this.codeRequest = null;
    if (this.panelClosingSubscribe)
      this.panelClosingSubscribe.unsubscribe();
  }

  ngAfterViewInit(): void {
    if (this.lookupType === this.lookupTypeValues.SINGLE) {
      this.calcWidth();
    }
    if (this.searchInputAutoTrigger) {
      this.panelClosingSubscribe = this.searchInputAutoTrigger.panelClosingActions.subscribe(
        (result) => {
          let selectedOption = undefined;
          if (this.searchInputAutoTrigger.activeOption && this.searchInputAutoTrigger.autocomplete) {
            selectedOption = {};
            selectedOption.option = this.searchInputAutoTrigger.activeOption;
            selectedOption.source = this.searchInputAutoTrigger.autocomplete;
          }
          if (selectedOption) {
            this.selected(selectedOption);
          }
        }
      );
    }
  }

  gridEventResponse = (ev) => {
    if (this.lookupGridEvent) {
      if (this.lookupGridEvent(ev) == true) {
        this.gridResponse(ev);
      }
    } else {
      this.gridResponse(ev);
    }
  }

  gridResponse = (ev) => {
    this.calcWidth();
    switch (ev.eventtype) {
      case EventType.CLICK:
        // this.setResult(ev.data);
        this.result = ev.data;
        this.lookupDisplayFn(this.result);
        this.lookupEvent.emit(Action.ADD);
        this.isPanelOpen = !this.isPanelOpen;
        break;

      default:
        break;
    }
  }

  open = (event) => {
    this.hideTemplateBox = false;
    setTimeout(() => {
      this.isPanelOpen = !this.isPanelOpen;
      this.calcGridWidth();
    }, 0);
    this.lookupEvent.emit(Action.PANELOPEN);
  }

  addColumn = (event) => {

    const filteredValue = this.result.filter((x) => x.desc === this.lookupCtrl.value);

    if ((!filteredValue || filteredValue.length === 0) && this.lookupCtrl.value != '' && this.lookupCtrl.value != null) {
      if (this.result.length < this.maximumColumns) {
        this.result.push({ shortCode: '', desc: this.lookupCtrl.value });
      }

      else {
        this.messageService.Error('You have reached the maximum allowable columns limit. No more columns can be added to the Grid');

      }

    }
    this.lookupCtrl.setValue(null);
    this.lookupEvent.emit(Action.ADD);

  }

  openPanelList = (event) => {
    setTimeout(() => {
      this.searchInput2.openPanel();
    }, 0);
  }

  calcWidth = () => {
    // tslint:disable-next-line: radix
    if (this.lookupformfield && this.lookupformfield.nativeElement && this.lookupformfield.nativeElement.offsetWidth) {
      this.chipwidth = (this.lookupformfield.nativeElement.offsetWidth - 42);
    }
  }

  chipmouseEnter = () => {
    this.removable = true;
  }

  chipmouseLeave = () => {
    this.removable = false;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.result.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
    this.lookupCtrl.setValue(null);
    this.lookupEvent.emit(Action.ADD);
  }

  remove(code: any): void {

    switch (this.lookupType) {
      case this.lookupTypeValues.MULTI:
        const index = this.result.indexOf(code);
        if (index >= 0) {
          this.result.splice(index, 1);
        }
        break;
      default:
        this.hideTemplateBox = false;
        this.result = {};
        this.lookupCtrl.setValue(null);
        this.displayValue = '';
        break;
    }
    this.lookupEvent.emit(Action.REMOVE);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.calcWidth();
    let selectedOption: Array<T> | T = [];
    this.lookupType === ELookupType.MULTI ? selectedOption.push(event.option.value) : selectedOption = event.option.value;
    if (this.resultFormatfn) {
      this.result = this.resultFormatfn(selectedOption as T);
    } else {
      this.result = (selectedOption as T);
    }
    this.searchInput.nativeElement.value = '';
    // this.lookupCtrl.setValue(null);
    this.hideTemplateBox = true;
    this.lookupEvent.emit(Action.ADD);
  }

  panelOpen(): void {
    //// this.isPanelOpen = true;
    this.isPanelOpen = false;
  }

  panelClose(): void {
    //// this.isPanelOpen = false;
  }

  lookupDisplayFn = (item: T) => {
    if (this.displayFn) {
      this.displayValue = this.displayFn(item);
      return this.displayValue;
    }
    return '';
  }

  resultLookupDisplayFn = (item: T) => {
    if (this.displayFn) {
      return this.displayFn(item);
    }
  }

  clearLookup = () => {
    switch (this.lookupType) {
      case ELookupType.SINGLE:
        this.resultValue = {} as T;
        break;
      case ELookupType.MULTI:
        this.resultValue = [];
        break;
    }
    this.lookupEvent.emit(EAction.CLEAR);
  }

  rowSelection = () => {
    const selectedRows = this.commonServiceEvent.gridSelectedRows.toJS();
    if (selectedRows == null || selectedRows.length <= 0) {
      this.lookupEvent.emit(Action.NOSELECTEDROW);
    } else {
      this.result = selectedRows;
      this.isPanelOpen = false;
      this.lookupEvent.emit(Action.ADD);
      this.commonServiceEvent.clearGridSelectedRow();
    }
  }

  calcGridWidth = () => {
    setTimeout(() => {
      if (this.gridTemplate1 && this.gridTemplate1.nativeElement && this.gridTemplate1.nativeElement.offsetLeft) {
        this.calcRight = (window.innerWidth - this.gridTemplate1.nativeElement.offsetLeft) < 850 ?
          0 : this.gridTemplate1.nativeElement.offsetLeft;
      }
      if (this.gridTemplate1 && this.gridTemplate1.nativeElement && this.gridTemplate1.nativeElement.offsetTop) {
        this.calcBottom = (window.innerHeight) - (this.gridTemplate1.nativeElement.offsetTop) < 250 ?
          '150px' : this.gridTemplate1.nativeElement.offsetTop + 'px';
      }

    }, 0);
  }

  private _clearFilter(): Observable<T[]> {
    let list: any = [];
    return list.filter(option => {
      return this.displayFn(option);
    });
  }

  private _filter(val: string): Observable<T[]> {

    // Add Querystring parms for Auto-complete
    if (!this.enableQuickLookup) {
      return of(undefined)
        .pipe(finalize(() => { }));
    }

    let request;
    this.lookupEvent.emit(EAction.AUTOCOMPLETEINIT);
    if (this.quickLookupRequest) {
      request = Object.assign({}, this.quickLookupRequest);
    } else {
      request = Object.assign({}, this.codeRequest);
    }

    if (val) {
      request.params = (!request.params) ? new HttpParams().set("lookupstring", val) : request.params.append("lookupstring", val);
    }

    return this.lookupService.getData(request)
      .pipe(
        map(response => response._embedded[this.node].filter(option => {
          return this.displayFn(option);
        }))
      );
  }

  private setResult(val) {
    if (this.lookupType === ELookupType.MULTI) {
      if (!this.resultValue) {
        this.resultValue = [];
      }
    }
    if (this.setSelectionResult) {
      let updatedElement: Array<any> | {} = this.setSelectionResult(val, this.resultValue);
      if (this.lookupType === ELookupType.MULTI) {
        if (updatedElement != null && Array.isArray(updatedElement)) {
          updatedElement.forEach(element => {
            this.resultValue.push(element);
            this.lookupDisplayFn(element);
          });
        }
      } else {
        this.resultValue = updatedElement;
        this.lookupDisplayFn(this.resultValue);
      }
    }
    else {
      switch (this.lookupType) {
        case ELookupType.MULTI:
          if (val && val.constructor === Array) {
            val.forEach(element => {

              const filteredValue = this.resultValue.filter((x) => (x.id === element.id));
              if (!filteredValue || filteredValue.length === 0) {
                this.resultValue.push(element);
                this.lookupDisplayFn(element);
              }
            });
            if (val.length === 0) {
              this.resultValue = [];
            }
          } else {
            const filteredValue = this.resultValue.filter((x) => x.id === val.id);
            if ((!filteredValue) || (filteredValue && filteredValue.length <= 0)) {
              if (val.id != undefined && val.id > 0) {
                this.resultValue.push(val);
                this.lookupDisplayFn(val);
              }
            }
          }
          break;
        default:
          this.resultValue = val;
          this.lookupCtrl.setValue(null);
          this.lookupDisplayFn(val);
          break;
      }
    }
  }

  private filterFn = this.lookupCtrl.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap((value) => {
      if (value !== null && value !== '') {
        if (value.length >= this.typeAheadLength) {
          return this._filter(value);
        } else {
          this.filteredOptions = new Observable<T[]>();
          setTimeout(() => {
            this.filteredOptions = this.filterFn;
          });
          return new Observable<T[]>();
        }
      } else {
        this.filteredOptions = new Observable<T[]>();
        setTimeout(() => {
          this.filteredOptions = this.filterFn;
        });
        return new Observable<T[]>();
      }
    }),
    finalize(() => { this.lookupEvent.emit(Action.ONREADY); })
  );


  private configureFilteredOptions() {
    if (this.mode === Mode.SELECT) {
      this.filteredOptions = this._filter('');
    } else {
      this.filteredOptions = this.filterFn;
    }
  }

}
