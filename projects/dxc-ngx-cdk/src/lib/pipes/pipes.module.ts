import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
@NgModule({
  declarations: [SafeUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [SafeUrlPipe]
})
export class PipesModule { }
