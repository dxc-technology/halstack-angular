import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { TextareaExampleComponent } from "../../components/examples/textarea/textarea-example/textarea-example.component";
import { TextareaApiComponent } from "../../components/examples/textarea/textarea-api/textarea-api.component";

@Component({
  selector: "textarea-page",
  templateUrl: "./textarea.component.html",
})
export class TextareaComponent implements OnInit {
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
        selector: "textarea-api",
        component: TextareaApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-input",
        component: TextareaExampleComponent,
      }
    );
  }
}
