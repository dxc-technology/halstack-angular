import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackgroundProviderInnerComponent } from "./background-provider-inner.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BackgroundProviderInnerComponent],
  exports: [BackgroundProviderInnerComponent],
})
export class BackgroundProviderInnerModule {}
