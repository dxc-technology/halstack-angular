import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {
  DxcTableModule,
  DXCInputTextModule,
  DxcLinkModule,
  DxcTagModule
} from "@diaas/dxc-ngx-cdk";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { AutocompleteComponent } from "./autocomplete.component";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { AutocompleteAsyncControlledComponent } from '../../components/examples/autocomplete/autocomplete-asynchronous-controlled/autocomplete-asynchronous-controlled.component';
import { AutocompleteAsyncUncontrolledComponent } from '../../components/examples/autocomplete/autocomplete-asynchronous-uncontrolled/autocomplete-asynchronous-uncontrolled.component';
import { AutocompleteDarkComponent } from '../../components/examples/autocomplete/autocomplete-dark/autocomplete-dark.component';
import { AutocompleteExampleComponent } from "../../components/examples/autocomplete/autocomplete-example/autocomplete-example.component";
import { AutocompleteSyncControlledComponent } from "../../components/examples/autocomplete/autocomplete-synchronous-controlled/autocomplete-synchronous-controlled.component";
import { AutocompleteSyncUncontrolledComponent } from "../../components/examples/autocomplete/autocomplete-synchronous-uncontrolled/autocomplete-synchronous-uncontrolled.component";
import { AutocompleteUsageComponent } from "../../components/examples/autocomplete/autocomplete-usage/autocomplete-usage.component";
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';

@NgModule({
  declarations: [
    AutocompleteComponent,
    AutocompleteAsyncControlledComponent,
    AutocompleteAsyncUncontrolledComponent,
    AutocompleteDarkComponent,
    AutocompleteExampleComponent,
    AutocompleteSyncControlledComponent,
    AutocompleteSyncUncontrolledComponent,
    AutocompleteUsageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DXCInputTextModule,
    ExampleViewerModule,
    DxcLinkModule,
    CodePlaygroundModule,
    DxcTagModule
  ],
  exports: [
    AutocompleteComponent,
    AutocompleteAsyncControlledComponent,
    AutocompleteAsyncUncontrolledComponent,
    AutocompleteDarkComponent,
    AutocompleteExampleComponent,
    AutocompleteSyncControlledComponent,
    AutocompleteSyncUncontrolledComponent,
    AutocompleteUsageComponent
  ],
  entryComponents: [ExampleViewerComponent]
})
export class AutocompleteModule {}
