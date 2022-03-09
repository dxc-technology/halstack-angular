import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import {
  DxcFooterModule,
  DxcTableModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { FooterComponent } from "./footer.component";
import { FooterExampleComponent } from "../../components/examples/footer/footer-example/footer-example.component";
import { FooterTablePropertiesComponent } from "../../components/examples/footer/properties/footer-table-properties/footer-table-properties.component";
import { FooterImportComponent } from "../../components/examples/footer/footer-import/footer-import.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { FooterApiComponent } from "../../components/examples/footer/footer-api/footer-api.component";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    FooterComponent,
    FooterExampleComponent,
    FooterTablePropertiesComponent,
    FooterImportComponent,
    FooterApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DxcFooterModule,
    TabbedSectionModule,
    DxcTableModule,
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
    FooterComponent,
    FooterExampleComponent,
    FooterTablePropertiesComponent,
    FooterImportComponent,
    FooterApiComponent,
  ],
})
export class FooterModule {}
