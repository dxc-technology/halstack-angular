import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SidenavComponent } from "./sidenav.component";
import {
  DxcSideNavModule,
  DxcTableModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
  DxcLinkModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { SidenavTablePropertiesComponent } from "../../components/examples/sidenav/properties/sidenav-table-properties/sidenav-table-properties.component";
import { SidenavExampleComponent } from "../../components/examples/sidenav/sidenav-example/sidenav-example.component";
import { SidenavImportComponent } from "../../components/examples/sidenav/sidenav-import/sidenav-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { SidenavApiComponent } from "../../components/examples/sidenav/sidenav-api/sidenav-api.component";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavExampleComponent,
    SidenavTablePropertiesComponent,
    SidenavImportComponent,
    SidenavApiComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DxcSideNavModule,
    TabbedSectionModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    CodesandboxViewerModule,
    DxcHeadingModule,
    DxcLinkModule,
    StatusTagModule,
  ],
  exports: [
    SidenavComponent,
    SidenavExampleComponent,
    SidenavTablePropertiesComponent,
    SidenavImportComponent,
    SidenavApiComponent,
  ],
})
export class SidenavModule {}
