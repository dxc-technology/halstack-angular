import { Component, OnInit } from "@angular/core";

@Component({
  selector: "new-textarea-import",
  templateUrl: "./new-textarea-import.component.html",
})
export class NewTextareaImportComponent implements OnInit {
  bindCode = `
  import { DxcNewTextareaModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcNewTextareaModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() {}

  ngOnInit(): void {}
}
