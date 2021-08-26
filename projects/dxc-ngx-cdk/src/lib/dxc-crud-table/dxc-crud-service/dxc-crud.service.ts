import { Observable } from 'rxjs';
import { ConfigurationsetupService } from '../../services/startup/configurationsetup.service';
import { HttpcallService } from '../../services/httpconfiguration/httpcall.service';
import { Injectable } from '@angular/core';
import { IRequest, EMethod as MethodType } from '../../models/startup/configuration.model';

@Injectable({
  providedIn: 'root'
})
export class DxcCrudService {

  selectedRow: { [key: string]: Array<Object> } = null;

  constructor(private callService: HttpcallService,
    private configuration: ConfigurationsetupService) { }

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

  saveData(request: IRequest, data): Observable<any> {
    const url = request.url;
    switch (request.methodtype) {
      case MethodType.POST:
        return this.callService.post(url, data, request.params);
        break;
      case MethodType.PATCH:
        return this.callService.patch(url, data);
        break;
      case MethodType.DELETE:
        return this.callService.delete(url);
        break;
      case MethodType.PUT:
        return this.callService.put(url, data);
        break;
    }
  }

  deleteData(request: IRequest, identifier, row): Observable<any> {
    const url = request.url.replace('{' + identifier + '}', row[identifier]);
    return this.callService.delete(url);
  }

  setSelectedRow(gridId: string, row: []) {
    
    // if (row[0].isSelected == true) {
    //   this.selectedRow = this.selectedRow ? this.selectedRow : {};
    //   this.selectedRow[gridId] = this.selectedRow[gridId] ? this.selectedRow[gridId] : [];
    //   this.selectedRow[gridId].push(row);
    // }
  }

  getSelectedRow(gridId: string) {
    if (this.selectedRow && this.selectedRow[gridId]) {
      return this.selectedRow[gridId];
    }
    else {
      return [];
    }
  }


}
