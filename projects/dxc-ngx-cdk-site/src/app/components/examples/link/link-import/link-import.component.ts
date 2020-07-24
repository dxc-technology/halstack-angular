import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'link-import',
  templateUrl: './link-import.component.html',
  styleUrls: ['./link-import.component.scss']
})
export class LinkImportComponent implements OnInit {

  bindCode = `
  import { DxcLinkModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcLinkModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
