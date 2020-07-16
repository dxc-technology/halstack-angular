import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DxcBoxModule, DxcBoxComponent, DxcSidenavComponent, DxcSideNavModule, DxcLinkModule } from "@dxc-technology/halstack-angular"
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsPageComponent } from 'src/app/pages/components-page/components-page.component';
import { ComponentsSidenavComponent } from 'src/app/pages/components-page/components-sidenav/components-sidenav.component';

@NgModule({
  declarations: [
    ComponentsPageComponent,
    ComponentsSidenavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DxcBoxModule,
    RouterModule,
    DxcSideNavModule,
    DxcLinkModule
  ],
  exports: [
  ],
  entryComponents: [
    DxcBoxComponent,
    DxcSidenavComponent
  ]
})
export class ComponentsPageModule {}