import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { DynamicComponentComponent } from "./dynamic-component.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DynamicComponentComponent],
  imports: [BrowserModule, FormsModule, PortalModule],
  exports: [DynamicComponentComponent],
  entryComponents: [],
})
export class DynamicModule {}
