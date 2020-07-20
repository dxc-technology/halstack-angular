import { Component, OnInit, Inject } from '@angular/core';
import { ExampleService } from '../../../service/example.service';

@Component({
  selector: 'app-overview-themes',
  templateUrl: './overview-themes.component.html',
  styleUrls: ['./overview-themes.component.scss']
})
export class OverviewThemesComponent implements OnInit {

  jsonThemeCode : String;
  tsThemeCode : String;
  tsModuleCode : String;
  tsAppCode: String;
  htmlCode: String;

  files: Array<String>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.files = [
      'overview/overview-themes/overview-themes-module',
      'overview/overview-themes/overview-themes-app',
      'overview/overview-themes/overview-themes-html',
      'overview/overview-themes/overview-themes-theme-ts'
    ]

    this.jsonThemeCode = "Loading...";
    this.tsModuleCode = "Loading...";
    this.tsAppCode = "Loading...";
    this.tsThemeCode = "Loading...";
    this.htmlCode = "Loading...";
  }
  ngOnInit() {
    this.getExampleFiles();
  }

  private getExampleFiles() {
    this.exampleService
      .getExampleFiles(this.files).subscribe((response : Array<String>) => {
         this.tsModuleCode = response[0];
         this.tsAppCode = response[1];
         this.htmlCode = response[2];
         this.tsThemeCode = response[3];
        });
  };
}
