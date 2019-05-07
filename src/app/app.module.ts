import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxcButtonModule } from 'projects/dxc-ngx-cdk/src/public-api';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, DxcButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
