import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTableModule, DxcDropdownModule,DxcTagModule, DxcChipModule } from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { DropdownTablePropertiesComponent } from "src/app/components/examples/dropdown/properties/dropdown-table-properties.component";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { DropdownExampleComponent } from "../../components/examples/dropdown/dropwdown-example/dropdown-example.component";
import { DropdownDefaultComponent } from "../../components/examples/dropdown/dropdown-default/dropdown-default.component";
import { DropdownIconsComponent } from "../../components/examples/dropdown/dropdown-icons/dropdown-icons.component";
import { DropdownComponent } from "./dropdown.component";
import { DropdownImportComponent } from '../../components/examples/dropdown/dropdown-import/dropdown-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { DropdownHoverComponent } from '../../components/examples/dropdown/dropdown-hover/dropdown-hover.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { DropdownThemeComponent } from '../../components/examples/dropdown/dropdown-theme/dropdown-theme.component';
import { DropdownApiComponent } from '../../components/examples/dropdown/dropdown-api/dropdown-api.component';
import { DxcHeadingModule } from '../../../../../dxc-ngx-cdk/src/lib/dxc-heading/dxc-heading.module';

@NgModule({
  declarations: [
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DropdownDefaultComponent,
    DropdownIconsComponent,
    DropdownComponent,
    DropdownImportComponent,
    DropdownHoverComponent,
    DropdownApiComponent,
    DropdownThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcDropdownModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DropdownDefaultComponent,
    DropdownIconsComponent,
    DropdownComponent,
    DropdownImportComponent,
    DropdownHoverComponent,
    DropdownApiComponent,
    DropdownThemeComponent
  ],
  entryComponents: [ExampleViewerComponent]
})
export class DropdownModule {}
