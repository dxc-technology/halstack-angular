import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { ThemeBuilderDynamicComponentComponent } from "./theme-builder-dynamic-component.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AccordionPreviewComponent } from '../../../pages/theme-builder/previews/accordion-preview/accordion-preview.component';
import { AlertPreviewComponent } from '../../../pages/theme-builder/previews/alert-preview/alert-preview.component';
import { WizardPreviewComponent } from '../../../pages/theme-builder/previews/wizard-preview/wizard-preview.component';

@NgModule({
  declarations: [ThemeBuilderDynamicComponentComponent],
  imports: [CommonModule, FormsModule, PortalModule],
  exports: [ThemeBuilderDynamicComponentComponent],
  entryComponents: [
    AccordionPreviewComponent,
    AlertPreviewComponent,
    WizardPreviewComponent
  ]
})
export class ThemeBuilderDynamicModule { }
