import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { InputTextExampleComponent } from "../../components/examples/input-text/input-text-example/input-text-example.component";
import { InputTextApiComponent } from "../../components/examples/input-text/input-text-api/input-text-api.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-input-text",
  templateUrl: "./input-text.component.html",
})
export class InputTextComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  alertMargin = {
    bottom: "medium",
  };

  constructor(private router: Router) {
    this.sections = new Array<Section>();
    this.tagImg = "./assets/img/ready.svg";
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "text-input-api",
        component: InputTextApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-input",
        component: InputTextExampleComponent,
      }
    );
  }

  navigateToRoute() {
    this.router.navigate(["components/textInput"]);
  }
}
