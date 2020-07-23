import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toggle-import',
  templateUrl: './toggle-import.component.html',
  styleUrls: ['./toggle-import.component.scss']
})
export class ToggleImportComponent implements OnInit {

  bindCode = `
  import { DXCToggleModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DXCToggleModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
