import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-input-import',
  templateUrl: './text-input-import.component.html',
  styleUrls: ['./text-input-import.component.scss']
})
export class TextInputImportComponent implements OnInit {

  bindCode = `
  import { DXCInputTextModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DXCInputTextModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
