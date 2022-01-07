import { Component, OnInit } from "@angular/core";

@Component({
  selector: "text-area-import",
  templateUrl: "./v3-textarea-import.component.html"
})
export class V3TextareaImportComponent implements OnInit {
  bindCode = `
  import { V3DxcTextareaModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      V3DxcTextareaModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() {}

  ngOnInit() {}
}
