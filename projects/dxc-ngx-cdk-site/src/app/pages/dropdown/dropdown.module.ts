import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcDropdownModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { DropdownTablePropertiesComponent } from "../../components/examples/dropdown/properties/dropdown-table-properties.component";
import { DropdownExampleComponent } from "../../components/examples/dropdown/dropwdown-example/dropdown-example.component";
import { DropdownComponent } from "./dropdown.component";
import { DropdownImportComponent } from "../../components/examples/dropdown/dropdown-import/dropdown-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { DropdownApiComponent } from "../../components/examples/dropdown/dropdown-api/dropdown-api.component";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DropdownComponent,
    DropdownImportComponent,
    DropdownApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcDropdownModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule,
  ],
  exports: [
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DropdownComponent,
    DropdownImportComponent,
    DropdownApiComponent,
  ],
})
export class DropdownModule {}
