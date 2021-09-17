import { NgModule, APP_INITIALIZER } from "@angular/core";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  DxcSelectModule,
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
  DxcTextareaModule,
  DxcToggleGroupModule,
  ThemeModule,
  DxcApplicationLayoutModule,
  DxcChipModule,
  DxcCommonModule,
  DxcLocalStorageModule,
  DxcModalFormModule,
  DxcCrudTableModule,
  DxcResizeService,
  DxcSizeDetectorModule
} from "@dxc-technology/halstack-angular";
import { UploadComponent } from "./pages/upload/upload.component";
import { TextareaInfoComponent } from "./pages/textarea/textarea-info.component";
import { ApplicationInfoComponent } from './pages/standard/application-info.component';
import { ChipComponent } from './pages/chip/chip.component';
import { ToggleGroupInfoComponent } from './pages/toggle-group/toggle-group-info.component';
import { AppInitializer } from './app-initializer.service';
import { CrudGridComponent } from './pages/crud-grid/crud-grid.component';

export function startupServiceFactory(startupService: AppInitializer) {
  return (): Promise<any> => {
    return startupService.loadConfig();
  };
}

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
    CrudGridComponent,
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
    DxcSelectModule,
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
    DxcTextareaModule,
    DxcToggleGroupModule,
    ThemeModule,
    DxcApplicationLayoutModule,
    DxcChipModule,
    DxcCrudTableModule,
    DxcAccordionGroupModule,
    DxcCommonModule,
    ReactiveFormsModule,
    FormsModule,
    DxcSizeDetectorModule,
    DxcLocalStorageModule.forRoot({
      prefix: '',
      delimiter: ''
    }),
    DxcModalFormModule
  ],

  providers: [AppInitializer,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppInitializer],
      multi: true

    },
    {
      provide: 'ThemeService', useClass:
        ThemeService
    }, DxcResizeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
