import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-input-import',
  templateUrl: './text-input-import.component.html',
  styleUrls: ['./text-input-import.component.scss']
})
export class TextInputImportComponent implements OnInit {

  bindCode = `
  import { DxcInputTextModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcInputTextModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
