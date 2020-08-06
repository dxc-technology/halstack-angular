import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Theme } from './symbols';
import { defaultTheme, customTheme } from './defaultTheme';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme>();
  theme: Theme;
  count = 0;

  constructor() {
    this.registerTheme(customTheme);
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
            if(theme.properties[key].hasOwnProperty(component) && !defaultTheme.properties[key][component]){
              this.theme.properties[key][component] = theme.properties[key][component];
            }
          }
        }
        if(defaultTheme.properties.hasOwnProperty(key)){
          for(const component in defaultTheme.properties[key]){
            this.theme.properties[key][component] = defaultTheme.properties[key][component];
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
