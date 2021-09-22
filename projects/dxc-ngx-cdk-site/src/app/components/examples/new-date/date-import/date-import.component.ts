import { Component, OnInit } from "@angular/core";

@Component({
  selector: "new-date-import",
  templateUrl: "./date-import.component.html",
})
export class NewDateImportComponent implements OnInit {
  bindCode = `
  import { DxcNewDateModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcNewDateModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() {}

  ngOnInit(): void {}
}
