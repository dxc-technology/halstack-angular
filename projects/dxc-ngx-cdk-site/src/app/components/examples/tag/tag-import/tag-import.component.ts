import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tag-import',
  templateUrl: './tag-import.component.html',
  styleUrls: ['./tag-import.component.scss']
})
export class TagImportComponent implements OnInit {

  bindCode = `
  import { DxcTagModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcTagModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
