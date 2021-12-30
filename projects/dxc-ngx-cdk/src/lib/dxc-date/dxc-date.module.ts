import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { DxcDateComponent } from "./dxc-date.component";
import { CommonModule } from "@angular/common";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MatMomentDateModule,
} from "@angular/material-moment-adapter";
import { DxcInputTextModule } from "../dxc-input-text/dxc-input-text.module";
import { MdePopoverModule } from "@material-extended/mde";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";
import { ThemeModule } from "../theme/theme.module";

@NgModule({
  declarations: [DxcDateComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    DxcInputTextModule,
    DxcBoxModule,
    ThemeModule,
    MdePopoverModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  exports: [DxcDateComponent],
})
export class DxcDateModule {}
