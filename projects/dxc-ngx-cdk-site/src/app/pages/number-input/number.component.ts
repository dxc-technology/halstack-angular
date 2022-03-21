import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { NumberApiComponent } from "../../components/examples/number-input/number-api/number-api.component";
import { NumberExampleComponent } from "../../components/examples/number-input/number-example/number-example.component";

@Component({
  selector: "app-number",
  templateUrl: "./number.component.html",
})
export class NumberComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor() {
    this.sections = new Array<Section>();
    this.tagImg = "./assets/img/experimental.svg";
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "number-api",
        component: NumberApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "number-example",
        component: NumberExampleComponent,
      }
    );
  }
}
