import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-import',
  templateUrl: './dialog-import.component.html',
  styleUrls: ['./dialog-import.component.scss']
})
export class DialogImportComponent implements OnInit {

  bindCode = `
  import { DXCDialogModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DXCDialogModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
