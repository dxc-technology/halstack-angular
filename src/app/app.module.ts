import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxcButtonModule,
  DxcCheckboxModule,
  DxcDateModule
} from 'projects/dxc-ngx-cdk/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    DxcButtonModule,
    DxcCheckboxModule,
    DxcDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
