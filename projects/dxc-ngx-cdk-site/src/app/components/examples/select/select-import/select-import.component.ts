import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-import',
  templateUrl: './select-import.component.html',
  styleUrls: ['./select-import.component.scss']
})
export class SelectImportComponent implements OnInit {

  bindCode = `
  import { DXCSelectModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DXCSelectModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
