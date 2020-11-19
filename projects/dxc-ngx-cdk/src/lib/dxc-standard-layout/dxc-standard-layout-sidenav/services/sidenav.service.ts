import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  private _isShown: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isMenuShown: Observable<boolean> = this._isShown.asObservable();

  private _isPushMode: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isPushMode: Observable<boolean> = this._isPushMode.asObservable();

  public showMenu(state: boolean): void {
    this._isShown.next(state);
  }

  public setPushMode(): void {
    this._isPushMode.next(true);
  }
}
