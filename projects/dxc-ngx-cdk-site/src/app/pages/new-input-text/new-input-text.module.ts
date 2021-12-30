import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcLinkModule, DxcTagModule, DxcChipModule, DxcHeadingModule, DxcNewInputTextModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { NewInputTextComponent } from './new-input-text.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { InputTextApiComponent } from '../../components/examples/input-text/input-text-api/input-text-api.component';
import { InputTextExampleComponent } from '../../components/examples/input-text/input-text-example/input-text-example.component';
import { InputTextImportComponent } from '../../components/examples/input-text/input-text-import/input-text-import.component';
import { InputTextPropertiesComponent } from '../../components/examples/input-text/input-text-properties/input-text-properties.component';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    NewInputTextComponent,
    InputTextExampleComponent,
    InputTextPropertiesComponent,
    InputTextImportComponent,
    InputTextApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcNewInputTextModule,
    ExampleViewerModule,
    CodesandboxViewerModule,
    DxcLinkModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    ColorPreviewModule,
    DxcHeadingModule,
    StatusTagModule
  ],
  exports: [
    NewInputTextComponent,
    InputTextExampleComponent,
    InputTextPropertiesComponent,
    InputTextImportComponent,
    InputTextApiComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class NewInputTextModule { }