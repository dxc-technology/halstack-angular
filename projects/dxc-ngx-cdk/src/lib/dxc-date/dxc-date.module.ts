import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { DxcDateComponent } from "./dxc-date.component";
import { CommonModule } from "@angular/common";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MatMomentDateModule,
} from "@angular/material-moment-adapter";
import { DxcInputTextModule } from "../dxc-text-input/dxc-input-text.module";
//import { MdePopoverModule } from "@material-extended/mde";

import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";
import { ThemeModule } from "../theme/theme.module";
import { DateHelper } from './helpers/date-helper';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [DxcDateComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatIconModule,
    MatMomentDateModule,
    FormsModule,
    DxcInputTextModule,
    DxcBoxModule,
    ThemeModule,
    //MdePopoverModule,
    NgbPopoverModule,
    DxcButtonModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    DateHelper, DatePipe
  ],
  exports: [DxcDateComponent],
})
export class DxcDateModule { }
