import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "./theme.service";
import { ThemeDirective } from "./theme.directive";

@NgModule({
  imports: [CommonModule],
  providers: [ThemeService],
  declarations: [ThemeDirective],
  exports: [ThemeDirective],
})
export class ThemeModule {}
