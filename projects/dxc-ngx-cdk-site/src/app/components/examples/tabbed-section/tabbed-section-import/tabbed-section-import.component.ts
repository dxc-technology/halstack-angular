import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabbed-section-import',
  templateUrl: './tabbed-section-import.component.html',
  styleUrls: ['./tabbed-section-import.component.scss']
})
export class TabbedSectionImportComponent implements OnInit {

  bindCode = `
  import { DxcTabbedSectionModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcTabbedSectionModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
