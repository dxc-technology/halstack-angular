import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsetTableComponent } from './resultset-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcResultsetTableModule,DxcButtonModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { ResultsetTableSimpleComponent } from '../../components/examples/resultset-table/resultset-table-simple/resultset-table-simple.component';
import { ResultsetTableExampleComponent } from '../../components/examples/resultset-table/resultset-table-example/resultset-table-example.component';
import { ResultsetTablePropertiesComponent } from '../../components/examples/resultset-table/properties/resultset-table-properties/resultset-table-properties.component';

@NgModule({
  declarations: [
    ResultsetTableComponent,
    ResultsetTableSimpleComponent,
    ResultsetTableExampleComponent,
    ResultsetTablePropertiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcResultsetTableModule,
    DxcButtonModule,
    DxcTagModule
  ],
  exports: [
    ResultsetTableComponent,
    ResultsetTableSimpleComponent,
    ResultsetTableExampleComponent,
    ResultsetTablePropertiesComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class ResultsetTableModule { }
