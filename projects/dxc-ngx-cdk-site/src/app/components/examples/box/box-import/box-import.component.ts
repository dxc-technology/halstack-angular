import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box-import',
  templateUrl: './box-import.component.html',
  styleUrls: ['./box-import.component.scss']
})
export class BoxImportComponent implements OnInit {

  bindCode = `
  import { DxcBoxModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcBoxModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
