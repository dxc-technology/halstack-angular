import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { DxcTableModule,DxcTagModule, DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { TableSimpleComponent } from '../../components/examples/table/table-simple/table-simple.component';
import { TableExampleComponent } from '../../components/examples/table/table-example/table-example.component';
import { TablePropertiesComponent } from '../../components/examples/table/properties/table-properties/table-properties.component';
import { TableImportComponent } from '../../components/examples/table/table-import/table-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { TableThemeComponent } from '../../components/examples/table/table-theme/table-theme.component';
import { TableApiComponent } from '../../components/examples/table/table-api/table-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    TableComponent,
    TableExampleComponent,
    TableSimpleComponent,
    TablePropertiesComponent,
    TableImportComponent,
    TableApiComponent,
    TableThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    TableComponent,
    TableExampleComponent,
    TableSimpleComponent,
    TablePropertiesComponent,
    TableImportComponent,
    TableApiComponent,
    TableThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TableModule { }
