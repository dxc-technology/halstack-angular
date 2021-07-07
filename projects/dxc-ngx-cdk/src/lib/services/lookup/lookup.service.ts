import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpcallService } from '../httpconfiguration/httpcall.service';
import { ConfigurationsetupService } from '../startup/configurationsetup.service';
import { IRequest, EMethod as MethodType } from '../../models/startup/configuration.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private callService: HttpcallService, private configuration: ConfigurationsetupService) { }

  getData(request: IRequest): Observable<any> {
    const url = request.url;
    switch (request.methodtype) {
      case MethodType.POST:
        return this.callService.post(url, request.body, request.params);
        break;
      default:
        return this.callService.get(url, request.params);
        break;
    }
  }

  updateFavoriteUser(request: IRequest): Observable<any> {
    const url = request.url;
    switch (request.methodtype) {
      case MethodType.POST:
        return this.callService.post(url, request.body, request.params);
        break;        
      case MethodType.PATCH:
        return this.callService.patch(url, request.body);
        break;
      default:
        return this.callService.patch(url, request.body);
        break;
    }
  }

  getResource(gridRequest: IRequest): Observable<any> {
    const url = gridRequest.url;
    switch (gridRequest.methodtype) {
      case MethodType.GET:
        return this.callService.get(url, gridRequest.params);
        break;
      case MethodType.POST:
        return this.callService.post(url, gridRequest.body, gridRequest.params);
      default:
        return this.callService.get(url, gridRequest.params);
        break;
    }
  }
}
