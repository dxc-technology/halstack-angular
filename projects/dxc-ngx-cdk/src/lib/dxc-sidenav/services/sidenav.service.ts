import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  public tabIndexValue: BehaviorSubject<any> = new BehaviorSubject(0);
  
  public setTabIndexValue(tabindex): void {
    this.tabIndexValue.next(tabindex);
  }
}
