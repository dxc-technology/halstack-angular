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
      this.checkSpecialProperty(this.theme);
    }
    this.themeChange.emit(this.theme);
  }

  private checkSpecialProperty(theme){
    if(theme.properties["select"].hasOwnProperty("selectedOptionBackgroundColor")){
      this.theme.properties["select"]["hoverOptionBackgroundColor"] = theme.properties["select"]["selectedOptionBackgroundColor"] + "57";
    }
    if(theme.properties["autocomplete"].hasOwnProperty("selectedOptionBackgroundColor")){
      this.theme.properties["autocomplete"]["hoverOptionBackgroundColor"] = theme.properties["autocomplete"]["selectedOptionBackgroundColor"] + "57";
    }
    if(theme.properties["accordion"].hasOwnProperty("arrowColor")){
      this.theme.properties["accordion"]["hoverBackgroundColor"] = theme.properties["accordion"]["arrowColor"] + "57";
    }
    if(theme.properties["dropdown"].hasOwnProperty("dropdownBackgroundColor")){
      this.theme.properties["dropdown"]["hoverBackgroundOption"] = theme.properties["dropdown"]["dropdownBackgroundColor"] + "57";
    }
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
