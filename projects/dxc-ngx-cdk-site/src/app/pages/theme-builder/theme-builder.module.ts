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
  DxcChipModule,
  DxcDateModule,
  DxcDialogModule,
  DxcDropdownModule,
  DxcFooterModule,
  DxcHeaderModule,
  DxcInputTextModule,
  DxcLinkModule,
  DxcPaginatorModule,
  DxcProgressbarModule,
  DxcRadioModule,
  DxcSideNavModule,
  DxcSliderModule,
  DxcSpinnerModule,
  DxcSwitchModule,
  DxcTagModule,
  DxcTableModule,
  DxcTabsModule,
  DxcToggleGroupModule,
  DxcUploadModule,
  DxcResultsetTableModule,
  BackgroundProviderModule,
  DxcTextInputModule,
  DxcPasswordInputModule,
  DxcNumberInputModule,
  DxcDateInputModule,
  DxcTextareaModule,
  DxcFileInputModule,
  DxcSelectModule,
} from "@dxc-technology/halstack-angular";
import { AlertPreviewComponent } from "./previews/alert-preview/alert-preview.component";
import { WizardPreviewComponent } from "./previews/wizard-preview/wizard-preview.component";
import { BoxPreviewComponent } from "./previews/box-preview/box-preview.component";
import { ButtonPreviewComponent } from "./previews/button-preview/button-preview.component";
import { CardPreviewComponent } from "./previews/card-preview/card-preview.component";
import { ThemeModule } from "../../../../../dxc-ngx-cdk/src/lib/theme/theme.module";
import { CheckboxPreviewComponent } from "./previews/checkbox-preview/checkbox-preview.component";
import { ChipPreviewComponent } from "./previews/chip-preview/chip-preview.component";
import { DatePreviewComponent } from "./previews/date-preview/date-preview.component";
import { DialogPreviewComponent } from "./previews/dialog-preview/dialog-preview.component";
import { DropdownPreviewComponent } from "./previews/dropdown-preview/dropdown-preview.component";
import { FooterPreviewComponent } from "./previews/footer-preview/footer-preview.component";
import { HeaderPreviewComponent } from "./previews/header-preview/header-preview.component";
import { HeadingPreviewComponent } from "./previews/heading-preview/heading-preview.component";
import { InputTextPreviewComponent } from "./previews/input-text-preview/input-text-preview.component";
import { LinkPreviewComponent } from "./previews/link-preview/link-preview.component";
import { PaginatorPreviewComponent } from "./previews/paginator-preview/paginator-preview.component";
import { ProgressBarPreviewComponent } from "./previews/progress-bar-preview/progress-bar-preview.component";
import { RadioPreviewComponent } from "./previews/radio-preview/radio-preview.component";
import { SidenavPreviewComponent } from "./previews/sidenav-preview/sidenav-preview.component";
import { SliderPreviewComponent } from "./previews/slider-preview/slider-preview.component";
import { SpinnerPreviewComponent } from "./previews/spinner-preview/spinner-preview.component";
import { SwitchPreviewComponent } from "./previews/switch-preview/switch-preview.component";
import { TagPreviewComponent } from "./previews/tag-preview/tag-preview.component";
import { TabsPreviewComponent } from "./previews/tabs-preview/tabs-preview.component";
import { V3TextareaPreviewComponent } from "./previews/v3-textarea-preview/v3-textarea-preview.component";
import { ToggleGroupPreviewComponent } from "./previews/toggle-group-preview/toggle-group-preview.component";
import { UploadPreviewComponent } from "./previews/upload-preview/upload-preview.component";
import { TablePreviewComponent } from "./previews/table-preview/table-preview.component";
import { DateInputPreviewComponent } from "./previews/date-input-preview/date-input-preview.component";
import { TextareaPreviewComponent } from "./previews/textarea-preview/textarea-preview.component";
import { FileInputPreviewComponent } from "./previews/file-input-preview/file-input-preview.component";
import { SelectPreviewComponent } from "./previews/select-preview/select-preview.component";
import { TextInputPreviewComponent } from "./previews/text-input-preview/text-input-preview.component";

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
    DatePreviewComponent,
    DialogPreviewComponent,
    DropdownPreviewComponent,
    FooterPreviewComponent,
    HeaderPreviewComponent,
    HeadingPreviewComponent,
    InputTextPreviewComponent,
    LinkPreviewComponent,
    PaginatorPreviewComponent,
    ProgressBarPreviewComponent,
    RadioPreviewComponent,
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
    TextInputPreviewComponent,
    DateInputPreviewComponent,
    TextareaPreviewComponent,
    FileInputPreviewComponent,
    SelectPreviewComponent,
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
    DxcChipModule,
    DxcDateModule,
    DxcDateInputModule,
    DxcDialogModule,
    DxcDropdownModule,
    DxcFooterModule,
    DxcHeaderModule,
    DxcInputTextModule,
    DxcTextInputModule,
    DxcPasswordInputModule,
    DxcNumberInputModule,
    DxcLinkModule,
    DxcPaginatorModule,
    DxcProgressbarModule,
    DxcRadioModule,
    DxcSideNavModule,
    DxcSliderModule,
    DxcSpinnerModule,
    DxcSwitchModule,
    DxcTagModule,
    DxcTableModule,
    DxcResultsetTableModule,
    DxcTabsModule,
    DxcToggleGroupModule,
    DxcUploadModule,
    BackgroundProviderModule,
    DxcTextareaModule,
    DxcFileInputModule,
    DxcSelectModule,
  ],
  exports: [],
  entryComponents: [],
})
export class ThemeBuilderPageModule {}
