import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-import',
  templateUrl: './password-import.component.html'
})
export class PasswordImportComponent implements OnInit {

  bindCode = `
  import { DxcPasswordModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcPasswordModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit(): void {
  }

}
