import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxcButtonModule,
  DxcCheckboxModule
} from 'projects/dxc-ngx-cdk/src/public-api';
@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, DxcButtonModule, DxcCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
