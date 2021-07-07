import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DxcSubHeadingComponent } from './dxc-sub-heading.component';


@NgModule({
  declarations: [DxcSubHeadingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [DxcSubHeadingComponent]
})
export class DxcSubHeadingModule { 
  static forRoot() {
    return {
      ngModule: DxcSubHeadingModule
    };
  } 
 }
