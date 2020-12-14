import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { SelectExampleComponent } from "../../components/examples/select/select-example/select-example.component";
import { SelectApiComponent } from '../../components/examples/select/select-api/select-api.component';
import { SelectThemeComponent } from '../../components/examples/select/select-theme/select-theme.component';

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  headingMargin = {
    bottom: 'medium'
  }

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
        label: "API",
        selector: "select-api",
        component: SelectApiComponent
      },
      {
        id: 1,
        label: "THEMING",
        selector: "select-theme",
        component: SelectThemeComponent
      },
      {
        id: 2,
        label: "EXAMPLES",
        selector: "examples-component-buttons",
        component: SelectExampleComponent
      }
    );
  }
}
