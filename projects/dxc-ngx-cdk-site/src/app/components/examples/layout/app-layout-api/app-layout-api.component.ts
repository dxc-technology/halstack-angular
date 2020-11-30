import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-layout-api",
  templateUrl: "./app-layout-api.component.html",
  styleUrls: [],
})
export class ApplicationLayoutApiComponent implements OnInit {
  bindCode = `
  import { DxcApplicationLayoutModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcApplicationLayoutModule,
    ]
  })
  export class AppComponent { }
`;

navigateToRoute(component: string) {
  this.router.navigate(
    ["components/" + component]
  );
}

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
