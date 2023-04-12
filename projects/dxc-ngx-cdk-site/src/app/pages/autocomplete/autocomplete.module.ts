import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DxcInputTextModule,
  DxcLinkModule,
  DxcTagModule,
  DxcChipModule,
  DxcHeadingModule
} from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { AutocompleteComponent } from "./autocomplete.component";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { AutocompleteExampleComponent } from "../../components/examples/autocomplete/autocomplete-example/autocomplete-example.component";
import { AutocompleteUsageComponent } from "../../components/examples/autocomplete/autocomplete-usage/autocomplete-usage.component";
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';

@NgModule({
    declarations: [
        AutocompleteComponent,
        AutocompleteExampleComponent,
        AutocompleteUsageComponent,
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
        DxcHeadingModule
    ],
    exports: [
        AutocompleteComponent,
        AutocompleteExampleComponent,
        AutocompleteUsageComponent,
    ]
})
export class AutocompleteModule { }
