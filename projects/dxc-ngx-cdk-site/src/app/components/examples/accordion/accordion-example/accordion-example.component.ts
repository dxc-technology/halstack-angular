import { Component, OnInit, Inject } from '@angular/core';
import { Example } from 'src/app/model/example';
import { ExampleService } from 'src/app/service/example.service';
import { AccordionDefaultComponent } from '../accordion-default/accordion-default.component';
import { AccordionAlternativeComponent } from '../accordion-alternative/accordion-alternative.component';
import { AccordionDisabledComponent } from '../accordion-disabled/accordion-disabled.component';
import { AccordionAssistiveComponent } from '../accordion-assistive/accordion-assistive.component';
import { AccordionIconComponent } from '../accordion-icon/accordion-icon.component';
import { AccordionDarkComponent } from '../accordion-dark/accordion-dark.component';
import { AccordionControlledComponent } from '../accordion-controlled/accordion-controlled.component';

@Component({
  selector: 'app-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.scss']
})
export class AccordionExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("accordion/accordion-default/accordion-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Default Accordion',
          component: AccordionDefaultComponent,
          selector: "Accordion_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("accordion/accordion-controlled/accordion-controlled.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Controlled Accordion',
          component: AccordionControlledComponent,
          selector: "Accordion_example_2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("accordion/accordion-alternative/accordion-alternative.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Alternative Accordion',
          component: AccordionAlternativeComponent,
          selector: "Accordion_example_3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("accordion/accordion-disabled/accordion-disabled.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Disabled Accordion',
          component: AccordionDisabledComponent,
          selector: "Accordion_example_4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("accordion/accordion-assistive/accordion-assistive.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Accordion with assistive text',
          component: AccordionAssistiveComponent,
          selector: "Accordion_example_5",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("accordion/accordion-icon/accordion-icon.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Accordion with icon',
          component: AccordionIconComponent,
          selector: "Accordion_example_6",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("accordion/accordion-dark/accordion-dark.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Dark theme Accordion',
          component: AccordionDarkComponent,
          selector: "Accordion_example_7",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }

  
}
