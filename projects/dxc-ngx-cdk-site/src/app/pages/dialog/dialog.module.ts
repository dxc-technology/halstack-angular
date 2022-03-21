import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcButtonModule,
  DxcDialogModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { DialogTablePropertiesComponent } from "../../components/examples/dialog/properties/dialog-table-properties.component";
import { DialogExampleComponent } from "../../components/examples/dialog/dialog-example/dialog-example.component";
import { DialogComponent } from "./dialog.component";
import { DialogImportComponent } from "../../components/examples/dialog/dialog-import/dialog-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { DialogApiComponent } from "../../components/examples/dialog/dialog-api/dialog-api.component";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    DialogComponent,
    DialogImportComponent,
    DialogApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcDialogModule,
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
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    DialogComponent,
    DialogImportComponent,
    DialogApiComponent,
  ],
})
export class DialogModule {}
