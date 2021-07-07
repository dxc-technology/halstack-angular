import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { HttpcallService } from '../httpconfiguration/httpcall.service';
import { ConfigurationsetupService } from '../startup/configurationsetup.service';

import { IResource } from '../../models/grid/grid.model';
import { IRequest, IResponse, EMethod } from '../../models/startup/configuration.model';
import { List } from 'immutable';


@Injectable({
  providedIn: 'root'
})
export class GridService {
  private gridRequestEvent = new Subject<any>();

  constructor(private uxapicall: HttpcallService, private configuration: ConfigurationsetupService) { }



  getState(gridRequest: IRequest): Observable<string> {
    return this.uxapicall.get(gridRequest.url, gridRequest.params);
  }

  getData(gridRequest: IRequest, params: HttpParams, headers?: HttpHeaders): Observable<IResponse> {
    const url = gridRequest.url;
    switch (gridRequest.methodtype) {
      case EMethod.GET:
        if (headers != null) {
          return this.uxapicall.getWithHeaders(url, { headers, params });
        }
        else {
          return this.uxapicall.get(url, params);
        }
        break;
      case EMethod.POST:
        if (headers != null) {
          return this.uxapicall.postWithHeaders(url, gridRequest.body, { headers, params });
        }
        else {
          return this.uxapicall.post(url, gridRequest.body, params);
        }
      default:
        return this.uxapicall.get(url, params);
        break;
    }
  }

  getResource(gridRequest: IRequest): Observable<IResource> {
    const url = gridRequest.url;
    switch (gridRequest.methodtype) {
      case EMethod.GET:
        return this.uxapicall.get(url, gridRequest.params);
        break;
      case EMethod.POST:
        return this.uxapicall.post(url, gridRequest.body, gridRequest.params);
      default:
        return this.uxapicall.get(url, gridRequest.params);
        break;
    }
  }

  saveState(gridState: any, gridId: string): Observable<any> {
    const coldef = { columns: {} };
    coldef.columns = gridState;
    const url = '/commongrid/gridStates?global=false&gridId=' + gridId;
    return this.uxapicall.post(url, coldef);
  }

  restoreState(gridId: string): Observable<any> {
    const url = '/commongrid/gridStates/' + gridId + '/restore';
    return this.uxapicall.get(url);

  }

}
