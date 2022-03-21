import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleContainerComponent } from "./example-container/example-container.component";
import { TitleComponent } from "./title/title.component";
import { DarkSectionComponent } from "./dark-section/dark-section.component";

@NgModule({
  declarations: [
    TitleComponent,
    ExampleContainerComponent,
    DarkSectionComponent,
  ],
  imports: [CommonModule],
  exports: [TitleComponent, ExampleContainerComponent, DarkSectionComponent],
})
export class ComponentsModule {}
