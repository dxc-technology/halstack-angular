import { Component, OnInit } from "@angular/core";
import { AutosuggestExampleComponent } from "../../components/examples/autosuggest/autosuggest-example/autosuggest-example.component";
import { AutosuggestPropertiesComponent } from "../../components/examples/autosuggest/autosuggest-properties/autosuggest-properties.component";
import { Section } from "../../model/sections";

@Component({
  selector: "app-autosuggest",
  templateUrl: "./autosuggest.component.html",
})
export class AutosuggestComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor() {
    this.sections = new Array<Section>();
    this.tagImg = "./assets/img/ready.svg";
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "autosuggest-properties",
        component: AutosuggestPropertiesComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-autosuggest",
        component: AutosuggestExampleComponent,
      }
    );
  }
}
