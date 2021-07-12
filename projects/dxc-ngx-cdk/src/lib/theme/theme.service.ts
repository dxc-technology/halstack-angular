import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<any>();
  themeAdvanceChange = new EventEmitter<any>();

  theme: any = {};
  advancedTheme: any = {};

  constructor() {}

  getTheme() {
    return this.theme;
  }

  registerTheme(theme: any) {
    this.theme = theme;
    this.themeChange.emit(theme);
  }

  registerAdvancedTheme(advancedTheme: any) {
    this.advancedTheme = advancedTheme;
    this.themeAdvanceChange.emit(advancedTheme);
  }
}
