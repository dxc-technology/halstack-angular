import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-import',
  templateUrl: './tabs-import.component.html',
  styleUrls: ['./tabs-import.component.scss']
})
export class TabsImportComponent implements OnInit {

  bindCode = `
  import { DxcTabsModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcTabsModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
