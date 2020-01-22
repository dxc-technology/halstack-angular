import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxcButtonModule,
  DxcCheckboxModule,
  DxcDateModule,
  DxcRadioModule,
  DXCSelectModule
} from 'projects/dxc-ngx-cdk/src/public-api';

import { BrowserModule } from '@angular/platform-browser';
import { ButtonInfoComponent } from './pages/button/button-info.component';
import { SliderInfoComponent } from './pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checkbox/checkbox-info.component';
import { DateInfoComponent } from './pages/date/date-info.component';
import { DialogInfoComponent } from './pages/dialog/dialog-info.component';
import { HeaderInfoComponent } from './pages/header/header-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcSliderModule } from "projects/dxc-ngx-cdk/src/lib/dxc-slider/dxc-slider.module";
import { RadioInfoComponent } from './pages/radio/radio-info.component';
import { DxcAccordionModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-accordion/dxc-accordion.module';
import { DXCAlertModule } from 'projects/dxc-ngx-cdk/src/lib/dxc-alert/dxc-alert.module';
import { DXCDialogModule } from 'projects/dxc-ngx-cdk/src/lib/dxc-dialog/dxc-dialog.module';
import { DXCDropdownModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-dropdown/dxc-dropdown.module';
import { DXCFooterModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-footer/dxc-footer.module';
import { DXCHeaderModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-header/dxc-header.module';
import { DXCInputTextModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-text-input/dxc-input-text.module';
import { DxcProgressbarComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-progressbar/dxc-progressbar.component';
import { DxcProgressbarModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-progressbar/dxc-progressbar.module';
import { DxcSpinnerModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-spinner/dxc-spinner.module';
import { DxcSwitchComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-switch/dxc-switch.component';
import { DxcSwitchModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-switch/dxc-switch.module';
import { DXCToggleModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-toggle/dxc-toggle.module';
import { DxcTabsComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-tabs/dxc-tabs.component';
import { DxcTabsModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-tabs/dxc-tabs.module';
import { DXCUploadModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-upload/dxc-upload.module';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { AlertComponent } from './pages/alert/alert.component';
import { BoxComponent } from './pages/box/box.component';
import { DxcBoxModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-box/dxc-box.module';
import { ThemeService } from '../../projects/dxc-ngx-cdk/src/lib/theme/theme.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ButtonInfoComponent,
    SliderInfoComponent,
    CheckboxInfoComponent,
    DateInfoComponent,
    DialogInfoComponent,
    HeaderInfoComponent,
    RadioInfoComponent,
    AccordionComponent,
    AlertComponent,
    BoxComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DxcAccordionModule,
    DXCAlertModule,
    DxcBoxModule,
    DxcButtonModule,
    DxcCheckboxModule,
    DXCDialogModule,
    DXCDropdownModule,
    DXCFooterModule,
    DXCHeaderModule,
    DXCInputTextModule,
    DxcProgressbarModule,
    DXCSelectModule,
    DxcSpinnerModule,
    DxcSwitchModule,
    DXCToggleModule,
    DxcTabsModule,
    DXCUploadModule,
    DxcDateModule,
    DxcRadioModule,
    BrowserModule,
    DxcSliderModule,
    HttpClientModule
    
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
