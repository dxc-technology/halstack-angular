import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxcButtonModule,
  DxcCheckboxModule
} from 'projects/dxc-ngx-cdk/src/public-api';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonInfoComponent } from './pages/button/button-info.component';
import { SliderInfoComponent } from './pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checbkox/checkbox-info.component';
@NgModule({
  declarations: [AppComponent, ButtonInfoComponent,SliderInfoComponent,CheckboxInfoComponent],
  imports: [AppRoutingModule, DxcButtonModule, DxcCheckboxModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
