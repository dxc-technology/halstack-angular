import { ServiceRequest } from './../../service-resource.constant';
import { Injectable } from '@angular/core';
import { IConfig } from '../../models/startup/configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsetupService {
  configservice: IConfig;
  constructor() { }

  config = (config?: IConfig): IConfig => {
    this.configservice = config;
    return this.configservice;
  }

  getServer(serviceRequest: ServiceRequest, config: IConfig) {
    let server = '';
    server = config.SERVER[serviceRequest];
    if (server === undefined || server === null) {
      server = config.SERVER[ServiceRequest.CLAIMSROOTURI];
    }
    return server;
  }
}
