import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackgroundProviderComponent } from "./background-provider.component";
import { BackgroundProviderInnerComponent } from "./background-provider-inner.component";


@NgModule({
  imports: [CommonModule],
  declarations: [ BackgroundProviderComponent, BackgroundProviderInnerComponent ],
  exports: [
    BackgroundProviderComponent, BackgroundProviderInnerComponent],
})
export class BackgroundProviderModule {}
