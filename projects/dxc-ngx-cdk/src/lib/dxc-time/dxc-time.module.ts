import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcTimeComponent } from './dxc-time.component';
// import { NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



@NgModule({
  declarations: [DxcTimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaterialTimepickerModule
  ],
  exports: [DxcTimeComponent, NgxMaterialTimepickerModule]
})
export class DxcTimeModule {
  static forRoot() {
    return {
      ngModule: DxcTimeModule
    };
  }
}
