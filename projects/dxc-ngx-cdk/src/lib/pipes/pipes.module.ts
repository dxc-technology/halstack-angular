import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
@NgModule({
  declarations: [SafeUrlPipe, SafeHTMLPipe],
  imports: [
    CommonModule
  ],
  exports: [SafeUrlPipe, SafeHTMLPipe]
})
export class PipesModule { }
