import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTableModule, DXCDropdownModule,DxcTagModule } from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { DropdownTablePropertiesComponent } from "src/app/components/examples/dropdown/properties/dropdown-table-properties.component";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { DropdownExampleComponent } from "../../components/examples/dropdown/dropwdown-example/dropdown-example.component";
import { DropdownDefaultComponent } from "../../components/examples/dropdown/dropdown-default/dropdown-default.component";
import { DropdownOutlinedComponent } from "../../components/examples/dropdown/dropdown-outlined/dropdown-outlined.component";
import { DropdownIconsComponent } from "../../components/examples/dropdown/dropdown-icons/dropdown-icons.component";
import {DropdownDarkComponent} from "../../components/examples/dropdown/dropdown-dark/dropdown-dark.component";
import { DropdownComponent } from "./dropdown.component";
import { DropdownImportComponent } from '../../components/examples/dropdown/dropdown-import/dropdown-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { DropdownHoverComponent } from '../../components/examples/dropdown/dropdown-hover/dropdown-hover.component';

@NgModule({
  declarations: [
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DropdownDefaultComponent,
    DropdownOutlinedComponent,
    DropdownIconsComponent,
    DropdownDarkComponent,
    DropdownComponent,
    DropdownImportComponent,
    DropdownHoverComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DXCDropdownModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule
  ],
  exports: [
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DropdownDefaultComponent,
    DropdownOutlinedComponent,
    DropdownIconsComponent,
    DropdownDarkComponent,
    DropdownComponent,
    DropdownImportComponent,
    DropdownHoverComponent
  ],
  entryComponents: [ExampleViewerComponent]
})
export class DropdownModule {}
