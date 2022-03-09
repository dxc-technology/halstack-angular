import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { FileInputExampleComponent } from "../../components/examples/file-input/file-input-example/file-input-example.component";
import { FileInputApiComponent } from "../../components/examples/file-input/file-input-api/file-input-api.component";

@Component({
  selector: "app-file-input",
  templateUrl: "./file-input.component.html",
})
export class FileInputComponent implements OnInit {
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
        selector: "file-input-api",
        component: FileInputApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-file-input",
        component: FileInputExampleComponent,
      }
    );
  }
}
