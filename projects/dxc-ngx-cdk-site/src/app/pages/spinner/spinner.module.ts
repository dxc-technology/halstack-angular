import { NgModule } from "@angular/core";
import { DxcSpinnerModule, DxcTableModule,DxcButtonModule,DxcTagModule, DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { SpinnerComponent } from './spinner.component';
import { SpinnerExampleComponent } from '../../components/examples/spinner/spinner-example/spinner-example.component';
import { SpinnerTablePropertiesComponent } from '../../components/examples/spinner/properties/spinner-table-properties/spinner-table-properties.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { SpinnerImportComponent } from '../../components/examples/spinner/spinner-import/spinner-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { SpinnerApiComponent } from '../../components/examples/spinner/spinner-api/spinner-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerExampleComponent,
    SpinnerTablePropertiesComponent,
    SpinnerImportComponent,
    SpinnerApiComponent
    ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    DxcSpinnerModule,
    DxcTableModule,
    DxcButtonModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule
  ],
  exports: [
    SpinnerExampleComponent,
    SpinnerTablePropertiesComponent,
    SpinnerImportComponent,
    SpinnerApiComponent
  ]
})
export class SpinnerModule {}
