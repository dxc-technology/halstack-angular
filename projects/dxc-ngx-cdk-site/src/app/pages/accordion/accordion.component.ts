import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { AccordionExampleComponent } from '../../components/examples/accordion/accordion-example/accordion-example.component';
import { AccordionApiComponent } from '../../components/examples/accordion/accordion-api/accordion-api.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'accordion-api', component: AccordionApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-accordion', component: AccordionExampleComponent}
    );
  }

}
