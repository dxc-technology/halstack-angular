import { Component, OnInit } from "@angular/core";

@Component({
  selector: "date-input-import",
  templateUrl: "./date-import.component.html",
})
export class DateInputImportComponent implements OnInit {
  bindCode = `
  import { DxcDateInputModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcDateInputModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() {}

  ngOnInit(): void {}
}
