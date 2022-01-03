import { Component, OnInit } from "@angular/core";

@Component({
  selector: "new-textarea-import",
  templateUrl: "./new-textarea-import.component.html",
})
export class NewTextareaImportComponent implements OnInit {
  bindCode = `
  import { DxcTextareaModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcTextareaModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() {}

  ngOnInit(): void {}
}
