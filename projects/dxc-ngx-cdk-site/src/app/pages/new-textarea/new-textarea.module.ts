import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcLinkModule, DxcTagModule, DxcChipModule, DxcHeadingModule, DxcNewInputTextModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { NewTextareaComponent } from './new-textarea.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { NewTextareaApiComponent } from '../../components/examples/new-textarea/new-textarea-api/new-textarea-api.component';
import { NewTextareaExampleComponent } from '../../components/examples/new-textarea/new-textarea-example/new-textarea-example.component';
import { NewTextareaImportComponent } from '../../components/examples/new-textarea/new-textarea-import/new-textarea-import.component';
import { NewTextareaPropertiesComponent } from '../../components/examples/new-textarea/new-textarea-properties/new-textarea-properties.component';

@NgModule({
  declarations: [
    NewTextareaComponent,
    NewTextareaExampleComponent,
    NewTextareaPropertiesComponent,
    NewTextareaImportComponent,
    NewTextareaApiComponent,
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
    DxcHeadingModule
  ],
  exports: [
    NewTextareaComponent,
    NewTextareaExampleComponent,
    NewTextareaPropertiesComponent,
    NewTextareaImportComponent,
    NewTextareaApiComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class NewTextareaModule { }