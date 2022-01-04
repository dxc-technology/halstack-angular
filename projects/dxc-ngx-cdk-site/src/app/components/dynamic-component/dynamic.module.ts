import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { DynamicComponentComponent } from "./dynamic-component.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AccordionExampleComponent } from "../examples/accordion/accordion-example/accordion-example.component";
import { AccordionTablePropertiesComponent } from "../examples/accordion/properties/accordion-table-properties/accordion-table-properties.component";
import { AccordionGroupExampleComponent } from "../examples/accordion-group/accordion-group-example/accordion-group-example.component";
import { AccordionGroupTablePropertiesComponent } from "../examples/accordion-group/properties/accordion-group-table-properties/accordion-group-table-properties.component";
import { AlertExampleComponent } from "../examples/alert/alert-example/alert-example.component";
import { AlertComponentPropertiesComponent } from "../examples/alert/properties/alert-properties/alert-properties.component";
import { ApplicationLayoutApiComponent } from "../examples/layout/app-layout-api/app-layout-api.component";
import { ApplicationLayoutExamplesComponent } from "../examples/layout/app-layout-examples/app-layout-examples.component";
import { ButtonTablePropertiesComponent } from "../examples/button/properties/button-table-properties/button-table-properties.component";
import { BoxExampleComponent } from "../examples/box/box-example/box-example.component";
import { BoxTablePropertiesComponent } from "../examples/box/properties/box-table-properties/box-table-properties.component";
import { CardExampleComponent } from "../examples/card/card-example/card-example.component";
import { CardTablePropertiesComponent } from "../examples/card/properties/card-table-properties/card-table-properties.component";
import { CheckboxPropertiesComponent } from "../examples/checkbox/properties/checkbox-properties/checkbox-properties.component";
import { CheckboxExampleComponent } from "../examples/checkbox/checkbox-example/checkbox-example.component";
import { ChipExampleComponent } from "../examples/chip/chip-example/chip-example.component";
import { ChipImportComponent } from "../examples/chip/chip-import/chip-import.component";
import { ChipTablePropertiesComponent } from "../examples/chip/properties/box-table-properties/chip-table-properties.component";
import { DatePropertiesComponent } from "../examples/date/properties/date-properties/date-properties.component";
import { DateExampleComponent } from "../examples/date/date-example/date-example.component";
import { OverviewInstallComponent } from "../overview/overview-install/overview-install.component";
import { OverviewUseComponent } from "../overview/overview-use/overview-use.component";
import { OverviewSupportComponent } from "../overview/overview-support/overview-support.component";
import { OverviewThemesComponent } from "../overview/overview-themes/overview-themes.component";
import { RadioExampleComponent } from "../examples/radio/radio-example/radio-example.component";
import { RadioPropertiesComponent } from "../examples/radio/properties/radio-properties/radio-properties.component";
import { SliderPropertiesComponent } from "../examples/slider/properties/slider-properties/slider-properties.component";
import { SliderExampleComponent } from "../examples/slider/slider-example/slider-example.component";
import { SpinnerExampleComponent } from "../examples/spinner/spinner-example/spinner-example.component";
import { SpinnerTablePropertiesComponent } from "../examples/spinner/properties/spinner-table-properties/spinner-table-properties.component";
import { SwitchExampleComponent } from "../examples/switch/switch-example/switch-example.component";
import { SwitchTablePropertiesComponent } from "../examples/switch/properties/switch-table-properties/switch-table-properties.component";
import { TextInputTablePropertiesComponent } from "../examples/text-input/properties/text-input-table-properties/text-input-table-properties.component";
import { TextInputExampleComponent } from "../examples/text-input/text-input-example/text-input-example.component";
import { FooterExampleComponent } from "../examples/footer/footer-example/footer-example.component";
import { FooterTablePropertiesComponent } from "../examples/footer/properties/footer-table-properties/footer-table-properties.component";
import { DropdownTablePropertiesComponent } from "../examples/dropdown/properties/dropdown-table-properties.component";
import { DropdownExampleComponent } from "../examples/dropdown/dropwdown-example/dropdown-example.component";
import { DialogTablePropertiesComponent } from "../examples/dialog/properties/dialog-table-properties.component";
import { DialogExampleComponent } from "../examples/dialog/dialog-example/dialog-example.component";
import { TableExampleComponent } from "../examples/table/table-example/table-example.component";
import { TablePropertiesComponent } from "../examples/table/properties/table-properties/table-properties.component";
import { TagTablePropertiesComponent } from "../examples/tag/properties/tag-table-properties/tag-table-properties.component";
import { TagExampleComponent } from "../examples/tag/tag-example/tag-example.component";
import { ToggleGroupApiComponent } from "../examples/toggleGroup/toggleGroup-api/toggleGroup-api.component";
import { ToggleGroupTablePropertiesComponent } from "../examples/toggleGroup/properties/toggleGroup-table-properties/toggleGroup-table-properties.component";
import { ToggleGroupImportComponent } from "../examples/toggleGroup/toggleGroup-import/toggleGroup-import.component";
import { ToggleGroupExampleComponent } from "../examples/toggleGroup/toggleGroup-example/toggleGroup-example.component";
import { ProgressbarTablePropertiesComponent } from "../examples/progressbar/properties/progressbar-table-properties.component";
import { ProgressbarExampleComponent } from "../examples/progressbar/progressbar-example/progressbar-example.component";
import { TabbedSectionTablePropertiesComponent } from "../examples/tabbed-section/properties/tabbed-section-table-properties/tabbed-section-table-properties.component";
import { TabbedSectionExampleComponent } from "../examples/tabbed-section/tabbed-section-example/tabbed-section-example.component";
import { TabbedSectionNotesComponent } from "../examples/tabbed-section/properties/tabbed-section-notes/tabbed-section-notes.component";
import { TabsTablePropertiesComponent } from "../examples/tabs/properties/tabs-table-properties.component";
import { TabsExampleComponent } from "../examples/tabs/tabs-example/tabs-example.component";
import { HeaderExampleComponent } from "../examples/header/header-example/header-example.component";
import { HeaderTablePropertiesComponent } from "../examples/header/properties/header-table-properties/header-table-properties.component";
import { UploadTablePropertiesComponent } from "../examples/upload/properties/upload-table-properties.component";
import { UploadExampleComponent } from "../examples/upload/upload-example/upload-example.component";
import { PaginatorTablePropertiesComponent } from "../examples/paginator/properties/paginator-table-properties/paginator-table-properties.component";
import { LinkExampleComponent } from "../examples/link/link-example/link-example.component";
import { LinkTablePropertiesComponent } from "../examples/link/properties/link-table-properties/link-table-properties.component";
import { SidenavExampleComponent } from "../examples/sidenav/sidenav-example/sidenav-example.component";
import { SidenavTablePropertiesComponent } from "../examples/sidenav/properties/sidenav-table-properties/sidenav-table-properties.component";
import { WizardExampleComponent } from "../examples/wizard/wizard-example/wizard-example.component";
import { WizardTablePropertiesComponent } from "../examples/wizard/properties/wizard-table-properties/wizard-table-properties.component";
import { HeadingTablePropertiesComponent } from "../examples/heading/properties/heading-table-properties/heading-table-properties.component";
import { HeadingExampleComponent } from "../examples/heading/heading-example/heading-example.component";
import { ResultsetTableExampleComponent } from "../examples/resultset-table/resultset-table-example/resultset-table-example.component";
import { ResultsetTablePropertiesComponent } from "../examples/resultset-table/properties/resultset-table-properties/resultset-table-properties.component";
import { HeaderDirectivesComponent } from "../examples/header/header-directives/header-directives.component";
import { HeaderExampleResponsiveComponent } from "../examples/header/responsive/header-example-responsive/header-example-responsive.component";
import { ResultsetTableDirectivesComponent } from "../examples/resultset-table/resultset-table-directives/resultset-table-directives.component";
import { AccordionImportComponent } from "../examples/accordion/accordion-import/accordion-import.component";
import { AccordionGroupImportComponent } from "../examples/accordion-group/accordion-group-import/accordion-group-import.component";
import { AlertImportComponent } from "../examples/alert/alert-import/alert-import.component";
import { BoxImportComponent } from "../examples/box/box-import/box-import.component";
import { ButtonImportComponent } from "../examples/button/button-import/button-import.component";
import { CardImportComponent } from "../examples/card/card-import/card-import.component";
import { CheckboxImportComponent } from "../examples/checkbox/checkbox-import/checkbox-import.component";
import { DateImportComponent } from "../examples/date/date-import/date-import.component";
import { DialogImportComponent } from "../examples/dialog/dialog-import/dialog-import.component";
import { DropdownImportComponent } from "../examples/dropdown/dropdown-import/dropdown-import.component";
import { FooterImportComponent } from "../examples/footer/footer-import/footer-import.component";
import { HeaderImportComponent } from "../examples/header/header-import/header-import.component";
import { HeadingImportComponent } from "../examples/heading/heading-import/heading-import.component";
import { LinkImportComponent } from "../examples/link/link-import/link-import.component";
import { PaginatorImportComponent } from "../examples/paginator/paginator-import/paginator-import.component";
import { ProgressbarImportComponent } from "../examples/progressbar/progressbar-import/progressbar-import.component";
import { RadioImportComponent } from "../examples/radio/radio-import/radio-import.component";
import { ResultsetTableImportComponent } from "../examples/resultset-table/resultset-table-import/resultset-table-import.component";
import { V3SelectImportComponent } from "../examples/v3-select/v3-select-import/v3-select-import.component";
import { SidenavImportComponent } from "../examples/sidenav/sidenav-import/sidenav-import.component";
import { SliderImportComponent } from "../examples/slider/slider-import/slider-import.component";
import { SpinnerImportComponent } from "../examples/spinner/spinner-import/spinner-import.component";
import { SwitchImportComponent } from "../examples/switch/switch-import/switch-import.component";
import { TabbedSectionImportComponent } from "../examples/tabbed-section/tabbed-section-import/tabbed-section-import.component";
import { TableImportComponent } from "../examples/table/table-import/table-import.component";
import { TabsImportComponent } from "../examples/tabs/tabs-import/tabs-import.component";
import { TagImportComponent } from "../examples/tag/tag-import/tag-import.component";
import { TextInputImportComponent } from "../examples/text-input/text-input-import/text-input-import.component";
import { UploadImportComponent } from "../examples/upload/upload-import/upload-import.component";
import { WizardImportComponent } from "../examples/wizard/wizard-import/wizard-import.component";
import { ButtonApiComponent } from "../examples/button/button-api/button-api.component";
import { CheckboxApiComponent } from "../examples/checkbox/checkbox-api/checkbox-api.component";
import { RadioApiComponent } from "../examples/radio/radio-api/radio-api.component";
import { LinkApiComponent } from "../examples/link/link-api/link-api.component";
import { SliderApiComponent } from "../examples/slider/slider-api/slider-api.component";
import { BoxApiComponent } from "../examples/box/box-api/box-api.component";
import { TagApiComponent } from "../examples/tag/tag-api/tag-api.component";
import { CardApiComponent } from "../examples/card/card-api/card-api.component";
import { ChipApiComponent } from "../examples/chip/chip-api/chip-api.component";
import { SwitchApiComponent } from "../examples/switch/switch-api/switch-api.component";
import { TextInputApiComponent } from "../examples/text-input/text-input-api/text-input-api.component";
import { ColorPreviewComponent } from "../color-preview/color-preview.component";
import { DateApiComponent } from "../examples/date/date-api/date-api.component";
import { SidenavApiComponent } from "../examples/sidenav/sidenav-api/sidenav-api.component";
import { ProgressbarApiComponent } from "../examples/progressbar/progressbar-api/progressbar-api.component";
import { TabbedSectionApiComponent } from "../examples/tabbed-section/tabbed-section-api/tabbed-section-api.component";
import { FooterApiComponent } from "../examples/footer/footer-api/footer-api.component";
import { SpinnerApiComponent } from "../examples/spinner/spinner-api/spinner-api.component";
import { HeaderApiComponent } from "../examples/header/header-api/header-api.component";
import { WizardApiComponent } from "../examples/wizard/wizard-api/wizard-api.component";
import { AccordionApiComponent } from "../examples/accordion/accordion-api/accordion-api.component";
import { AccordionGroupApiComponent } from "../examples/accordion-group/accordion-group-api/accordion-group-api.component";
import { DialogApiComponent } from "../examples/dialog/dialog-api/dialog-api.component";
import { DropdownApiComponent } from "../examples/dropdown/dropdown-api/dropdown-api.component";
import { TableApiComponent } from "../examples/table/table-api/table-api.component";
import { PaginatorApiComponent } from "../examples/paginator/paginator-api/paginator-api.component";
import { TabsApiComponent } from "../examples/tabs/tabs-api/tabs-api.component";
import { V3TextareaApiComponent } from "../examples/v3-textarea/v3-textarea-api/v3-textarea-api.component";
import { V3TextareaPropertiesComponent } from "../examples/v3-textarea/v3-textarea-properties/v3-textarea-properties.component";
import { V3TextareaExampleComponent } from "../examples/v3-textarea/v3-textarea-example/v3-textarea-example.component";
import { V3TextareaImportComponent } from "../examples/v3-textarea/v3-textarea-import/v3-textarea-import.component";
import { AlertApiComponent } from "../examples/alert/alert-api/alert-api.component";
import { HeadingApiComponent } from "../examples/heading/heading-api/heading-api.component";
import { UploadApiComponent } from "../examples/upload/upload-api/upload-api.component";
import { ResultsetTableApiComponent } from "../examples/resultset-table/resultset-table-api/resultset-table-api.component";
import { ButtonExampleComponent } from "../examples/button/button-example/button-example.component";
import { InputTextPropertiesComponent } from "../examples/input-text/input-text-properties/input-text-properties.component";
import { InputTextApiComponent } from "../examples/input-text/input-text-api/input-text-api.component";
import { InputTextExampleComponent } from "../examples/input-text/input-text-example/input-text-example.component";
import { InputTextImportComponent } from "../examples/input-text/input-text-import/input-text-import.component";
import { PasswordPropertiesComponent } from "../examples/password/password-properties/password-properties.component";
import { PasswordImportComponent } from "../examples/password/password-import/password-import.component";
import { PasswordExampleComponent } from "../examples/password/password-example/password-example.component";
import { PasswordApiComponent } from "../examples/password/password-api/password-api.component";
import { NumberApiComponent } from "../examples/number-input/number-api/number-api.component";
import { NumberImportComponent } from "../examples/number-input/number-import/number-import.component";
import { NumberExampleComponent } from "../examples/number-input/number-example/number-example.component";
import { NumberPropertiesComponent } from "../examples/number-input/number-properties/number-properties.component";
import { DateInputApiComponent } from "../examples/date-input/date-api/date-api.component";
import { DateInputImportComponent } from "../examples/date-input/date-import/date-import.component";
import { DateInputExampleComponent } from "../examples/date-input/date-example/date-example.component";
import { DateInputPropertiesComponent } from "../examples/date-input/date-properties/date-properties.component";
import { TextareaApiComponent } from "../examples/textarea/textarea-api/textarea-api.component";
import { TextareaImportComponent } from "../examples/textarea/textarea-import/textarea-import.component";
import { TextareaExampleComponent } from "../examples/textarea/textarea-example/textarea-example.component";
import { TextareaPropertiesComponent } from "../examples/textarea/textarea-properties/textarea-properties.component";
import { FileInputApiComponent } from "../examples/file-input/file-input-api/file-input-api.component";
import { FileInputExampleComponent } from "../examples/file-input/file-input-example/file-input-example.component";
import { FileInputImportComponent } from "../examples/file-input/file-input-import/file-input-import.component";
import { FileInputPropertiesComponent } from "../examples/file-input/file-input-properties/file-input-properties.component";
import { SelectApiComponent } from "../examples/select/select-api/select-api.component";
import { SelectExampleComponent } from "../examples/select/select-example/select-example.component";
import { SelectImportComponent } from "../examples/select/select-import/select-import.component";
import { SelectPropertiesComponent } from "../examples/select/select-properties/select-properties.component";
import { AutosuggestPropertiesComponent } from "../examples/autosuggest/autosuggest-properties/autosuggest-properties.component";
import { AutosuggestExampleComponent } from "../examples/autosuggest/autosuggest-example/autosuggest-example.component";
import { V3SelectApiComponent } from "../examples/v3-select/v3-select-api/v3-select-api.component";
import { V3SelectExampleComponent } from "../examples/v3-select/v3-select-example/v3-select-example.component";
import { V3SelectPropertiesComponent } from "../examples/v3-select/v3-select-properties/v3-select-properties.component";

@NgModule({
  declarations: [DynamicComponentComponent],
  imports: [BrowserModule, FormsModule, PortalModule],
  exports: [DynamicComponentComponent],
  entryComponents: [
    AccordionExampleComponent,
    AccordionTablePropertiesComponent,
    AccordionGroupExampleComponent,
    AccordionGroupTablePropertiesComponent,
    AlertExampleComponent,
    AlertComponentPropertiesComponent,
    ApplicationLayoutApiComponent,
    ApplicationLayoutExamplesComponent,
    BoxExampleComponent,
    BoxTablePropertiesComponent,
    ButtonTablePropertiesComponent,
    ButtonExampleComponent,
    CardExampleComponent,
    CardTablePropertiesComponent,
    CardApiComponent,
    CheckboxExampleComponent,
    CheckboxPropertiesComponent,
    ChipExampleComponent,
    ChipImportComponent,
    ChipTablePropertiesComponent,
    DatePropertiesComponent,
    DateExampleComponent,
    FooterExampleComponent,
    FooterTablePropertiesComponent,
    OverviewInstallComponent,
    OverviewUseComponent,
    OverviewSupportComponent,
    OverviewThemesComponent,
    RadioPropertiesComponent,
    RadioExampleComponent,
    V3SelectExampleComponent,
    V3SelectPropertiesComponent,
    SliderPropertiesComponent,
    SliderExampleComponent,
    SpinnerExampleComponent,
    SpinnerTablePropertiesComponent,
    SpinnerApiComponent,
    SwitchExampleComponent,
    SwitchTablePropertiesComponent,
    TextInputExampleComponent,
    TextInputTablePropertiesComponent,
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    TableExampleComponent,
    TablePropertiesComponent,
    TabbedSectionExampleComponent,
    TabbedSectionNotesComponent,
    TabbedSectionTablePropertiesComponent,
    TabbedSectionApiComponent,
    TagExampleComponent,
    TagTablePropertiesComponent,
    ProgressbarTablePropertiesComponent,
    ProgressbarExampleComponent,
    ProgressbarApiComponent,
    TabsTablePropertiesComponent,
    TabsExampleComponent,
    HeaderExampleComponent,
    HeaderTablePropertiesComponent,
    UploadTablePropertiesComponent,
    UploadExampleComponent,
    PaginatorTablePropertiesComponent,
    LinkExampleComponent,
    LinkTablePropertiesComponent,
    SidenavExampleComponent,
    SidenavTablePropertiesComponent,
    WizardExampleComponent,
    WizardTablePropertiesComponent,
    HeadingTablePropertiesComponent,
    HeadingExampleComponent,
    ResultsetTableExampleComponent,
    ResultsetTablePropertiesComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    ResultsetTableDirectivesComponent,
    ResultsetTableDirectivesComponent,
    AccordionImportComponent,
    AccordionGroupImportComponent,
    AlertImportComponent,
    BoxImportComponent,
    ButtonImportComponent,
    CardImportComponent,
    CheckboxImportComponent,
    DateImportComponent,
    DialogImportComponent,
    DropdownImportComponent,
    FooterImportComponent,
    HeaderImportComponent,
    HeadingImportComponent,
    LinkImportComponent,
    PaginatorImportComponent,
    ProgressbarImportComponent,
    RadioImportComponent,
    ResultsetTableImportComponent,
    V3SelectImportComponent,
    SidenavImportComponent,
    SliderImportComponent,
    SpinnerImportComponent,
    SwitchImportComponent,
    TabbedSectionImportComponent,
    TableImportComponent,
    TabsImportComponent,
    TagImportComponent,
    TextInputImportComponent,
    UploadImportComponent,
    WizardImportComponent,
    ButtonApiComponent,
    CheckboxApiComponent,
    RadioApiComponent,
    LinkApiComponent,
    SliderApiComponent,
    V3SelectApiComponent,
    BoxApiComponent,
    ChipApiComponent,
    ColorPreviewComponent,
    SwitchApiComponent,
    TextInputApiComponent,
    V3TextareaApiComponent,
    V3TextareaPropertiesComponent,
    V3TextareaExampleComponent,
    V3TextareaImportComponent,
    TagApiComponent,
    DateApiComponent,
    SidenavApiComponent,
    FooterApiComponent,
    HeaderApiComponent,
    WizardApiComponent,
    AccordionApiComponent,
    AccordionGroupApiComponent,
    DialogApiComponent,
    DropdownApiComponent,
    TableApiComponent,
    PaginatorApiComponent,
    TabsApiComponent,
    AlertApiComponent,
    HeadingApiComponent,
    UploadApiComponent,
    ResultsetTableApiComponent,
    ToggleGroupExampleComponent,
    ToggleGroupImportComponent,
    ToggleGroupTablePropertiesComponent,
    ToggleGroupApiComponent,
    InputTextPropertiesComponent,
    InputTextApiComponent,
    InputTextExampleComponent,
    InputTextImportComponent,
    PasswordApiComponent,
    PasswordExampleComponent,
    PasswordImportComponent,
    PasswordPropertiesComponent,
    NumberApiComponent,
    NumberImportComponent,
    NumberExampleComponent,
    NumberPropertiesComponent,
    DateInputApiComponent,
    DateInputImportComponent,
    DateInputExampleComponent,
    DateInputPropertiesComponent,
    TextareaApiComponent,
    TextareaImportComponent,
    TextareaExampleComponent,
    TextareaPropertiesComponent,
    FileInputApiComponent,
    FileInputExampleComponent,
    FileInputImportComponent,
    FileInputPropertiesComponent,
    SelectApiComponent,
    SelectExampleComponent,
    SelectImportComponent,
    SelectPropertiesComponent,
    AutosuggestPropertiesComponent,
    AutosuggestExampleComponent
  ],
})
export class DynamicModule {}
