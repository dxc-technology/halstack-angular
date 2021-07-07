import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective } from './number-only.directive';


@NgModule({
  declarations: [NumberDirective],
  imports: [
    CommonModule
  ],
  exports: [NumberDirective]
})
export class NumbersOnlyModule { }
