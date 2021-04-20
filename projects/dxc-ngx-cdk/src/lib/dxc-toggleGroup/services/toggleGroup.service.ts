import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleGroupService {

  constructor() { }

  public selected: BehaviorSubject<any> = new BehaviorSubject(null);
  public values: BehaviorSubject<Array<any>> = new BehaviorSubject(null);
  public tabIndexValue: BehaviorSubject<any> = new BehaviorSubject(0);

  public setValues(newValues): void {
    this.values.next(newValues);
  }

  public setSelected(selected): void {
    this.selected.next(selected);
  }

  public setTabIndexValue(tabindex): void {
    this.tabIndexValue.next(tabindex);
  }
}
