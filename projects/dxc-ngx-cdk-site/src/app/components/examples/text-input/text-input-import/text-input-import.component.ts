import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-input-import',
  templateUrl: './text-input-import.component.html'
})
export class TextInputImportComponent implements OnInit {

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
