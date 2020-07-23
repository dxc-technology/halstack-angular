import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upload-import',
  templateUrl: './upload-import.component.html',
  styleUrls: ['./upload-import.component.scss']
})
export class UploadImportComponent implements OnInit {

  bindCode = `
  import { DXCUploadModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DXCUploadModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
