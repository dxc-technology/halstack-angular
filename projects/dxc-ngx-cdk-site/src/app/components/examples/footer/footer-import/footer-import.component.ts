import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-import',
  templateUrl: './footer-import.component.html',
  styleUrls: ['./footer-import.component.scss']
})
export class FooterImportComponent implements OnInit {

  bindCode = `
  import { DxcFooterModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcFooterModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
