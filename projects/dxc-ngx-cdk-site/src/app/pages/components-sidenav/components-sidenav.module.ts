import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DxcSidenavComponent, DxcSideNavModule, DxcLinkModule } from "@dxc-technology/halstack-angular"
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsSidenavMenuComponent } from './components-sidenav-menu/components-sidenav-menu.component';
import { ComponentsSidenavComponent } from './components-sidenav.component';
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    ComponentsSidenavComponent,
    ComponentsSidenavMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    DxcSideNavModule,
    DxcLinkModule,
    StatusTagModule
  ],
  exports: [
    ComponentsSidenavComponent,
    ComponentsSidenavMenuComponent
  ],
  entryComponents: [
    DxcSidenavComponent
  ]
})
export class ComponentsSidenavModule {}