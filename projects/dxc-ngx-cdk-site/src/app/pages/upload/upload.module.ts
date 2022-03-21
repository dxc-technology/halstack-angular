import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcUploadModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
  DxcAlertModule,
  DxcLinkModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { UploadComponent } from "./upload.component";
import { UploadTablePropertiesComponent } from "../../components/examples/upload/properties/upload-table-properties.component";
import { UploadExampleComponent } from "../../components/examples/upload/upload-example/upload-example.component";
import { UploadImportComponent } from "../../components/examples/upload/upload-import/upload-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { UploadApiComponent } from "../../components/examples/upload/upload-api/upload-api.component";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    UploadComponent,
    UploadTablePropertiesComponent,
    UploadExampleComponent,
    UploadImportComponent,
    UploadApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcUploadModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule,
    DxcAlertModule,
    DxcLinkModule,
  ],
  exports: [
    UploadComponent,
    UploadTablePropertiesComponent,
    UploadExampleComponent,
    UploadImportComponent,
    UploadApiComponent,
  ],
})
export class UploadModule {}
