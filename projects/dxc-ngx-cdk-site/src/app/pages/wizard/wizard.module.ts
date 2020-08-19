import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { WizardComponent } from './wizard.component';
import { DxcTableModule, DxcWizardModule,DxcTagModule } from "@dxc-technology/halstack-angular";

import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';

import { WizardTablePropertiesComponent } from '../../components/examples/wizard/properties/wizard-table-properties/wizard-table-properties.component';
import { WizardDefaultComponent } from '../../components/examples/wizard/wizard-default/wizard-default.component';
import { WizardUncontrolledComponent } from '../../components/examples/wizard/wizard-uncontrolled/wizard-uncontrolled.component';
import { WizardVerticalComponent } from '../../components/examples/wizard/wizard-vertical/wizard-vertical.component';
import { WizardExampleComponent } from '../../components/examples/wizard/wizard-example/wizard-example.component';
import { WizardImportComponent } from '../../components/examples/wizard/wizard-import/wizard-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { WizardThemeComponent } from '../../components/examples/wizard/wizard-theme/wizard-theme.component';
import { WizardApiComponent } from '../../components/examples/wizard/wizard-api/wizard-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    WizardComponent,
    WizardExampleComponent,
    WizardTablePropertiesComponent,
    WizardDefaultComponent,
    WizardVerticalComponent,
    WizardUncontrolledComponent,
    WizardImportComponent,
    WizardApiComponent,
    WizardThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcWizardModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule
  ],
  exports:[
    WizardComponent,
    WizardExampleComponent,
    WizardTablePropertiesComponent,
    WizardDefaultComponent,
    WizardVerticalComponent,
    WizardUncontrolledComponent,
    WizardImportComponent,
    WizardApiComponent,
    WizardThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class WizardModule { }
