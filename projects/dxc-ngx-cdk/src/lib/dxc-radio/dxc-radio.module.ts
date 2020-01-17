import { NgModule } from "@angular/core";
import { DxcRadioComponent } from "./dxc-radio.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material";
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcRadioComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatRadioModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcRadioComponent]
})
export class DxcRadioModule {}
