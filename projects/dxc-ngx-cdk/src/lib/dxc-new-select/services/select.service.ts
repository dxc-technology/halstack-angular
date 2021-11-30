import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  public selectedValues: BehaviorSubject<any> = new BehaviorSubject(null);

  public setSelectedValues(newOptions): void {
    this.selectedValues.next(newOptions);
  }

  public getSizeSelectedValues(){
      if(this.selectedValues.getValue() != null && this.selectedValues.getValue() != undefined){
        return this.selectedValues.getValue().length;
      }
      return 0;
  }

  public getSelectedValues(){
    return this.selectedValues.getValue();
}
}
