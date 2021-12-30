import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ApplicationLayoutApiComponent } from '../../components/examples/layout/app-layout-api/app-layout-api.component';
import { ApplicationLayoutExamplesComponent } from '../../components/examples/layout/app-layout-examples/app-layout-examples.component';

@Component({
  selector: "app-layout",
  templateUrl: "./app-layout.component.html",
  styleUrls: [],
  providers: []
})
export class ApplicationLayoutComponent implements OnInit{
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'app-layout-api', component: ApplicationLayoutApiComponent},
      {id:1, label: 'EXAMPLES',selector: 'app-layout-examples', component: ApplicationLayoutExamplesComponent},
      );
  }
  
}
