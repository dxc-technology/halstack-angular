import { NgModule } from "@angular/core";
import {
  DxcButtonModule,
  DxcTagModule,
  DxcChipModule,
  DxcLinkModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";

import { ApplicationLayoutComponent } from "./app-layout.component";
import { ApplicationLayoutApiComponent } from "../../components/examples/layout/app-layout-api/app-layout-api.component";
import { ApplicationLayoutExamplesComponent } from "../../components/examples/layout/app-layout-examples/app-layout-examples.component";

import { BrowserModule } from "@angular/platform-browser";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";

import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";
import { DxcTableModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [
    ApplicationLayoutComponent,
    ApplicationLayoutApiComponent,
    ApplicationLayoutExamplesComponent,
  ],
  imports: [
    BrowserModule,
    DxcButtonModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcLinkModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule,
  ],
  exports: [ApplicationLayoutApiComponent, ApplicationLayoutExamplesComponent],
  entryComponents: [],
})
export class ApplicationLayoutModule {}
