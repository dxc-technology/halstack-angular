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
import { AlertApiComponent } from '../../components/examples/alert/alert-api/alert-api.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    AlertComponent,
    AlertExampleComponent,
    AlertComponentPropertiesComponent,
    AlertImportComponent,
    AlertApiComponent,
    ],
  imports: [
    BrowserModule,
    DxcAlertModule,
    DxcButtonModule,
    TabbedSectionModule,
    ExampleViewerModule,
    CodesandboxViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule
  ],
  exports: [
    AlertExampleComponent,
    AlertComponentPropertiesComponent,
    AlertImportComponent,
    AlertApiComponent,
  ]
})
export class AlertModule {}
