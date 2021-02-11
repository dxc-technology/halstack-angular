import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { AccordionGroupExampleComponent } from '../../components/examples/accordion-group/accordion-group-example/accordion-group-example.component';
import { AccordionGroupApiComponent } from '../../components/examples/accordion-group/accordion-group-api/accordion-group-api.component';
import { AccordionGroupThemeComponent } from '../../components/examples/accordion-group/accordion-group-theme/accordion-group-theme.component';
import { AccordionApiComponent } from 'src/app/components/examples/accordion/accordion-api/accordion-api.component';
import { AccordionThemeComponent } from 'src/app/components/examples/accordion/accordion-theme/accordion-theme.component';
import { AccordionExampleComponent } from 'src/app/components/examples/accordion/accordion-example/accordion-example.component';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html'
})
export class AccordionGroupComponent implements OnInit {
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
      {id:0, label: 'API',selector: 'accordion-group-api', component: AccordionGroupApiComponent},
      {id:1, label: 'THEMING',selector: 'accordion-group-theme', component: AccordionGroupThemeComponent},
      {id:2, label: 'EXAMPLES', selector: 'app-accordion-group-example', component: AccordionGroupExampleComponent}
    );
  }

}
