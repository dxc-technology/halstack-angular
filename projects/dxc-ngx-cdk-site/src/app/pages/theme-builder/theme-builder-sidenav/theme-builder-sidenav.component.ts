import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ThemeBuilderService } from "../../../components/theme-builder/service/theme-builder.service";
import { AccordionPreviewComponent } from "../previews/accordion-preview/accordion-preview.component";
import getBuilderPreviewComponentByName from "./model/preview-components-map";

import advancedTheme from "./../themes/AdvancedTheme.json";
import simpleTheme from "./../themes/DefaultTheme.json";
import advancedSchema from "./../themes/schemas/Advanced.schema.json";
import simpleSchema from "./../themes/schemas/Advanced.schema.json";

@Component({
  selector: "theme-builder-sidenav",
  templateUrl: "./theme-builder-sidenav.component.html",
  styleUrls: ["./theme-builder-sidenav.component.scss"],
})
export class ThemeBuilderSidenavComponent implements OnInit {
  currentTheme: any;

  currentSchemaTheme: any;

  componentMenuItems: Array<string>;

  selectedComponent: string;

  type: string;

  constructor(
    public router: Router,
    private themeBuilderService: ThemeBuilderService
  ) {
    this.currentTheme = simpleTheme;
    this.currentSchemaTheme = simpleSchema;
    this.selectedComponent = 'accordion';
    this.componentMenuItems = this.extractMenuComponentItems(this.currentTheme);
  }

  renderTo(componentName: string) {
    const currentComponent = getBuilderPreviewComponentByName(componentName);
    this.themeBuilderService.selectThemeBuilderComponent(
      currentComponent.name,
      currentComponent.component
    );
    this.selectedComponent = componentName;
    this.themeBuilderService.onChangeThemeComponent(
      this.currentTheme[componentName],
      this.currentSchemaTheme[componentName]
    );
  }

  onThemeTypeChange = ($event) => {
    if ($event === "default") {
      this.currentTheme = simpleTheme;
      this.currentSchemaTheme = simpleSchema;
    } else {
      this.currentTheme = advancedTheme;
      this.currentSchemaTheme = advancedSchema;
    }
    this.componentMenuItems = this.extractMenuComponentItems(this.currentTheme);
    console.log(this.selectedComponent);
    this.themeBuilderService.onChangeThemeComponent(
      this.currentTheme[this.selectedComponent],
      this.currentSchemaTheme[this.selectedComponent]
    );
  };

  ngOnInit() {
    this.themeBuilderService.selectThemeBuilderComponent(
      "accordion",
      AccordionPreviewComponent
    );
    this.themeBuilderService.onChangeThemeComponent(
      this.currentTheme["accordion"],
      this.currentSchemaTheme["accordion"]
    );
  }

  extractMenuComponentItems(items: any): Array<string> {
    return Object.keys(items);
  }
}
