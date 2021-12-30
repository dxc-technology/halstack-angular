import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcPaginatorModule, DxcTableModule,DxcTagModule,DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorComponent } from './paginator.component';
import { PaginatorTablePropertiesComponent } from '../../components/examples/paginator/properties/paginator-table-properties/paginator-table-properties.component';
import { PaginatorExampleComponent } from '../../components/examples/paginator/paginator-example/paginator-example.component';
import { PaginatorImportComponent } from '../../components/examples/paginator/paginator-import/paginator-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { PaginatorApiComponent } from '../../components/examples/paginator/paginator-api/paginator-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    PaginatorComponent,
    PaginatorExampleComponent,
    PaginatorTablePropertiesComponent,
    PaginatorImportComponent,
    PaginatorApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcPaginatorModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule
  ],
  exports: [
    PaginatorComponent,
    PaginatorApiComponent,
  ],
  entryComponents: [
    PaginatorExampleComponent,
    PaginatorTablePropertiesComponent,
    PaginatorImportComponent
  ]
})
export class PaginatorModule { }
