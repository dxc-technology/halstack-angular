import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleViewerComponent } from "src/app/components/example-viewer/example-viewer.component";
import { PasswordComponent } from "./password.component";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcChipModule,
  DxcHeadingModule,
  DxcLinkModule,
  DxcPasswordModule,
  DxcTableModule,
  DxcTagModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "src/app/components/codesandbox-viewer/codesandbox-viewer.module";
import { CodePlaygroundModule } from "src/app/components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "src/app/components/color-preview/color-preview.module";
import { PasswordApiComponent } from "src/app/components/examples/password/password-api/password-api.component";
import { PasswordExampleComponent } from "src/app/components/examples/password/password-example/password-example.component";
import { PasswordImportComponent } from "src/app/components/examples/password/password-import/password-import.component";
import { PasswordPropertiesComponent } from "src/app/components/examples/password/password-properties/password-properties.component";
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

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
    DxcPasswordModule,
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
    PasswordComponent,
    PasswordApiComponent,
    PasswordExampleComponent,
    PasswordImportComponent,
    PasswordPropertiesComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class PasswordModule {}
