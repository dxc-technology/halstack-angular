import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcHeadingModule, DxcTableModule,DxcTagModule,DxcChipModule } from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { HeadingTablePropertiesComponent } from "../../components/examples/heading/properties/heading-table-properties/heading-table-properties.component";
import { HeadingExampleComponent } from '../../components/examples/heading/heading-example/heading-example.component';
import { HeadingImportComponent } from '../../components/examples/heading/heading-import/heading-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { HeadingApiComponent } from '../../components/examples/heading/heading-api/heading-api.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    HeadingComponent,
    HeadingTablePropertiesComponent,
    HeadingExampleComponent,
    HeadingImportComponent,
    HeadingApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcHeadingModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    CodesandboxViewerModule,
    StatusTagModule
  ],
  exports:[
    HeadingComponent,
    HeadingTablePropertiesComponent,
    HeadingExampleComponent,
    HeadingImportComponent,
    HeadingApiComponent,
  ]
})
export class HeadingModule { }
