import { Component, Inject, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { AlertExampleComponent } from "../../components/examples/alert/alert-example/alert-example.component";
import { AlertApiComponent } from "../../components/examples/alert/alert-api/alert-api.component";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
  providers: [],
})
export class AlertComponent implements OnInit {
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
        selector: "alert-api",
        component: AlertApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-buttons",
        component: AlertExampleComponent,
      }
    );
  }
}
