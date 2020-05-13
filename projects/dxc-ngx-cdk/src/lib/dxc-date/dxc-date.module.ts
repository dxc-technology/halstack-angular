import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatDatepickerModule,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from "@angular/material";
import { DxcDateComponent } from "./dxc-date.component";
import { CommonModule } from "@angular/common";
import { MAT_MOMENT_DATE_FORMATS,MomentDateAdapter, MatMomentDateModule } from "@angular/material-moment-adapter";
import { ThemeModule, defaultTheme } from '../theme';
import { DXCInputTextModule } from '../dxc-text-input/dxc-input-text.module';
import { MdePopoverModule } from '@material-extended/mde';
import { DxcBoxModule } from '../dxc-box/dxc-box.module';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    DxcDateComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    DXCInputTextModule,
    DxcBoxModule,
    MdePopoverModule,
    ClickOutsideModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ],
  exports: [
    DxcDateComponent
  ]
})
export class DxcDateModule {}
