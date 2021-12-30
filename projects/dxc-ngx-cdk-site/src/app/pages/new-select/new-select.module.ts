import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewSelectApiComponent } from "src/app/components/examples/new-select/select-api/select-api.component";
import { NewSelectExampleComponent } from "src/app/components/examples/new-select/select-example/select-example.component";
import { NewSelectImportComponent } from "src/app/components/examples/new-select/select-import/select-import.component";
import { NewSelectPropertiesComponent } from "src/app/components/examples/new-select/select-properties/select-properties.component";
import { NewSelectComponent } from "./new-select.component";
import { DxcChipModule, DxcHeadingModule, DxcLinkModule, DxcTableModule, DxcTagModule } from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "src/app/components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "src/app/components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "src/app/components/color-preview/color-preview.module";
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    NewSelectComponent,
    NewSelectApiComponent,
    NewSelectExampleComponent,
    NewSelectImportComponent,
    NewSelectPropertiesComponent,
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
    StatusTagModule
  ],
  exports: [
    NewSelectComponent,
    NewSelectApiComponent,
    NewSelectExampleComponent,
    NewSelectImportComponent,
    NewSelectPropertiesComponent,
  ],
})
export class NewSelectModule {}
