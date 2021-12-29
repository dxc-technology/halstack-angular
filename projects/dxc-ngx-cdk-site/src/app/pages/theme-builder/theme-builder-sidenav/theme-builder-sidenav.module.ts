import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeBuilderSidenavComponent } from './theme-builder-sidenav.component';
import { V3DxcSelectModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ThemeBuilderSidenavComponent],
  imports: [
    CommonModule,
    V3DxcSelectModule
  ],
  exports: [ThemeBuilderSidenavComponent]
})
export class ThemeBuilderSidenavModule {

}
