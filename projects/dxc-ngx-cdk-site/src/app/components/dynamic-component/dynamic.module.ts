import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { DynamicComponentComponent } from "./dynamic-component.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AccordionExampleComponent } from "../examples/accordion/accordion-example/accordion-example.component";
import { AccordionTablePropertiesComponent } from "../examples/accordion/properties/accordion-table-properties/accordion-table-properties.component";
import { AccordionDefaultComponent } from "../examples/accordion/accordion-default/accordion-default.component";
import { AccordionAlternativeComponent } from "../examples/accordion/accordion-alternative/accordion-alternative.component";
import { AccordionDisabledComponent } from "../examples/accordion/accordion-disabled/accordion-disabled.component";
import { AccordionAssistiveComponent } from "../examples/accordion/accordion-assistive/accordion-assistive.component";
import { AccordionIconComponent } from "../examples/accordion/accordion-icon/accordion-icon.component";
import { AccordionDarkComponent } from "../examples/accordion/accordion-dark/accordion-dark.component";
import { AccordionControlledComponent } from '../examples/accordion/accordion-controlled/accordion-controlled.component';
import { AlertChildrenComponent } from "../examples/alert/alert-children/alert-children.component";
import { AlertExampleComponent } from "../examples/alert/alert-example/alert-example.component";
import { AlertInfoComponent } from "../examples/alert/alert-info/alert-info.component";
import { AlertModalComponent } from "../examples/alert/alert-modal/alert-modal.component";
import { AlertComponentPropertiesComponent } from "../examples/alert/properties/alert-properties/alert-properties.component";
import { AlertSizedComponent } from "../examples/alert/alert-sized/alert-sized.component";
import { AlertSuccessComponent } from "../examples/alert/alert-success/alert-success.component";
import { AlertWarningComponent } from "../examples/alert/alert-warning/alert-warning.component";
import { AlertErrorComponent } from '../examples/alert/alert-error/alert-error.component';
import { AlertClosableComponent } from '../examples/alert/alert-closable/alert-closable.component';
import { AutocompleteAsyncControlledComponent } from '../examples/autocomplete/autocomplete-asynchronous-controlled/autocomplete-asynchronous-controlled.component';
import { AutocompleteAsyncUncontrolledComponent } from '../examples/autocomplete/autocomplete-asynchronous-uncontrolled/autocomplete-asynchronous-uncontrolled.component';
import { AutocompleteDarkComponent } from '../examples/autocomplete/autocomplete-dark/autocomplete-dark.component';
import { AutocompleteExampleComponent } from '../examples/autocomplete/autocomplete-example/autocomplete-example.component';
import { AutocompleteSyncControlledComponent } from '../examples/autocomplete/autocomplete-synchronous-controlled/autocomplete-synchronous-controlled.component';
import { AutocompleteSyncUncontrolledComponent } from '../examples/autocomplete/autocomplete-synchronous-uncontrolled/autocomplete-synchronous-uncontrolled.component';
import { AutocompleteUsageComponent } from '../examples/autocomplete/autocomplete-usage/autocomplete-usage.component';
import { ButtonModesComponent } from "../examples/button/button-modes/button-modes.component";
import { ButtonWithIconComponent } from "../examples/button/button-with-icon/button-with-icon.component";
import { ButtonExampleComponent } from "../examples/button/button-example/button-example.component";
import { ButtonDarkThemeComponent } from "../examples/button/button-dark-theme/button-dark-theme.component";
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
import { CardOutlinedComponent } from "../examples/card/card-outlined/card-outlined.component";
import { CardTablePropertiesComponent } from "../examples/card/properties/card-table-properties/card-table-properties.component";
import { CardThemedComponent } from "../examples/card/card-themed/card-themed.component";
import { CheckboxDarkThemeComponent } from "../examples/checkbox/checkbox-dark-theme/checkbox-dark-theme.component";
import { CheckboxLabelPositionComponent } from "../examples/checkbox/checkbox-label-position/checkbox-label-position.component";
import { CheckboxPropertiesComponent } from "../examples/checkbox/properties/checkbox-properties/checkbox-properties.component";
import { CheckboxSimpleComponent } from "../examples/checkbox/checkbox-simple/checkbox-simple.component";
import { CheckboxSizedComponent } from "../examples/checkbox/checkbox-sized/checkbox-sized.component";
import { CheckboxExampleComponent } from "../examples/checkbox/checkbox-example/checkbox-example.component";
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
import { RadioDarkThemeComponent } from "../examples/radio/radio-dark-theme/radio-dark-theme.component";
import { RadioGroupComponent } from "../examples/radio/radio-group/radio-group.component";
import { RadioSizedComponent } from "../examples/radio/radio-sized/radio-sized.component";
import { SelectDefaultComponent } from "../examples/select/select-default/select-default.component";
import { SelectExampleComponent } from "../examples/select/select-example/select-example.component";
import { SelectIconsComponent } from "../examples/select/select-icons/select-icons.component";
import { SelectMultipleComponent } from "../examples/select/select-multiple/select-multiple.component";
import { SelectPropertiesComponent } from "../examples/select/properties/select-properties/select-properties.component";
import { SelectThemedComponent } from "../examples/select/select-themed/select-themed.component";
import { SelectUncontrolledMultipleComponent } from '../examples/select/select-uncontrolled-multiple/select-uncontrolled-multiple.component';
import { SliderPropertiesComponent } from "../examples/slider/properties/slider-properties/slider-properties.component";
import { SliderExampleComponent } from "../examples/slider/slider-example/slider-example.component";
import { SliderDefaultComponent } from "../examples/slider/slider-default/slider-default.component";
import { SliderDarkComponent } from "../examples/slider/slider-dark/slider-dark.component";
import { SliderDisabledComponent } from "../examples/slider/slider-disabled/slider-disabled.component";
import { SliderDiscreteComponent } from "../examples/slider/slider-discrete/slider-discrete.component";
import { SliderUnlimitedComponent } from "../examples/slider/slider-unlimited/slider-unlimited.component";
import { SliderSizedComponent } from "../examples/slider/slider-sized/slider-sized.component";
import { SliderInputComponent } from "../examples/slider/slider-input/slider-input.component";
import { SliderContinuousComponent } from "../examples/slider/slider-continuous/slider-continuous.component";
import { SpinnerDeterminedComponent } from "../examples/spinner/spinner-determined/spinner-determined.component";
import { SpinnerExampleComponent } from "../examples/spinner/spinner-example/spinner-example.component";
import { SpinnerSmallComponent } from "../examples/spinner/spinner-small/spinner-small.component";
import { SpinnerThemedComponent } from "../examples/spinner/spinner-themed/spinner-themed.component";
import { SpinnerTablePropertiesComponent } from "../examples/spinner/properties/spinner-table-properties/spinner-table-properties.component";
import { SpinnerUndeterminedComponent } from "../examples/spinner/spinner-undetermined/spinner-undetermined.component";
import { SpinnerOverlayComponent } from '../examples/spinner/spinner-overlay/spinner-overlay.component';
import { SwitchExampleComponent } from "../examples/switch/switch-example/switch-example.component";
import { SwitchLabelComponent } from "../examples/switch/switch-label/switch-label.component";
import { SwitchTablePropertiesComponent } from "../examples/switch/properties/switch-table-properties/switch-table-properties.component";
import { SwitchThemedComponent } from "../examples/switch/switch-themed/switch-themed.component";
import { TextInputTablePropertiesComponent } from "../examples/text-input/properties/text-input-table-properties/text-input-table-properties.component";
import { TextInputExampleComponent } from "../examples/text-input/text-input-example/text-input-example.component";
import { TextInputDarkComponent } from "../examples/text-input/text-input-dark/text-input-dark.component";
import { TextInputDefaultComponent } from "../examples/text-input/text-input-default/text-input-default.component";
import { TextInputFillParentComponent } from "../examples/text-input/text-input-fill-parent/text-input-fill-parent.component";
import { TextInputMultiComponent } from "../examples/text-input/text-input-multi/text-input-multi.component";
import { TextInputSizedComponent } from "../examples/text-input/text-input-sized/text-input-sized.component";
import { TextInputPrefixSuffixComponent } from "../examples/text-input/text-input-prefix-suffix/text-input-prefix-suffix.component";
import { FooterExampleComponent } from "../examples/footer/footer-example/footer-example.component";
import { FooterTablePropertiesComponent } from "../examples/footer/properties/footer-table-properties/footer-table-properties.component";
import { FooterDefaultComponent } from "../examples/footer/footer-default/footer-default.component";
import { FooterCustomContentComponent } from "../examples/footer/footer-custom-content/footer-custom-content.component";
import { DropdownDefaultComponent } from "../examples/dropdown/dropdown-default/dropdown-default.component";
import { DropdownOutlinedComponent } from "../examples/dropdown/dropdown-outlined/dropdown-outlined.component";
import { DropdownTablePropertiesComponent } from "../examples/dropdown/properties/dropdown-table-properties.component";
import { DropdownExampleComponent } from "../examples/dropdown/dropwdown-example/dropdown-example.component";
import { DropdownIconsComponent } from "../examples/dropdown/dropdown-icons/dropdown-icons.component";
import { DropdownDarkComponent } from "../examples/dropdown/dropdown-dark/dropdown-dark.component";
import { ToggleTablePropertiesComponent } from "../examples/toggle/properties/toggle-table-properties/toggle-table-properties.component";
import { ToggleExampleComponent } from "../examples/toggle/toggle-example/toggle-example.component";
import { ToggleOutlinedComponent } from "../examples/toggle/toggle-outlined/toggle-outlined.component";
import { ToggleIconComponent } from "../examples/toggle/toggle-icon/toggle-icon.component";
import { ToggleDefaultComponent } from "../examples/toggle/toggle-default/toggle-default.component";
import { ToggleDarkComponent } from "../examples/toggle/toggle-dark/toggle-dark.component";
import { DialogTablePropertiesComponent } from "../examples/dialog/properties/dialog-table-properties.component";
import { DialogExampleComponent } from "../examples/dialog/dialog-example/dialog-example.component";
import { DialogDefaultComponent } from "../examples/dialog/dialog-default/dialog-default.component";
import { DialogModalComponent } from "../examples/dialog/dialog-modal/dialog-modal.component";
import { DialogCloseComponent } from "../examples/dialog/dialog-close/dialog-close.component";
import { TableSimpleComponent } from "../examples/table/table-simple/table-simple.component";
import { TableExampleComponent } from "../examples/table/table-example/table-example.component";
import { TablePropertiesComponent } from "../examples/table/properties/table-properties/table-properties.component";
import { TagTablePropertiesComponent } from "../examples/tag/properties/tag-table-properties/tag-table-properties.component";
import { TagSizedComponent } from "../examples/tag/tag-sized/tag-sized.component";
import { TagActionComponent } from "../examples/tag/tag-action/tag-action.component";
import { TagLinkComponent } from "../examples/tag/tag-link/tag-link.component";
import { TagDefaultComponent } from "../examples/tag/tag-default/tag-default.component";
import { TagExampleComponent } from "../examples/tag/tag-example/tag-example.component";
import { SelectSizedComponent } from "../examples/select/select-sized/select-sized.component";
import { ProgressbarTablePropertiesComponent } from "../examples/progressbar/properties/progressbar-table-properties.component";
import { ProgressbarExampleComponent } from "../examples/progressbar/progressbar-example/progressbar-example.component";
import { ProgressbarDeterminedComponent } from "../examples/progressbar/progressbar-determined/progressbar-determined.component";
import { ProgressbarUndeterminedComponent } from "../examples/progressbar/progressbar-undetermined/progressbar-undetermined.component";
import { ProgressbarThemedComponent } from "../examples/progressbar/progressbar-themed/progressbar-themed.component";
import { ProgressbarOverlayComponent } from "../examples/progressbar/progressbar-overlay/progressbar-overlay.component";
import { TabbedSectionTablePropertiesComponent } from '../examples/tabbed-section/properties/tabbed-section-table-properties/tabbed-section-table-properties.component';
import { TabbedSectionDefaultComponent } from '../examples/tabbed-section/tabbed-section-default/tabbed-section-default.component';
import { TabbedSectionExampleComponent } from '../examples/tabbed-section/tabbed-section-example/tabbed-section-example.component';
import { TabbedSectionNotesComponent } from '../examples/tabbed-section/properties/tabbed-section-notes/tabbed-section-notes.component';
import { TabsTablePropertiesComponent } from "../examples/tabs/properties/tabs-table-properties.component";
import { TabsDefaultComponent } from "../examples/tabs/tabs-default/tabs-default.component";
import { TabsExampleComponent } from "../examples/tabs/tabs-example/tabs-example.component";
import { TabsThemedComponent } from "../examples/tabs/tabs-themed/tabs-themed.component";
import { TabsUnderlinedComponent } from "../examples/tabs/tabs-underlined/tabs-underlined.component";
import { TabsContentComponent } from "../examples/tabs/tabs-content/tabs-content.component";
import { HeaderExampleComponent } from '../examples/header/header-example/header-example.component';
import { HeaderTablePropertiesComponent } from '../examples/header/properties/header-table-properties/header-table-properties.component';
import { HeaderDefaultComponent } from '../examples/header/header-default/header-default.component';
import { HeaderDarkComponent } from '../examples/header/header-dark/header-dark.component';
import { HeaderUnderlinedComponent } from '../examples/header/header-underlined/header-underlined.component';
import { HeaderCustomContentComponent } from '../examples/header/header-custom-content/header-custom-content.component';
import { UploadTablePropertiesComponent } from "../examples/upload/properties/upload-table-properties.component";
import { UploadDefaultComponent } from "../examples/upload/upload-default/upload-default.component";
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
import { LinkDefaultComponent } from '../examples/link/link-default/link-default.component';
import { LinkExampleComponent } from '../examples/link/link-example/link-example.component';
import { LinkUndercoratedComponent } from '../examples/link/link-undercorated/link-undercorated.component';
import { LinkThemedComponent } from '../examples/link/link-themed/link-themed.component';
import { LinkIconComponent } from '../examples/link/link-icon/link-icon.component';
import { LinkTablePropertiesComponent } from '../examples/link/properties/link-table-properties/link-table-properties.component';
import { SidenavExampleComponent } from '../examples/sidenav/sidenav-example/sidenav-example.component';
import { SidenavTablePropertiesComponent } from '../examples/sidenav/properties/sidenav-table-properties/sidenav-table-properties.component';
import { SidenavDefaultComponent } from '../examples/sidenav/sidenav-default/sidenav-default.component';
import { SidenavContentComponent } from '../examples/sidenav/sidenav-content/sidenav-content.component';
import { SidenavNoArrowComponent } from '../examples/sidenav/sidenav-no-arrow/sidenav-no-arrow.component';
import { WizardExampleComponent } from '../examples/wizard/wizard-example/wizard-example.component';
import { WizardTablePropertiesComponent } from '../examples/wizard/properties/wizard-table-properties/wizard-table-properties.component';
import { WizardDefaultComponent } from '../examples/wizard/wizard-default/wizard-default.component';
import { WizardUncontrolledComponent } from '../examples/wizard/wizard-uncontrolled/wizard-uncontrolled.component';
import { WizardThemedComponent } from '../examples/wizard/wizard-themed/wizard-themed.component';
import { WizardVerticalComponent } from '../examples/wizard/wizard-vertical/wizard-vertical.component';
import { HeadingTablePropertiesComponent } from '../examples/heading/properties/heading-table-properties/heading-table-properties.component';
import { HeadingDefaultComponent } from '../examples/heading/heading-default/heading-default.component';
import { HeadingExampleComponent } from '../examples/heading/heading-example/heading-example.component';
import { HeadingDarkComponent } from '../examples/heading/heading-dark/heading-dark.component';
import { HeadingWeightsComponent } from '../examples/heading/heading-weights/heading-weights.component';

