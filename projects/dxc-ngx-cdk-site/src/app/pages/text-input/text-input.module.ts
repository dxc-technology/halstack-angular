import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DXCInputTextModule, DxcLinkModule,DxcTagModule } from '@diaas/dxc-ngx-cdk';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TextInputComponent } from './text-input.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { TextInputTablePropertiesComponent } from '../../components/examples/text-input/properties/text-input-table-properties/text-input-table-properties.component';
import { TextInputDarkComponent } from '../../components/examples/text-input/text-input-dark/text-input-dark.component';
import { TextInputDefaultComponent } from '../../components/examples/text-input/text-input-default/text-input-default.component';
import { TextInputExampleComponent } from '../../components/examples/text-input/text-input-example/text-input-example.component';
import { TextInputFillParentComponent } from '../../components/examples/text-input/text-input-fill-parent/text-input-fill-parent.component';
import { TextInputMultiComponent } from '../../components/examples/text-input/text-input-multi/text-input-multi.component';
import { TextInputPrefixSuffixComponent } from '../../components/examples/text-input/text-input-prefix-suffix/text-input-prefix-suffix.component';
import { TextInputSizedComponent } from '../../components/examples/text-input/text-input-sized/text-input-sized.component';
import { TextInputUncontrolledComponent } from '../../components/examples/text-input/text-input-uncontrolled/text-input-uncontrolled.component';

@NgModule({
  declarations: [
    TextInputComponent,
    TextInputDarkComponent,
    TextInputDefaultComponent,
    TextInputUncontrolledComponent,
    TextInputExampleComponent,
    TextInputFillParentComponent,
    TextInputMultiComponent,
    TextInputPrefixSuffixComponent,
    TextInputSizedComponent,
    TextInputTablePropertiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DXCInputTextModule,
    ExampleViewerModule,
    DxcLinkModule,
    DxcTagModule
  ],
  exports: [
    TextInputComponent,
    TextInputDarkComponent,
    TextInputDefaultComponent,
    TextInputUncontrolledComponent,
    TextInputExampleComponent,
    TextInputFillParentComponent,
    TextInputMultiComponent,
    TextInputPrefixSuffixComponent,
    TextInputSizedComponent,
    TextInputTablePropertiesComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TextInputModule { }
