import { LocalStorageService } from '../../services/localstorage/dxc-localstorage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpcallService {

  constructor(private http: HttpClient, private _localStorageService: LocalStorageService) {

  }
  get<T>(url: string, paramsQ?: HttpParams): Observable<T> {
    this.processExecution();
    return this.http.get<T>(url, { params: paramsQ });
  }

  post<T>(url: string, body: any, paramsQ?: HttpParams): Observable<T> {
    this.processExecution();
    return this.http.post<T>(url, body, { params: paramsQ });
  }

  put<T>(url: string, body: any): Observable<T> {
    this.processExecution();
    return this.http.put<T>(url, body);
  }

  delete<T>(url: string): Observable<T> {
    this.processExecution();
    return this.http.delete<T>(url);
  }

  patch<T>(url: string, body: string): Observable<T> {
    this.processExecution();
    return this.http.patch<T>(url, body);
  }

  getWithHeaders<T>(url: string, optionsData?: object): Observable<T> {
    return this.http.get<T>(url, optionsData);
  }

  postWithHeaders<T>(url: string, body: any, optionsData?: object): Observable<T> {
    return this.http.post<T>(url, body, optionsData);
  }

  processExecution = () => {
    if (sessionStorage.getItem('session') != null &&
      (this._localStorageService.get('session') == null ||
        this._localStorageService.get('session') === '')) {
      this._localStorageService.set('session', sessionStorage.getItem('session'));
    }

    if (this._localStorageService.get('session') != null &&
      sessionStorage.getItem('session') == null) {
      //Now we remove localStorage for session if sessionStorage does not have session
      this._localStorageService.remove('session');
    }

    if ((this._localStorageService.get('session') != null && sessionStorage.getItem('session') != null) && (this._localStorageService.get('session') != sessionStorage.getItem('session'))) {
      sessionStorage.setItem('session', this._localStorageService.get('session'));
    }

  }
}
