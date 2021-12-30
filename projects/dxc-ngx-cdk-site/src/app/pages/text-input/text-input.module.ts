import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcInputTextModule, DxcLinkModule, DxcTagModule, DxcChipModule, DxcHeadingModule, DxcAlertModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TextInputComponent } from './text-input.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { TextInputTablePropertiesComponent } from '../../components/examples/text-input/properties/text-input-table-properties/text-input-table-properties.component';
import { TextInputExampleComponent } from '../../components/examples/text-input/text-input-example/text-input-example.component';
import { TextInputImportComponent } from '../../components/examples/text-input/text-input-import/text-input-import.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { TextInputApiComponent } from '../../components/examples/text-input/text-input-api/text-input-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    TextInputComponent,
    TextInputExampleComponent,
    TextInputTablePropertiesComponent,
    TextInputImportComponent,
    TextInputApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcInputTextModule,
    ExampleViewerModule,
    CodesandboxViewerModule,
    DxcLinkModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    ColorPreviewModule,
    DxcHeadingModule,
    StatusTagModule,
    DxcAlertModule,
    DxcLinkModule,
  ],
  exports: [
    TextInputComponent,
    TextInputExampleComponent,
    TextInputTablePropertiesComponent,
    TextInputImportComponent,
    TextInputApiComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TextInputModule { }
