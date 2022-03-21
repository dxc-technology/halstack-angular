import { NgModule } from "@angular/core";
import {
  DxcButtonModule,
  DxcTableModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { ButtonComponent } from "./button.component";
import { ButtonExampleComponent } from "../../components/examples/button/button-example/button-example.component";
import { ButtonTablePropertiesComponent } from "../../components/examples/button/properties/button-table-properties/button-table-properties.component";
import { BrowserModule } from "@angular/platform-browser";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ButtonImportComponent } from "../../components/examples/button/button-import/button-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ButtonApiComponent } from "../../components/examples/button/button-api/button-api.component";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonExampleComponent,
    ButtonTablePropertiesComponent,
    ButtonImportComponent,
    ButtonApiComponent,
  ],
  imports: [
    BrowserModule,
    DxcButtonModule,
    TabbedSectionModule,
    CodesandboxViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule,
  ],
  exports: [
    ButtonExampleComponent,
    ButtonTablePropertiesComponent,
    ButtonImportComponent,
    ButtonApiComponent,
  ],
  entryComponents: [],
})
export class ButtonModule {}
