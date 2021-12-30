import { NgModule } from '@angular/core';
import { DateComponent } from './date.component';
import { DxcDateModule, DxcTableModule, DxcTagModule, DxcChipModule, DxcHeadingModule, DxcLinkModule, DxcAlertModule } from '@dxc-technology/halstack-angular';

import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { DateExampleComponent } from '../../components/examples/date/date-example/date-example.component';
import { DatePropertiesComponent } from '../../components/examples/date/properties/date-properties/date-properties.component';
import { DateImportComponent } from '../../components/examples/date/date-import/date-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { DateApiComponent } from '../../components/examples/date/date-api/date-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from 'src/app/components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    DateComponent,
    DateExampleComponent,
    DatePropertiesComponent,
    DateImportComponent,
    DateApiComponent,
  ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcDateModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule,
    DxcLinkModule,
    DxcAlertModule
  ],
  exports: [
    DateComponent,
    DatePropertiesComponent,
    DateExampleComponent,
    DateImportComponent,
    DateApiComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class DateModule { }