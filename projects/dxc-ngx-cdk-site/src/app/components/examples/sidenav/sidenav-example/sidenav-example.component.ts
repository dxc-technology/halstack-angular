import { Component, OnInit,Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from 'src/app/service/example.service';
import { SidenavDefaultComponent } from '../sidenav-default/sidenav-default.component';
import { SidenavContentComponent } from '../sidenav-content/sidenav-content.component';
import { SidenavNoArrowComponent } from '../sidenav-no-arrow/sidenav-no-arrow.component';

@Component({
  selector: 'sidenav-example',
  templateUrl: './sidenav-example.component.html',
  styleUrls: ['./sidenav-example.component.scss']
})
export class SidenavExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {

    this.createExamples();

  }

  private createExamples() {
    this.exampleService
      .getCodeExample("sidenav/sidenav-default/sidenav-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Default Sidenav',
          component: SidenavDefaultComponent,
          selector: "example1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("sidenav/sidenav-content/sidenav-content.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Push content Sidenav',
          component: SidenavContentComponent,
          selector: "example2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("sidenav/sidenav-no-arrow/sidenav-no-arrow.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Sidenav without arrow',
          component: SidenavNoArrowComponent,
          selector: "example3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

    }

}
