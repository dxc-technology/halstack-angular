import { NgModule } from "@angular/core";
import { PortalModule } from '@angular/cdk/portal';
import { TabbedSectionComponent } from './tabbed-section.component';
import { DynamicModule } from '../dynamic-component/dynamic.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';
import { DxcTabbedSectionModule } from '@dxc-technology/halstack-angular';

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
    ]
})
export class TabbedSectionModule {}
