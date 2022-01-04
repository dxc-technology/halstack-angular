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
import { HeadingPreviewComponent } from '../../../pages/theme-builder/previews/heading-preview/heading-preview.component';
import { InputTextPreviewComponent } from '../../../pages/theme-builder/previews/input-text-preview/input-text-preview.component';
import { LinkPreviewComponent } from '../../../pages/theme-builder/previews/link-preview/link-preview.component';
import { PaginatorPreviewComponent } from '../../../pages/theme-builder/previews/paginator-preview/paginator-preview.component';
import { ProgressBarPreviewComponent } from '../../../pages/theme-builder/previews/progress-bar-preview/progress-bar-preview.component';
import { RadioPreviewComponent } from '../../../pages/theme-builder/previews/radio-preview/radio-preview.component';
import { SidenavPreviewComponent } from '../../../pages/theme-builder/previews/sidenav-preview/sidenav-preview.component';
import { SliderPreviewComponent } from '../../../pages/theme-builder/previews/slider-preview/slider-preview.component';
import { SpinnerPreviewComponent } from '../../../pages/theme-builder/previews/spinner-preview/spinner-preview.component';
import { SwitchPreviewComponent } from '../../../pages/theme-builder/previews/switch-preview/switch-preview.component';
import { TagPreviewComponent } from '../../../pages/theme-builder/previews/tag-preview/tag-preview.component';
import { TabsPreviewComponent } from '../../../pages/theme-builder/previews/tabs-preview/tabs-preview.component';
import { V3TextareaPreviewComponent } from '../../../pages/theme-builder/previews/v3-textarea-preview/v3-textarea-preview.component';
import { ToggleGroupPreviewComponent } from '../../../pages/theme-builder/previews/toggle-group-preview/toggle-group-preview.component';
import { UploadPreviewComponent } from '../../../pages/theme-builder/previews/upload-preview/upload-preview.component';
import { TablePreviewComponent } from '../../../pages/theme-builder/previews/table-preview/table-preview.component';
import { NewInputTextPreviewComponent } from '../../../pages/theme-builder/previews/new-input-text-preview/new-input-text-preview.component';
import { NewDatePreviewComponent } from "src/app/pages/theme-builder/previews/new-date-preview/new-date-preview.component";
import { TextareaPreviewComponent } from "src/app/pages/theme-builder/previews/textarea-preview/textarea-preview.component";
import { FileInputPreviewComponent } from "src/app/pages/theme-builder/previews/file-input-preview/file-input-preview.component";
import { SelectPreviewComponent } from "src/app/pages/theme-builder/previews/select-preview/select-preview.component";
import { V3SelectPreviewComponent } from "src/app/pages/theme-builder/previews/v3-select-preview/v3-select-preview.component";

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
    HeaderPreviewComponent,
    HeadingPreviewComponent,
    InputTextPreviewComponent,
    NewInputTextPreviewComponent,
    LinkPreviewComponent,
    PaginatorPreviewComponent,
    ProgressBarPreviewComponent,
    RadioPreviewComponent,
    V3SelectPreviewComponent,
    SidenavPreviewComponent,
    SliderPreviewComponent,
    SpinnerPreviewComponent,
    SwitchPreviewComponent,
    TagPreviewComponent,
    TabsPreviewComponent,
    V3TextareaPreviewComponent,
    ToggleGroupPreviewComponent,
    UploadPreviewComponent,
    TablePreviewComponent,
    NewDatePreviewComponent,
    TextareaPreviewComponent,
    FileInputPreviewComponent,
    SelectPreviewComponent
  ]
})
export class ThemeBuilderDynamicModule { }
