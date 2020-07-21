import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { SelectPropertiesComponent } from "../../components/examples/select/properties/select-properties/select-properties.component";
import { SelectExampleComponent } from "../../components/examples/select/select-example/select-example.component";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
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
        selector: "examples-properties-selects",
        component: SelectPropertiesComponent
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-buttons",
        component: SelectExampleComponent
      }
    );
  }
}
