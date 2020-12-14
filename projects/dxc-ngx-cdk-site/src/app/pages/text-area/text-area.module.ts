import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcLinkModule,DxcTagModule, DxcTextareaModule, DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TextAreaComponent } from './text-area.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { TextAreaApiComponent } from '../../components/examples/text-area/text-area-api/text-area-api.component';
import { TextAreaPropertiesTableComponent } from '../../components/examples/text-area/properties/text-area-properties-table/text-area-properties-table.component';
import { TextAreaThemeComponent } from '../../components/examples/text-area/text-area-theme/text-area-theme.component';
import { TextAreaExampleComponent } from '../../components/examples/text-area/text-area-example/text-area-example.component';
import { TextAreaDefaultComponent } from '../../components/examples/text-area/text-area-default/text-area-default.component';
import { TextAreaImportComponent } from '../../components/examples/text-area/text-area-import/text-area-import.component';
import { TextAreaDisabledComponent } from '../../components/examples/text-area/text-area-disabled/text-area-disabled.component';
import { TextAreaFillParentComponent } from '../../components/examples/text-area/text-area-fill-parent/text-area-fill-parent.component';
import { TextAreaInvalidComponent } from '../../components/examples/text-area/text-area-invalid/text-area-invalid.component';
import { TextAreaRequiredComponent } from '../../components/examples/text-area/text-area-required/text-area-required.component';
import { TextAreaUncontrolledComponent } from '../../components/examples/text-area/text-area-uncontrolled/text-area-uncontrolled.component';

@NgModule({
  declarations: [
    TextAreaComponent,
    TextAreaApiComponent,
    TextAreaPropertiesTableComponent,
    TextAreaThemeComponent,
    TextAreaExampleComponent,
    TextAreaDefaultComponent,
    TextAreaImportComponent,
    TextAreaDisabledComponent,
    TextAreaFillParentComponent,
    TextAreaInvalidComponent,
    TextAreaRequiredComponent,
    TextAreaUncontrolledComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcTextareaModule,
    ExampleViewerModule,
    DxcLinkModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    TextAreaComponent,
    TextAreaApiComponent,
    TextAreaPropertiesTableComponent,
    TextAreaThemeComponent,
    TextAreaExampleComponent,
    TextAreaDefaultComponent,
    TextAreaImportComponent,
    TextAreaDisabledComponent,
    TextAreaFillParentComponent,
    TextAreaInvalidComponent,
    TextAreaRequiredComponent,
    TextAreaUncontrolledComponent,
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TextAreaModule { }
