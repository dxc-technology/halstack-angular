import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcToggleGroupModule, DxcChipModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { ToggleGroupComponent } from './toggleGroup.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ToggleGroupExampleComponent } from '../../components/examples/toggleGroup/toggleGroup-example/toggleGroup-example.component';
import { ToggleGroupDefaultComponent } from '../../components/examples/toggleGroup/toggleGroup-default/toggleGroup-default.component';

@NgModule({
  declarations: [
    ToggleGroupComponent,
    ToggleGroupExampleComponent,
    ToggleGroupDefaultComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcToggleGroupModule,
    ExampleViewerModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule
  ],
  exports: [
    ToggleGroupComponent,
    ToggleGroupExampleComponent,
    ToggleGroupDefaultComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class ToggleGroupModule { }
