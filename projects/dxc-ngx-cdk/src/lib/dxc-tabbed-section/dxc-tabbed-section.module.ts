import { NgModule } from "@angular/core";
import { MatTabsModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DxcTabbedSectionComponent } from './dxc-tabbed-section.component';
import { ScrollSpyModule } from '../scroll-spy/scroll-spy.module';
import { DxcTabsModule } from '../dxc-tabs/dxc-tabs.module';

@NgModule({
  declarations: [    
    DxcTabbedSectionComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    MatIconModule,
    ScrollSpyModule,
    DxcTabsModule
  ],
  exports: [
    DxcTabbedSectionComponent
  ]
})
export class DxcTabbedSectionModule {}
