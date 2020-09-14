import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { DxcPaginatorModule, DxcTableModule,DxcTagModule,DxcChipModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorComponent } from './paginator.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { PaginatorTablePropertiesComponent } from '../../components/examples/paginator/properties/paginator-table-properties/paginator-table-properties.component';
import { PaginatorExampleComponent } from '../../components/examples/paginator/paginator-example/paginator-example.component';
import { PaginatorDefaultComponent } from '../../components/examples/paginator/paginator-default/paginator-default.component';
import { PaginatorImportComponent } from '../../components/examples/paginator/paginator-import/paginator-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { PaginatorApiComponent } from '../../components/examples/paginator/paginator-api/paginator-api.component';
import { PaginatorThemeComponent } from '../../components/examples/paginator/paginator-theme/paginator-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    PaginatorComponent,
    PaginatorExampleComponent,
    PaginatorDefaultComponent,
    PaginatorTablePropertiesComponent,
    PaginatorImportComponent,
    PaginatorApiComponent,
    PaginatorThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcPaginatorModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule
  ],
  exports: [
    PaginatorComponent,
    PaginatorApiComponent,
    PaginatorThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent,
    PaginatorExampleComponent,
    PaginatorDefaultComponent,
    PaginatorTablePropertiesComponent,
    PaginatorImportComponent
  ]
})
export class PaginatorModule { }
