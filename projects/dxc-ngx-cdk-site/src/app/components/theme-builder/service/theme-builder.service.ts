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
  changeCustomThemeProperty$ = new BehaviorSubject(null);

  currentThemeComponent$ = new BehaviorSubject(null);

  themeBuilderComponent$ = new BehaviorSubject<ThemeBuilderContext>(null);

  constructor() {}

  selectThemeBuilderComponent = (name: string, component: any) => {
    this.themeBuilderComponent$.next({ name, component });
  };

  onChangeThemeComponent = (component: any, schema: any) => {
    this.currentThemeComponent$.next({ component, schema });
  };

  onChangeCustomThemeProperty = (propertyName: string, propertyValue: string) =>
    this.changeCustomThemeProperty$.next({ propertyName, propertyValue });

  destroyChangeCustomThemeProperty = () =>
    this.changeCustomThemeProperty$.unsubscribe();

  destroyCurrentThemeComponent = () =>
    this.currentThemeComponent$.unsubscribe();

  destroyThemeBuilderComponent = () =>
    this.themeBuilderComponent$.unsubscribe();
}
