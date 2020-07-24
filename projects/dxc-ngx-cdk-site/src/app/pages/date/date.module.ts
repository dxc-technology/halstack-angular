import { NgModule } from '@angular/core';
import { DateComponent } from './date.component';
import { DxcDateModule, DxcTableModule, DxcTagModule } from '@dxc-technology/halstack-angular';

import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { DateExampleComponent } from '../../components/examples/date/date-example/date-example.component';
import { DatePropertiesComponent } from '../../components/examples/date/properties/date-properties/date-properties.component';
import { DateSizedComponent } from '../../components/examples/date/date-sized/date-sized.component';
import { DateSimpleComponent } from '../../components/examples/date/date-simple/date-simple.component';
import { DateUncontrolledComponent } from '../../components/examples/date/date-uncontrolled/date-uncontrolled.component';
import { DateImportComponent } from '../../components/examples/date/date-import/date-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
    declarations: [
      DateComponent,
      DateExampleComponent,
      DatePropertiesComponent,
      DateSizedComponent,
      DateSimpleComponent,
      DateUncontrolledComponent,
      DateImportComponent
      ],
    imports: [
      BrowserModule,
      TabbedSectionModule,
      ExampleViewerModule,
      DxcTableModule,
      DxcDateModule,
      DxcTagModule,
      CodePlaygroundModule,
      ComponentsSidenavModule
    ],
    exports: [
      DateComponent,
      DatePropertiesComponent,
      DateSizedComponent,
      DateExampleComponent,
      DateSimpleComponent,
      DateImportComponent
    ],
    entryComponents: [
      ExampleViewerComponent
    ]
  })
  export class DateModule {}