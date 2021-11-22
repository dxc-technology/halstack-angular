import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  public selectedValues: BehaviorSubject<any> = new BehaviorSubject(null);
  public visualFocused: BehaviorSubject<number> = new BehaviorSubject(-1);

  public setSelectedValues(newValues): void {
    this.selectedValues.next(newValues);
  }

  public setVisualFocused(selected): void {
    this.visualFocused.next(selected);
  }

  public getSizeSelectedValues(){
      if(this.selectedValues.getValue() != null && this.selectedValues.getValue() != undefined){
        return this.selectedValues.getValue().length;
      }
      return 0;
  }
}
