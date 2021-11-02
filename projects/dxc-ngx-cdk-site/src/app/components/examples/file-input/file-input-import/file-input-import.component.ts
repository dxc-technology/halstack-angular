import { Component, OnInit } from "@angular/core";

@Component({
  selector: "file-input-import",
  templateUrl: "./file-input-import.component.html",
})
export class FileInputImportComponent implements OnInit {
  bindCode = `
  import { DxcFileInputModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcFileInputModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() {}

  ngOnInit(): void {}
}
