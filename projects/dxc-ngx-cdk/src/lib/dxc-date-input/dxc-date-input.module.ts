import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcDateInputComponent } from "./dxc-date-input.component";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule } from "@angular/forms";
import {
  MatDayjsDateModule,
  MAT_DAYJS_DATE_FORMATS,
} from "@tabuckner/material-dayjs-adapter";

import {
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
} from "@angular/material/core";

import { MdePopoverModule } from "@material-extended/mde";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";
import { DAYJS_DATE_FORMATS } from "../utils/date-functions";
import { Platform } from "@angular/cdk/platform";
import { DayjsDateAdapter } from "../utils/date-functions";

@NgModule({
  declarations: [DxcDateInputComponent],
  imports: [
    CommonModule,
    DxcTextInputModule,
    FormsModule,
    DxcBoxModule,
    MdePopoverModule,
    MatDayjsDateModule,
    MatDatepickerModule,
  ],
  exports: [DxcDateInputComponent],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: DAYJS_DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: DayjsDateAdapter,
      deps: [MAT_DATE_LOCALE, Platform],
    },
  ],
})
export class DxcDateInputModule {}
