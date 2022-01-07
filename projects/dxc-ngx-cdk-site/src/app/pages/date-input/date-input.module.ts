import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DateInputApiComponent } from "src/app/components/examples/date-input/date-api/date-api.component";
import { DateInputExampleComponent } from "src/app/components/examples/date-input/date-example/date-example.component";
import { DateInputImportComponent } from "src/app/components/examples/date-input/date-import/date-import.component";
import { DateInputPropertiesComponent } from "src/app/components/examples/date-input/date-properties/date-properties.component";
import { DateInputComponent } from "./date-input.component";
import { BrowserModule } from "@angular/platform-browser";
import { DxcChipModule, DxcHeadingModule, DxcLinkModule, DxcTextInputModule, DxcTableModule, DxcTagModule } from "@dxc-technology/halstack-angular";
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
    DateInputComponent,
    DateInputApiComponent,
    DateInputExampleComponent,
    DateInputImportComponent,
    DateInputPropertiesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcTextInputModule,
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
    DateInputComponent,
    DateInputApiComponent,
    DateInputExampleComponent,
    DateInputImportComponent,
    DateInputPropertiesComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class DateInputModule {}
