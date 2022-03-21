import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectApiComponent } from "../../components/examples/select/select-api/select-api.component";
import { SelectExampleComponent } from "../../components/examples/select/select-example/select-example.component";
import { SelectImportComponent } from "../../components/examples/select/select-import/select-import.component";
import { SelectPropertiesComponent } from "../../components/examples/select/select-properties/select-properties.component";
import { SelectComponent } from "./select.component";
import {
  DxcChipModule,
  DxcHeadingModule,
  DxcLinkModule,
  DxcTableModule,
  DxcTagModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    SelectComponent,
    SelectApiComponent,
    SelectExampleComponent,
    SelectImportComponent,
    SelectPropertiesComponent,
  ],
  imports: [
    CommonModule,
    DxcTableModule,
    TabbedSectionModule,
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
    SelectComponent,
    SelectApiComponent,
    SelectExampleComponent,
    SelectImportComponent,
    SelectPropertiesComponent,
  ],
})
export class SelectModule {}
