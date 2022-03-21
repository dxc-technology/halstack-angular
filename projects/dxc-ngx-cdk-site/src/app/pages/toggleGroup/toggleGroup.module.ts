import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcToggleGroupModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { ToggleGroupComponent } from "./toggleGroup.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ToggleGroupExampleComponent } from "../../components/examples/toggleGroup/toggleGroup-example/toggleGroup-example.component";
import { ToggleGroupApiComponent } from "../../components/examples/toggleGroup/toggleGroup-api/toggleGroup-api.component";
import { ToggleGroupTablePropertiesComponent } from "../../components/examples/toggleGroup/properties/toggleGroup-table-properties/toggleGroup-table-properties.component";
import { ToggleGroupImportComponent } from "../../components/examples/toggleGroup/toggleGroup-import/toggleGroup-import.component";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    ToggleGroupApiComponent,
    ToggleGroupImportComponent,
    ToggleGroupTablePropertiesComponent,
    ToggleGroupComponent,
    ToggleGroupExampleComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcToggleGroupModule,
    ExampleViewerModule,
    CodePlaygroundModule,
    CodesandboxViewerModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule,
  ],
  exports: [
    ToggleGroupApiComponent,
    ToggleGroupImportComponent,
    ToggleGroupTablePropertiesComponent,
    ToggleGroupComponent,
    ToggleGroupExampleComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class ToggleGroupModule {}
