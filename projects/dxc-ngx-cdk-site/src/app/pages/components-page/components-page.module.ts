import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DxcBoxModule, DxcBoxComponent, DxcSideNavModule, DxcLinkModule, DxcHeadingComponent, DxcHeadingModule } from "@dxc-technology/halstack-angular"
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsPageComponent } from 'src/app/pages/components-page/components-page.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
    declarations: [
        ComponentsPageComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        DxcBoxModule,
        RouterModule,
        DxcSideNavModule,
        DxcLinkModule,
        ComponentsSidenavModule,
        DxcHeadingModule
    ],
    exports: []
})
export class ComponentsPageModule {}