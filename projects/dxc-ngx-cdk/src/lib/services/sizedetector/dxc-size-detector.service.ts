import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { SCREEN_SIZE } from './dxc-size-detector.enum';

@Injectable()
export class DxcResizeService {

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: BehaviorSubject<SCREEN_SIZE>;

  constructor() {
    this.resizeSubject = new BehaviorSubject(SCREEN_SIZE.MD);
  }

  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }
}
