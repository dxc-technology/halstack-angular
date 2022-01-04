import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcLinkModule, DxcTagModule, V3DxcTextareaModule, DxcChipModule, DxcHeadingModule, DxcAlertModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { V3TextareaComponent } from './v3-textarea.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { V3TextareaApiComponent } from '../../components/examples/v3-textarea/v3-textarea-api/v3-textarea-api.component';
import { V3TextareaPropertiesComponent } from '../../components/examples/v3-textarea/v3-textarea-properties/v3-textarea-properties.component';
import { V3TextareaExampleComponent } from '../../components/examples/v3-textarea/v3-textarea-example/v3-textarea-example.component';
import { V3TextareaImportComponent } from 'src/app/components/examples/v3-textarea/v3-textarea-import/v3-textarea-import.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';


@NgModule({
  declarations: [
    V3TextareaComponent,
    V3TextareaApiComponent,
    V3TextareaPropertiesComponent,
    V3TextareaExampleComponent,
    V3TextareaImportComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    V3DxcTextareaModule,
    ExampleViewerModule,
    CodesandboxViewerModule,
    DxcLinkModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule,
    DxcLinkModule,
    DxcAlertModule,
  ],
  exports: [
    V3TextareaComponent,
    V3TextareaApiComponent,
    V3TextareaPropertiesComponent,
    V3TextareaExampleComponent,
    V3TextareaImportComponent],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class V3TextareaModule { }
