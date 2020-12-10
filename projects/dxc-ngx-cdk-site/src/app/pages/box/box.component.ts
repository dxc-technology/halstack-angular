import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { BoxExampleComponent } from 'src/app/components/examples/box/box-example/box-example.component';
import { BoxApiComponent } from '../../components/examples/box/box-api/box-api.component';
import { BoxThemeComponent } from '../../components/examples/box/box-theme/box-theme.component';

@Component({
  selector: "app-box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.scss"],
  providers: []
})
export class BoxComponent implements OnInit{
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
      {id:0, label: 'API',selector: 'box-api', component: BoxApiComponent},
      {id:1, label: 'THEMING',selector: 'box-theme', component: BoxThemeComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-box', component: BoxExampleComponent}
      );
  }
  
}
