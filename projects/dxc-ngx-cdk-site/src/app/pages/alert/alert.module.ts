import { NgModule } from "@angular/core";
import { DxcButtonModule, DXCAlertModule, DxcTableModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { AlertChildrenComponent } from '../../components/examples/alert/alert-children/alert-children.component';
import { AlertComponent } from './alert.component';
import { AlertExampleComponent } from '../../components/examples/alert/alert-example/alert-example.component';
import { AlertInfoComponent } from '../../components/examples/alert/alert-info/alert-info.component';
import { AlertModalComponent } from '../../components/examples/alert/alert-modal/alert-modal.component';
import { AlertComponentPropertiesComponent } from '../../components/examples/alert/properties/alert-properties/alert-properties.component';
import { AlertSizedComponent } from '../../components/examples/alert/alert-sized/alert-sized.component';
import { AlertSuccessComponent } from '../../components/examples/alert/alert-success/alert-success.component';
import { AlertWarningComponent } from '../../components/examples/alert/alert-warning/alert-warning.component';
import { AlertErrorComponent } from '../../components/examples/alert/alert-error/alert-error.component';
import { AlertClosableComponent } from '../../components/examples/alert/alert-closable/alert-closable.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    AlertChildrenComponent,
    AlertComponent,
    AlertInfoComponent,
    AlertExampleComponent,
    AlertModalComponent,
    AlertComponentPropertiesComponent,
    AlertSizedComponent,
    AlertSuccessComponent,
    AlertWarningComponent,
    AlertErrorComponent,
    AlertClosableComponent
    ],
  imports: [
    BrowserModule,
    DXCAlertModule,
    DxcButtonModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    ComponentsSidenavModule
  ],
  exports: [
    AlertChildrenComponent,
    AlertInfoComponent,
    AlertExampleComponent,
    AlertModalComponent,
    AlertComponentPropertiesComponent,
    AlertSizedComponent,
    AlertSuccessComponent,
    AlertWarningComponent,
    AlertErrorComponent,
    AlertClosableComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class AlertModule {}
