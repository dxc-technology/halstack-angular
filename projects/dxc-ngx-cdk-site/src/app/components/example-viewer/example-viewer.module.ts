import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MonacoEditorModule } from "ngx-monaco-editor";
import { DynamicModule } from "../dynamic-component/dynamic.module";
import { ExampleViewerComponent } from "./example-viewer.component";
import { DynamicComponentComponent } from "../dynamic-component/dynamic-component.component";
import { CodePlaygroundModule } from "../code-playground/code-playground.module";

@NgModule({
  declarations: [ExampleViewerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatTabsModule,
    DynamicModule,
    CodePlaygroundModule,
    MonacoEditorModule.forRoot(), // use forRoot() in main app module only.
  ],
  exports: [ExampleViewerComponent],
  entryComponents: [DynamicComponentComponent],
})
export class ExampleViewerModule {}
