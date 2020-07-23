import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcTagModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { TagComponent } from './tag.component';
import { TagTablePropertiesComponent } from '../../components/examples/tag/properties/tag-table-properties/tag-table-properties.component';
import { TagSizedComponent } from 'src/app/components/examples/tag/tag-sized/tag-sized.component';
import { TagActionComponent } from 'src/app/components/examples/tag/tag-action/tag-action.component';
import { TagLinkComponent } from 'src/app/components/examples/tag/tag-link/tag-link.component';
import { TagDefaultComponent } from 'src/app/components/examples/tag/tag-default/tag-default.component';
import { TagExampleComponent } from 'src/app/components/examples/tag/tag-example/tag-example.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    TagComponent,
    TagExampleComponent,
    TagDefaultComponent,
    TagLinkComponent,
    TagActionComponent,
    TagSizedComponent,
    TagTablePropertiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcTagModule,
    ExampleViewerModule,
    ComponentsSidenavModule
  ],
  exports: [
    TagComponent,
    TagExampleComponent,
    TagDefaultComponent,
    TagLinkComponent,
    TagActionComponent,
    TagSizedComponent,
    TagTablePropertiesComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TagModule { }
