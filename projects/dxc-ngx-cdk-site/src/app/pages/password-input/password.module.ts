import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { PasswordComponent } from "./password.component";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcChipModule,
  DxcHeadingModule,
  DxcLinkModule,
  DxcPasswordInputModule,
  DxcTableModule,
  DxcTagModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { PasswordApiComponent } from "../../components/examples/password-input/password-api/password-api.component";
import { PasswordExampleComponent } from "../../components/examples/password-input/password-example/password-example.component";
import { PasswordImportComponent } from "../../components/examples/password-input/password-import/password-import.component";
import { PasswordPropertiesComponent } from "../../components/examples/password-input/password-properties/password-properties.component";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    PasswordComponent,
    PasswordApiComponent,
    PasswordExampleComponent,
    PasswordImportComponent,
    PasswordPropertiesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcPasswordInputModule,
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
    PasswordComponent,
    PasswordApiComponent,
    PasswordExampleComponent,
    PasswordImportComponent,
    PasswordPropertiesComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class PasswordModule {}
