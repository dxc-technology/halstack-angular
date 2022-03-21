import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
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
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { NumberApiComponent } from "../../components/examples/number-input/number-api/number-api.component";
import { NumberExampleComponent } from "../../components/examples/number-input/number-example/number-example.component";
import { NumberImportComponent } from "../../components/examples/number-input/number-import/number-import.component";
import { NumberPropertiesComponent } from "../../components/examples/number-input/number-properties/number-properties.component";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

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
    StatusTagModule,
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
