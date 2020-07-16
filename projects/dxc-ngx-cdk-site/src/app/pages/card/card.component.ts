import { Component, Inject, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { CardExampleComponent } from '../../components/examples/card/card-example/card-example.component';
import { CardTablePropertiesComponent } from '../../components/examples/card/properties/card-table-properties/card-table-properties.component';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  providers: []
})
export class CardComponent implements OnInit{

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-buttons', component: CardTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-buttons', component: CardExampleComponent}
      );
  }
  
}
