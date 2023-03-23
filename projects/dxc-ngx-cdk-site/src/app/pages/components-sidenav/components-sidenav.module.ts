import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DxcSidenavComponent, DxcSideNavModule, DxcLinkModule } from "@dxc-technology/halstack-angular"
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsSidenavMenuComponent } from './components-sidenav-menu/components-sidenav-menu.component';
import { ComponentsSidenavComponent } from './components-sidenav.component';

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
        DxcLinkModule
    ],
    exports: [
        ComponentsSidenavComponent,
        ComponentsSidenavMenuComponent
    ]
})
export class ComponentsSidenavModule {}