import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcNewDateComponent } from "./dxc-new-date.component";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule } from "@angular/forms";
import {
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MatMomentDateModule,
} from "@angular/material-moment-adapter";
import { MdePopoverModule } from "@material-extended/mde";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";

@NgModule({
  declarations: [DxcNewDateComponent],
  imports: [
    CommonModule,
    DxcTextInputModule,
    MatMomentDateModule,
    FormsModule,
    DxcBoxModule,
    MdePopoverModule,
    MatDatepickerModule
  ],
  exports: [DxcNewDateComponent],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DxcNewDateModule {}
