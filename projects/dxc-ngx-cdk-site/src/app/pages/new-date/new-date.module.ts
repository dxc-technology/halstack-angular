import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewDateApiComponent } from "src/app/components/examples/new-date/date-api/date-api.component";
import { NewDateExampleComponent } from "src/app/components/examples/new-date/date-example/date-example.component";
import { NewDateImportComponent } from "src/app/components/examples/new-date/date-import/date-import.component";
import { NewDatePropertiesComponent } from "src/app/components/examples/new-date/date-properties/date-properties.component";
import { NewDateComponent } from "./new-date.component";
import { BrowserModule } from "@angular/platform-browser";
import { DxcChipModule, DxcHeadingModule, DxcLinkModule, DxcNewInputTextModule, DxcTableModule, DxcTagModule } from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "src/app/components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "src/app/components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "src/app/components/color-preview/color-preview.module";
import { ExampleViewerComponent } from "src/app/components/example-viewer/example-viewer.component";
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    NewDateComponent,
    NewDateApiComponent,
    NewDateExampleComponent,
    NewDateImportComponent,
    NewDatePropertiesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcNewInputTextModule,
    ExampleViewerModule,
    CodesandboxViewerModule,
    DxcLinkModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    ColorPreviewModule,
    DxcHeadingModule,
    StatusTagModule
  ],
  exports: [
    NewDateComponent,
    NewDateApiComponent,
    NewDateExampleComponent,
    NewDateImportComponent,
    NewDatePropertiesComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class NewDateModule {}
