import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ApplicationLayoutApiComponent } from '../../components/examples/layout/app-layout-api/app-layout-api.component';
import { ApplicationLayoutExamplesComponent } from '../../components/examples/layout/app-layout-examples/app-layout-examples.component';
import { ApplicationLayoutThemeComponent } from '../../components/examples/layout/app-layout-theme/app-layout-theme.component';

@Component({
  selector: "app-layout",
  templateUrl: "./app-layout.component.html",
  styleUrls: [],
  providers: []
})
export class ApplicationLayoutComponent implements OnInit{

  headingMargin = {
    bottom: 'medium'
  }

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'app-layout-api', component: ApplicationLayoutApiComponent},
      {id:1, label: 'THEMING',selector: 'layout-theme', component: ApplicationLayoutThemeComponent},
      {id:2, label: 'EXAMPLES',selector: 'app-layout-examples', component: ApplicationLayoutExamplesComponent},
      );
  }
  
}
