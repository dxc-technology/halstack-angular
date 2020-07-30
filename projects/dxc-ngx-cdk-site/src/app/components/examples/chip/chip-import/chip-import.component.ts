import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chip-import',
  templateUrl: './chip-import.component.html',
  styleUrls: ['./chip-import.component.scss']
})
export class ChipImportComponent implements OnInit {

  bindCode = `
  import { DxcChipModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcChipModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
