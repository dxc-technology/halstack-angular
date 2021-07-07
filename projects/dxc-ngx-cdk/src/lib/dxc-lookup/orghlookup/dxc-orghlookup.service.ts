import { ServiceRequest } from './../../service-resource.constant';
import { IRequest } from './../../models/startup/configuration.model';
import { HttpcallService } from './../../services/httpconfiguration/httpcall.service';
import { ConfigurationsetupService } from './../../services/startup/configurationsetup.service';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DxcOrghlookupService {

  constructor(private config: ConfigurationsetupService,
    private serviceRequest: HttpcallService) { }

  multiLingualResource(request: IRequest): Observable<any> {
    return this.serviceRequest.get(request.url, request.params);
  }

}

