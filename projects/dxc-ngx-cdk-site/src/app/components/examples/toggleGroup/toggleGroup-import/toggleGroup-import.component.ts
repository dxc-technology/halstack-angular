import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toggleGroup-import',
  templateUrl: './toggleGroup-import.component.html',
  styleUrls: ['./toggleGroup-import.component.scss']
})
export class ToggleGroupImportComponent implements OnInit {

  bindCode = `
  import { DxcToggleGroupModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcToggleGroupModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
