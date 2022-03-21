import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { ThemeBuilderDynamicComponentComponent } from "./theme-builder-dynamic-component.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ThemeBuilderDynamicComponentComponent],
  imports: [CommonModule, FormsModule, PortalModule],
  exports: [ThemeBuilderDynamicComponentComponent],
  entryComponents: [],
})
export class ThemeBuilderDynamicModule {}
