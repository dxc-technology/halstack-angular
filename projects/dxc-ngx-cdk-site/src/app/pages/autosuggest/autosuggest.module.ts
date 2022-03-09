import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcInputTextModule,
  DxcLinkModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule,
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { ColorPreviewModule } from "../../components/color-preview/color-preview.module";
import { CodesandboxViewerModule } from "../../components/codesandbox-viewer/codesandbox-viewer.module";
import { StatusTagModule } from "../../components/status-tag/status-tag.module";
import { AutosuggestComponent } from "./autosuggest.component";
import { AutosuggestExampleComponent } from "../../components/examples/autosuggest/autosuggest-example/autosuggest-example.component";
import { AutosuggestPropertiesComponent } from "../../components/examples/autosuggest/autosuggest-properties/autosuggest-properties.component";

@NgModule({
  declarations: [
    AutosuggestComponent,
    AutosuggestExampleComponent,
    AutosuggestPropertiesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcInputTextModule,
    ExampleViewerModule,
    CodesandboxViewerModule,
    DxcLinkModule,
    CodePlaygroundModule,
    DxcTagModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule,
  ],
  exports: [
    AutosuggestComponent,
    AutosuggestExampleComponent,
    AutosuggestPropertiesComponent,
  ],
  entryComponents: [ExampleViewerComponent],
})
export class AutosuggestModule {}
