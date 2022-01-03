import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-import',
  templateUrl: './number-import.component.html'
})
export class NumberImportComponent implements OnInit {

  bindCode = `
  import { DxcNumberInputModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcNumberInputModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit(): void {
  }

}
