import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-import',
  templateUrl: './card-import.component.html',
  styleUrls: ['./card-import.component.scss']
})
export class CardImportComponent implements OnInit {

  bindCode = `
  import { DxcCardModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcCardModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
