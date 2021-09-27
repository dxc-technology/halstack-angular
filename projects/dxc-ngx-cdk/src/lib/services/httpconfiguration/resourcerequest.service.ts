import { IConfig } from '../../models/startup/configuration.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IRequest, EMethod, } from '../../models/startup/configuration.model';
import { HttpcallService } from '../httpconfiguration/httpcall.service';
import { ConfigurationsetupService } from '../startup/configurationsetup.service';
import { ServiceRequest } from '../../service-resource.constant';

@Injectable({
  providedIn: 'root'
})
export class ResourceRequestService {

  constructor(private config: ConfigurationsetupService,
    private serviceRequest: HttpcallService) { }

  claimResource(request: IRequest): Observable<any> {
    const server = this.getServer(ServiceRequest.CLAIMSERVER, this.config.configservice);
    request.url = server + '/' + request.url;
    return this.resourceRequest(request);
  }

  utilityResource(request: IRequest, allowOverideServer = false): Observable<any> {
    if (!allowOverideServer) {
      const server = this.getServer(ServiceRequest.UTITILTYSERVER, this.config.configservice);
      request.url = server + '/' + request.url;
    }
    return this.resourceRequest(request);
  }

  workFlowResource(request: IRequest, allowOverideServer = false): Observable<any> {
    if (!allowOverideServer) {
      const server = this.getServer(ServiceRequest.WORKFLOW, this.config.configservice);
      request.url = server + '/' + request.url;
    }
    return this.resourceRequest(request);
  }

  codesResource(request: IRequest): Observable<any> {
    const server = this.getServer(ServiceRequest.CODESERVER, this.config.configservice);
    request.url = server + '/' + request.url;
    return this.resourceRequest(request);
  }

  userResource(request: IRequest): Observable<any> {
    const server = this.getServer(ServiceRequest.USERSERVER, this.config.configservice);
    request.url = server + '/' + request.url;
    return this.resourceRequest(request);
  }

  multiLingualResource(request: IRequest): Observable<any> {
    const server = this.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice);
    request.url = server + '/' + request.url;
    return this.resourceRequest(request);
  }

  claimAPIResource(request: IRequest): Observable<any> {
    const server = this.getServer(ServiceRequest.RMASERVER, this.config.configservice);
    request.url = server + '/' + request.url;
    return this.resourceRequest(request);
  }

  createClaimAPIPath(href: string): string {
    return this.getServer(ServiceRequest.RMASERVER, this.config.configservice) + '/' + href;
  }

  createClaimPath(href: string): string {
    return this.getServer(ServiceRequest.CLAIMSERVER, this.config.configservice) + '/' + href;
  }

  createUserPath(href: string): string {
    return this.getServer(ServiceRequest.USERSERVER, this.config.configservice) + '/' + href;
  }


  createCodePath(href: string): string {
    return this.getServer(ServiceRequest.CODESERVER, this.config.configservice) + '/' + href;
  }

  createUtiltyPath(href: string): string {
    return this.getServer(ServiceRequest.UTITILTYSERVER, this.config.configservice) + '/' + href;
  }

  createResourcePath(href: string): string {
    return this.getServer(ServiceRequest.RESOURCESERVER, this.config.configservice) + '/' + href;
  }

  createWorkFlowPath(href: string): string {
    return this.getServer(ServiceRequest.WORKFLOW, this.config.configservice) + '/' + href;
  }
  
  createEnitiyPath(href: string): string {
    return this.getServer(ServiceRequest.ENTITYSERVER, this.config.configservice) + '/' + href;
  }
  
  private resourceRequest(request: IRequest): Observable<any> {

    switch (request.methodtype) {
      case EMethod.GET:
        return this.serviceRequest.get(request.url, request.params);
        break;
      case EMethod.PATCH:
        return this.serviceRequest.patch(request.url, request.body);
        break;
      case EMethod.PUT:
        return this.serviceRequest.put(request.url, request.body);
        break;
      case EMethod.POST:
        return this.serviceRequest.post(request.url, request.body, request.params);
      case EMethod.DELETE:
        return this.serviceRequest.delete(request.url);
        break;
      default:
        break;
    }
  }

  private getServer(serviceRequest: ServiceRequest, config: IConfig) {
    let server = '';
    server = config.SERVER[serviceRequest];
    if (server === undefined || server === null) {
      server = config.SERVER[ServiceRequest.CLAIMSROOTURI];
    }
    return server;
  }
}
