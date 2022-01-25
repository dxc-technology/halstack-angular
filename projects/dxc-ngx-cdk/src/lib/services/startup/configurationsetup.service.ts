import { ServiceRequest } from './../../service-resource.constant';
import { Injectable } from '@angular/core';
import { IConfig } from '../../models/startup/configuration.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsetupService {
  configservice: IConfig;
  private _enableLoader: boolean = true;

  public onConfigLoad = new BehaviorSubject<boolean>(false);

  constructor() { }

  config = (config?: IConfig): IConfig => {
    this.configservice = config;
    setTimeout(() => { this.onConfigLoad.next(true) }, 500);
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

  get enableLoader(): boolean {
    return this._enableLoader;
  }

  set enableLoader(value: boolean) {
    this._enableLoader = value;
  }

}
