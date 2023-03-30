import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DxcBoxModule, DxcBoxComponent, DxcTagModule, DxcTagComponent, DxcHeadingComponent, DxcHeadingModule } from "@dxc-technology/halstack-angular"
import { BrowserModule } from '@angular/platform-browser';
import { OverviewPageComponent} from "./overview-page.component"
import { OverviewInstallComponent } from 'src/app/components/overview/overview-install/overview-install.component';
import { OverviewSupportComponent } from 'src/app/components/overview/overview-support/overview-support.component';
import { OverviewUseComponent } from 'src/app/components/overview/overview-use/overview-use.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { CodePlaygroundModule } from 'src/app/components/code-playground/code-playground.module';
import { TabbedSectionModule } from 'src/app/components/tabbed-section/tabbed-section.module';
import { OverviewThemesComponent } from 'src/app/components/overview/overview-themes/overview-themes.component';

@NgModule({
    declarations: [
        OverviewPageComponent,
        OverviewInstallComponent,
        OverviewSupportComponent,
        OverviewUseComponent,
        OverviewThemesComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        TabbedSectionModule,
        DxcBoxModule,
        DxcTagModule,
        RouterModule,
        MatIconModule,
        MatTabsModule,
        FormsModule,
        CodePlaygroundModule,
        DxcHeadingModule
    ],
    exports: []
})
export class OverviewPageModule {}
