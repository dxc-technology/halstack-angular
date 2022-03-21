import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcInputTextModule,
  DxcLinkModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
  DxcAlertModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { InputTextComponent } from "./input-text.component";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { InputTextPropertiesComponent } from "../../components/examples/input-text/input-text-properties/input-text-properties.component";
import { InputTextExampleComponent } from "../../components/examples/input-text/input-text-example/input-text-example.component";
import { InputTextImportComponent } from "../../components/examples/input-text/input-text-import/input-text-import.component";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { InputTextApiComponent } from "../../components/examples/input-text/input-text-api/input-text-api.component";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    InputTextComponent,
    InputTextExampleComponent,
    InputTextPropertiesComponent,
    InputTextImportComponent,
    InputTextApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcInputTextModule,
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
    DxcAlertModule,
    DxcLinkModule,
  ],
  exports: [
    InputTextComponent,
    InputTextExampleComponent,
    InputTextPropertiesComponent,
    InputTextImportComponent,
    InputTextApiComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class InputTextModule {}
