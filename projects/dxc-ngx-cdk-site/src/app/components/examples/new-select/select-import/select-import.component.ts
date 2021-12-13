import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-select-import',
  templateUrl: './select-import.component.html'
})
export class NewSelectImportComponent implements OnInit {

  bindCode = `
  import { DxcNewSelectModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcNewSelectModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit(): void {
  }

}
