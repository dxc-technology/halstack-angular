import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progressbar-import',
  templateUrl: './progressbar-import.component.html',
  styleUrls: ['./progressbar-import.component.scss']
})
export class ProgressbarImportComponent implements OnInit {

  bindCode = `
  import { DxcProgressbarModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcProgressbarModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
