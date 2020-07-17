import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { HeaderTablePropertiesComponent } from '../../components/examples/header/properties/header-table-properties/header-table-properties.component';
import { HeaderExampleComponent } from '../../components/examples/header/header-example/header-example.component';

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
      {id:1, label: 'EXAMPLES', selector:'examples-components-header',component: HeaderExampleComponent});
  }

}
