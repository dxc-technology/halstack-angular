import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider-import',
  templateUrl: './slider-import.component.html',
  styleUrls: ['./slider-import.component.scss']
})
export class SliderImportComponent implements OnInit {

  bindCode = `
  import { DxcSliderModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcSliderModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
