import { NgModule } from "@angular/core";
import { PortalModule } from '@angular/cdk/portal';
import { TabbedSectionComponent } from './tabbed-section.component';
import { DynamicModule } from '../dynamic-component/dynamic.module';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';
import { DxcTabbedSectionModule } from '@diaas/dxc-ngx-cdk';

@NgModule({
  declarations: [    
    TabbedSectionComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PortalModule,
    DynamicModule,
    MatTabsModule,
    MatIconModule,
    DxcTabbedSectionModule
  ],
  exports: [
    TabbedSectionComponent
  ],
  entryComponents: [
    DynamicComponentComponent
  ]
})
export class TabbedSectionModule {}
