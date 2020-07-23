import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resultset-table-import',
  templateUrl: './resultset-table-import.component.html',
  styleUrls: ['./resultset-table-import.component.scss']
})
export class ResultsetTableImportComponent implements OnInit {

  bindCode = `
  import { DxcResultsetTableModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcResultsetTableModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
