import { HttpcallService } from './../services/httpconfiguration/httpcall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DxcCodeEditorService {

  constructor(private callService: HttpcallService) { }
  getData(url: string) {
    return this.callService.get(url);
  }

}
