import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-import',
  templateUrl: './table-import.component.html',
  styleUrls: ['./table-import.component.scss']
})
export class TableImportComponent implements OnInit {

  bindCode = `
  import { DxcTableModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcTableModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
