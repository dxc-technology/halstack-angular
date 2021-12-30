import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonInfoComponent } from "./pages/button/button-info.component";
import { SliderInfoComponent } from "./pages/slider/slider-info.component";
import { CheckboxInfoComponent } from "./pages/checkbox/checkbox-info.component";
import { DateInfoComponent } from "./pages/date/date-info.component";
import { DialogInfoComponent } from "./pages/dialog/dialog-info.component";
import { HeaderInfoComponent } from "./pages/header/header-info.component";
import { TextInputInfoComponent } from "./pages/inputText/text-input-info.component";
import { SelectInfoComponent } from "./pages/select/select-info.component";
import { SpinnerInfoComponent } from "./pages/spinner/spinner.component";
import { SwitchInfoComponent } from "./pages/switch/switch-info.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RadioInfoComponent } from "./pages/radio/radio-info.component";
import { DropdownInfoComponent } from "./pages/dropdown/dropdown-info.component";
import { FooterInfoComponent } from "./pages/footer/footer-info.component";
import { AccordionComponent } from "./pages/accordion/accordion.component";
import { AlertComponent } from "./pages/alert/alert.component";
import { BoxComponent } from "./pages/box/box.component";
import { HttpClientModule } from "@angular/common/http";
import { AllComponent } from "./pages/all/all.component";
import { TableInfoComponent } from "./pages/table/table-info.component";
import { CardInfoComponent } from "./pages/card/card-info.component";
import { TagInfoComponent } from "./pages/tag-info/tag-info.component";
import { ProgressInfoComponent } from "./pages/progressBar/progressBar-info.component";
import { TabbedSectionComponent } from "./pages/tabbed-section/tabbed-section.component";
import { TabsInfoComponent } from "./pages/tabs/tabs-info.component";
import { PaginatorComponent } from "./pages/paginator/paginator.component";
import { LinkInfoComponent } from "./pages/link/link-info.component";
import { SidenavInfoComponent } from "./pages/sidenav/sidenav-info.component";
import { WizardComponent } from "./pages/wizard/wizard.component";
import { HeadingInfoComponent } from "./pages/heading/heading-info.component";
import { ResultsetTableComponent } from "./pages/resultset-table/resultset-table.component";
import { AccordionGroupComponent } from './pages/accordion-group/accordion-group.component';
import { CommonModule } from "@angular/common";
import {
  DxcAccordionModule,
  DxcAccordionGroupModule,
  DxcAlertModule,
  DxcBoxModule,
  DxcButtonModule,
  DxcCardModule,
  DxcCheckboxModule,
  DxcDialogModule,
  DxcDropdownModule,
  DxcFooterModule,
  DxcHeaderModule,
  DxcInputTextModule,
  DxcProgressbarModule,
  V3DxcSelectModule,
  DxcSpinnerModule,
  DxcSwitchModule,
  DxcTabsModule,
  DxcUploadModule,
  DxcTableModule,
  DxcDateModule,
  DxcTagModule,
  DxcRadioModule,
  DxcSliderModule,
  DxcTabbedSectionModule,
  DxcSideNavModule,
  DxcPaginatorModule,
  DxcLinkModule,
  ThemeService,
  DxcWizardModule,
  DxcHeadingModule,
  DxcResultsetTableModule,
  V3DxcTextareaModule,
  DxcToggleGroupModule,
  ThemeModule,
  DxcApplicationLayoutModule,
  DxcChipModule,
  BackgroundProviderModule,
  DxcTextInputModule,
  DxcNewDateModule,
  DxcPasswordModule,
  DxcNumberModule,
  DxcNewTextareaModule,
} from "@dxc-technology/halstack-angular";
import { UploadComponent } from "./pages/upload/upload.component";
import { TextareaInfoComponent } from "./pages/textarea/textarea-info.component";
import { ApplicationInfoComponent } from './pages/standard/application-info.component';
import { ChipComponent } from './pages/chip/chip.component';
import { ToggleGroupInfoComponent } from './pages/toggle-group/toggle-group-info.component';
import { NewInpuTextComponent } from './pages/new-input-text/new-input-text.component';
import { PasswordComponent } from './pages/password/password.component';
import { NumberComponent } from './pages/number/number.component';
import { NewDateComponent } from './pages/new-date/new-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonInfoComponent,
    SliderInfoComponent,
    CardInfoComponent,
    CheckboxInfoComponent,
    DateInfoComponent,
    DialogInfoComponent,
    HeaderInfoComponent,
    RadioInfoComponent,
    AccordionComponent,
    AlertComponent,
    BoxComponent,
    DropdownInfoComponent,
    FooterInfoComponent,
    TextInputInfoComponent,
    TextareaInfoComponent,
    SelectInfoComponent,
    SidenavInfoComponent,
    SpinnerInfoComponent,
    SwitchInfoComponent,
    TableInfoComponent,
    ToggleGroupInfoComponent,
    AllComponent,
    TagInfoComponent,
    ProgressInfoComponent,
    TabbedSectionComponent,
    TabsInfoComponent,
    PaginatorComponent,
    WizardComponent,
    LinkInfoComponent,
    HeadingInfoComponent,
    ResultsetTableComponent,
    UploadComponent,
    ApplicationInfoComponent,
    ChipComponent,
    AccordionGroupComponent,
    NewInpuTextComponent,
    PasswordComponent,
    NumberComponent,
    NewDateComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    DxcAccordionModule,
    DxcAlertModule,
    DxcBoxModule,
    DxcButtonModule,
    DxcCardModule,
    DxcCheckboxModule,
    DxcDialogModule,
    DxcDropdownModule,
    DxcFooterModule,
    DxcHeaderModule,
    DxcInputTextModule,
    DxcProgressbarModule,
    V3DxcSelectModule,
    DxcSideNavModule,
    DxcSpinnerModule,
    DxcSwitchModule,
    DxcTabsModule,
    DxcUploadModule,
    DxcTableModule,
    DxcDateModule,
    DxcTagModule,
    DxcRadioModule,
    DxcSliderModule,
    DxcTabbedSectionModule,
    DxcPaginatorModule,
    DxcWizardModule,
    HttpClientModule,
    DxcLinkModule,
    DxcHeadingModule,
    DxcResultsetTableModule,
    V3DxcTextareaModule,
    DxcToggleGroupModule,
    ThemeModule,
    DxcApplicationLayoutModule,
    DxcChipModule,
    DxcAccordionGroupModule,
    BackgroundProviderModule,
    DxcTextInputModule,
    DxcNewDateModule,
    DxcPasswordModule,
    DxcNumberModule,
    DxcNewTextareaModule
  ],
  providers: [{ provide: "ThemeService", useClass: ThemeService }],
  bootstrap: [AppComponent],
})
export class AppModule { }
