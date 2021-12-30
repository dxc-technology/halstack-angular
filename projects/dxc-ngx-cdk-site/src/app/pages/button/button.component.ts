import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ButtonExampleComponent } from 'src/app/components/examples/button/button-example/button-example.component';
import { ButtonApiComponent } from '../../components/examples/button/button-api/button-api.component';

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  providers: []
})
export class ButtonComponent implements OnInit{
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'button-api', component: ButtonApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-buttons', component: ButtonExampleComponent}
      );
  }
  
}
