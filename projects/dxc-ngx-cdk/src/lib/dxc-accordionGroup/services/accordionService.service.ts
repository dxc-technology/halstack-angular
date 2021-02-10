import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  constructor() { }

  public accordionActive: BehaviorSubject<number> = new BehaviorSubject(
    undefined
  );
  
}