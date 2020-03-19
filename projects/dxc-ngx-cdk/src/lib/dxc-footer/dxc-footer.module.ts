import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcFooterComponent } from './dxc-footer.component';
import { ThemeModule } from '../theme/theme.module';
import { defaultTheme } from '../theme/defaultTheme';

@NgModule({
  declarations: [DxcFooterComponent],
  imports: [CommonModule, MatToolbarModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })],
  exports: [DxcFooterComponent]
})
export class DXCFooterModule {}
