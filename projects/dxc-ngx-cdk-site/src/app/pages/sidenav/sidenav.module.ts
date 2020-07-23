import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SidenavComponent } from './sidenav.component';
import { DxcSideNavModule, DxcTableModule,DxcTagModule } from "@dxc-technology/halstack-angular";

import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';

import { SidenavTablePropertiesComponent } from '../../components/examples/sidenav/properties/sidenav-table-properties/sidenav-table-properties.component';
import { SidenavDefaultComponent } from '../../components/examples/sidenav/sidenav-default/sidenav-default.component';
import { SidenavContentComponent } from '../../components/examples/sidenav/sidenav-content/sidenav-content.component';
import { SidenavNoArrowComponent } from '../../components/examples/sidenav/sidenav-no-arrow/sidenav-no-arrow.component';
import { SidenavExampleComponent } from '../../components/examples/sidenav/sidenav-example/sidenav-example.component';
import { SidenavImportComponent } from '../../components/examples/sidenav/sidenav-import/sidenav-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavExampleComponent,
    SidenavTablePropertiesComponent,
    SidenavDefaultComponent,
    SidenavContentComponent,
    SidenavNoArrowComponent,
    SidenavImportComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DxcSideNavModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule
  ],
  exports:[
    SidenavComponent,
    SidenavExampleComponent,
    SidenavTablePropertiesComponent,
    SidenavDefaultComponent,
    SidenavContentComponent,
    SidenavNoArrowComponent,
    SidenavImportComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class SidenavModule { }
