import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionComponent } from './accordion.component';
import { DxcTableModule, DxcAccordionModule,DxcTagModule,DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { AccordionTablePropertiesComponent } from 'src/app/components/examples/accordion/properties/accordion-table-properties/accordion-table-properties.component';
import { ExampleViewerComponent } from 'src/app/components/example-viewer/example-viewer.component';
import { ExampleViewerModule } from 'src/app/components/example-viewer/example-viewer.module';
import { AccordionDefaultComponent } from 'src/app/components/examples/accordion/accordion-default/accordion-default.component';
import { AccordionDisabledComponent } from 'src/app/components/examples/accordion/accordion-disabled/accordion-disabled.component';
import { AccordionAssistiveComponent } from 'src/app/components/examples/accordion/accordion-assistive/accordion-assistive.component';
import { AccordionIconComponent } from 'src/app/components/examples/accordion/accordion-icon/accordion-icon.component';
import { AccordionExampleModule } from '../../components/examples/accordion/accordion-example/accordion-example.module';
import { AccordionControlledComponent } from '../../components/examples/accordion/accordion-controlled/accordion-controlled.component';
import { AccordionImportComponent } from '../../components/examples/accordion/accordion-import/accordion-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { AccordionApiComponent } from '../../components/examples/accordion/accordion-api/accordion-api.component';
import { AccordionThemeComponent } from '../../components/examples/accordion/accordion-theme/accordion-theme.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionTablePropertiesComponent,
    AccordionDefaultComponent,
    AccordionDisabledComponent,
    AccordionAssistiveComponent,
    AccordionIconComponent,
    AccordionControlledComponent,
    AccordionImportComponent,
    AccordionApiComponent,
    AccordionThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcAccordionModule,
    AccordionExampleModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule
  ], 
  exports: [
    AccordionComponent,
    AccordionTablePropertiesComponent,
    AccordionDefaultComponent,
    AccordionDisabledComponent,
    AccordionAssistiveComponent,
    AccordionIconComponent,
    AccordionImportComponent,
    AccordionApiComponent,
    AccordionThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class AccordionModule { }
