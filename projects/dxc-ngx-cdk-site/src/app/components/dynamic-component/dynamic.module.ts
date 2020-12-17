import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { DynamicComponentComponent } from "./dynamic-component.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AccordionExampleComponent } from "../examples/accordion/accordion-example/accordion-example.component";
import { AccordionTablePropertiesComponent } from "../examples/accordion/properties/accordion-table-properties/accordion-table-properties.component";
import { AlertExampleComponent } from "../examples/alert/alert-example/alert-example.component";
import { AlertComponentPropertiesComponent } from "../examples/alert/properties/alert-properties/alert-properties.component";
import { ApplicationLayoutApiComponent } from '../examples/layout/app-layout-api/app-layout-api.component';
import { ApplicationLayoutThemeComponent } from '../examples/layout/app-layout-theme/app-layout-theme.component';
import { ApplicationLayoutExamplesComponent } from '../examples/layout/app-layout-examples/app-layout-examples.component';
import { AutocompleteAsyncControlledComponent } from '../examples/autocomplete/autocomplete-asynchronous-controlled/autocomplete-asynchronous-controlled.component';
import { AutocompleteAsyncUncontrolledComponent } from '../examples/autocomplete/autocomplete-asynchronous-uncontrolled/autocomplete-asynchronous-uncontrolled.component';
import { AutocompleteExampleComponent } from '../examples/autocomplete/autocomplete-example/autocomplete-example.component';
import { AutocompleteSyncControlledComponent } from '../examples/autocomplete/autocomplete-synchronous-controlled/autocomplete-synchronous-controlled.component';
import { AutocompleteSyncUncontrolledComponent } from '../examples/autocomplete/autocomplete-synchronous-uncontrolled/autocomplete-synchronous-uncontrolled.component';
import { AutocompleteUsageComponent } from '../examples/autocomplete/autocomplete-usage/autocomplete-usage.component';
import { ButtonModesComponent } from "../examples/button/button-modes/button-modes.component";
import { ButtonWithIconComponent } from "../examples/button/button-with-icon/button-with-icon.component";
import { ButtonExampleComponent } from "../examples/button/button-example/button-example.component";
import { ButtonSizedComponent } from "../examples/button/button-sized/button-sized.component";
import { ButtonTablePropertiesComponent } from "../examples/button/properties/button-table-properties/button-table-properties.component";
import { ButtonFilledParentComponent } from "../examples/button/button-filled-parent/button-filled-parent.component";
import { BoxBasicComponent } from "../examples/box/box-basic/box-basic.component";
import { BoxExampleComponent } from "../examples/box/box-example/box-example.component";
import { BoxTablePropertiesComponent } from "../examples/box/properties/box-table-properties/box-table-properties.component";
import { CardActionComponent } from "../examples/card/card-action/card-action.component";
import { CardDefaultComponent } from "../examples/card/card-default/card-default.component";
import { CardExampleComponent } from "../examples/card/card-example/card-example.component";
import { CardLinkedComponent } from "../examples/card/card-linked/card-linked.component";
import { CardTablePropertiesComponent } from "../examples/card/properties/card-table-properties/card-table-properties.component";
import { CheckboxLabelPositionComponent } from "../examples/checkbox/checkbox-label-position/checkbox-label-position.component";
import { CheckboxPropertiesComponent } from "../examples/checkbox/properties/checkbox-properties/checkbox-properties.component";
import { CheckboxSimpleComponent } from "../examples/checkbox/checkbox-simple/checkbox-simple.component";
import { CheckboxSizedComponent } from "../examples/checkbox/checkbox-sized/checkbox-sized.component";
import { CheckboxExampleComponent } from "../examples/checkbox/checkbox-example/checkbox-example.component";
import { ChipExampleComponent } from '../examples/chip/chip-example/chip-example.component';
import { ChipImportComponent } from '../examples/chip/chip-import/chip-import.component';
import { ChipTablePropertiesComponent } from '../examples/chip/properties/box-table-properties/chip-table-properties.component';
import { DatePropertiesComponent } from "../examples/date/properties/date-properties/date-properties.component";
import { DateSizedComponent } from "../examples/date/date-sized/date-sized.component";
import { DateExampleComponent } from "../examples/date/date-example/date-example.component";
import { DateSimpleComponent } from "../examples/date/date-simple/date-simple.component";
import { OverviewInstallComponent } from "../overview/overview-install/overview-install.component";
import { OverviewUseComponent } from "../overview/overview-use/overview-use.component";
import { OverviewSupportComponent } from "../overview/overview-support/overview-support.component";
import { OverviewThemesComponent } from '../overview/overview-themes/overview-themes.component';
import { RadioExampleComponent } from "../examples/radio/radio-example/radio-example.component";
import { RadioPropertiesComponent } from "../examples/radio/properties/radio-properties/radio-properties.component";
import { RadioSimpleComponent } from "../examples/radio/radio-simple/radio-simple.component";
import { RadioLabelPositionComponent } from "../examples/radio/radio-label-position/radio-label-position.component";
import { RadioGroupComponent } from "../examples/radio/radio-group/radio-group.component";
import { RadioSizedComponent } from "../examples/radio/radio-sized/radio-sized.component";
import { SelectDefaultComponent } from "../examples/select/select-default/select-default.component";
import { SelectExampleComponent } from "../examples/select/select-example/select-example.component";
import { SelectIconsComponent } from "../examples/select/select-icons/select-icons.component";
import { SelectMultipleComponent } from "../examples/select/select-multiple/select-multiple.component";
import { SelectPropertiesComponent } from "../examples/select/properties/select-properties/select-properties.component";
import { SliderPropertiesComponent } from "../examples/slider/properties/slider-properties/slider-properties.component";
import { SliderExampleComponent } from "../examples/slider/slider-example/slider-example.component";
import { SliderDefaultComponent } from "../examples/slider/slider-default/slider-default.component";
import { SliderDisabledComponent } from "../examples/slider/slider-disabled/slider-disabled.component";
import { SliderDiscreteComponent } from "../examples/slider/slider-discrete/slider-discrete.component";
import { SliderUnlimitedComponent } from "../examples/slider/slider-unlimited/slider-unlimited.component";
import { SliderSizedComponent } from "../examples/slider/slider-sized/slider-sized.component";
import { SliderInputComponent } from "../examples/slider/slider-input/slider-input.component";
import { SliderContinuousComponent } from "../examples/slider/slider-continuous/slider-continuous.component";
import { SpinnerExampleComponent } from "../examples/spinner/spinner-example/spinner-example.component";
import { SpinnerTablePropertiesComponent } from "../examples/spinner/properties/spinner-table-properties/spinner-table-properties.component";
import { SwitchExampleComponent } from "../examples/switch/switch-example/switch-example.component";
import { SwitchLabelComponent } from "../examples/switch/switch-label/switch-label.component";
import { SwitchTablePropertiesComponent } from "../examples/switch/properties/switch-table-properties/switch-table-properties.component";
import { TextInputTablePropertiesComponent } from "../examples/text-input/properties/text-input-table-properties/text-input-table-properties.component";
import { TextInputExampleComponent } from "../examples/text-input/text-input-example/text-input-example.component";
import { TextInputDefaultComponent } from "../examples/text-input/text-input-default/text-input-default.component";
import { TextInputFillParentComponent } from "../examples/text-input/text-input-fill-parent/text-input-fill-parent.component";
import { TextInputSizedComponent } from "../examples/text-input/text-input-sized/text-input-sized.component";
import { TextInputPrefixSuffixComponent } from "../examples/text-input/text-input-prefix-suffix/text-input-prefix-suffix.component";
import { FooterExampleComponent } from "../examples/footer/footer-example/footer-example.component";
import { FooterTablePropertiesComponent } from "../examples/footer/properties/footer-table-properties/footer-table-properties.component";
import { FooterDefaultComponent } from "../examples/footer/footer-default/footer-default.component";
import { FooterCustomContentComponent } from "../examples/footer/footer-custom-content/footer-custom-content.component";
import { DropdownTablePropertiesComponent } from "../examples/dropdown/properties/dropdown-table-properties.component";
import { DropdownExampleComponent } from "../examples/dropdown/dropwdown-example/dropdown-example.component";
import { DialogTablePropertiesComponent } from "../examples/dialog/properties/dialog-table-properties.component";
import { DialogExampleComponent } from "../examples/dialog/dialog-example/dialog-example.component";
import { TableExampleComponent } from "../examples/table/table-example/table-example.component";
import { TablePropertiesComponent } from "../examples/table/properties/table-properties/table-properties.component";
import { TagTablePropertiesComponent } from "../examples/tag/properties/tag-table-properties/tag-table-properties.component";
import { TagSizedComponent } from "../examples/tag/tag-sized/tag-sized.component";
import { TagActionComponent } from "../examples/tag/tag-action/tag-action.component";
import { TagLinkComponent } from "../examples/tag/tag-link/tag-link.component";
import { TagDefaultComponent } from "../examples/tag/tag-default/tag-default.component";
import { TagExampleComponent } from "../examples/tag/tag-example/tag-example.component";
import { ToggleGroupApiComponent } from '../examples/toggleGroup/toggleGroup-api/toggleGroup-api.component';
import { ToggleGroupTablePropertiesComponent } from "../examples/toggleGroup/properties/toggleGroup-table-properties/toggleGroup-table-properties.component";
import { ToggleGroupImportComponent } from '../examples/toggleGroup/toggleGroup-import/toggleGroup-import.component';
import { ToggleGroupControlledComponent } from "../examples/toggleGroup/toggleGroup-controlled/toggleGroup-controlled.component";
import { ToggleGroupDefaultComponent } from "../examples/toggleGroup/toggleGroup-default/toggleGroup-default.component";
import { ToggleGroupDisabledComponent } from "../examples/toggleGroup/toggleGroup-disabled/toggleGroup-disabled.component";
import { ToggleGroupExampleComponent } from "../examples/toggleGroup/toggleGroup-example/toggleGroup-example.component";
import { ToggleGroupMultipleComponent } from "../examples/toggleGroup/toggleGroup-multiple/toggleGroup-multiple.component";
import { ToggleGroupThemeComponent } from "../examples/toggleGroup/toggleGroup-theme/toggleGroup-theme.component";
import { SelectSizedComponent } from "../examples/select/select-sized/select-sized.component";
import { ProgressbarTablePropertiesComponent } from "../examples/progressbar/properties/progressbar-table-properties.component";
import { ProgressbarExampleComponent } from "../examples/progressbar/progressbar-example/progressbar-example.component";
import { TabbedSectionTablePropertiesComponent } from '../examples/tabbed-section/properties/tabbed-section-table-properties/tabbed-section-table-properties.component';
import { TabbedSectionDefaultComponent } from '../examples/tabbed-section/tabbed-section-default/tabbed-section-default.component';
import { TabbedSectionExampleComponent } from '../examples/tabbed-section/tabbed-section-example/tabbed-section-example.component';
import { TabbedSectionNotesComponent } from '../examples/tabbed-section/properties/tabbed-section-notes/tabbed-section-notes.component';
import { TabsTablePropertiesComponent } from "../examples/tabs/properties/tabs-table-properties.component";
import { TabsDefaultComponent } from "../examples/tabs/tabs-default/tabs-default.component";
import { TabsExampleComponent } from "../examples/tabs/tabs-example/tabs-example.component";
import { TabsContentComponent } from "../examples/tabs/tabs-content/tabs-content.component";
import { HeaderExampleComponent } from '../examples/header/header-example/header-example.component';
import { HeaderTablePropertiesComponent } from '../examples/header/properties/header-table-properties/header-table-properties.component';
import { UploadTablePropertiesComponent } from "../examples/upload/properties/upload-table-properties.component";
import { UploadExampleComponent } from "../examples/upload/upload-example/upload-example.component";
import { PaginatorTablePropertiesComponent } from '../examples/paginator/properties/paginator-table-properties/paginator-table-properties.component';
import { TextInputUncontrolledComponent } from '../examples/text-input/text-input-uncontrolled/text-input-uncontrolled.component';
import { SelectUncontrolledComponent } from '../examples/select/select-uncontrolled/select-uncontrolled.component';
import { CheckboxUncontrolledComponent } from '../examples/checkbox/checkbox-uncontrolled/checkbox-uncontrolled.component';
import { RadioUncontrolledComponent } from '../examples/radio/radio-uncontrolled/radio-uncontrolled.component';
import { DateUncontrolledComponent } from '../examples/date/date-uncontrolled/date-uncontrolled.component';
import { SliderUncontrolledComponent } from '../examples/slider/slider-uncontrolled/slider-uncontrolled.component';
import { SwitchUncontrolledComponent } from '../examples/switch/switch-uncontrolled/switch-uncontrolled.component';
import { TabsUncontrolledComponent } from '../examples/tabs/tabs-uncontrolled/tabs-uncontrolled.component';
import { SwitchDefaultComponent } from '../examples/switch/switch-default/switch-default.component';
import { LinkExampleComponent } from '../examples/link/link-example/link-example.component';
import { LinkTablePropertiesComponent } from '../examples/link/properties/link-table-properties/link-table-properties.component';
import { SidenavExampleComponent } from '../examples/sidenav/sidenav-example/sidenav-example.component';
import { SidenavTablePropertiesComponent } from '../examples/sidenav/properties/sidenav-table-properties/sidenav-table-properties.component';
import { WizardExampleComponent } from '../examples/wizard/wizard-example/wizard-example.component';
import { WizardTablePropertiesComponent } from '../examples/wizard/properties/wizard-table-properties/wizard-table-properties.component';
import { WizardDefaultComponent } from '../examples/wizard/wizard-default/wizard-default.component';
import { WizardUncontrolledComponent } from '../examples/wizard/wizard-uncontrolled/wizard-uncontrolled.component';
import { WizardVerticalComponent } from '../examples/wizard/wizard-vertical/wizard-vertical.component';
import { HeadingTablePropertiesComponent } from '../examples/heading/properties/heading-table-properties/heading-table-properties.component';
import { HeadingExampleComponent } from '../examples/heading/heading-example/heading-example.component';
import { ResultsetTableExampleComponent } from '../examples/resultset-table/resultset-table-example/resultset-table-example.component';
import { ResultsetTablePropertiesComponent } from '../examples/resultset-table/properties/resultset-table-properties/resultset-table-properties.component';
import { HeaderDirectivesComponent } from '../examples/header/header-directives/header-directives.component';
import { HeaderExampleResponsiveComponent } from '../examples/header/responsive/header-example-responsive/header-example-responsive.component';
import { ResultsetTableDirectivesComponent } from '../examples/resultset-table/resultset-table-directives/resultset-table-directives.component';
import { AccordionImportComponent } from '../examples/accordion/accordion-import/accordion-import.component';
import { AlertImportComponent } from '../examples/alert/alert-import/alert-import.component';
import { BoxImportComponent } from '../examples/box/box-import/box-import.component';
import { ButtonImportComponent } from '../examples/button/button-import/button-import.component';
import { CardImportComponent } from '../examples/card/card-import/card-import.component';
import { CheckboxImportComponent } from '../examples/checkbox/checkbox-import/checkbox-import.component';
import { DateImportComponent } from '../examples/date/date-import/date-import.component';
import { DialogImportComponent } from '../examples/dialog/dialog-import/dialog-import.component';
import { DropdownImportComponent } from '../examples/dropdown/dropdown-import/dropdown-import.component';
import { FooterImportComponent } from '../examples/footer/footer-import/footer-import.component';
import { HeaderImportComponent } from '../examples/header/header-import/header-import.component';
import { HeadingImportComponent } from '../examples/heading/heading-import/heading-import.component';
import { LinkImportComponent } from '../examples/link/link-import/link-import.component';
import { PaginatorImportComponent } from '../examples/paginator/paginator-import/paginator-import.component';
import { ProgressbarImportComponent } from '../examples/progressbar/progressbar-import/progressbar-import.component';
import { RadioImportComponent } from '../examples/radio/radio-import/radio-import.component';
import { ResultsetTableImportComponent } from '../examples/resultset-table/resultset-table-import/resultset-table-import.component';
import { SelectImportComponent } from '../examples/select/select-import/select-import.component';
import { SidenavImportComponent } from '../examples/sidenav/sidenav-import/sidenav-import.component';
import { SliderImportComponent } from '../examples/slider/slider-import/slider-import.component';
import { SpinnerImportComponent } from '../examples/spinner/spinner-import/spinner-import.component';
import { SwitchImportComponent } from '../examples/switch/switch-import/switch-import.component';
import { TabbedSectionImportComponent } from '../examples/tabbed-section/tabbed-section-import/tabbed-section-import.component';
import { TableImportComponent } from '../examples/table/table-import/table-import.component';
import { TabsImportComponent } from '../examples/tabs/tabs-import/tabs-import.component';
import { TagImportComponent } from '../examples/tag/tag-import/tag-import.component';
import { TextInputImportComponent } from '../examples/text-input/text-input-import/text-input-import.component';
import { UploadImportComponent } from '../examples/upload/upload-import/upload-import.component';
import { WizardImportComponent } from '../examples/wizard/wizard-import/wizard-import.component';
import { ButtonThemeComponent } from '../examples/button/button-theme/button-theme.component';
import { ButtonApiComponent } from '../examples/button/button-api/button-api.component';
import { CheckboxApiComponent } from '../examples/checkbox/checkbox-api/checkbox-api.component';
import { CheckboxThemeComponent } from '../examples/checkbox/checkbox-theme/checkbox-theme.component';
import { RadioApiComponent } from '../examples/radio/radio-api/radio-api.component';
import { RadioThemeComponent } from '../examples/radio/radio-theme/radio-theme.component';
import { LinkApiComponent } from '../examples/link/link-api/link-api.component';
import { LinkThemeComponent } from '../examples/link/link-theme/link-theme.component';
import { SliderThemeComponent } from '../examples/slider/slider-theme/slider-theme.component';
import { SliderApiComponent } from '../examples/slider/slider-api/slider-api.component';
import { SelectApiComponent } from '../examples/select/select-api/select-api.component';
import { SelectThemeComponent } from '../examples/select/select-theme/select-theme.component';
import { BoxApiComponent } from '../examples/box/box-api/box-api.component';
import { BoxThemeComponent } from '../examples/box/box-theme/box-theme.component';
import { TagApiComponent } from '../examples/tag/tag-api/tag-api.component';
import { TagThemeComponent } from '../examples/tag/tag-theme/tag-theme.component';
import { CardApiComponent } from '../examples/card/card-api/card-api.component';
import { CardThemeComponent } from '../examples/card/card-theme/card-theme.component';
import { ChipApiComponent } from '../examples/chip/chip-api/chip-api.component';
import { ChipThemeComponent } from '../examples/chip/chip-theme/chip-theme.component';
import { SwitchApiComponent } from '../examples/switch/switch-api/switch-api.component';
import { SwitchThemeComponent } from '../examples/switch/switch-theme/switch-theme.component';
import { TextInputApiComponent } from '../examples/text-input/text-input-api/text-input-api.component';
import { ColorPreviewComponent } from '../color-preview/color-preview.component';
import { TextInputThemeComponent } from '../examples/text-input/text-input-theme/text-input-theme.component';
import { DateThemeComponent } from '../examples/date/date-theme/date-theme.component';
import { DateApiComponent } from '../examples/date/date-api/date-api.component';
import { SidenavApiComponent } from '../examples/sidenav/sidenav-api/sidenav-api.component';
import { SidenavThemeComponent } from '../examples/sidenav/sidenav-theme/sidenav-theme.component';
import { ProgressbarThemeComponent } from '../examples/progressbar/progressbar-theme/progressbar-theme.component';
import { ProgressbarApiComponent } from '../examples/progressbar/progressbar-api/progressbar-api.component';
import { TabbedSectionApiComponent } from '../examples/tabbed-section/tabbed-section-api/tabbed-section-api.component';
import { TabbedSectionThemeComponent } from '../examples/tabbed-section/tabbed-section-theme/tabbed-section-theme.component';
import { AutocompleteThemeComponent } from '../examples/autocomplete/autocomplete-theme/autocomplete-theme.component';
import { FooterThemeComponent } from '../examples/footer/footer-theme/footer-theme.component';
import { FooterApiComponent } from '../examples/footer/footer-api/footer-api.component';
import { SpinnerApiComponent } from '../examples/spinner/spinner-api/spinner-api.component';
import { SpinnerThemeComponent } from '../examples/spinner/spinner-theme/spinner-theme.component';
import { HeaderThemeComponent } from '../examples/header/header-theme/header-theme.component';
import { HeaderApiComponent } from '../examples/header/header-api/header-api.component';
import { WizardThemeComponent } from '../examples/wizard/wizard-theme/wizard-theme.component';
import { WizardApiComponent } from '../examples/wizard/wizard-api/wizard-api.component';
import { AccordionApiComponent } from '../examples/accordion/accordion-api/accordion-api.component';
import { AccordionThemeComponent } from '../examples/accordion/accordion-theme/accordion-theme.component';
import { DialogApiComponent } from '../examples/dialog/dialog-api/dialog-api.component';
import { DialogThemeComponent } from '../examples/dialog/dialog-theme/dialog-theme.component';
import { DropdownThemeComponent } from '../examples/dropdown/dropdown-theme/dropdown-theme.component';
import { DropdownApiComponent } from '../examples/dropdown/dropdown-api/dropdown-api.component';
import { TableThemeComponent } from '../examples/table/table-theme/table-theme.component';
import { TableApiComponent } from '../examples/table/table-api/table-api.component';
import { PaginatorThemeComponent } from '../examples/paginator/paginator-theme/paginator-theme.component';
import { PaginatorApiComponent } from '../examples/paginator/paginator-api/paginator-api.component';
import { TabsThemeComponent } from '../examples/tabs/tabs-theme/tabs-theme.component';
import { TabsApiComponent } from '../examples/tabs/tabs-api/tabs-api.component';
import { TextAreaApiComponent } from '../examples/text-area/text-area-api/text-area-api.component';
import { TextAreaPropertiesTableComponent } from '../examples/text-area/properties/text-area-properties-table/text-area-properties-table.component';
import { TextAreaThemeComponent } from '../examples/text-area/text-area-theme/text-area-theme.component';
import { TextAreaExampleComponent } from '../examples/text-area/text-area-example/text-area-example.component';
import { TextAreaDefaultComponent } from '../examples/text-area/text-area-default/text-area-default.component';
import { TextAreaImportComponent } from '../examples/text-area/text-area-import/text-area-import.component';
import { TextAreaDisabledComponent } from '../examples/text-area/text-area-disabled/text-area-disabled.component';
import { TextAreaFillParentComponent } from '../examples/text-area/text-area-fill-parent/text-area-fill-parent.component';
import { TextAreaInvalidComponent } from '../examples/text-area/text-area-invalid/text-area-invalid.component';
import { TextAreaRequiredComponent } from '../examples/text-area/text-area-required/text-area-required.component';
import { TextAreaUncontrolledComponent } from '../examples/text-area/text-area-uncontrolled/text-area-uncontrolled.component';
import { AlertThemeComponent } from '../examples/alert/alert-theme/alert-theme.component';
import { AlertApiComponent } from '../examples/alert/alert-api/alert-api.component';
import { HeadingThemeComponent } from '../examples/heading/heading-theme/heading-theme.component';
import { HeadingApiComponent } from '../examples/heading/heading-api/heading-api.component';
import { UploadThemeComponent } from '../examples/upload/upload-theme/upload-theme.component';
import { UploadApiComponent } from '../examples/upload/upload-api/upload-api.component';
import { ResultsetTableApiComponent } from '../examples/resultset-table/resultset-table-api/resultset-table-api.component';
import { ResultsetTableThemeComponent } from '../examples/resultset-table/resultset-table-theme/resultset-table-theme.component';
import { TextInputMaskedComponent } from '../examples/text-input/text-input-masked/text-input-masked.component';

