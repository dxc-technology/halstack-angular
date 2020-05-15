import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Theme } from './symbols';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme>();
  theme: Theme;

  constructor() {}

  getTheme() {
    return this.theme;
  }

  getProperty(propName: string) {
    return this.theme.properties[propName];
  }

  registerTheme(theme: Theme) {
    this.theme = theme;
    this.themeChange.emit(this.theme);
  }

}
