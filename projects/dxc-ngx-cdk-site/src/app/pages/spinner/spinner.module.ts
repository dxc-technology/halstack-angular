import { NgModule } from "@angular/core";
import { DxcSpinnerModule, DxcTableModule,DxcButtonModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { SpinnerComponent } from './spinner.component';
import { SpinnerDeterminedComponent } from '../../components/examples/spinner/spinner-determined/spinner-determined.component';
import { SpinnerExampleComponent } from '../../components/examples/spinner/spinner-example/spinner-example.component';
import { SpinnerSmallComponent } from '../../components/examples/spinner/spinner-small/spinner-small.component';
import { SpinnerTablePropertiesComponent } from '../../components/examples/spinner/properties/spinner-table-properties/spinner-table-properties.component';
import { SpinnerThemedComponent } from '../../components/examples/spinner/spinner-themed/spinner-themed.component';
import { SpinnerUndeterminedComponent } from '../../components/examples/spinner/spinner-undetermined/spinner-undetermined.component';
import { SpinnerOverlayComponent } from '../../components/examples/spinner/spinner-overlay/spinner-overlay.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { SpinnerImportComponent } from '../../components/examples/spinner/spinner-import/spinner-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { SpinnerApiComponent } from '../../components/examples/spinner/spinner-api/spinner-api.component';
import { SpinnerThemeComponent } from '../../components/examples/spinner/spinner-theme/spinner-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerDeterminedComponent,
    SpinnerExampleComponent,
    SpinnerSmallComponent,
    SpinnerTablePropertiesComponent,
    SpinnerThemedComponent,
    SpinnerUndeterminedComponent,
    SpinnerOverlayComponent,
    SpinnerImportComponent,
    SpinnerApiComponent,
    SpinnerThemeComponent
    ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcSpinnerModule,
    DxcTableModule,
    DxcButtonModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule
  ],
  exports: [
    SpinnerDeterminedComponent,
    SpinnerExampleComponent,
    SpinnerSmallComponent,
    SpinnerTablePropertiesComponent,
    SpinnerThemedComponent,
    SpinnerUndeterminedComponent,
    SpinnerOverlayComponent,
    SpinnerImportComponent,
    SpinnerApiComponent,
    SpinnerThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class SpinnerModule {}
