import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface ThemeBuilderContext {
  component: any;
  name: string;
}


@Injectable({
  providedIn: "root",
})
export class ThemeBuilderService {
  changeCustomTheme$ = new BehaviorSubject(null);

  currentThemeComponent$ = new BehaviorSubject(null);

  themeBuilderComponent$ = new BehaviorSubject<ThemeBuilderContext>(null);

  constructor() {}

  selectThemeBuilderComponent = (name: string, component: any) => {
    this.themeBuilderComponent$.next({name, component});
  };


  onChangeThemeComponent = (component: any, schema: any) => {
    this.currentThemeComponent$.next({component, schema});
  };

  onChangeCustomTheme = (propertyName: string, propertyValue: string) =>
    this.changeCustomTheme$.next({ propertyName, propertyValue });

}
