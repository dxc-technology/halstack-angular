import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DXCInputTextModule, DxcLinkModule,DxcTagModule, DxcChipModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TextInputComponent } from './text-input.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { TextInputTablePropertiesComponent } from '../../components/examples/text-input/properties/text-input-table-properties/text-input-table-properties.component';
import { TextInputDefaultComponent } from '../../components/examples/text-input/text-input-default/text-input-default.component';
import { TextInputExampleComponent } from '../../components/examples/text-input/text-input-example/text-input-example.component';
import { TextInputFillParentComponent } from '../../components/examples/text-input/text-input-fill-parent/text-input-fill-parent.component';
import { TextInputMultiComponent } from '../../components/examples/text-input/text-input-multi/text-input-multi.component';
import { TextInputPrefixSuffixComponent } from '../../components/examples/text-input/text-input-prefix-suffix/text-input-prefix-suffix.component';
import { TextInputSizedComponent } from '../../components/examples/text-input/text-input-sized/text-input-sized.component';
import { TextInputUncontrolledComponent } from '../../components/examples/text-input/text-input-uncontrolled/text-input-uncontrolled.component';
import { TextInputImportComponent } from '../../components/examples/text-input/text-input-import/text-input-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { TextInputThemeComponent } from '../../components/examples/text-input/text-input-theme/text-input-theme.component';
import { TextInputApiComponent } from '../../components/examples/text-input/text-input-api/text-input-api.component';

@NgModule({
  declarations: [
    TextInputComponent,
    TextInputDefaultComponent,
    TextInputUncontrolledComponent,
    TextInputExampleComponent,
    TextInputFillParentComponent,
    TextInputMultiComponent,
    TextInputPrefixSuffixComponent,
    TextInputSizedComponent,
    TextInputTablePropertiesComponent,
    TextInputImportComponent,
    TextInputApiComponent,
    TextInputThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DXCInputTextModule,
    ExampleViewerModule,
    DxcLinkModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule
  ],
  exports: [
    TextInputComponent,
    TextInputDefaultComponent,
    TextInputUncontrolledComponent,
    TextInputExampleComponent,
    TextInputFillParentComponent,
    TextInputMultiComponent,
    TextInputPrefixSuffixComponent,
    TextInputSizedComponent,
    TextInputTablePropertiesComponent,
    TextInputImportComponent,
    TextInputApiComponent,
    TextInputThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TextInputModule { }
