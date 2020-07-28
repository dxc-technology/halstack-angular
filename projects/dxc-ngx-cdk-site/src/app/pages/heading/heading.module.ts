import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcHeadingModule, DxcTableModule,DxcTagModule } from "@dxc-technology/halstack-angular";

import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';

import { HeadingTablePropertiesComponent } from "../../components/examples/heading/properties/heading-table-properties/heading-table-properties.component";
import { HeadingDefaultComponent } from '../../components/examples/heading/heading-default/heading-default.component';
import { HeadingExampleComponent } from '../../components/examples/heading/heading-example/heading-example.component';
import { HeadingDarkComponent } from '../../components/examples/heading/heading-dark/heading-dark.component';
import { HeadingWeightsComponent } from '../../components/examples/heading/heading-weights/heading-weights.component';
import { HeadingImportComponent } from '../../components/examples/heading/heading-import/heading-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    HeadingComponent,
    HeadingTablePropertiesComponent,
    HeadingDefaultComponent,
    HeadingExampleComponent,
    HeadingDarkComponent,
    HeadingWeightsComponent,
    HeadingImportComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcHeadingModule,
    DxcTableModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule
  ],
  exports:[
    HeadingComponent,
    HeadingTablePropertiesComponent,
    HeadingDefaultComponent,
    HeadingExampleComponent,
    HeadingDarkComponent,
    HeadingWeightsComponent,
    HeadingImportComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class HeadingModule { }
