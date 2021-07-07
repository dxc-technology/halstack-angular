import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { IRequest, EMethod, EAction } from '../../models/startup/configuration.model';
import { HttpParams } from '@angular/common/http';
import { ELookupType, Mode, GridMode, EUserLookupOptions } from '../../models/lookup/lookup';
import { IUsers } from '../../models/lookup/lookup.model';
import { DxcBaselookupComponent } from '../baselookup/dxc-baselookup.component';
//import { BaseComponent } from '../basecomponent';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GridHelper } from '../../helpers/grid/helper';
import { EventType } from '../../models/grid/grid.model';
import { LookupService } from '../../services/lookup/lookup.service';
import { Observable } from 'rxjs';
import { MessageService } from './../../services/toaster/message.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'dxc-user-lookup',
  templateUrl: './dxc-userlookup.component.html',
  styleUrls: ['./dxc-userlookup.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcUserLookupComponent),
    multi: true,

  }]
})
//extends BaseComponent 
export class DxcUserLookupComponent implements ControlValueAccessor {

  @ViewChild('baseLookup', { static: false }) baseLookup: DxcBaselookupComponent<IUsers | Array<IUsers>>;;

  @Input('id') id: string;
  @Input('lookuptype') lookupType: ELookupType = ELookupType.MULTI;
  @Input('mode') mode: Mode = Mode.GRID;
  @Input('gridmode') gridMode: GridMode = GridMode.MODAl;
  @Input('label') label: string;
  @Input('removeiconarialabel') removeiconarialabel: string;
  @Input('key') key: string;
  @Input('isrequired') required: boolean;
  @Input('myusergridrequest') myUserGridRequest: IRequest;
  @Input('usergridrequest') userGridRequest: IRequest;
  @Input('groupgridrequest') groupGridRequest: IRequest;
  @Input('usergridstaterequest') userGridStateRequest: IRequest;
  @Input('groupgridstaterequest') groupGridStateRequest: IRequest;
  @Input('resourcerequest') resourceRequest: IRequest;
  @Input('lookupresourcerequest') lookupResourceRequest: IRequest;
  @Input('disabled') disabled: false;
  @Input('userlookupoptions') userlookupoptions: Array<EUserLookupOptions> = [EUserLookupOptions.MyUsers, EUserLookupOptions.Users, EUserLookupOptions.Groups];
  @Output()
  resultChange: EventEmitter<IUsers | Array<IUsers>> = new EventEmitter<IUsers | Array<IUsers>>();

  @Input()
  get result() {
    return this.resultValue;
  }

  set result(val) {
    this.resultValue = val;
    this.resultChange.emit(this.resultValue);
  }

  resultValue;
  lookupTypeValues = ELookupType;
  selectedIndex: number = 0;
  selectedTab: EUserLookupOptions;
  allowMyUsers: boolean = false;
  allowUsers: boolean = false;
  allowGroups: boolean = false;
  gridRequest: IRequest;
  gridStateRequest: IRequest;
  gridId: string = '';
  rowIdentity: string = '';
  resources: any;
  quickLookupRequest: IRequest;
  enableQuickLookup: boolean = false;
  constructor(private commonServiceEvent: GridHelper, private lookupService: LookupService, private messageService: MessageService) {
    //super();
  }

  ngOnInit() {
    this.UpdateLookupOptions();
    this.GetLookupResources();
  }

  registerOnChangeFn = (value) => { };
  registerOnTouchFn = () => { };

  lookupEvent = (value) => {
    switch (value) {
      case EAction.ADD:
        this.registerOnChangeFn(this.result);
        break;
      case EAction.REMOVE:
        this.registerOnChangeFn(this.result);
        break;
      case EAction.NOSELECTEDROW:
        switch (this.selectedTab) {
          case EUserLookupOptions.MyUsers:
          case EUserLookupOptions.Users:
            this.messageService.Error(this.resources.usersselectionerror.description);
            break;
          case EUserLookupOptions.Groups:
            this.messageService.Error(this.resources.groupsselectionerror.description);
            break;
        }
        break;
      case EAction.PANELOPEN:
        this.selectedIndex = 0;
        break;
    }
  };

  getMyUsersList = () => {
    this.gridStateRequest = this.userGridStateRequest;
    this.gridId = "myusersgrid";
    this.rowIdentity = "users";
    this.gridRequest = this.myUserGridRequest;
    this.selectedTab = EUserLookupOptions.MyUsers;
  }

  getUsersList = () => {
    this.gridStateRequest = this.userGridStateRequest;
    this.gridId = "usersgrid";
    this.rowIdentity = "users";
    this.gridRequest = this.userGridRequest;
    this.selectedTab = EUserLookupOptions.Users;
  }

