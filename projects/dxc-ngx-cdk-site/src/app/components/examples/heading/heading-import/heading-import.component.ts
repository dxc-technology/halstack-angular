import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heading-import',
  templateUrl: './heading-import.component.html',
  styleUrls: ['./heading-import.component.scss']
})
export class HeadingImportComponent implements OnInit {

  bindCode = `
  import { DxcHeadingModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcHeadingModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
