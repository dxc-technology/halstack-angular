import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Theme } from './symbols';
import { defaultTheme } from './defaultTheme';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme>();
  theme: Theme;
  count = 0;

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
      for(const key in this.theme.properties){
        if(theme.properties.hasOwnProperty(key)){
          for(const component in this.theme.properties[key]){
            if(theme.properties[key].hasOwnProperty(component)){
              this.theme.properties[key][component] = theme.properties[key][component];
            }
          }
        }
      }
    }
    else{
      this.theme = theme;
    }
    this.themeChange.emit(this.theme);
  }

}
