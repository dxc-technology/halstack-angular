import { Component, OnInit } from '@angular/core';
import { Section } from "../../model/sections";
import { WizardExampleComponent } from "../../components/examples/wizard/wizard-example/wizard-example.component";
import { WizardApiComponent } from '../../components/examples/wizard/wizard-api/wizard-api.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "wizard-api",
        component: WizardApiComponent
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "wizard-example",
        component: WizardExampleComponent
      }
    );
  }

}