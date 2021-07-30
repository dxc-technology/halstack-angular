import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';

@Injectable(
  {
    providedIn: 'any'
  }
)
export class BackgroundProviderService {

  $changeColor = new Subject();

  constructor() {}

  changeBackgroundColor(color) {
    this.$changeColor.next(color);
  }
}
