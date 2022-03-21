import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcButtonModule,
  DxcFileInputModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { FileInputPropertiesComponent } from "../../components/examples/file-input/file-input-properties/file-input-properties.component";
import { FileInputExampleComponent } from "../../components/examples/file-input/file-input-example/file-input-example.component";
import { FileInputComponent } from "./file-input.component";
import { FileInputImportComponent } from "../../components/examples/file-input/file-input-import/file-input-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { FileInputApiComponent } from "../../components/examples/file-input/file-input-api/file-input-api.component";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    FileInputPropertiesComponent,
    FileInputExampleComponent,
    FileInputComponent,
    FileInputImportComponent,
    FileInputApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcFileInputModule,
    DxcButtonModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    CodesandboxViewerModule,
    DxcHeadingModule,
    StatusTagModule,
  ],
  exports: [
    FileInputPropertiesComponent,
    FileInputExampleComponent,
    FileInputComponent,
    FileInputImportComponent,
    FileInputApiComponent,
  ],
})
export class FileInputModule {}
