import { NgModule } from "@angular/core";
import { DxcTableModule, V3DxcSelectModule, DxcTagModule, DxcChipModule, DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { SelectComponent } from './select.component';
import { SelectExampleComponent } from 'src/app/components/examples/select/select-example/select-example.component';
import { SelectPropertiesComponent } from '../../components/examples/select/properties/select-properties/select-properties.component';
import { SelectImportComponent } from '../../components/examples/select/select-import/select-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { SelectApiComponent } from '../../components/examples/select/select-api/select-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';


@NgModule({
  declarations: [
    SelectComponent,
    SelectExampleComponent,
    SelectPropertiesComponent,
    SelectImportComponent,
    SelectApiComponent,
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
    DxcHeadingModule
  ],
  exports: [
    SelectComponent,
    SelectExampleComponent,
    SelectPropertiesComponent,
    SelectImportComponent,
    SelectApiComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class SelectModule { }
