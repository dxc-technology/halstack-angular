import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcTabbedSectionModule,DxcTagModule, DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { TabbedSectionInfoComponent } from './tabbed-section-info.component';
import { TabbedSectionTablePropertiesComponent } from '../../components/examples/tabbed-section/properties/tabbed-section-table-properties/tabbed-section-table-properties.component';
import { TabbedSectionExampleComponent } from '../../components/examples/tabbed-section/tabbed-section-example/tabbed-section-example.component';
import { TabbedSectionNotesComponent } from '../../components/examples/tabbed-section/properties/tabbed-section-notes/tabbed-section-notes.component';
import { CodePlaygroundModule } from 'src/app/components/code-playground/code-playground.module';
import { TabbedSectionImportComponent } from '../../components/examples/tabbed-section/tabbed-section-import/tabbed-section-import.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { TabbedSectionApiComponent } from '../../components/examples/tabbed-section/tabbed-section-api/tabbed-section-api.component';
import { TabbedSectionThemeComponent } from '../../components/examples/tabbed-section/tabbed-section-theme/tabbed-section-theme.component';

@NgModule({
  declarations: [
    TabbedSectionInfoComponent,
    TabbedSectionTablePropertiesComponent,
    TabbedSectionExampleComponent,
    TabbedSectionNotesComponent,
    TabbedSectionImportComponent,
    TabbedSectionApiComponent,
    TabbedSectionThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    DxcTabbedSectionModule,
    TabbedSectionModule,
    CodePlaygroundModule,
    DxcTagModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    TabbedSectionInfoComponent,
    TabbedSectionTablePropertiesComponent,
    TabbedSectionExampleComponent,
    TabbedSectionNotesComponent,
    TabbedSectionImportComponent,
    TabbedSectionApiComponent,
    TabbedSectionThemeComponent
  ]
})
export class TabbedSectionInfoModule { }
