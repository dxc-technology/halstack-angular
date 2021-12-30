import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { SelectExampleComponent } from "../../components/examples/select/select-example/select-example.component";
import { SelectApiComponent } from '../../components/examples/select/select-api/select-api.component';
import { Router } from "@angular/router";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
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
        component: SelectApiComponent
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-buttons",
        component: SelectExampleComponent
      }
    );
  }

  navigateToRoute(){
    this.router.navigate(
      ["components/newSelect"]
    );
  }
}
