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
          for(const token in this.theme.properties[key]){
            if(theme.properties[key].hasOwnProperty(token) && !defaultTheme.properties[key][token]){
              this.theme.properties[key][token] = theme.properties[key][token];
            }
          }
        }
        if(defaultTheme.properties.hasOwnProperty(key)){
          for(const token in defaultTheme.properties[key]){
            this.theme.properties[key][token] = defaultTheme.properties[key][token];
          }
        }
      }
      this.checkSpecialProperty(theme);
    }
    else{
      this.theme = theme;
    }
    this.themeChange.emit(this.theme);
  }

  checkSpecialProperty(theme){
    if(theme.properties["select"].hasOwnProperty("selectedOptionBackgroundColor")){
      this.theme.properties["select"]["hoverOptionBackgroundColor"] = theme.properties["select"]["selectedOptionBackgroundColor"] + "57";
    }
  }

}
