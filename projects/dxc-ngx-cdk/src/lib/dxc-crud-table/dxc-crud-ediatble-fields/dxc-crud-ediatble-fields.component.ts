import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { EFieldsType, IRequest, EMethod } from '../../models/startup/configuration.model'
import { ELookupType, Mode, GridMode, Code, EUserLookupOptions } from '../../models/lookup/lookup';
import { ConfigurationsetupService } from '../../services/startup/configurationsetup.service';
import { ServiceRequest, baseGridStatePath, baseResourcePath, baseUsersPath } from '../../service-resource.constant';

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

const MultiUserGridStateRequest: IRequest = {
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
  selector: 'dxc-crud-ediatble-fields',
  templateUrl: './dxc-crud-ediatble-fields.component.html',
  styleUrls: ['./dxc-crud-ediatble-fields.component.scss']
})
export class DxcCrudEdiatbleFieldsComponent implements OnInit {

  @Input() formGroup: FormGroup = null;
  @Input() field: any;
  @Input() resource: any;
  @Input() validation: any;
  lookupMode = Mode;
  GridModeValues = GridMode;
  lookupType = ELookupType;
  fieldsType = EFieldsType;
  gridStateRequest: IRequest = GridStateRequest;
  userGridStateRequest: IRequest = UserGridStateRequest;
  multiUserGridStateRequest: IRequest = MultiUserGridStateRequest;
  resourceRequest: IRequest = ResourceRequest;
  lookupResourceRequest: IRequest = ResourceRequest;
  userGridRequest = UserGridRequest;
  treeSourceRequest: IRequest = TreeSourceRequest;
  orghgridStateRequest: IRequest = OrghGridStateRequest;
  orghresourceRequest: IRequest = OrghResourceRequest;
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
  // @Output() controlOnClick = new EventEmitter<any>();
  // @Output() controlOnChange = new EventEmitter<any>();

  constructor(private config: ConfigurationsetupService) {
    this.setupControlsUrl();
  }

  ngOnInit(): void {
  }

  private setupControlsUrl = () => {
    let url = '';
    let server = '';
    server = this.config.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice);
    url = server + '/' + baseGridStatePath.replace('{gridid}', 'codelookuptextnew');
    this.gridStateRequest.url = url;

    url = ''
    url = server + '/' + baseGridStatePath.replace('{gridid}', 'userlookuptextnew');
    this.userGridStateRequest.url = url;
	
	url = ''
    url = server + '/' + baseGridStatePath.replace('{gridid}', 'userlookupmultitextnew');
    this.multiUserGridStateRequest.url = url;

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

}
