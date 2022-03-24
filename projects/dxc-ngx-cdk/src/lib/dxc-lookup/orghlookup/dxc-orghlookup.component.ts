import { MessageService } from './../../services/toaster/message.service';
import { DxcOrghlookupService } from './dxc-orghlookup.service';
import { EventType } from './../../models/grid/grid.model';
import { HttpParams } from '@angular/common/http';
import { ICodes } from './../../models/lookup/lookup.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//import { BaseComponent } from './../../basecomponent';
import { DxcBaselookupComponent } from '../baselookup/dxc-baselookup.component';
import { IRequest, EAction, EMethod, OrghEntity } from './../../models/startup/configuration.model';
import { TreeNode } from '../../dxc-tree/dxc-tree.interface';
import { Component, OnInit, Input, forwardRef, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ELookupType, Mode, GridMode, EUserLookupOptions, Code } from '../../models/lookup/lookup';
import { MatSidenav } from '@angular/material/sidenav';
import { SEARCHEVENT } from './orghlookup-search/dxc-orghlookup-search.component';
import { LookupService } from '../../services/lookup/lookup.service';
import { GridHelper } from '../../helpers/grid/helper';
import { GridService } from '../../services/grid/grid.service';
import { ConfigurationsetupService } from './../../services/startup/configurationsetup.service';
import { DxcResizeService } from '../../services/sizedetector/dxc-size-detector.service';
import { SCREEN_SIZE } from '../../services/sizedetector/dxc-size-detector.enum';
import { delay } from 'rxjs/operators';

enum View {
  GRID,
  TREE
}

const orghLevel: Array<OrghEntity> = [
  {
    shortCode: 'C',
    label: 'Client',
    value: 1005
  },
  {
    shortCode: 'CO',
    label: 'Company',
    value: 1006
  },
  {
    shortCode: 'O',
    label: 'Operation',
    value: 1007
  },
  {
    shortCode: 'R',
    label: 'Region',
    value: 1008
  },
  {
    shortCode: 'D',
    label: 'Division',
    value: 1009
  },
  {
    shortCode: 'L',
    label: 'Location',
    value: 1010
  },
  {
    shortCode: 'F',
    label: 'Facility',
    value: 1011
  },
  {
    shortCode: 'DT',
    label: 'Department',
    value: 1012
  },
  {
    shortCode: 'ALL',
    label: 'All',
    value: 1013
  }
];


