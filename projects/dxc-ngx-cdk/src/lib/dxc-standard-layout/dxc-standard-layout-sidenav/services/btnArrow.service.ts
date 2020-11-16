import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class BtnArrowService {

    private _isShown: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public isMenuShown: Observable<boolean> = this._isShown.asObservable();
  
    public showMenu(state: boolean): void {
      this._isShown.next(state);
    }

}
