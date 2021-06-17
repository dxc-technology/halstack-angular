import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeBuilderModule } from '../../components/theme-builder/theme-builder.module';
import { ThemeBuilderComponentPage } from './theme-builder.component';
import { ThemeBuilderPageRoutingModule } from './theme-builder-routing.module';
import { AccordionPreviewComponent } from './previews/accordion-preview/accordion-preview.component';
import { DxcAccordionModule, DxcAlertModule } from '@dxc-technology/halstack-angular';
import { AlertPreviewComponent } from './previews/alert-preview/alert-preview.component';


@NgModule({
  declarations: [
    ThemeBuilderComponentPage,
    AccordionPreviewComponent,
    AlertPreviewComponent,
    WizardPreviewComponent,
  ],
  imports: [
    CommonModule,
    ThemeBuilderPageRoutingModule,
    ThemeBuilderModule,
    DxcAccordionModule,
    DxcAlertModule,
    DxcWizardModule,
    DxcButtonModule,
    DxcAccordionGroupModule,
    ThemeModule
  ],
  exports: [],
  entryComponents: [],
})
export class ThemeBuilderPageModule {}