@Component({
  selector: 'dxc-orghlookup',
  templateUrl: './dxc-orghlookup.component.html',
  styleUrls: ['./dxc-orghlookup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcOrghlookupComponent),
    multi: true
  }]
})
export class DxcOrghlookupComponent extends DxcBaselookupComponent<Code | Array<Code>>
  implements ControlValueAccessor, OnInit, OnChanges {


  @Input('treerequest') treeRequest: IRequest;
  @Input('topnode') topNode = new Array<TreeNode>();
  @Input() label = 'Orgh Lookup';
  @ViewChild('drawer', { static: false }) sidenav: MatSidenav;
  @Input('id') id: string;
  @Input('lookuptype') lookupType: ELookupType = ELookupType.SINGLE;
  @Input('allowmultipleselection') allowMultipleSelection = this.lookupType == ELookupType.SINGLE ? false : true;
  @Input('removeiconarialabel') removeiconarialabel: string;
  @Input('mode') mode: Mode = Mode.GRID;
  @Input('gridmode') gridMode: GridMode = GridMode.MODAl;
  @Input('key') key: string;
  @Input('isrequired') required: boolean;
  @Input() disableDefaultLevel = false;
  @Input() orghLevelSearchDisabled = false;
  @Input() allowTreeView = false;
  @Input() gridStateRequest: IRequest;
  @Input('resourcerequest') resourceRequest: IRequest;
  @Input('level') level: string;
  @Output() action = new EventEmitter<EAction>();
  @Input('disabled') disabled: false;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null; 
  @Input('ariaRequired') ariaRequired: boolean = false;
  @Output()
  resultChange: EventEmitter<Code | Array<Code>> = new EventEmitter<Code | Array<Code>>();

  @Output()
  treeresultChange: EventEmitter<TreeNode | Array<TreeNode>> = new EventEmitter<TreeNode | Array<TreeNode>>();
  isSearch: boolean = false;

  @Input()
  get treeresult() {
    return this.treeResultValue;
  }

  set treeresult(val: TreeNode) {
    if (val !== undefined) {
      if (this.lookupType == ELookupType.MULTI) {
        if (this.treeResultValue == undefined) {
          this.treeResultValue = [];
        }
      }
      else {
        this.treeResultValue = val;
      }
      if (val !== undefined) {
        if (val.name !== 'Organization Hierarchy') {
          this.currentLevel = getNodeLevelName(this.orghLevel, val.code, 'code') ?
            getNodeLevelName(this.orghLevel, val.code, 'code').label : '';
        }
        else {
          this.currentLevel = this.resource.nonodeselect.description;
        }
      }
      switch (this.lookupType) {
        case ELookupType.SINGLE:
          const targetValue: Code = { shortCode: '', desc: '', id: -1, table: '' };
          if (val !== undefined && val.id >= 0) {
            targetValue.id = val.id;
            targetValue.desc = val.lastName;
            targetValue.shortCode = val.abbreviation;
          }
          this.currentSelectedNode = val.id <= 0 ? undefined : val;
          this.showSelected(targetValue, true);
          break;
        case ELookupType.MULTI:
          const filteredValue = this.treeResultValue.filter((x) => (x.id == val.id));
          if (!filteredValue && val.id > 0) {
            this.treeResultValue.push(val);
          }
          const targetValues: Code = { shortCode: '', desc: '', id: -1, table: '' };
          if (val !== undefined && val.id >= 0) {
            targetValues.id = val.id;
            targetValues.desc = val.lastName;
            targetValues.shortCode = val.abbreviation;
          }
          this.currentSelectedNode = val.id <= 0 ? undefined : val;
          if (getNodeLevelName(this.orghLevel, this.currentSelectedNode.code, 'code').value == this.allowedlevel) {
            if (targetValues.id > 0) {
              this.showSelected(targetValues, true);
            }
          }
          break;
        default:
          break;
      }
    } else {
      switch (this.lookupType) {
        case ELookupType.SINGLE:
          const targetValue: Code = { shortCode: '', desc: '', id: -1, table: '' };
          this.currentLevel = '';
          this.treeResultValue = targetValue;
          this.currentSelectedNode = null;
          this.searchSpecificBranch = false;
          this.showSelected(targetValue, true);
          break;
      }

    }
  }

  @Input()
  get result() {
    return this.resultValue;
  }

  set result(val) {
    this.resultValue = val;
    this.resultChange.emit(this.resultValue);
    // this.registerOnChangeFn(this.resultValue);
  }

  searchSpecificBranchDisabled = false;
  defaultOrghLevelDisabled = false;
  selectednodes: Array<Code> | Code;
  currentSelectedNode: TreeNode;
  currentLevel: string;
  reloadTree = false;
  isPanelOpen1 = false;
  resource: any;
  ViewType = View;
  currentView = View.TREE;
  resultValue;
  treeResultValue;
  selectedIndex: number = 0;
  lisRequest: IRequest;
  defaultParamsConfiguration = new HttpParams();
  params = new HttpParams();
  orghLevel = orghLevel;
  gridId = '';
  defaultOrghLevel;
  isfromlookup = true;
  searchSpecificBranch = false;
  effdatefilter = false;
  orghLevelSearch = 1005;
  textSearch = '';
  orghCity = '';
  state: ICodes;
  orghZipCode = '';
  allowedlevel = 8;
  registerOnChangeFn = (value) => { this.result = value; };
  registerOnTouchFn = () => { };
  treeData: any;
  errorText = '';
  size: SCREEN_SIZE;

  constructor(public helper: DxcOrghlookupService, 
     public config: ConfigurationsetupService,
     public lookupService: LookupService, 
     public commonServiceEvent: GridHelper, 
     public messageService: MessageService, 
     public gridService: GridService,
     public resizeSvc: DxcResizeService) {
      super(config, lookupService, commonServiceEvent, messageService, gridService);
      this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        this.size = x;
        if (x > 0) {
          this.allowTreeView = true;
        } else {
          this.allowTreeView = false;
          this.gridView();
        }
      });
      
    }

  ngOnInit() {
    this.topNode = [{
      abbreviation: '',
      name: 'Organization Hierarchy',
      text: 'Organization Hierarchy',
      lastName: '3102016_PT21',
      ischild: '1',
      child_name: 'company',
      code: 'C',
      id: -20000,
      level: '1',
      children: [],
      icon: 'material-icons mdi mdi-file-tree icontree',
      state: { opened: true, disabled: true }
    }];
    let keys = this.treeRequest.params.keys();
    let parmasConfig = new HttpParams();
    for (let i = 0; i < keys.length; i++) {
      this.defaultParamsConfiguration = this.defaultParamsConfiguration.set(keys[i], this.treeRequest.params.get(keys[i]));
    }
    this.initializeParams();

    if (this.lookupType == ELookupType.SINGLE) {
      this.allowMultipleSelection = false;
    }
    else {
      this.allowMultipleSelection = true;
    }

  }

  ngOnChanges() {
  }

  closePopup() {
    this.isPanelOpen1 = !this.isPanelOpen1;
    this.isSearch = false;
  }

  changedisplay = () => {
    this.allowTreeView = !this.allowTreeView;
  }

  initializeParams() {
    if (this.allowTreeView) {
      this.currentView = View.TREE;
    } else {
      this.currentView = View.GRID;
    }

    this.defaultOrghLevelDisabled = this.disableDefaultLevel;
    const defaultlevelCode = this.treeRequest.params.get('defaultlevel') !== null ?
      this.treeRequest.params.get('defaultlevel') : '';

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.orghLevel.length; i++) {
      const l = this.orghLevel[i];
      if (defaultlevelCode.toLowerCase() == l.shortCode.toLowerCase()) {
        this.defaultOrghLevel = l.value;
        break;
      }
    }
    this.orghLevelSearch = this.level != undefined ? getNodeLevelName(this.orghLevel, this.level, 'code').value : this.orghLevelSearch;
    this.defaultOrghLevel = this.level != undefined ? getNodeLevelName(this.orghLevel, this.level, 'code').value : this.defaultOrghLevel;
    const allowedlevelCode = this.treeRequest.params.get('allowedlevel') !== null ?
      this.treeRequest.params.get('allowedlevel') : 'DT';
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.orghLevel.length; i++) {
      const l = this.orghLevel[i];
      if (allowedlevelCode.toLowerCase() == l.shortCode.toLowerCase()) {
        this.allowedlevel = l.value;
      }
    }

    this.isfromlookup = this.treeRequest.params.get('isfromlookup') !== null ?
      this.treeRequest.params.get('isfromlookup') as unknown as boolean : true;

    this.effdatefilter = this.treeRequest.params.get('effdatefilter') !== null ?
      this.treeRequest.params.get('effdatefilter') as unknown as boolean : false;
    this.lisRequest = Object.assign({}, this.treeRequest);
    this.lisRequest.params = this.lisRequest.params.set('format', 'list');
  }

  reset = () => {

  }

  lookupEvents = (value):void  => {
    switch (value) {
      case EAction.ADD:
        if (this.allowMultipleSelection) {
          this.selectednodes = (this.selectednodes == undefined) ? [] : this.selectednodes;
          (this.selectednodes as Array<Code>).push(this.result);
        } else {
          (this.selectednodes as Code) = this.result;
        }
        this.registerOnChangeFn(this.result);
        break;
      case EAction.AUTOCOMPLETEINIT:
        let lstParams = new HttpParams();
        lstParams = this.lisRequest.params;
        if (lstParams.has('defaultlevel'))
          lstParams = lstParams.delete('defaultlevel');
          this.allowedlevel = this.level != undefined ? getNodeLevelName(this.orghLevel, this.level, 'code').value : this.allowedlevel;
        //this.lisRequest.params = lstParams.append('defaultlevel', 'DT');
        for (let i = 0; i < this.orghLevel.length; i++) {
          if (this.allowedlevel == this.orghLevel[i].value) {
            this.lisRequest.params = lstParams.append('defaultlevel', this.orghLevel[i].shortCode);
          }
        }
        break;
      case EAction.PANELOPEN:        
        this.orghLevelSearch = this.level != undefined ? getNodeLevelName(this.orghLevel, this.level, 'code').value : this.orghLevelSearch;
        if (this.allowTreeView) {
          this.treeView();
        } else {
          this.gridView();
        }

        if (this.level != undefined) {
          let levelParams = new HttpParams();
          levelParams = this.treeRequest.params;
          if (levelParams.has('allowedlevel')) {
            levelParams = levelParams.delete('allowedlevel');
          }
          this.treeRequest.params = levelParams.append('allowedlevel', this.level);
          let defaultlevelParams = new HttpParams();
          defaultlevelParams = this.treeRequest.params;
          if (defaultlevelParams.has('defaultlevel')) {
            defaultlevelParams = defaultlevelParams.delete('defaultlevel');
          }
          this.treeRequest.params = defaultlevelParams.append('defaultlevel', this.level);
        }
        let keys = this.treeRequest.params.keys();
        let parmasConfig = new HttpParams();
        for (let i = 0; i < keys.length; i++) {
          this.defaultParamsConfiguration = this.defaultParamsConfiguration.set(keys[i], this.treeRequest.params.get(keys[i]));
        }

        this.resetSearch();
        this.helper.multiLingualResource(this.resourceRequest).subscribe((response) => {
          this.resource = response._embedded.pageResources;
        });
        this.isPanelOpen1 = true;
        break;
      case EAction.REMOVE:
        if (this.lookupType == ELookupType.SINGLE) {
          this.result = { shortCode: '', id: 0, desc: '' } as Code;
          this.registerOnChangeFn(this.result);
        }
        if (this.lookupType == ELookupType.MULTI) {
          //this.result = { shortCode: '', id: 0, desc: '' } as Code;
          const index = this.result.indexOf(value);
          if (index >= 0) {
            this.result.splice(index, 1);
          }
          this.registerOnChangeFn(this.result);
        }
        break;
      default:
        break;
    }
  }

  openedChange = (event) => {
  }

  writeValue(val: any): void {
    if (val) {
      this.resultValue = val;
    } else {
      this.resultValue = this.lookupType == ELookupType.MULTI ? [] : {};
    }
    this.selectednodes = this.resultValue;
  }

  registerOnChange(fn: any): void {
    this.registerOnChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.registerOnTouchFn = fn;
  }

  displayFn = (code: any) => {
    if (code && (code.shortCode || code.desc)) {
      return code.shortCode + ' ' + code.desc;
    } else if (code && code.name) {
      return code.name;
    } else {
      return '';
    }
  }

  resultFormatfns = (code: any) => {
    let result: ICodes = { id: 0, shortCode: '', desc: '' };
    switch (this.lookupType) {
      case ELookupType.SINGLE:
        if (code && (code.shortCode || code.desc)) {
          result.id = code.id;
          result.shortCode = code.shortCode;
          result.desc = code.desc;
        } else if (code && code.lastName) {
          result.id = parseInt(code.entityid);
          result.shortCode = code.abbreviation;
          result.desc = code.lastName;
        } else {
          result = code;
        }
        break;
      case ELookupType.MULTI:
        code = code[0];
        if (code && (code.shortCode || code.desc)) {
          result.id = code.id;
          result.shortCode = code.shortCode;
          result.desc = code.desc;
        } else if (code && code.lastName) {
          result.id = parseInt(code.entityid);
          result.shortCode = code.abbreviation;
          result.desc = code.lastName;
        } else {
          result = code;
        }
        break;
    }
    return result;
  }

  escapefromChild() {
    this.sidenav.opened = true;
    this.search();
  }

  search = () => {
    if (this.sidenav.opened) {
      this.isSearch = true;
      let params = new HttpParams();
      params = params.append('format', this.currentView == View.TREE ? 'ux' : 'list');
      //Start Not required while search
      params = params.append('defaultlevel', 'DT');
      //End Not required while search
      params = params.append('searchlevel', getNodeLevelName(this.orghLevel, this.orghLevelSearch, 'level').shortCode);
      params = params.append('cityname', this.orghCity);
      params = params.append('zipcode', this.orghZipCode);
      params = params.append('lookupstring', this.textSearch);
      params = params.append('stateid', (this.state !== undefined && this.state.id >= 0) ?
        this.state.id.toString() : '0');
      //Start Not required while search
      if (this.currentView == View.TREE) {
        for (let i = 0; i < this.orghLevel.length; i++) {
          if (this.defaultOrghLevel == this.orghLevel[i].value) {
            params = params.set('defaultlevel', this.orghLevel[i].shortCode);
            break;
          }
        }
      } else {
        if (params.has('defaultlevel'))
          params = params.delete('defaultlevel');
        params = params.append('defaultlevel', getNodeLevelName(this.orghLevel, this.orghLevelSearch, 'level').shortCode);
      }
      params = params.append('allowedlevel', 'DT');
      for (let i = 0; i < this.orghLevel.length; i++) {
        if (this.allowedlevel == this.orghLevel[i].value) {
          params = params.set('allowedlevel', this.orghLevel[i].shortCode);
        }
      }
      //End Not required while search
      params = params.append('isfromlookup', this.isfromlookup.toString());
      params = params.append('effdatefilter', this.effdatefilter.toString());
      if (this.currentSelectedNode && this.currentSelectedNode.id > 0) {
        params = params.append('treenode', this.currentSelectedNode.code);
        params = params.append('nodeid', this.currentSelectedNode.id.toString());
      }
      this.treeRequest.params = params;
      if (this.currentView == View.TREE) {
        this.reloadTree = true;
        setTimeout(() => {
          this.reloadTree = false;
        });
        this.treeresult = undefined;
      }
      else {
        this.currentView = undefined;
        setTimeout(() => {
          this.currentView = View.GRID;
        });
      }
      this.sidenav.close();
      this.isSearch = false;
    } else {
      this.sidenav.open();
      this.isSearch = true;
    }
  }

  actionChange = (event: EAction) => {
    switch (event) {
      case EAction.SELECT:
        if (getNodeLevelName(this.orghLevel, this.currentSelectedNode.code, 'code').value == this.allowedlevel || this.allowedlevel == 1013) {
          if (this.allowMultipleSelection && this.result.length > 0) {
            let list: any = [];
            list = this.selectednodes;
            let selectedValue = list[list.length - 1];
            const filteredValue = this.result.filter((x) => (x.id == selectedValue.id));
            if (filteredValue.length == 0) {
              this.result.push(selectedValue);
            }
          }
          else {
            this.result = this.selectednodes;
          }
          if (this.isfromlookup) { this.isPanelOpen1 = false; }
          if (this.result && this.result.id > 0) {
            this.registerOnChangeFn(this.result);
          }
          else if (this.allowMultipleSelection && this.result.length > 0) {
            this.registerOnChangeFn(this.result);
          }
        }
        break;
      case EAction.REMOVE:
        this.registerOnChangeFn(this.result);
        break;
      case EAction.ONREADY:
        const treeResponse = this.treeData;
        const defaultlevelCode = treeResponse['selectedlevel'];
        this.errorText = treeResponse['errorText'];
        break;
      default:
        break;
    }
    this.action.emit(event);
  }

  resetSearch = () => {
    this.orghCity = '';
    this.orghZipCode = '';
    this.textSearch = '';
    // this.orghLevelSearch = 1012;
    // this.defaultOrghLevel = 1012;
    const defaultlevelCode = this.defaultParamsConfiguration.get('defaultlevel') !== null ?
      this.defaultParamsConfiguration.get('defaultlevel') : '';

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.orghLevel.length; i++) {
      const l = this.orghLevel[i];
      if (defaultlevelCode.toLowerCase() == l.shortCode.toLowerCase()) {
        this.defaultOrghLevel = l.value;
        break;
      }
    }


    const allowedlevelCode = this.defaultParamsConfiguration.get('allowedlevel') !== null ?
      this.defaultParamsConfiguration.get('allowedlevel') : 'DT';
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.orghLevel.length; i++) {
      const l = this.orghLevel[i];
      if (allowedlevelCode.toLowerCase() == l.shortCode.toLowerCase()) {
        this.allowedlevel = l.value;
      }
    }
    this.state = { id: 0, shortCode: '', desc: '' };
    // this.effdatefilter = false;
    this.searchSpecificBranch = false;
  }

  searchClickFn = (event) => {
    if (this.sidenav.opened) {
    switch (event) {
      case SEARCHEVENT.DEFAULTLEVEl:
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.orghLevel.length; i++) {
          const currentLevel = this.orghLevel[i].value;
          if (currentLevel == this.defaultOrghLevel) {
            let allowedLevelValue = this.treeRequest.params.has('allowedlevel') ? this.treeRequest.params.get('allowedlevel') : 'DT';
            this.treeRequest.params = new HttpParams()
              .set('defaultlevel', this.orghLevel[i].shortCode)
              .set('format', this.currentView == View.TREE ? 'ux' : 'list')
              .set('allowedlevel', allowedLevelValue)
              .set('isfromlookup', 'true')
              .set('effdatefilter', 'false');
            this.reloadTree = true;
            this.orghCity = '';
            this.orghZipCode = '';
            this.textSearch = '';
            this.state = { id: 0, shortCode: '', desc: '' };
            setTimeout(() => {
              this.reloadTree = false;
            });
            this.sidenav.close();
            break;
          }
        }
        break;
      case SEARCHEVENT.SPECIFICBRANCH:
        if (this.searchSpecificBranch) {
          if (this.currentSelectedNode !== undefined && this.currentSelectedNode.id > 0) {
          } else {
            this.messageService.Error(this.resource.branchselection.description);
            setTimeout(() => {
              this.searchSpecificBranch = false;
            }, 0);
          }
        }
        break;
      default:
        break;
    }
    this.sidenav.close();
    this.isSearch = false;
  }else{
    this.sidenav.open();
    this.isSearch = true;
  }
    this.treeresult = undefined;
  }

  treeView = (isSwitch: boolean = false) => {
    this.currentView = View.TREE;
    this.defaultOrghLevelDisabled = this.disableDefaultLevel;
    this.searchSpecificBranchDisabled = false;
    let params = new HttpParams();
    params = params.append('format', 'ux');

    if (isSwitch) {
      this.getViewSwitchSearchParams(params);
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.orghLevel.length; i++) {
      if (this.defaultOrghLevel == this.orghLevel[i].value) {
        params = params.set('defaultlevel', this.orghLevel[i].shortCode);
        break;
      }
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.orghLevel.length; i++) {
      if (this.allowedlevel == this.orghLevel[i].value) {
        params = params.set('allowedlevel', this.orghLevel[i].shortCode);
        break;
      }
    }

    params = params.append('isfromlookup', this.isfromlookup.toString());
    params = params.append('effdatefilter', this.effdatefilter.toString());

    this.treeRequest.params = params;
    this.treeresult = undefined;
    
   if(this.size === 0)
   {
     this.allowTreeView = false;
   }
    
  }

  gridView = (isSwitch: boolean = false) => {

    this.currentView = View.GRID;
    this.defaultOrghLevelDisabled = true;
    this.searchSpecificBranchDisabled = true;
    let params = new HttpParams();
    params = params.set('format', 'list');

    if (isSwitch) {
      this.getViewSwitchSearchParams(params);
    }
    if (params.has('defaultlevel'))
      params = params.delete('defaultlevel');
    params = params.append('defaultlevel', getNodeLevelName(this.orghLevel, this.orghLevelSearch, 'level').shortCode);

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.orghLevel.length; i++) {
      if (this.allowedlevel == this.orghLevel[i].value) {
        params = params.set('allowedlevel', this.orghLevel[i].shortCode);
        break;
      }
    }

    params = params.append('isfromlookup', this.isfromlookup.toString());
    // params = params.append('effdatefilter', this.effdatefilter.toString());
    this.treeRequest.params = params;
    this.lisRequest.params = params;
  }

  gridEventResponse = (ev) => {
    switch (ev.eventtype) {
      case EventType.CLICK:
        if (this.defaultOrghLevel == this.allowedlevel && (getNodeLevelName(this.orghLevel, this.orghLevelSearch, 'level').value == this.allowedlevel && this.currentView == View.GRID)) {
          switch (this.lookupType) {
            case ELookupType.SINGLE:
            case ELookupType.MULTI:
              const targetValue: Code = { shortCode: '', desc: '', id: -1, table: '' };
              if (ev.data !== undefined && ev.data.entityid >= 0) {
                targetValue.id = ev.data.entityid as number;
                targetValue.desc = ev.data.name;
                targetValue.shortCode = '';
              }
              this.result = targetValue;
              this.currentSelectedNode = null;
              this.showSelected(targetValue, true);
              if (this.result && this.result.id > 0) {
                this.registerOnChangeFn(this.result);
              }
              break;
            default:
              break;
          }

          if (this.isfromlookup) { this.isPanelOpen1 = false; }
        } // this.setResult(ev.data);
        break;
      default:
        break;
    }
  }

  setDisabledState(boolV): void {
    this.disabled = boolV;
  }

  showSelected = (node, selected) => {
    if ((node.name !== 'Organization Hierarchy') || (node.lastname !== '3102016_PT21')) {
      if (this.isfromlookup) {
        if (this.allowMultipleSelection) {
          if (selected) {
            this.selectednodes = (this.selectednodes == undefined) ? [] : this.selectednodes;
            (this.selectednodes as Array<Code>).push(node);
          } else {
            if (this.selectednodes !== undefined) {
              const index = (this.selectednodes as Array<Code>).indexOf(node);
              (this.selectednodes as Array<Code>).splice(index, 1);
            }
          }
        } else {
          (this.selectednodes as Code) = node;
        }
      }

    }
  }

  getViewSwitchSearchParams = (params) => {
    params = params.append('searchlevel', getNodeLevelName(this.orghLevel, this.orghLevelSearch, 'level').shortCode);
    params = params.append('cityname', this.orghCity);
    params = params.append('zipcode', this.orghZipCode);
    params = params.append('lookupstring', this.textSearch);
    params = params.append('stateid', (this.state !== undefined && this.state.id >= 0) ?
      this.state.id.toString() : '0');
    if (this.currentSelectedNode && this.currentView == View.TREE) {
      params = params.append('treenode', this.currentSelectedNode.code);
      params = params.append('nodeid', this.currentSelectedNode.id.toString());
    }
  }
}

function getNodeLevelName(options, value, key = 'level') {
  let level: OrghEntity;

  switch (key) {
    case 'code':
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < options.length; i++) {
        const opt = options[i];
        if (opt.shortCode == value) {
          level = opt;
          break;
        }
      }
      break;
    case 'level':
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < options.length; i++) {
        const opt = options[i];
        if (opt.value == value) {
          level = opt;
          break;
        }
      }
    default:
      break;
  }
  return level;
}
