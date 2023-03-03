import { IRequest } from './configuration.model';

export interface IfileuploadRequest {
  uploadrequest: IRequest, 
  uploadcompleterequest: IRequest
}

export interface IEventResponse {
  eventtype: EventType;
}

export enum EventType {
  PREUPLOAD = "PREUPLOAD",
  UPLOAD = "UPLOAD",
  POSTUPLOAD = "POSTUPLOAD"
}