import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-import',
  templateUrl: './dialog-import.component.html',
  styleUrls: ['./dialog-import.component.scss']
})
export class DialogImportComponent implements OnInit {

  bindCode = `
  import { DxcDialogModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcDialogModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
