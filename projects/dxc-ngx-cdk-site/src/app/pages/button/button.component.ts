import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ButtonExampleComponent } from 'src/app/components/examples/button/button-example/button-example.component';
import { ButtonApiComponent } from '../../components/examples/button/button-api/button-api.component';
import { ButtonThemeComponent } from '../../components/examples/button/button-theme/button-theme.component';

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  providers: []
})
export class ButtonComponent implements OnInit{
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
      {id:0, label: 'API',selector: 'button-api', component: ButtonApiComponent},
      {id:1, label: 'THEMING',selector: 'button-theme', component: ButtonThemeComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-buttons', component: ButtonExampleComponent}
      );
  }
  
}
