import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeBuilderModule } from "../../components/theme-builder/theme-builder.module";
import { ThemeBuilderComponentPage } from "./theme-builder.component";
import { ThemeBuilderPageRoutingModule } from "./theme-builder-routing.module";
import { AccordionPreviewComponent } from "./previews/accordion-preview/accordion-preview.component";
import {
  DxcAccordionModule,
  DxcAlertModule,
  DxcWizardModule,
  DxcButtonModule,
  DxcAccordionGroupModule,
  DxcBoxModule,
  DxcHeadingModule,
  DxcCardModule,
  DxcCheckboxModule,
  DxcChipModule
} from "@dxc-technology/halstack-angular";
import { AlertPreviewComponent } from "./previews/alert-preview/alert-preview.component";
import { WizardPreviewComponent } from "./previews/wizard-preview/wizard-preview.component";
import { BoxPreviewComponent } from './previews/box-preview/box-preview.component';
import { ButtonPreviewComponent } from './previews/button-preview/button-preview.component';
import { CardPreviewComponent } from './previews/card-preview/card-preview.component';
import { ThemeModule } from '../../../../../dxc-ngx-cdk/src/lib/theme/theme.module';
import { CheckboxPreviewComponent } from './previews/checkbox-preview/checkbox-preview.component';
import { ChipPreviewComponent } from './previews/chip-preview/chip-preview.component';

@NgModule({
  declarations: [
    ThemeBuilderComponentPage,
    AccordionPreviewComponent,
    AlertPreviewComponent,
    WizardPreviewComponent,
    BoxPreviewComponent,
    ButtonPreviewComponent,
    CardPreviewComponent,
    CheckboxPreviewComponent,
    ChipPreviewComponent,
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
    ThemeModule,
    DxcBoxModule,
    DxcHeadingModule,
    DxcCardModule,
    DxcCheckboxModule,
    DxcChipModule
  ],
  exports: [],
  entryComponents: [],
})
export class ThemeBuilderPageModule {}
