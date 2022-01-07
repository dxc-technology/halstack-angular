import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcLinkModule, DxcTagModule, DxcChipModule, DxcHeadingModule, DxcTextInputModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TextareaComponent } from './textarea.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { TextareaApiComponent } from '../../components/examples/textarea/textarea-api/textarea-api.component';
import { TextareaExampleComponent } from '../../components/examples/textarea/textarea-example/textarea-example.component';
import { TextareaImportComponent } from '../../components/examples/textarea/textarea-import/textarea-import.component';
import { TextareaPropertiesComponent } from '../../components/examples/textarea/textarea-properties/textarea-properties.component';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    TextareaComponent,
    TextareaExampleComponent,
    TextareaPropertiesComponent,
    TextareaImportComponent,
    TextareaApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcTextInputModule,
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
    TextareaComponent,
    TextareaExampleComponent,
    TextareaPropertiesComponent,
    TextareaImportComponent,
    TextareaApiComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TextareaModule { }