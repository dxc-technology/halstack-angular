import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-text-import',
  templateUrl: './input-text-import.component.html'
})
export class InputTextImportComponent implements OnInit {

  bindCode = `
  import { DxcTextInputModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcTextInputModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit(): void {
  }

}
