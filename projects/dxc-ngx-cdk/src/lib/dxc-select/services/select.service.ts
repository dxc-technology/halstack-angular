import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  /** This value is used when a new option is chosen in a controlled and multiple select */
  public selected: BehaviorSubject<any> = new BehaviorSubject(null);

  public iconPosition: BehaviorSubject<string> = new BehaviorSubject("before");

  public isDarkTheme:boolean = false;

  public isDarkThemeOption: BehaviorSubject<any> = new BehaviorSubject(null);
  
}
