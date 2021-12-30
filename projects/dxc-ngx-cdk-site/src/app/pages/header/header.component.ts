import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { HeaderExampleComponent } from '../../components/examples/header/header-example/header-example.component';
import { HeaderApiComponent } from '../../components/examples/header/header-api/header-api.component';

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
      {id:0, label: 'API',selector: 'header-api', 
        component: HeaderApiComponent},
      {id:1, label: 'EXAMPLES', selector:'examples-components-header',component: HeaderExampleComponent});
  }

}
