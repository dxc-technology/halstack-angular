import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeBuilderSidenavComponent } from './theme-builder-sidenav.component';
import { DxcSelectModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [ThemeBuilderSidenavComponent],
  imports: [
    CommonModule,
    DxcSelectModule
  ],
  exports: [ThemeBuilderSidenavComponent]
})
export class ThemeBuilderSidenavModule {

}
