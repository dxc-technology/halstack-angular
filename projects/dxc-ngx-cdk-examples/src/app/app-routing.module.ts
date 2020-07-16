import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Components } from './components'

let routes: Routes = [];

Components.map((pages: any) => {
  routes.push({ path: pages.route, component: pages.component });
});


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