@NgModule({
  declarations: [DynamicComponentComponent],
  imports: [BrowserModule, FormsModule, PortalModule],
  exports: [DynamicComponentComponent],
  entryComponents: [
    AccordionExampleComponent,
    AccordionTablePropertiesComponent,
    AlertExampleComponent,
    AlertComponentPropertiesComponent,
    ApplicationLayoutApiComponent,
    ApplicationLayoutExamplesComponent,
    ApplicationLayoutThemeComponent,
    AutocompleteAsyncControlledComponent,
    AutocompleteAsyncUncontrolledComponent,
    AutocompleteExampleComponent,
    AutocompleteSyncControlledComponent,
    AutocompleteSyncUncontrolledComponent,
    AutocompleteUsageComponent,
    BoxBasicComponent,
    BoxExampleComponent,
    BoxTablePropertiesComponent,
    ButtonModesComponent,
    ButtonWithIconComponent,
    ButtonExampleComponent,
    ButtonFilledParentComponent,
    ButtonSizedComponent,
    ButtonTablePropertiesComponent,
    CardActionComponent,
    CardDefaultComponent,
    CardExampleComponent,
    CardLinkedComponent,
    CardTablePropertiesComponent,
    CardApiComponent,
    CardThemeComponent,
    CheckboxExampleComponent,
    CheckboxLabelPositionComponent,
    CheckboxPropertiesComponent,
    CheckboxSimpleComponent,
    CheckboxUncontrolledComponent,
    CheckboxSizedComponent,
    ChipExampleComponent,
    ChipImportComponent,
    ChipTablePropertiesComponent,
    DatePropertiesComponent,
    DateExampleComponent,
    DateSizedComponent,
    DateSimpleComponent,
    DateUncontrolledComponent,
    FooterExampleComponent,
    FooterTablePropertiesComponent,
    FooterDefaultComponent,
    FooterCustomContentComponent,
    OverviewInstallComponent,
    OverviewUseComponent,
    OverviewSupportComponent,
    OverviewThemesComponent,
    RadioPropertiesComponent,
    RadioSimpleComponent,
    RadioUncontrolledComponent,
    RadioLabelPositionComponent,
    RadioGroupComponent,
    RadioSizedComponent,
    RadioExampleComponent,
    SelectDefaultComponent,
    SelectUncontrolledComponent,
    SelectExampleComponent,
    SelectIconsComponent,
    SelectMultipleComponent,
    SelectPropertiesComponent,
    SelectSizedComponent,
    SliderPropertiesComponent,
    SliderExampleComponent,
    SliderContinuousComponent,
    SliderDefaultComponent,
    SliderDisabledComponent,
    SliderDiscreteComponent,
    SliderUncontrolledComponent,
    SliderInputComponent,
    SliderSizedComponent,
    SliderUnlimitedComponent,
    SpinnerExampleComponent,
    SpinnerTablePropertiesComponent,
    SpinnerApiComponent,
    SpinnerThemeComponent,
    SwitchExampleComponent,
    SwitchDefaultComponent,
    SwitchLabelComponent,
    SwitchTablePropertiesComponent,
    SwitchUncontrolledComponent,
    TextInputExampleComponent,
    TextInputDefaultComponent,
    TextInputUncontrolledComponent,
    TextInputFillParentComponent,
    TextInputPrefixSuffixComponent,
    TextInputSizedComponent,
    TextInputTablePropertiesComponent,
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    TableExampleComponent,
    TablePropertiesComponent,
    TabbedSectionDefaultComponent,
    TabbedSectionExampleComponent,
    TabbedSectionNotesComponent,
    TabbedSectionTablePropertiesComponent,
    TabbedSectionApiComponent,
    TabbedSectionThemeComponent,
    TagExampleComponent,
    TagDefaultComponent,
    TagLinkComponent,
    TagActionComponent,
    TagSizedComponent,
    TagTablePropertiesComponent,
    ProgressbarTablePropertiesComponent,
    ProgressbarExampleComponent,
    ProgressbarThemeComponent,
    ProgressbarApiComponent,
    TabsTablePropertiesComponent,
    TabsDefaultComponent,
    TabsExampleComponent,
    TabsContentComponent,
    TabsUncontrolledComponent,
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
    WizardDefaultComponent,
    WizardUncontrolledComponent,
    WizardVerticalComponent,
    HeadingTablePropertiesComponent,
    HeadingExampleComponent,
    ResultsetTableExampleComponent,
    ResultsetTablePropertiesComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    ResultsetTableDirectivesComponent,
    ResultsetTableDirectivesComponent,
    AccordionImportComponent,
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
    SelectImportComponent,
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
    ButtonThemeComponent,
    ButtonApiComponent,
    CheckboxApiComponent,
    CheckboxThemeComponent,
    RadioApiComponent,
    RadioThemeComponent,
    LinkApiComponent,
    LinkThemeComponent,
    SliderThemeComponent,
    SliderApiComponent,
    SelectApiComponent,
    SelectThemeComponent,
    BoxApiComponent,
    BoxThemeComponent,
    ChipApiComponent,
    ChipThemeComponent,
    ColorPreviewComponent,
    SwitchApiComponent,
    SwitchThemeComponent,
    TextInputApiComponent,
    TextInputThemeComponent,
    TextAreaApiComponent,
    TextAreaPropertiesTableComponent,
    TextAreaThemeComponent,
    TextAreaExampleComponent,
    TextAreaDefaultComponent,
    TextAreaImportComponent,
    TextAreaDisabledComponent,
    TextAreaFillParentComponent,
    TextAreaInvalidComponent,
    TextAreaRequiredComponent,
    TextAreaUncontrolledComponent,
    TagApiComponent,
    TagThemeComponent,
    DateApiComponent,
    DateThemeComponent,
    SidenavApiComponent,
    SidenavThemeComponent,
    AutocompleteThemeComponent,
    FooterApiComponent,
    FooterThemeComponent,
    HeaderApiComponent,
    HeaderThemeComponent,
    WizardApiComponent,
    WizardThemeComponent,
    AccordionApiComponent,
    AccordionThemeComponent,
    DialogApiComponent,
    DialogThemeComponent,
    DropdownApiComponent,
    DropdownThemeComponent,
    TableApiComponent,
    TableThemeComponent,
    PaginatorApiComponent,
    PaginatorThemeComponent,
    TabsApiComponent,
    TabsThemeComponent,
    AlertApiComponent,
    AlertThemeComponent,
    HeadingApiComponent,
    HeadingThemeComponent,
    UploadApiComponent,
    UploadThemeComponent,
    ResultsetTableApiComponent,
    ResultsetTableThemeComponent,
    TextInputMaskedComponent,
    ToggleGroupControlledComponent,
    ToggleGroupDefaultComponent,
    ToggleGroupDisabledComponent,
    ToggleGroupExampleComponent,
    ToggleGroupMultipleComponent,
    ToggleGroupImportComponent,
    ToggleGroupTablePropertiesComponent,
    ToggleGroupApiComponent,
    ToggleGroupThemeComponent
  ]
})
export class DynamicModule { }
