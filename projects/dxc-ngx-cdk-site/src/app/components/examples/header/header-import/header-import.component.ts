import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-import',
  templateUrl: './header-import.component.html',
  styleUrls: ['./header-import.component.scss']
})
export class HeaderImportComponent implements OnInit {

  bindCode = `
  import { DXCHeaderModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DXCHeaderModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
