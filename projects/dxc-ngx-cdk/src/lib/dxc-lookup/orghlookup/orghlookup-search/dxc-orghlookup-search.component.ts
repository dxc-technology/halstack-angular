import { ConfigurationsetupService } from './../../../services/startup/configurationsetup.service';
import { HttpParams } from '@angular/common/http';
import { baseCodesPath, ServiceRequest, baseGridStatePath, baseResourcePath } from './../../../service-resource.constant';
import { IRequest, EMethod } from './../../../models/startup/configuration.model';
import { ELookupType, Mode, GridMode, Code } from './../../../models/lookup/lookup';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

const ResourceRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET
};


const GridStateRequest: IRequest = {
  url: baseCodesPath.replace('{codetable}', 'DOCUMENT_TYPE'),
  methodtype: EMethod.GET,
  params: new HttpParams()
    .set('gridId', 'codelookuptext1')
    .set('start', '0')
};

const stateCodeRequest: IRequest = {
  url: '',
  methodtype: EMethod.GET,
};


export enum SEARCHEVENT {
  DEFAULTLEVEl,
  SPECIFICBRANCH
}

@Component({
  selector: 'dxc-orghlookup-search',
  templateUrl: './dxc-orghlookup-search.component.html',
  styleUrls: ['./dxc-orghlookup-search.component.scss']
})
export class DxcOrghlookupSearchComponent implements OnInit {
  textSearchValue = '';
  searchSpecificBranchValue = false;
  sChkFilterValue = false;
  orghLevelSearchValue = 0;
  orghCityValue = '';
  stateValue: Code = { id: 0, desc: '', shortCode: '', table: '' };
  orghZipCodeValue = '';
  defaultOrghLevelValue;
  lookupType = ELookupType;
  lookupModeType = Mode;
  GridModeValues = GridMode;
  clonedNextDisabled = true;
  clonedThroughDisabled = true;
  disableCloneThrough = true;
  gridStateRequest: IRequest = GridStateRequest;
  stateCodeRequest: IRequest = stateCodeRequest;
  resourceRequest: IRequest = ResourceRequest;
  defaultParamsConfiguration = new HttpParams();
  @Input() apiResource;
  @Input() resource: any;
  @Input() searchSpecificBranchDisabled = false;
  @Input() defaultOrghLevelDisabled = false;
  @Input() orghLevelSearchDisabled = false;
  @Output() searchClick = new EventEmitter<any>();
  @Output() searchMainClick = new EventEmitter<any>();
  @Output() escapeClose = new EventEmitter<any>();

  @Input() orghLevel;

  @Output() searchSpecificBranchChange = new EventEmitter<boolean>();
  @Input()
  get searchSpecificBranch() {
    return this.searchSpecificBranchValue;
  }
  set searchSpecificBranch(value) {
    this.searchSpecificBranchValue = value;
    this.searchSpecificBranchChange.emit(value);
  }


  @Output() sChkFilterChange = new EventEmitter<boolean>();
  @Input()
  get sChkFilter() {
    return this.sChkFilterValue;
  }
  set sChkFilter(value) {
    this.sChkFilterValue = value;
    this.sChkFilterChange.emit(value);
  }

  @Output() orghLevelSearchChange = new EventEmitter<number | string>();
  @Input()
  get orghLevelSearch() {
    return this.orghLevelSearchValue;
  }
  set orghLevelSearch(value) {
    this.orghLevelSearchValue = value;
    this.orghLevelSearchChange.emit(value);
  }

  @Output() textSearchChange = new EventEmitter<string>();
  @Input()
  get textSearch() {
    return this.textSearchValue;
  }
  set textSearch(value) {
    this.textSearchValue = value;
    this.textSearchChange.emit(value);
  }

  @Output() orghCityChange = new EventEmitter<string>();
  @Input()
  get orghCity() {
    return this.orghCityValue;
  }
  set orghCity(value) {
    this.orghCityValue = value;
    this.orghCityChange.emit(value);
  }

  @Output() stateChange = new EventEmitter<Code>();
  @Input()
  get state() {
    return this.stateValue;
  }
  set state(value) {
    this.stateValue = value;
    this.stateChange.emit(value);
  }

  @Output() orghZipCodeChange = new EventEmitter<string>();
  @Input()
  get orghZipCode() {
    return this.orghZipCodeValue;
  }
  set orghZipCode(value) {
    this.orghZipCodeValue = value;
    this.orghZipCodeChange.emit(value);
  }


  @Output() defaultOrghLevelChange = new EventEmitter<number | string>();
  @Input()
  get defaultOrghLevel() {
    return this.defaultOrghLevelValue;
  }
  set defaultOrghLevel(value) {
    this.defaultOrghLevelValue = value;
    this.defaultOrghLevelChange.emit(value);
  }



  constructor(private config: ConfigurationsetupService) {
    let url = '';
    let server = '';

    server = this.config.getServer
      (ServiceRequest.CODESERVER, this.config.configservice);
    url = server + '/' + baseCodesPath.replace('{codetable}', 'states');
    this.stateCodeRequest.url = url;

    url = '';
    server = this.config.getServer
      (ServiceRequest.RESOURCESERVER, this.config.configservice);

    url = server
      + '/' + baseGridStatePath.replace('{gridid}', 'codelookuptextnew');
    this.gridStateRequest.url = url;

    url = '';
    server = this.config.getServer
      (ServiceRequest.RESOURCESERVER, this.config.configservice);

    url = server
      + '/' + baseResourcePath.replace('{pageid}', '9112');
    this.resourceRequest.url = url;
  }

  ngOnInit() {
  }

  clonetoNext = () => {

  }

  controlEvent = (controlName: string, value: any) => {
    switch (controlName.toLowerCase()) {
      case 'searchspecificbranch':
        this.searchSpecificBranch = value;
        this.searchClick.emit(SEARCHEVENT.SPECIFICBRANCH);
        break;
      case 'effectivedate':
        this.sChkFilter = value;
        break;
      case 'defaultorghlevel':
        this.defaultOrghLevel = value;
        this.orghLevelSearch = value;
        this.searchClick.emit(SEARCHEVENT.DEFAULTLEVEl);
        break;
      default:
        break;
    }
  }

  textInputChange = (controlName: string, value: any) => {
    switch (controlName.toLowerCase()) {
      case 'textsearch':
        this.textSearch = value;
        break;
      case 'orghcity':
        this.orghCity = value;
        break;
      case 'orghzipcode':
        this.orghZipCode = value;
        break;
    }
  }

  SearchMain() {
    this.searchMainClick.emit();
  }

  orghLevelSearchFn = (value) => {
    this.orghLevelSearch = value;
  }

  cloneThroughLevel = () => {

  }

  resetSearch = () => {
    this.orghCity = '';
    this.orghZipCode = '';
    this.textSearch = '';
    const defaultlevelCode = this.defaultParamsConfiguration.get('defaultlevel') !== null ?
      this.defaultParamsConfiguration.get('defaultlevel') : '';

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
        //this.allowedlevel = l.value;
      }
    }
    this.stateValue = { id: 0, desc: '', shortCode: '', table: '' };
    // this.effdatefilter = false;
    //this.searchSpecificBranch = false;
  }

  @HostListener("document:keyup.esc")
  onkeyup() {
    this.escapeClose.emit();
  }
}
