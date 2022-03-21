import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { TagComponent } from "./tag.component";
import { TagTablePropertiesComponent } from "../../components/examples/tag/properties/tag-table-properties/tag-table-properties.component";
import { TagExampleComponent } from "../../components/examples/tag/tag-example/tag-example.component";
import { TagImportComponent } from "../../components/examples/tag/tag-import/tag-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { TagApiComponent } from "../../components/examples/tag/tag-api/tag-api.component";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    TagComponent,
    TagExampleComponent,
    TagTablePropertiesComponent,
    TagImportComponent,
    TagApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule,
  ],
  exports: [
    TagComponent,
    TagExampleComponent,
    TagTablePropertiesComponent,
    TagImportComponent,
    TagApiComponent,
  ],
})
export class TagModule {}
