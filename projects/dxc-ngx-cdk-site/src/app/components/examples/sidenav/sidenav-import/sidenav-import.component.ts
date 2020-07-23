import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav-import',
  templateUrl: './sidenav-import.component.html',
  styleUrls: ['./sidenav-import.component.scss']
})
export class SidenavImportComponent implements OnInit {

  bindCode = `
  import { DxcSideNavModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcSideNavModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