  getGroupsList = () => {
    this.gridStateRequest = this.groupGridStateRequest;
    this.gridId = "groupsgrid";
    this.rowIdentity = "groups";
    this.gridRequest = this.groupGridRequest;
    this.selectedTab = EUserLookupOptions.Groups;
  }

  tabSelection = (tabInfo) => {
    if (tabInfo && tabInfo.tab) {
      let tabLabel = tabInfo.tab.textLabel;
      this.baseLookup.showGrid = false;
      switch (tabLabel) {
        case EUserLookupOptions.MyUsers:
          this.getMyUsersList();
          break;
        case EUserLookupOptions.Users:
          this.getUsersList();
          break;
        case EUserLookupOptions.Groups:
          this.getGroupsList();
          break;
      }
      this.selectedIndex = tabInfo.index;
      setTimeout(() => { this.baseLookup.showGrid = true });
      //this.baseLookup.reloadLookupGrid();
    }
  }

  gridEventResponse = (ev): boolean => {
    let returnValue = false;
    switch (ev.eventtype) {
      case EventType.CLICK:
        if (ev.cell && ev.cell.colId == 'isFavorite') {
          const row = ev.data;
          if (row && row._options && row._options.links) {
            let link = row._options.links.filter((x) => (x.rel && x.rel.toLowerCase() === 'update' && x.method && x.method.toLowerCase() === 'patch'));
            if (link.length > 0) {
              let request: IRequest = {
                url: link[0].href,
                methodtype: EMethod.PATCH,
                body: {
                  IsFavorite: row.isFavorite
                }
              };
              this.lookupService.updateFavoriteUser(request).subscribe((response) => {
                if (this.selectedTab == EUserLookupOptions.MyUsers) {
                  this.baseLookup.showGrid = false;
                  returnValue = false;
                  setTimeout(() => { this.baseLookup.showGrid = true }, 100);
                }
              });
            }
          }
        }
        else {
          returnValue = true;
        }
        break;
      default:
        returnValue = true;
        break;
    }
    return returnValue;
  }

  displayFn = (user: IUsers) => {
    if (user && user.name) {
      return user.name;
    } else {
      return '';
    }
  }

  setResult = (val, baseResult) => {
    var resultValues = [];
    switch (this.lookupType) {
      case ELookupType.MULTI:
        if (!this.resultValue || (baseResult == null || baseResult.length == 0)) {
          this.resultValue = [];
        }
        if (val.constructor === Array) {
          val.forEach(element => {
            const filteredValue = this.resultValue.filter((x) => (x.id === element.id && (x.type != null && element.type != null && x.type.toLowerCase() === element.type.toLowerCase())));
            if (filteredValue == null || (filteredValue != null && filteredValue.length === 0) && element != null && element.id > 0) {
              resultValues.push(element);
            }
          });
        } else {
          const filteredValue = this.resultValue.filter((x) => (x.id === val.id && x.type === val.type));
          if (!filteredValue && val.id > 0) {
            resultValues.push(val);
          }
        }
        break;
      default:
        resultValues = val != null && val.id > 0 ? val : { id: 0, groupId:0, name:''};
        break;
    }
    return resultValues;
  }

  writeValue(val: any): void {
    if (val)
      this.resultValue = val;
    else
      this.resultValue = this.lookupType === ELookupType.MULTI ? [] : {};
  }

  registerOnChange(fn: any): void {
    this.registerOnChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.registerOnTouchFn = fn;
  }

  setDisabledState(value): void {
    this.disabled = value;
  }

  private UpdateLookupOptions(): void {
    this.userlookupoptions.forEach(option => {
      switch (option) {
        case EUserLookupOptions.MyUsers:
          this.allowMyUsers = true;
          break;
        case EUserLookupOptions.Users:
          this.allowUsers = true;
          break;
        case EUserLookupOptions.Groups:
          this.allowGroups = true;
          break;
      }
    });
    if (this.userlookupoptions.indexOf(EUserLookupOptions.MyUsers) >= 0)
      this.getMyUsersList();
    else if (this.userlookupoptions.indexOf(EUserLookupOptions.Users) >= 0)
      this.getUsersList();
    else if (this.userlookupoptions.indexOf(EUserLookupOptions.Groups) >= 0)
      this.getGroupsList();
    this.selectedIndex = 0;
    if (this.userGridRequest) {
      this.enableQuickLookup = true;
      this.quickLookupRequest = this.userGridRequest;
    }
  }

  private GetLookupResources(): void {
    this.lookupService.getResource(this.lookupResourceRequest).subscribe((resource: any) => {
      if (resource && resource._embedded && resource._embedded.pageResources)
        this.resources = resource._embedded.pageResources;
    });
  }
}
