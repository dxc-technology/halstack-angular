import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { DxcPaginatorModule, DxcTableModule,DxcTagModule } from '@diaas/dxc-ngx-cdk';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorComponent } from './paginator.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { PaginatorTablePropertiesComponent } from '../../components/examples/paginator/properties/paginator-table-properties/paginator-table-properties.component';
import { PaginatorExampleComponent } from '../../components/examples/paginator/paginator-example/paginator-example.component';
import { PaginatorDefaultComponent } from '../../components/examples/paginator/paginator-default/paginator-default.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    PaginatorExampleComponent,
    PaginatorDefaultComponent,
    PaginatorTablePropertiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcPaginatorModule,
    ExampleViewerModule,
    DxcTagModule
  ],
  exports: [
    PaginatorComponent
  ],
  entryComponents: [
    ExampleViewerComponent,
    PaginatorExampleComponent,
    PaginatorDefaultComponent,
    PaginatorTablePropertiesComponent
  ]
})
export class PaginatorModule { }
