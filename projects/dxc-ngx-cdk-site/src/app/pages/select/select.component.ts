import { Component, OnInit } from "@angular/core";
import { SelectApiComponent } from "../../components/examples/select/select-api/select-api.component";
import { SelectExampleComponent } from "../../components/examples/select/select-example/select-example.component";
import { Section } from "../../model/sections";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
})
export class SelectComponent implements OnInit {
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
        selector: "select-api",
        component: SelectApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-select",
        component: SelectExampleComponent,
      }
    );
  }
}
