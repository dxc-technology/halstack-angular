import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class BackgroundProviderService {

  $changeColor = new BehaviorSubject('');

  constructor() {}

  changeBackgroundColor(color) {
    this.$changeColor.next(color);
  }
}
