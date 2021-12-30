import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsetTableComponent } from './resultset-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcResultsetTableModule,DxcButtonModule,DxcTagModule, DxcLinkModule,DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ResultsetTableExampleComponent } from '../../components/examples/resultset-table/resultset-table-example/resultset-table-example.component';
import { ResultsetTablePropertiesComponent } from '../../components/examples/resultset-table/properties/resultset-table-properties/resultset-table-properties.component';
import { ResultsetTableImportComponent } from '../../components/examples/resultset-table/resultset-table-import/resultset-table-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ResultsetTableDirectivesComponent } from '../../components/examples/resultset-table/resultset-table-directives/resultset-table-directives.component';
import { ResultsetTableApiComponent } from '../../components/examples/resultset-table/resultset-table-api/resultset-table-api.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    ResultsetTableComponent,
    ResultsetTableExampleComponent,
    ResultsetTablePropertiesComponent,
    ResultsetTableDirectivesComponent,
    ResultsetTableImportComponent,
    ResultsetTableApiComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcResultsetTableModule,
    DxcButtonModule,
    DxcTagModule,
    DxcLinkModule,
    ComponentsSidenavModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule
  ],
  exports: [
    ResultsetTableComponent,
    ResultsetTableExampleComponent,
    ResultsetTablePropertiesComponent,
    ResultsetTableDirectivesComponent,
    ResultsetTableImportComponent,
    ResultsetTableApiComponent
  ]
})
export class ResultsetTableModule { }
