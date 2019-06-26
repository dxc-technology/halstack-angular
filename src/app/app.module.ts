import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxcButtonModule,
  DxcCheckboxModule,
  DxcDateModule,
  DxcRadioModule
} from 'projects/dxc-ngx-cdk/src/public-api';

import { BrowserModule } from '@angular/platform-browser';
import { ButtonInfoComponent } from './pages/button/button-info.component';
import { SliderInfoComponent } from './pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checbkox/checkbox-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcSliderModule } from "projects/dxc-ngx-cdk/src/lib/dxc-slider/dxc-slider.module";
import { RadioInfoComponent } from './pages/radio/radio-info.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonInfoComponent,
    SliderInfoComponent,
    CheckboxInfoComponent,
    RadioInfoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DxcButtonModule,
    DxcCheckboxModule,
    DxcDateModule,
    DxcRadioModule,
    BrowserModule,
    DxcSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
