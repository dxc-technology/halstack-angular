import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DateInputApiComponent } from "../../components/examples/date-input/date-api/date-api.component";
import { DateInputExampleComponent } from "../../components/examples/date-input/date-example/date-example.component";
import { DateInputImportComponent } from "../../components/examples/date-input/date-import/date-import.component";
import { DateInputPropertiesComponent } from "../../components/examples/date-input/date-properties/date-properties.component";
import { DateInputComponent } from "./date-input.component";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcChipModule,
  DxcHeadingModule,
  DxcLinkModule,
  DxcTextInputModule,
  DxcTableModule,
  DxcTagModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

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
    StatusTagModule,
  ],
  exports: [
    DateInputComponent,
    DateInputApiComponent,
    DateInputExampleComponent,
    DateInputImportComponent,
    DateInputPropertiesComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class DateInputModule {}
