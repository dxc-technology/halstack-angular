import { NgModule } from "@angular/core";
import { DxcSwitchModule, DxcTableModule, DxcTagModule, DxcChipModule, DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { SwitchComponent } from './switch.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { SwitchExampleComponent } from '../../components/examples/switch/switch-example/switch-example.component';
import { SwitchTablePropertiesComponent } from '../../components/examples/switch/properties/switch-table-properties/switch-table-properties.component';
import { SwitchImportComponent } from '../../components/examples/switch/switch-import/switch-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { SwitchApiComponent } from '../../components/examples/switch/switch-api/switch-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    SwitchComponent,
    SwitchExampleComponent,
    SwitchTablePropertiesComponent,
    SwitchImportComponent,
    SwitchApiComponent,
  ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcSwitchModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    CodesandboxViewerModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule
  ],
  exports: [
    SwitchExampleComponent,
    SwitchTablePropertiesComponent,
    SwitchImportComponent,
    SwitchApiComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class SwitchModule { }
