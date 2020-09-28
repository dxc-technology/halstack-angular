import { Component, OnInit, Inject } from '@angular/core';
import { ExampleService } from 'src/app/service/example.service';

@Component({
  selector: 'app-overview-install',
  templateUrl: './overview-install.component.html',
  styleUrls: ['./overview-install.component.scss']
})
export class OverviewInstallComponent implements OnInit {

  npmCode : String;
  yarnCode : String;
  assetsCode : String;

  files: Array<String>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.files = [
      'overview/overview-install/overview-install-npm',
      'overview/overview-install/overview-install-yarn',
      'overview/overview-install/overview-install-assets'
    ]

    this.npmCode = "Loading...";
    this.yarnCode = "Loading...";
    this.assetsCode = "Loading...";
  }
  ngOnInit() {
    this.getExampleFiles();
  }

  private getExampleFiles() {
    this.exampleService
      .getExampleFiles(this.files).subscribe((response : Array<String>) => {
         this.npmCode = response[0];
         this.yarnCode = response[1];
         this.assetsCode = response[2];
        });
  };

}
