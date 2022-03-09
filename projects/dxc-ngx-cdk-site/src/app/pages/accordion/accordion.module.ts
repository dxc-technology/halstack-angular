import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AccordionComponent } from "./accordion.component";
import {
  DxcTableModule,
  DxcAccordionModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { AccordionTablePropertiesComponent } from "../../components/examples/accordion/properties/accordion-table-properties/accordion-table-properties.component";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { AccordionImportComponent } from "../../components/examples/accordion/accordion-import/accordion-import.component";

import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { AccordionApiComponent } from "../../components/examples/accordion/accordion-api/accordion-api.component";
import { AccordionExampleComponent } from "../../components/examples/accordion/accordion-example/accordion-example.component";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionExampleComponent,
    AccordionTablePropertiesComponent,
    AccordionImportComponent,
    AccordionApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcAccordionModule,
    CodesandboxViewerModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule,
  ],
  exports: [
    AccordionComponent,
    AccordionTablePropertiesComponent,
    AccordionImportComponent,
    AccordionApiComponent,
  ],
})
export class AccordionModule {}
