import { Injectable } from '@angular/core';
import { truncate } from 'fs';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  private _isShown: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public isMenuShown: Observable<boolean> = this._isShown.asObservable();

  private _isPushMode: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public isPushMode: Observable<boolean> = this._isPushMode.asObservable();

  public showMenu(state: boolean): void {
    this._isShown.next(state);
  }

  public setPushMode(isPushMode): void {
    this._isPushMode.next(isPushMode);
  }
}
