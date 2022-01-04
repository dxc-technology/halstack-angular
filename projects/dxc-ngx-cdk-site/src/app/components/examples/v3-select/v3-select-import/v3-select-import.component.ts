import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-import',
  templateUrl: './v3-select-import.component.html'
})
export class V3SelectImportComponent implements OnInit {

  bindCode = `
  import { V3DxcSelectModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      V3DxcSelectModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
