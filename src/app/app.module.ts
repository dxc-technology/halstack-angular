import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxcNgxCdkModule } from 'projects/dxc-ngx-cdk/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, DxcNgxCdkModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
