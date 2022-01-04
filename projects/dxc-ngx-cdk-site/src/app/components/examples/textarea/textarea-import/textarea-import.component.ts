import { Component, OnInit } from "@angular/core";

@Component({
  selector: "textarea-import",
  templateUrl: "./textarea-import.component.html",
})
export class TextareaImportComponent implements OnInit {
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
