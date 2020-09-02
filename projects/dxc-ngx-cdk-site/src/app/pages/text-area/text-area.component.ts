import { Component, OnInit } from "@angular/core";
import { Section } from "src/app/model/sections";
import { TextAreaApiComponent } from "../../components/examples/text-area/text-area-api/text-area-api.component";
import { TextAreaThemeComponent } from "../../components/examples/text-area/text-area-theme/text-area-theme.component";
import { TextAreaExampleComponent } from "../../components/examples/text-area/text-area-example/text-area-example.component";

@Component({
  selector: "app-text-area",
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.scss"],
})
export class TextAreaComponent implements OnInit {
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
        selector: "text-area-api",
        component: TextAreaApiComponent,
      },
      {
        id: 1,
        label: "THEMING",
        selector: "text-area-theme",
        component: TextAreaThemeComponent,
      },
      {
        id: 2,
        label: "EXAMPLES",
        selector: 'examples-component-input',
        component: TextAreaExampleComponent,
      }
    );
  }
}
