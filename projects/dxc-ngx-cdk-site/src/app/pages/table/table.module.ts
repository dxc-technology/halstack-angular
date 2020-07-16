import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { DxcTableModule,DxcTagModule } from '@diaas/dxc-ngx-cdk';
import { TableSimpleComponent } from '../../components/examples/table/table-simple/table-simple.component';
import { TableExampleComponent } from '../../components/examples/table/table-example/table-example.component';
import { TablePropertiesComponent } from '../../components/examples/table/properties/table-properties/table-properties.component';

@NgModule({
  declarations: [
    TableComponent,
    TableExampleComponent,
    TableSimpleComponent,
    TablePropertiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTagModule
  ],
  exports: [
    TableComponent,
    TableExampleComponent,
    TableSimpleComponent,
    TablePropertiesComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TableModule { }
