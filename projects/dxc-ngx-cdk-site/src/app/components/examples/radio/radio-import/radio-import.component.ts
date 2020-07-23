import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-import',
  templateUrl: './radio-import.component.html',
  styleUrls: ['./radio-import.component.scss']
})
export class RadioImportComponent implements OnInit {

  bindCode = `
  import { DxcRadioModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcRadioModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
