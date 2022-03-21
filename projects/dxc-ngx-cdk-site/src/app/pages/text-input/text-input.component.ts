import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { TextInputExampleComponent } from "../../components/examples/text-input/text-input-example/text-input-example.component";
import { TextInputApiComponent } from "../../components/examples/text-input/text-input-api/text-input-api.component";

@Component({
  selector: "text-input",
  templateUrl: "./text-input.component.html",
})
export class TextInputComponent implements OnInit {
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
        selector: "text-input-api",
        component: TextInputApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-input",
        component: TextInputExampleComponent,
      }
    );
  }
}
