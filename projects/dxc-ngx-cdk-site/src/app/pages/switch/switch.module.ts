import { NgModule } from "@angular/core";
import { DxcSwitchModule, DxcTableModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { SwitchComponent } from './switch.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { SwitchExampleComponent } from '../../components/examples/switch/switch-example/switch-example.component';
import { SwitchLabelComponent } from '../../components/examples/switch/switch-label/switch-label.component';
import { SwitchThemedComponent } from '../../components/examples/switch/switch-themed/switch-themed.component';
import { SwitchTablePropertiesComponent } from '../../components/examples/switch/properties/switch-table-properties/switch-table-properties.component';
import { SwitchUncontrolledComponent } from '../../components/examples/switch/switch-uncontrolled/switch-uncontrolled.component'
import { SwitchDefaultComponent } from '../../components/examples/switch/switch-default/switch-default.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    SwitchComponent,
    SwitchExampleComponent,
    SwitchLabelComponent,
    SwitchThemedComponent,
    SwitchTablePropertiesComponent,
    SwitchUncontrolledComponent,
    SwitchDefaultComponent
    ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcSwitchModule,
    DxcTableModule,
    DxcTagModule,
    ComponentsSidenavModule
  ],
  exports: [
    SwitchExampleComponent,
    SwitchLabelComponent,
    SwitchThemedComponent,
    SwitchTablePropertiesComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class SwitchModule {}
