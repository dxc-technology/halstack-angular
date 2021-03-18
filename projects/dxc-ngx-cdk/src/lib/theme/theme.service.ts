import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<any>();
  theme: any = {};

  constructor() {}

  getTheme() {
    return this.theme;
  }

  registerTheme(theme: any) {
    this.theme = theme;
    this.themeChange.emit(theme);
  }
}
