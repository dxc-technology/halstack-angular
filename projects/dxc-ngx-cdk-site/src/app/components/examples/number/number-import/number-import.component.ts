import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-import',
  templateUrl: './number-import.component.html'
})
export class NumberImportComponent implements OnInit {

  bindCode = `
  import { DxcNumberModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcNumberModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit(): void {
  }

}
