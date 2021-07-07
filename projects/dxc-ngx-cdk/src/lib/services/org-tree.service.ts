import { IRequest, EMethod } from './../models/startup/configuration.model';
import { Observable } from 'rxjs';
import { HttpcallService } from './httpconfiguration/httpcall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrgTreeService {

  constructor(private uxapicall: HttpcallService) { }

  getTreeList(request: IRequest): Observable<any> {
    switch (request.methodtype) {
      case EMethod.GET:
        return this.uxapicall.get(request.url, request.params);
        break;
      case EMethod.POST:
        return this.uxapicall.post(request.url, request.body, request.params);
        break;
      default:
        break;
    }

  }

  childNodeList(request: IRequest): Observable<any> {
    switch (request.methodtype) {
      case EMethod.GET:
        return this.uxapicall.get(request.url);
        break;
      case EMethod.POST:
        return this.uxapicall.post(request.url, request.body, request.params);
        break;
      default:
        break;
    }
  }
}
