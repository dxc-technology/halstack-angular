import { NgModule } from "@angular/core";
import { DxcTableModule, V3DxcSelectModule, DxcTagModule, DxcChipModule, DxcHeadingModule, DxcAlertModule, DxcLinkModule } from '@dxc-technology/halstack-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { V3SelectComponent } from './v3-select.component';
import { V3SelectExampleComponent } from 'src/app/components/examples/v3-select/v3-select-example/v3-select-example.component';
import { V3SelectPropertiesComponent } from '../../components/examples/v3-select/v3-select-properties/v3-select-properties.component';
import { V3SelectImportComponent } from '../../components/examples/v3-select/v3-select-import/v3-select-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { V3SelectApiComponent } from '../../components/examples/v3-select/v3-select-api/v3-select-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";


@NgModule({
  declarations: [
    V3SelectComponent,
    V3SelectExampleComponent,
    V3SelectPropertiesComponent,
    V3SelectImportComponent,
    V3SelectApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    V3DxcSelectModule,
    DxcTagModule,
    CodePlaygroundModule,
    CodesandboxViewerModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    StatusTagModule,
    DxcLinkModule,
    DxcAlertModule,
  ],
  exports: [
    V3SelectComponent,
    V3SelectExampleComponent,
    V3SelectPropertiesComponent,
    V3SelectImportComponent,
    V3SelectApiComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class V3SelectModule { }
