import { Component, OnInit,Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from 'src/app/service/example.service';
import { WizardDefaultComponent } from '../wizard-default/wizard-default.component';
import { WizardThemedComponent } from '../wizard-themed/wizard-themed.component';
import { WizardUncontrolledComponent } from '../wizard-uncontrolled/wizard-uncontrolled.component';
import { WizardVerticalComponent } from '../wizard-vertical/wizard-vertical.component';

@Component({
  selector: 'wizard-example',
  templateUrl: './wizard-example.component.html',
  styleUrls: ['./wizard-example.component.scss']
})
export class WizardExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {

    this.createExamples();

  }

  private createExamples() {
    this.exampleService
      .getCodeExample("wizard/wizard-default/wizard-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Controlled Wizard',
          component: WizardDefaultComponent,
          selector: "example1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("wizard/wizard-uncontrolled/wizard-uncontrolled.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Uncontrolled Wizard',
          component: WizardUncontrolledComponent,
          selector: "example2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("wizard/wizard-themed/wizard-themed.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Dark Theme Wizard',
          component: WizardThemedComponent,
          selector: "example3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("wizard/wizard-vertical/wizard-vertical.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Vertical Wizard',
          component: WizardVerticalComponent,
          selector: "example4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

    }

}
