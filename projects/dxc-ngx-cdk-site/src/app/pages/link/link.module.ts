import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LinkComponent } from "./link.component";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcLinkModule,
  DxcTableModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { LinkExampleComponent } from "../../components/examples/link/link-example/link-example.component";
import { LinkTablePropertiesComponent } from "../../components/examples/link/properties/link-table-properties/link-table-properties.component";
import { LinkImportComponent } from "../../components/examples/link/link-import/link-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { LinkApiComponent } from "../../components/examples/link/link-api/link-api.component";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    LinkComponent,
    LinkExampleComponent,
    LinkTablePropertiesComponent,
    LinkImportComponent,
    LinkApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcLinkModule,
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
    LinkComponent,
    LinkExampleComponent,
    LinkTablePropertiesComponent,
    LinkImportComponent,
    LinkApiComponent,
  ],
})
export class LinkModule {}
