import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackgroundProviderComponent } from "./background-provider.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BackgroundProviderComponent],
  exports: [BackgroundProviderComponent],
})
export class BackgroundProviderModule {}
