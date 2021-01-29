import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  public selected: BehaviorSubject<any> = new BehaviorSubject(null);
  
  public setSelected(selected): void {
    this.selected.next(selected);
  }
}
