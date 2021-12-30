import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { AccordionGroupExampleComponent } from '../../components/examples/accordion-group/accordion-group-example/accordion-group-example.component';
import { AccordionGroupApiComponent } from '../../components/examples/accordion-group/accordion-group-api/accordion-group-api.component';
@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html'
})
export class AccordionGroupComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'accordion-group-api', component: AccordionGroupApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'app-accordion-group-example', component: AccordionGroupExampleComponent}
    );
  }

}
