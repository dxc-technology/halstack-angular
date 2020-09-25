import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert-import',
  templateUrl: './alert-import.component.html',
  styleUrls: ['./alert-import.component.scss']
})
export class AlertImportComponent implements OnInit {

  bindCode = `
  import { DxcAlertModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcAlertModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
