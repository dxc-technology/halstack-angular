import { Component, Inject, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ButtonExampleComponent } from 'src/app/components/examples/button/button-example/button-example.component';
import { ButtonTablePropertiesComponent } from '../../components/examples/button/properties/button-table-properties/button-table-properties.component';

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
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-buttons', component: ButtonTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-buttons', component: ButtonExampleComponent}
      );
  }
  
}
