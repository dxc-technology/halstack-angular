import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { CardExampleComponent } from '../../components/examples/card/card-example/card-example.component';
import { CardApiComponent } from '../../components/examples/card/card-api/card-api.component';

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
      {id:0, label: 'API',selector: 'card-api', component: CardApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-buttons', component: CardExampleComponent}
      );
  }
  
}
