import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleViewerComponent } from "src/app/components/example-viewer/example-viewer.component";
import { NumberComponent } from "./number.component";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcChipModule,
  DxcHeadingModule,
  DxcLinkModule,
  DxcNumberInputModule,
  DxcTableModule,
  DxcTagModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "src/app/components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "src/app/components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "src/app/components/color-preview/color-preview.module";
import { NumberApiComponent } from "src/app/components/examples/number/number-api/number-api.component";
import { NumberExampleComponent } from "src/app/components/examples/number/number-example/number-example.component";
import { NumberImportComponent } from "src/app/components/examples/number/number-import/number-import.component";
import { NumberPropertiesComponent } from "src/app/components/examples/number/number-properties/number-properties.component";
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    NumberComponent,
    NumberApiComponent,
    NumberExampleComponent,
    NumberImportComponent,
    NumberPropertiesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcNumberInputModule,
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
    NumberComponent,
    NumberApiComponent,
    NumberExampleComponent,
    NumberImportComponent,
    NumberPropertiesComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class NumberModule {}