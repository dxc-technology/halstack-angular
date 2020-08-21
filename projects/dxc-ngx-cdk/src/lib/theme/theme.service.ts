import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Theme } from './symbols';
import { defaultTheme, customTheme } from './defaultTheme';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme>();
  theme: Theme;
  count = 0;

  constructor() {
    this.setDefaultTheme(customTheme);
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
          for(const token in this.theme.properties[key]){
            if(theme.properties[key].hasOwnProperty(token) && !defaultTheme.properties[key][token]){
              this.theme.properties[key][token] = theme.properties[key][token];
            }
          }
        }
      }
    }
    this.themeChange.emit(this.theme);
  }

  private setDefaultTheme(newTheme: Theme) {
    this.theme = newTheme;
    for(const key in defaultTheme.properties){
      if(this.theme.properties.hasOwnProperty(key)){
        for(const token in defaultTheme.properties[key]){
          this.theme.properties[key][token] = defaultTheme.properties[key][token];
        }
      }
      else{
        this.theme.properties[key] = defaultTheme.properties[key];
      }

    }
    this.themeChange.emit(this.theme);
  }

}
