import { NgModule } from "@angular/core";
import { DxcSwitchModule, DxcTableModule,DxcTagModule, DxcChipModule } from '@dxc-technology/halstack-angular';
import { SwitchComponent } from './switch.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { SwitchExampleComponent } from '../../components/examples/switch/switch-example/switch-example.component';
import { SwitchLabelComponent } from '../../components/examples/switch/switch-label/switch-label.component';
import { SwitchTablePropertiesComponent } from '../../components/examples/switch/properties/switch-table-properties/switch-table-properties.component';
import { SwitchUncontrolledComponent } from '../../components/examples/switch/switch-uncontrolled/switch-uncontrolled.component'
import { SwitchDefaultComponent } from '../../components/examples/switch/switch-default/switch-default.component';
import { SwitchImportComponent } from '../../components/examples/switch/switch-import/switch-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { SwitchApiComponent } from '../../components/examples/switch/switch-api/switch-api.component';
import { SwitchThemeComponent } from '../../components/examples/switch/switch-theme/switch-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    SwitchComponent,
    SwitchExampleComponent,
    SwitchLabelComponent,
    SwitchTablePropertiesComponent,
    SwitchUncontrolledComponent,
    SwitchDefaultComponent,
    SwitchImportComponent,
    SwitchApiComponent,
    SwitchThemeComponent,
    ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcSwitchModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule
  ],
  exports: [
    SwitchExampleComponent,
    SwitchLabelComponent,
    SwitchTablePropertiesComponent,
    SwitchImportComponent,
    SwitchApiComponent,
    SwitchThemeComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class SwitchModule {}
