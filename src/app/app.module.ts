import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonInfoComponent } from './pages/button/button-info.component';
import { SliderInfoComponent } from './pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checkbox/checkbox-info.component';
import { DateInfoComponent } from './pages/date/date-info.component';
import { DialogInfoComponent } from './pages/dialog/dialog-info.component';
import { HeaderInfoComponent } from './pages/header/header-info.component';
import { ToggleInfoComponent } from './pages/toggle/toggle-info.component';
import { TextInputInfoComponent } from './pages/inputText/text-input-info.component';
import { SelectInfoComponent } from './pages/select/select-info.component';
import { SpinnerInfoComponent } from './pages/spinner/spinner.component';
import { SwitchInfoComponent } from './pages/switch/switch-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioInfoComponent } from './pages/radio/radio-info.component';
import { DropdownInfoComponent } from './pages/dropdown/dropdown-info.component';
import { FooterInfoComponent } from './pages/footer/footer-info.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { AlertComponent } from './pages/alert/alert.component';
import { BoxComponent } from './pages/box/box.component';
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './pages/all/all.component';
import { TableInfoComponent } from './pages/table/table-info.component';
import { CardInfoComponent } from './pages/card/card-info.component';
import { TagInfoComponent } from './pages/tag-info/tag-info.component';
import { ProgressInfoComponent } from './pages/progressBar/progressBar-info.component';
import { TabbedSectionComponent } from './pages/tabbed-section/tabbed-section.component';
import { TabsInfoComponent } from './pages/tabs/tabs-info.component';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { LinkInfoComponent } from './pages/link/link-info.component';
import { SidenavInfoComponent } from './pages/sidenav/sidenav-info.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { DxcWizardModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-wizard/dxc-wizard.module';
import { CommonModule } from '@angular/common';
import { DxcAccordionModule, DXCAlertModule, DxcBoxModule, DxcButtonModule, DxcCardModule, 
  DxcCheckboxModule, DXCDialogModule, DXCDropdownModule, 
  DXCFooterModule, DXCHeaderModule, DXCInputTextModule, DxcProgressbarModule, 
  DXCSelectModule, DxcSpinnerModule, DxcSwitchModule, DXCToggleModule, 
  DxcTabsModule, DXCUploadModule, DxcTableModule, DxcDateModule, DxcTagModule, DxcRadioModule, 
  DxcSliderModule, DxcTabbedSectionModule,
  DxcSideNavModule, DxcPaginatorModule, DxcLinkModule, ThemeService } from '@diaas/dxc-ngx-cdk';

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
    ToggleInfoComponent,
    AccordionComponent,
    AlertComponent,
    BoxComponent,
    DropdownInfoComponent,
    FooterInfoComponent,
    TextInputInfoComponent,
    SelectInfoComponent,
    SidenavInfoComponent,
    SpinnerInfoComponent,
    SwitchInfoComponent,
    TableInfoComponent,
    AllComponent,
    TagInfoComponent,
    ProgressInfoComponent,
    TabbedSectionComponent,
    TabsInfoComponent,
    PaginatorComponent,
    WizardComponent,
    LinkInfoComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    DxcAccordionModule,
    DXCAlertModule,
    DxcBoxModule,
    DxcButtonModule,
    DxcCardModule,
    DxcCheckboxModule,
    DXCDialogModule,
    DXCDropdownModule,
    DXCFooterModule,
    DXCHeaderModule,
    DXCInputTextModule,
    DxcProgressbarModule,
    DXCSelectModule,
    DxcSideNavModule,
    DxcSpinnerModule,
    DxcSwitchModule,
    DXCToggleModule,
    DxcTabsModule,
    DXCUploadModule,
    DxcTableModule,
    DxcDateModule,
    DxcTagModule,
    DxcRadioModule,
    DxcSliderModule,
    DxcTabbedSectionModule,
    DxcPaginatorModule,
    DxcWizardModule,
    HttpClientModule,
    DxcLinkModule
  ],
  providers: [{ provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
