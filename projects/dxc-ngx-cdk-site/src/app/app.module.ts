import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ThemeService, DxcHeaderModule, DxcFooterModule, ThemeModule, V3DxcSelectModule, DxcApplicationLayoutModule } from '@dxc-technology/halstack-angular';
import { ExampleService } from './service/example.service';
import { DesignGuidelinesPageComponent } from './pages/design-guidelines-page/design-guidelines-page.component';
import { AlertModule } from './pages/alert/alert.module';
import { ApplicationLayoutModule } from './pages/application-layout/app-layout.module';
import { BoxModule } from './pages/box/box.module';
import { ButtonModule } from './pages/button/button.module';
import { CardModule } from './pages/card/card.module';
import { CheckboxModule } from './pages/checkbox/checkbox.module';
import { ChipModule } from './pages/chip/chip.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RadioModule } from './pages/radio/radio.module';
import { V3SelectModule } from './pages/v3-select/v3-select.module';
import { SpinnerModule } from './pages/spinner/spinner.module';
import { SwitchModule } from './pages/switch/switch.module';
import { OverviewPageModule } from './pages/overview-page/overview-page.module';
import { AccordionModule } from './pages/accordion/accordion.module';
import { DateModule } from './pages/date/date.module';
import { TextInputModule } from './pages/text-input/text-input.module';
import { SliderModule } from './pages/slider/slider.module';
import { FooterModule } from './pages/footer/footer.module';
import { DropdownModule } from './pages/dropdown/dropdown.module';
import { DialogModule } from './pages/dialog/dialog.module';
import { TableModule } from './pages/table/table.module';
import { TagModule } from './pages/tag/tag.module';
import { TabbedSectionInfoModule } from './pages/tabbed-section-info/tabbed-section-info.module';
import { ProgressbarModule } from './pages/progressbar/progressbar.module';
import { TabsModule } from './pages/tabs/tabs.module';
import { HeaderModule } from './pages/header/header.module';
import { UploadModule } from './pages/upload/upload.module';
import { PaginatorModule } from './pages/paginator/paginator.module';
import { ComponentsPageModule } from './pages/components-page/components-page.module';
import { ResultsetTableModule } from './pages/resultset-table/resultset-table.module';
import { WizardModule } from './pages/wizard/wizard.module';
import { SidenavModule } from './pages/sidenav/sidenav.module';
import { LinkModule } from './pages/link/link.module';
import { HeadingModule } from './pages/heading/heading.module';
import { ComponentsSidenavModule } from './pages/components-sidenav/components-sidenav.module';
import { TextAreaModule } from './pages/text-area/text-area.module';
import { ToggleGroupModule } from './pages/toggleGroup/toggleGroup.module';
import { DxcLinkModule } from '../../../dxc-ngx-cdk/src/lib/dxc-link/dxc-link.module';
import { DxcHeadingModule } from '../../../dxc-ngx-cdk/src/lib/dxc-heading/dxc-heading.module';
import { DxcBoxModule } from '../../../dxc-ngx-cdk/src/lib/dxc-box/dxc-box.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AccordionGroupModule } from './pages/accordion-group/accordion-group.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { ThemeBuilderSidenavModule } from './pages/theme-builder/theme-builder-sidenav/theme-builder-sidenav.module';
import { NewInputTextModule } from './pages/new-input-text/new-input-text.module';
import { PasswordModule } from './pages/password/password.module';
import { NumberModule } from './pages/number/number.module';
import { DateInputModule } from './pages/date-input/date-input.module';
import { NewTextareaModule } from './pages/new-textarea/new-textarea.module';
import { FileInputModule } from './pages/file-input/file-input.module';
import { SelectModule } from './pages/select/select.module';
import { AutosuggestModule } from './pages/autosuggest/autosuggest.module';

@NgModule({
  declarations: [
    AppComponent,
    DesignGuidelinesPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    OverviewPageModule,
    DxcHeaderModule,
    DxcFooterModule,
    DxcLinkModule,
    DxcHeadingModule,
    DxcBoxModule,
    AccordionModule,
    AlertModule,
    ApplicationLayoutModule,
    BoxModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ChipModule,
    DateModule,
    FooterModule,
    HeaderModule,
    RadioModule,
    V3SelectModule,
    SpinnerModule,
    SwitchModule,
    TextInputModule,
    TextAreaModule,
    DropdownModule,
    DialogModule,
    TabbedSectionInfoModule,
    TableModule,
    TagModule,
    PaginatorModule,
    ProgressbarModule,
    TabsModule,
    UploadModule,
    ComponentsPageModule,
    ComponentsSidenavModule,
    WizardModule,
    SidenavModule,
    ThemeModule,
    LinkModule,
    SliderModule,
    HeadingModule,
    ResultsetTableModule,
    V3DxcSelectModule,
    ToggleGroupModule,
    DxcApplicationLayoutModule,
    ScullyLibModule,
    AccordionGroupModule,
    ThemeBuilderSidenavModule,
    NewInputTextModule,
    PasswordModule,
    NumberModule,
    DateInputModule,
    NewTextareaModule,
    FileInputModule,
    SelectModule,
    AutosuggestModule
  ],
  providers: [
    { provide: 'ThemeService', useClass: ThemeService },
    { provide: 'ExampleService', useClass: ExampleService }

  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
