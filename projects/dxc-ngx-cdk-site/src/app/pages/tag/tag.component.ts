import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { TagExampleComponent } from "../../components/examples/tag/tag-example/tag-example.component";
import { TagApiComponent } from "../../components/examples/tag/tag-api/tag-api.component";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor() {
    this.sections = new Array<Section>();
    this.tagImg = "./assets/img/ready.svg";
  }

  ngOnInit() {
    this.sections.push(
      { id: 0, label: "API", selector: "tag-api", component: TagApiComponent },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-tag",
        component: TagExampleComponent,
      }
    );
  }
}
