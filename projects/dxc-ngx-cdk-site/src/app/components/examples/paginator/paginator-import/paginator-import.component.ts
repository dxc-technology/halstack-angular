import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'paginator-import',
  templateUrl: './paginator-import.component.html',
  styleUrls: ['./paginator-import.component.scss']
})
export class PaginatorImportComponent implements OnInit {

  bindCode = `
  import { DxcPaginatorModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcPaginatorModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
