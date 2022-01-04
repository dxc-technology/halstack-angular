import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { V3SelectExampleComponent } from "../../components/examples/v3-select/v3-select-example/v3-select-example.component";
import { V3SelectApiComponent } from '../../components/examples/v3-select/v3-select-api/v3-select-api.component';
import { Router } from "@angular/router";

@Component({
  selector: "app-select",
  templateUrl: "./v3-select.component.html"
})
export class V3SelectComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  alertMargin = {
    bottom: 'medium'
  }

  constructor(private router: Router){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }
  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "select-api",
        component: V3SelectApiComponent
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-buttons",
        component: V3SelectExampleComponent
      }
    );
  }

  navigateToRoute(){
    this.router.navigate(
      ["components/v3Select"]
    );
  }
}