import { ResultsetTableSimpleComponent } from '../examples/resultset-table/resultset-table-simple/resultset-table-simple.component';
import { ResultsetTableExampleComponent } from '../examples/resultset-table/resultset-table-example/resultset-table-example.component';
import { ResultsetTablePropertiesComponent } from '../examples/resultset-table/properties/resultset-table-properties/resultset-table-properties.component';

import { HeaderDirectivesComponent } from '../examples/header/header-directives/header-directives.component';
import { HeaderExampleResponsiveComponent } from '../examples/header/responsive/header-example-responsive/header-example-responsive.component';

import { AccordionImportComponent } from '../examples/accordion/accordion-import/accordion-import.component';
import { AlertImportComponent } from '../examples/alert/alert-import/alert-import.component';
import { BoxImportComponent } from '../examples/box/box-import/box-import.component';

@NgModule({
  declarations: [DynamicComponentComponent],
  imports: [BrowserModule, FormsModule, PortalModule],
  exports: [DynamicComponentComponent],
  entryComponents: [
    AccordionExampleComponent,
    AccordionTablePropertiesComponent,
    AccordionDefaultComponent,
    AccordionAlternativeComponent,
    AccordionDisabledComponent,
    AccordionControlledComponent,
    AccordionAssistiveComponent,
    AccordionIconComponent,
    AccordionDarkComponent,
    AlertChildrenComponent,
    AlertExampleComponent,
    AlertInfoComponent,
    AlertModalComponent,
    AlertComponentPropertiesComponent,
    AlertSizedComponent,
    AlertSuccessComponent,
    AlertWarningComponent,
    AlertErrorComponent,
    AlertClosableComponent,
    AutocompleteAsyncControlledComponent,
    AutocompleteAsyncUncontrolledComponent,
    AutocompleteDarkComponent,
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
    ButtonDarkThemeComponent,
    ButtonFilledParentComponent,
    ButtonSizedComponent,
    ButtonTablePropertiesComponent,
    CardActionComponent,
    CardDefaultComponent,
    CardExampleComponent,
    CardLinkedComponent,
    CardOutlinedComponent,
    CardTablePropertiesComponent,
    CardThemedComponent,
    CheckboxDarkThemeComponent,
    CheckboxExampleComponent,
    CheckboxLabelPositionComponent,
    CheckboxPropertiesComponent,
    CheckboxSimpleComponent,
    CheckboxUncontrolledComponent,
    CheckboxSizedComponent,
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
    RadioDarkThemeComponent,
    RadioGroupComponent,
    RadioSizedComponent,
    RadioExampleComponent,
    SelectDefaultComponent,
    SelectUncontrolledComponent,
    SelectExampleComponent,
    SelectIconsComponent,
    SelectMultipleComponent,
    SelectPropertiesComponent,
    SelectUncontrolledMultipleComponent,
    SelectSizedComponent,
    SelectThemedComponent,
    SliderPropertiesComponent,
    SliderExampleComponent,
    SliderContinuousComponent,
    SliderDarkComponent,
    SliderDefaultComponent,
    SliderDisabledComponent,
    SliderDiscreteComponent,
    SliderUncontrolledComponent,
    SliderInputComponent,
    SliderSizedComponent,
    SliderUnlimitedComponent,
    SpinnerDeterminedComponent,
    SpinnerExampleComponent,
    SpinnerSmallComponent,
    SpinnerTablePropertiesComponent,
    SpinnerThemedComponent,
    SpinnerUndeterminedComponent,
    SpinnerOverlayComponent,
    SwitchExampleComponent,
    SwitchDefaultComponent,
    SwitchLabelComponent,
    SwitchTablePropertiesComponent,
    SwitchThemedComponent,
    SwitchUncontrolledComponent,
    TextInputExampleComponent,
    TextInputDarkComponent,
    TextInputDefaultComponent,
    TextInputUncontrolledComponent,
    TextInputFillParentComponent,
    TextInputMultiComponent,
    TextInputPrefixSuffixComponent,
    TextInputSizedComponent,
    TextInputTablePropertiesComponent,
    DropdownTablePropertiesComponent,
    DropdownExampleComponent,
    DropdownDefaultComponent,
    DropdownOutlinedComponent,
    DropdownIconsComponent,
    DropdownDarkComponent,
    ToggleDarkComponent,
    ToggleDefaultComponent,
    ToggleExampleComponent,
    ToggleIconComponent,
    ToggleOutlinedComponent,
    ToggleTablePropertiesComponent,
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    DialogDefaultComponent,
    DialogModalComponent,
    DialogCloseComponent,
    TableSimpleComponent,
    TableExampleComponent,
    TablePropertiesComponent,
    TabbedSectionDefaultComponent,
    TabbedSectionExampleComponent,
    TabbedSectionNotesComponent,
    TabbedSectionTablePropertiesComponent,
    TagExampleComponent,
    TagDefaultComponent,
    TagLinkComponent,
    TagActionComponent,
    TagSizedComponent,
    TagTablePropertiesComponent,
    ProgressbarTablePropertiesComponent,
    ProgressbarExampleComponent,
    ProgressbarDeterminedComponent,
    ProgressbarUndeterminedComponent,
    ProgressbarThemedComponent,
    ProgressbarOverlayComponent,
    TabsTablePropertiesComponent,
    TabsDefaultComponent,
    TabsExampleComponent,
    TabsThemedComponent,
    TabsUnderlinedComponent,
    TabsContentComponent,
    TabsUncontrolledComponent,
    HeaderExampleComponent,
    HeaderTablePropertiesComponent,
    HeaderDefaultComponent,
    HeaderDarkComponent,
    HeaderUnderlinedComponent,
    HeaderCustomContentComponent,
    UploadTablePropertiesComponent,
    UploadExampleComponent,
    UploadDefaultComponent,
    PaginatorTablePropertiesComponent,
    LinkDefaultComponent,
    LinkExampleComponent,
    LinkUndercoratedComponent,
    LinkThemedComponent,
    LinkIconComponent,
    LinkTablePropertiesComponent,
    SidenavExampleComponent,
    SidenavTablePropertiesComponent,
    SidenavDefaultComponent,
    SidenavContentComponent,
    SidenavNoArrowComponent,
    WizardExampleComponent,
    WizardTablePropertiesComponent,
    WizardDefaultComponent,
    WizardUncontrolledComponent,
    WizardThemedComponent,
    WizardVerticalComponent,
    HeadingTablePropertiesComponent,
    HeadingDefaultComponent,
    HeadingExampleComponent,
    HeadingDarkComponent,
    HeadingWeightsComponent,
    ResultsetTableSimpleComponent,
    ResultsetTableExampleComponent,
    ResultsetTablePropertiesComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    AccordionImportComponent,
    AlertImportComponent,
    BoxImportComponent
  ]
})
export class DynamicModule {}
