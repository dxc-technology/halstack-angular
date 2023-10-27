//import { IRequest } from './configuration.model';
import { HttpParams, HttpHeaders  } from '@angular/common/http';

export interface IFileUploadRequest {
  uploadRequest: IRequest, 
  uploadChunkRequest: IRequest,
  uploadCompleteRequest: IRequest,
  removeRequest: IRequest,
  uploadIdRequest: IRequest
}

export interface IEventResponse {
  eventType: EventType;
}

export enum EventType {
  PREUPLOAD = "PREUPLOAD",
  UPLOAD = "UPLOAD",
  POSTUPLOAD = "POSTUPLOAD"
}

export interface IRequest {
  url: string;
  methodType: EMethod;
  params?: HttpParams;
  body?: any;
  serverSideFilter?: boolean;
  headers?: HttpHeaders;
}

export declare enum EMethod {
  GET = 0,
  POST = 1,
  PATCH = 2,
  PUT = 3,
  DELETE = 4
}