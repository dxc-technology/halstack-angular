import { NgModule } from "@angular/core";
import { DxcButtonModule, DxcAlertModule, DxcTableModule,DxcTagModule, DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { AlertComponent } from './alert.component';
import { AlertExampleComponent } from '../../components/examples/alert/alert-example/alert-example.component';
import { AlertComponentPropertiesComponent } from '../../components/examples/alert/properties/alert-properties/alert-properties.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { AlertImportComponent } from '../../components/examples/alert/alert-import/alert-import.component';
import { AlertThemeComponent } from '../../components/examples/alert/alert-theme/alert-theme.component';
import { AlertApiComponent } from '../../components/examples/alert/alert-api/alert-api.component';

@NgModule({
  declarations: [
    AlertComponent,
    AlertExampleComponent,
    AlertComponentPropertiesComponent,
    AlertImportComponent,
    AlertApiComponent,
    AlertThemeComponent
    ],
  imports: [
    BrowserModule,
    DxcAlertModule,
    DxcButtonModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    AlertExampleComponent,
    AlertComponentPropertiesComponent,
    AlertImportComponent,
    AlertApiComponent,
    AlertThemeComponent
  ]
})
export class AlertModule {}
