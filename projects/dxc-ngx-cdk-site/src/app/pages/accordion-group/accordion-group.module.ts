import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionGroupComponent } from './accordion-group.component';
import { DxcTableModule,DxcTagModule,DxcChipModule,DxcHeadingModule, DxcLinkModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from 'src/app/components/example-viewer/example-viewer.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { AccordionGroupExampleComponent } from '../../components/examples/accordion-group/accordion-group-example/accordion-group-example.component';
import { AccordionGroupTablePropertiesComponent } from '../../components/examples/accordion-group/properties/accordion-group-table-properties/accordion-group-table-properties.component';
import { AccordionGroupImportComponent } from '../../components/examples/accordion-group/accordion-group-import/accordion-group-import.component';
import { AccordionGroupApiComponent } from '../../components/examples/accordion-group/accordion-group-api/accordion-group-api.component';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    AccordionGroupComponent,
    AccordionGroupExampleComponent,
    AccordionGroupTablePropertiesComponent,
    AccordionGroupImportComponent,
    AccordionGroupApiComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    CodesandboxViewerModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    DxcLinkModule,
    StatusTagModule
  ], 
  exports: [
    AccordionGroupComponent,
    AccordionGroupTablePropertiesComponent,
    AccordionGroupImportComponent,
    AccordionGroupApiComponent,
  ]
})
export class AccordionGroupModule { }
