import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleGroupService {

  constructor() { }

  public selected: BehaviorSubject<any> = new BehaviorSubject(null);
  
  public values: BehaviorSubject<Array<any>> = new BehaviorSubject(null);

  public setValues(newValues): void {
    this.values.next(newValues);
  }

  public setSelected(selected): void {
    this.selected.next(selected);
  }
}
