import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { WizardComponent } from './wizard.component';
import { DxcTableModule, DxcWizardModule,DxcTagModule, DxcChipModule,DxcHeadingModule } from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { WizardTablePropertiesComponent } from '../../components/examples/wizard/properties/wizard-table-properties/wizard-table-properties.component';
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
    WizardImportComponent,
    WizardApiComponent,
    WizardThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TabbedSectionModule,
    DxcTableModule,
    DxcWizardModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports:[
    WizardComponent,
    WizardExampleComponent,
    WizardTablePropertiesComponent,
    WizardImportComponent,
    WizardApiComponent,
    WizardThemeComponent
  ]
})
export class WizardModule { }
