import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-text-import',
  templateUrl: './input-text-import.component.html'
})
export class InputTextImportComponent implements OnInit {

  bindCode = `
  import { DxcInputTextModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcInputTextModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
