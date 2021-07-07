import { ScrollService } from './../services/scroll.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DxcSortModule } from '../directives/pipes/sort/dxc-sort.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcListComponent } from './dxc-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [DxcListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    DxcSortModule,
    MatTooltipModule
  ],
  providers: [ScrollService],
  exports: [DxcListComponent]
})
export class DxcListModule {
  static forRoot() {
    return {
      ngModule: DxcListModule
    };
  }
}
