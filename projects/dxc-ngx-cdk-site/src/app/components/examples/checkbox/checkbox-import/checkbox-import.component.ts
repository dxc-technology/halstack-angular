import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-import',
  templateUrl: './checkbox-import.component.html',
  styleUrls: ['./checkbox-import.component.scss']
})
export class CheckboxImportComponent implements OnInit {

  bindCode = `
  import { DxcCheckboxModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcCheckboxModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
