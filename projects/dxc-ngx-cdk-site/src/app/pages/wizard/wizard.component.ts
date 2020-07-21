import { Component, OnInit } from '@angular/core';
import { Section } from "../../model/sections";
import { WizardTablePropertiesComponent } from "../../components/examples/wizard/properties/wizard-table-properties/wizard-table-properties.component";
import { WizardExampleComponent } from "../../components/examples/wizard/wizard-example/wizard-example.component";

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
        label: "PROPERTIES",
        selector: "wizard-table-properties",
        component: WizardTablePropertiesComponent
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