import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-group-import',
  templateUrl: './radio-group-import.component.html',
  styleUrls: ['./radio-group-import.component.scss']
})
export class RadioGroupImportComponent implements OnInit {

  bindCode = `
  import { DxcRadioGroupModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcRadioGroupModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
