import { IRequest, EMethod } from './../models/startup/configuration.model';
import { ResourceRequestService } from './../services/httpconfiguration/resourcerequest.service';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class DxcActivationcodeService {

  constructor(private _reqResource: ResourceRequestService) { }

  activateModuleLicence(activateCode): Observable<any> {
    const reqBody = activateCode;
    const request: IRequest = {
      url: 'GeneralSystemParameter/authorization',
      methodtype: EMethod.POST,
      body: reqBody
    }
    return this._reqResource.utilityResource(request);
  }
}
