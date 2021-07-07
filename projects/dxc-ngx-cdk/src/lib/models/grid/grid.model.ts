import { HttpParams } from '@angular/common/http';
import { IRequest } from '../startup/configuration.model';

export class Environment {

}


export enum EPaging {
  FIRST,
  PREVIOUS,
  NEXT,
  LAST,
  MOVETO
}

export interface IEventResponse {
  eventtype: EventType;
  cell?: any;
  data?: any;
}

export interface IEventRequest {
  eventtype: EventType;
  gridConfiguration: IRequest;
}

export enum EventType {
  RELOAD,
  SELECTION,
  CLICK
}

export interface IResource {
  title: string;
  refresh: string;
  setting: string;
  save: string;
  edit: string;
  reload: string;
  hideshow: string;
  pdf: string;
  excel: string;
  columneditlabel: string;
  columneditsave: string;
  columndisplaylabel: string;
  columndisplaysave: string;
}

export enum RowSelectionType {
  SINGLE = 'single',
  MULTI = 'multiple'
}

export const DefaultColumnSize = 3;