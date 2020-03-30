import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatTab,
  MatTabGroup
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcTabsComponent } from './dxc-tabs.component';
import { DxcTabComponent } from './dxc-tab/dxc-tab.component';
import { ThemeModule } from '../theme/theme.module';
import { defaultTheme } from '../theme/defaultTheme';

@NgModule({
  declarations: [DxcTabsComponent, DxcTabComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcTabsComponent,DxcTabComponent],
  entryComponents:[MatTab,MatTabGroup]
})
export class DxcTabsModule {}
