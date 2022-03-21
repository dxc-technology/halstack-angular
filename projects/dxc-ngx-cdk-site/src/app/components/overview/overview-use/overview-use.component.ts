import { Component, OnInit, Inject } from "@angular/core";
import { ExampleService } from "../../../service/example.service";

@Component({
  selector: "app-overview-use",
  templateUrl: "./overview-use.component.html",
  styleUrls: ["./overview-use.component.scss"],
})
export class OverviewUseComponent implements OnInit {
  htmlCode: String;

  tsModuleCode: String;

  tsComponentCode: String;

  files: Array<String>;

  constructor(
    @Inject("ExampleService") private exampleService: ExampleService
  ) {
    this.files = [
      "overview/overview-use/overview-use-html",
      "overview/overview-use/overview-use-module",
      "overview/overview-use/overview-use-component",
    ];

    this.htmlCode = "Loading...";
    this.tsModuleCode = "Loading...";
    this.tsComponentCode = "Loading...";
  }

  ngOnInit() {
    this.getExampleFiles();
  }

  private getExampleFiles() {
    this.exampleService
      .getExampleFiles(this.files)
      .subscribe((response: Array<String>) => {
        this.htmlCode = response[0];
        this.tsModuleCode = response[1];
        this.tsComponentCode = response[2];
      });
  }
}
