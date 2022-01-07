import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-import',
  templateUrl: './password-import.component.html'
})
export class PasswordImportComponent implements OnInit {

  bindCode = `
  import { DxcPasswordInputModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcPasswordInputModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit(): void {
  }

}
