import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { AccordionTablePropertiesComponent } from '../../components/examples/accordion/properties/accordion-table-properties/accordion-table-properties.component';
import { AccordionExampleComponent } from '../../components/examples/accordion/accordion-example/accordion-example.component';
import { AccordionImportComponent } from '../../components/examples/accordion/accordion-import/accordion-import.component';

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
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-accordion', component: AccordionTablePropertiesComponent},
      {id:1, label: 'MODULE',selector: 'accordion-import', component: AccordionImportComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-accordion', component: AccordionExampleComponent}
    );
  }

}
