import { Component, OnInit,Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from 'src/app/service/example.service';
import { LinkDefaultComponent } from '../link-default/link-default.component';
import { LinkIconComponent } from '../link-icon/link-icon.component';
import { LinkDisabledComponent } from '../link-disabled/link-disabled.component';
import { LinkUndercoratedComponent } from '../link-undercorated/link-undercorated.component';

@Component({
  selector: 'link-example',
  templateUrl: './link-example.component.html',
  styleUrls: ['./link-example.component.scss']
})
export class LinkExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {

    this.createExamples();

  }

  private createExamples() {
    this.exampleService
      .getCodeExample("link/link-default/link-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Default Link',
          component: LinkDefaultComponent,
          selector: "example1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("link/link-undercorated/link-undercorated.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Undecorated link with new window',
          component: LinkUndercoratedComponent,
          selector: "example2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("link/link-disabled/link-disabled.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Disabled Link',
          component: LinkDisabledComponent,
          selector: "example3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("link/link-icon/link-icon.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Link with icon',
          component: LinkIconComponent,
          selector: "example4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    }

}
