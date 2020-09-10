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
import { HeadingWeightsComponent } from '../../components/examples/heading/heading-weights/heading-weights.component';
import { HeadingImportComponent } from '../../components/examples/heading/heading-import/heading-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { HeadingThemeComponent } from '../../components/examples/heading/heading-theme/heading-theme.component';
import { HeadingApiComponent } from '../../components/examples/heading/heading-api/heading-api.component';

@NgModule({
  declarations: [
    HeadingComponent,
    HeadingTablePropertiesComponent,
    HeadingDefaultComponent,
    HeadingExampleComponent,
    HeadingWeightsComponent,
    HeadingImportComponent,
    HeadingApiComponent,
    HeadingThemeComponent
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
    HeadingWeightsComponent,
    HeadingImportComponent,
    HeadingApiComponent,
    HeadingThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class HeadingModule { }
