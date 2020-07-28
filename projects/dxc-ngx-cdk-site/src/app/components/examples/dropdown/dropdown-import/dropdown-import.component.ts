import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown-import',
  templateUrl: './dropdown-import.component.html',
  styleUrls: ['./dropdown-import.component.scss']
})
export class DropdownImportComponent implements OnInit {

  bindCode = `
  import { DXCDropdownModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DXCDropdownModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
