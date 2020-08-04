import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Theme } from './symbols';
import { defaultTheme } from './defaultTheme';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme>();
  theme: Theme;

  constructor() {
    this.registerTheme(defaultTheme);
  }

  getTheme() {
    return this.theme;
  }

  getProperty(propName: string) {
    return this.theme.properties[propName];
  }

  registerTheme(theme: Theme) {
    if(this.theme !== undefined){
       Object.assign(this.theme.properties, theme.properties);
    }
    else{
      this.theme = theme;
    }
    this.themeChange.emit(this.theme);
  }

}
