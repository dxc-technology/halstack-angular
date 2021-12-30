import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { SpinnerExampleComponent } from "../../components/examples/spinner/spinner-example/spinner-example.component";
import { SpinnerApiComponent } from '../../components/examples/spinner/spinner-api/spinner-api.component';

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
  providers: [],
})
export class SpinnerComponent implements OnInit {
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
        selector: "spinner-api",
        component: SpinnerApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "spinner-example",
        component: SpinnerExampleComponent,
      }
    );
  }
}
