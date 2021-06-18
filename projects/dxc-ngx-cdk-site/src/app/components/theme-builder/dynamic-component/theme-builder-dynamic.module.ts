import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { ThemeBuilderDynamicComponentComponent } from "./theme-builder-dynamic-component.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AccordionPreviewComponent } from '../../../pages/theme-builder/previews/accordion-preview/accordion-preview.component';
import { AlertPreviewComponent } from '../../../pages/theme-builder/previews/alert-preview/alert-preview.component';
import { WizardPreviewComponent } from '../../../pages/theme-builder/previews/wizard-preview/wizard-preview.component';
import { BoxPreviewComponent } from '../../../pages/theme-builder/previews/box-preview/box-preview.component';
import { ButtonPreviewComponent } from '../../../pages/theme-builder/previews/button-preview/button-preview.component';
import { CardPreviewComponent } from '../../../pages/theme-builder/previews/card-preview/card-preview.component';
import { CheckboxPreviewComponent } from '../../../pages/theme-builder/previews/checkbox-preview/checkbox-preview.component';
import { ChipPreviewComponent } from '../../../pages/theme-builder/previews/chip-preview/chip-preview.component';
import { DatePreviewComponent } from '../../../pages/theme-builder/previews/date-preview/date-preview.component';
import { DialogPreviewComponent } from '../../../pages/theme-builder/previews/dialog-preview/dialog-preview.component';
import { DropdownPreviewComponent } from '../../../pages/theme-builder/previews/dropdown-preview/dropdown-preview.component';
import { FooterPreviewComponent } from '../../../pages/theme-builder/previews/footer-preview/footer-preview.component';
import { HeaderPreviewComponent } from '../../../pages/theme-builder/previews/header-preview/header-preview.component';

@NgModule({
  declarations: [ThemeBuilderDynamicComponentComponent],
  imports: [CommonModule, FormsModule, PortalModule],
  exports: [ThemeBuilderDynamicComponentComponent],
  entryComponents: [
    AccordionPreviewComponent,
    AlertPreviewComponent,
    WizardPreviewComponent,
    BoxPreviewComponent,
    ButtonPreviewComponent,
    CardPreviewComponent,
    CheckboxPreviewComponent,
    ChipPreviewComponent,
    DatePreviewComponent,
    DialogPreviewComponent,
    DropdownPreviewComponent,
    FooterPreviewComponent,
    HeaderPreviewComponent
  ]
})
export class ThemeBuilderDynamicModule { }