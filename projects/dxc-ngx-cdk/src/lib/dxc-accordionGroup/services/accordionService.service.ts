import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DxcAccordionComponent } from '../../dxc-accordion/dxc-accordion.component';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  constructor() { }

  private _accordionActive: BehaviorSubject<DxcAccordionComponent> = new BehaviorSubject(null);
  public accordionActive: Observable<DxcAccordionComponent> = this._accordionActive.asObservable();

  public setAccordionActive(accordion: DxcAccordionComponent): void {
    this._accordionActive.next(accordion);
  }

}