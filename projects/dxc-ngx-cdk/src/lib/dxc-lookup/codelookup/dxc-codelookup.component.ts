import { ConfigurationsetupService } from './../../services/startup/configurationsetup.service';
import { EAction } from './../../models/startup/configuration.model';
import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter, forwardRef, OnDestroy } from '@angular/core';
import { IRequest, EMethod } from '../../models/startup/configuration.model';
import { HttpParams } from '@angular/common/http';
import { ELookupType, Mode, GridMode } from '../../models/lookup/lookup';
import { ICodes } from '../../models/lookup/lookup.model';
import { DxcBaselookupComponent } from '../baselookup/dxc-baselookup.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LookupService } from '../../services/lookup/lookup.service';
import { GridHelper } from '../../helpers/grid/helper';
import { MessageService } from './../../services/toaster/message.service';
import { GridService } from '../../services/grid/grid.service';

@Component({
  selector: 'dxc-code-lookup',
  templateUrl: './dxc-codelookup.component.html',
  styleUrls: ['./dxc-codelookup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcCodeLookupComponent),
    multi: true
  }]
})
export class DxcCodeLookupComponent extends DxcBaselookupComponent<ICodes | Array<ICodes>> implements
  ControlValueAccessor, OnInit, OnDestroy {
  resultValue: ICodes | Array<ICodes>;
  defaulttoolbar = true;
  @ViewChild('coderef', { static: false }) codeLookRef: DxcBaselookupComponent<ICodes | Array<ICodes>>;

  @Input('id') id: string;
  @Input('lookuptype') lookupType: ELookupType = ELookupType.SINGLE;
  @Input('mode') mode: Mode = Mode.SELECT;
  @Input('gridmode') gridMode: GridMode = GridMode.MODAl;
  @Input('label') label: string;
  @Input('removeiconarialabel') removeiconarialabel: string;
  @Input('key') key: string;
  @Input('isrequired') required: boolean;
  @Input('allowServerFilter') allowServerFilter: true;
  @Input('sourcerequest') codeRequest: IRequest;
  @Input('gridstaterequest') gridStateRequest: IRequest;
  @Input('resourcerequest') resourceRequest: IRequest;
  @Input('disabled') disabled: false;
  @Input('typeaheadlength') typeAheadLength = 0;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null; 
  @Input('ariaRequired') ariaRequired: boolean = false;
  @Output('lookupeventaction')
  lookupEventAction: EventEmitter<EAction> = new EventEmitter<EAction>();
  @Output()
  resultChange: EventEmitter<ICodes | Array<ICodes>> = new EventEmitter<ICodes | Array<ICodes>>();

  @Input()
  get result() {
    return this.resultValue;
  }


  set result(val) {
    this.resultValue = val;
    this.resultChange.emit(this.resultValue);
    // this.registerOnChangeFn(this.resultValue);
  }

  isPanelOpen: boolean = false;


  registerOnChangeFn = (val) => { this.result = val; };
  registerOnTouchFn = () => { };
  configs: ConfigurationsetupService = null;
  constructor(public config: ConfigurationsetupService,
    public lookupService: LookupService,
    public commonServiceEvent: GridHelper,
    public messageService: MessageService,
    public gridService: GridService) {
    super(config, lookupService, commonServiceEvent, messageService, gridService);
    this.configs = config;
  }

  ngOnChange() {
  }

  ngOnInit() {
    if (this.configs.configservice.Settings && this.configs.configservice.Settings.typeaheadOthers) {
      this.typeAheadLength = parseInt(this.configs.configservice.Settings.typeaheadOthers);
    }

    if (this.lookupType === ELookupType.SINGLE) {
      this.defaulttoolbar = false;
    }
  }

  displayFn = (code: ICodes) => {
    if (code && (code.shortCode || code.desc)) {
      return code.shortCode + ' ' + code.desc;
    } else {
      return '';
    }
  }

  writeValue(val: any): void {
    // this.resultValue = val;
    this.result = val;
  }
  ngOnDestroy() {
    this.codeRequest = null;
  }
  registerOnChange(fn: any): void {
    this.registerOnChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.registerOnTouchFn = fn;
  }

  setDisabledState(boolV): void {
    this.disabled = boolV;
  }

  lookupEvents = (action: EAction) => {
    switch (action) {
      case EAction.ADD:
        this.registerOnChangeFn(this.result);
        break;
      case EAction.REMOVE:
        this.registerOnChangeFn(this.result);
        break;
      case EAction.NOSELECTEDROW:
        this.isPanelOpen = !this.isPanelOpen;
        setTimeout(() => { this.isPanelOpen = false; })
        break;
      default:
        break;
    }
    this.lookupEventAction.emit(action);
  }


  clearLookup = () => {
    switch (this.lookupType) {
      case ELookupType.SINGLE:
        this.result = {} as ICodes;
        break;
      case ELookupType.MULTI:
        this.result = [];
        break;
    }
    this.codeLookRef.clearLookup();
    this.lookupEventAction.emit(EAction.CLEAR);
  }

}
