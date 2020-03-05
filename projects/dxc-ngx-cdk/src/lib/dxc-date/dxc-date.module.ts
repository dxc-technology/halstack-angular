import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from "@angular/material";
import { DxcDateComponent } from "./dxc-date.component";
import { CommonModule, DatePipe } from "@angular/common";
import { NgxMaskModule } from "ngx-mask";
import { DXCMaskDirective } from "./dxc-mask.directive";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MatMomentDateModule
} from "@angular/material-moment-adapter";
import { ThemeModule, defaultTheme } from '../theme';
export const MY_FORMATS = {
  parse: {
    dateInput: "L"
  },
  display: {
    dateInput: "L",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "L",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@NgModule({
  declarations: [DxcDateComponent, DXCMaskDirective],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    DatePipe
  ],

  exports: [DxcDateComponent]
})
export class DxcDateModule {}
