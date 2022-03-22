import { NgModule } from "@angular/core";
import {
  DxcTableModule,
  DxcRadioGroupModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { RadioGroupComponent } from "./radio-group.component";
import { RadioGroupPropertiesComponent } from "../../components/examples/radio-group/properties/radio-group-properties/radio-group-properties.component";
import { RadioGroupImportComponent } from "../../components/examples/radio-group/radio-group-import/radio-group-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { RadioGroupApiComponent } from "../../components/examples/radio-group/radio-group-api/radio-group-api.component";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    RadioGroupComponent,
    RadioGroupPropertiesComponent,
    RadioGroupApiComponent,
    RadioGroupImportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DxcRadioGroupModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodesandboxViewerModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule,
  ],
  exports: [
    RadioGroupComponent,
    RadioGroupPropertiesComponent,
    RadioGroupImportComponent,
    RadioGroupApiComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class RadioGroupModule {}
