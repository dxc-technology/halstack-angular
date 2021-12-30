import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { DialogExampleComponent } from "../../components/examples/dialog/dialog-example/dialog-example.component";
import { DialogApiComponent } from "../../components/examples/dialog/dialog-api/dialog-api.component";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
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
        selector: "dialog-api",
        component: DialogApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-dates",
        component: DialogExampleComponent,
      }
    );
  }
}
