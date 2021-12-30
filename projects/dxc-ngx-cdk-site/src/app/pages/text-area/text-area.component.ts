import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Section } from "src/app/model/sections";
import { TextAreaApiComponent } from "../../components/examples/text-area/text-area-api/text-area-api.component";
import { TextAreaExampleComponent } from "../../components/examples/text-area/text-area-example/text-area-example.component";

@Component({
  selector: "app-text-area",
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.scss"],
})
export class TextAreaComponent implements OnInit {
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
        component: TextAreaApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: 'examples-component-input',
        component: TextAreaExampleComponent,
      }
    );
  }

  navigateToRoute(){
    this.router.navigate(
      ["components/newTextarea"]
    );
  }
}
