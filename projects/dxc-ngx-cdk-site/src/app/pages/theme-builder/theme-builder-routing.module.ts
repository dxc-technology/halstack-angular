import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ThemeBuilderComponentPage } from "./theme-builder.component";

const routes: Routes = [
  {
    path: "",
    component: ThemeBuilderComponentPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeBuilderPageRoutingModule {}
