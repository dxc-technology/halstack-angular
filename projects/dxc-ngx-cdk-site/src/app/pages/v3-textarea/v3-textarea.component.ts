import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Section } from "src/app/model/sections";
import { V3TextareaApiComponent } from "../../components/examples/v3-textarea/v3-textarea-api/v3-textarea-api.component";
import { V3TextareaExampleComponent } from "../../components/examples/v3-textarea/v3-textarea-example/v3-textarea-example.component";

@Component({
  selector: "app-text-area",
  templateUrl: "./v3-textarea.component.html",
})
export class V3TextareaComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  alertMargin = {
    bottom: 'medium'
  }

  constructor(private router: Router) {
    this.sections = new Array<Section>();
    this.tagImg = "./assets/img/ready.svg";
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "text-area-api",
        component: V3TextareaApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: 'examples-component-input',
        component: V3TextareaExampleComponent,
      }
    );
  }

  navigateToRoute(){
    this.router.navigate(
      ["components/textarea"]
    );
  }
}
