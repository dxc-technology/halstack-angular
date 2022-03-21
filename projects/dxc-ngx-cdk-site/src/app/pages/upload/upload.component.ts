import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { UploadExampleComponent } from "../../components/examples/upload/upload-example/upload-example.component";
import { UploadApiComponent } from "../../components/examples/upload/upload-api/upload-api.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  alertMargin = {
    bottom: "medium",
  };

  constructor(private router: Router) {
    this.sections = new Array<Section>();
    this.tagImg = "./assets/img/ready.svg";
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "upload-api",
        component: UploadApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-upload",
        component: UploadExampleComponent,
      }
    );
  }

  navigateToRoute() {
    this.router.navigate(["components/fileInput"]);
  }
}
