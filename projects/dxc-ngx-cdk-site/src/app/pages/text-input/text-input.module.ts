import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcLinkModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
  DxcTextInputModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { TextInputComponent } from "./text-input.component";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { TextInputApiComponent } from "../../components/examples/text-input/text-input-api/text-input-api.component";
import { TextInputExampleComponent } from "../../components/examples/text-input/text-input-example/text-input-example.component";
import { TextInputImportComponent } from "../../components/examples/text-input/text-input-import/text-input-import.component";
import { TextInputPropertiesComponent } from "../../components/examples/text-input/text-input-properties/text-input-properties.component";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    TextInputComponent,
    TextInputExampleComponent,
    TextInputPropertiesComponent,
    TextInputImportComponent,
    TextInputApiComponent,
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
    TextInputComponent,
    TextInputExampleComponent,
    TextInputPropertiesComponent,
    TextInputImportComponent,
    TextInputApiComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class TextInputModule {}
