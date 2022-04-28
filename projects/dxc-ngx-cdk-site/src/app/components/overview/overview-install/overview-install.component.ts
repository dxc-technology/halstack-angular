import { Component, OnInit, Inject } from "@angular/core";
import { ExampleService } from "../../../service/example.service";

@Component({
  selector: "app-overview-install",
  templateUrl: "./overview-install.component.html",
  styleUrls: ["./overview-install.component.scss"],
})
export class OverviewInstallComponent implements OnInit {
  headingMargin = {
    top: "small",
    right: "small",
    bottom: "small",
  };

  npmCode: string;
  yarnCode: string;
  assetsCode: string;
  tsCode: string;
  materialThemeCode: string;
  files: Array<string>;

  constructor(
    @Inject("ExampleService") private exampleService: ExampleService
  ) {
    this.files = [
      "overview/overview-install/overview-install-npm",
      "overview/overview-install/overview-install-yarn",
      "overview/overview-install/overview-install-assets",
      "overview/overview-install/overview-install-ts",
      "overview/overview-install/overview-install-materialTheme"
    ];

    this.npmCode = "Loading...";
    this.yarnCode = "Loading...";
    this.assetsCode = "Loading...";
    this.tsCode = "Loading ...";
    this.materialThemeCode = "Loading ...";
  }
  ngOnInit() {
    this.getExampleFiles();
  }

  private getExampleFiles() {
    this.exampleService
      .getExampleFiles(this.files)
      .subscribe((response: Array<string>) => {
        this.npmCode = response[0];
        this.yarnCode = response[1];
        this.assetsCode = response[2];
        this.tsCode = response[3];
        this.materialThemeCode = response[4];
      });
  }
}
