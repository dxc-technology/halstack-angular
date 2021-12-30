import { NgModule } from "@angular/core";
import {
  DxcTableModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule
} from "@dxc-technology/halstack-angular";
import { ChipComponent } from "./chip.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ChipExampleComponent } from "src/app/components/examples/chip/chip-example/chip-example.component";
import { ChipTablePropertiesComponent } from "src/app/components/examples/chip/properties/box-table-properties/chip-table-properties.component";
import { ChipImportComponent } from "src/app/components/examples/chip/chip-import/chip-import.component";
import { ChipApiComponent } from '../../components/examples/chip/chip-api/chip-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    ChipComponent,
    ChipExampleComponent,
    ChipTablePropertiesComponent,
    ChipImportComponent,
    ChipApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DxcChipModule,
    TabbedSectionModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule
  ],
  exports: [
    ChipComponent,
    ChipExampleComponent,
    ChipTablePropertiesComponent,
    ChipImportComponent,
    ChipApiComponent,
  ]
})
export class ChipModule {}
