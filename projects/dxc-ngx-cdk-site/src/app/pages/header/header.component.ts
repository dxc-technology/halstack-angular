import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { HeaderTablePropertiesComponent } from '../../components/examples/header/properties/header-table-properties/header-table-properties.component';
import { HeaderExampleComponent } from '../../components/examples/header/header-example/header-example.component';
import { HeaderDirectivesComponent } from '../../components/examples/header/header-directives/header-directives.component';
import { HeaderExampleResponsiveComponent } from '../../components/examples/header/responsive/header-example-responsive/header-example-responsive.component';
import { HeaderImportComponent } from '../../components/examples/header/header-import/header-import.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-header', 
        component: HeaderTablePropertiesComponent},
      {id:1, label: 'MODULE',selector: 'header-import', 
        component: HeaderImportComponent},
      {id:2, label: 'DIRECTIVES',selector: 'header-directives', 
        component: HeaderDirectivesComponent},
      {id:3, label: 'RESPONSIVE',selector: 'header-example-responsive', 
        component: HeaderExampleResponsiveComponent},
      {id:4, label: 'EXAMPLES', selector:'examples-components-header',component: HeaderExampleComponent});
  }

}
