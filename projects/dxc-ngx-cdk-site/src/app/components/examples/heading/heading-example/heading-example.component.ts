import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from 'src/app/service/example.service';
import { HeadingDefaultComponent } from '../heading-default/heading-default.component';
import { HeadingWeightsComponent } from '../heading-weights/heading-weights.component';

@Component({
  selector: 'heading-example',
  templateUrl: './heading-example.component.html',
  styleUrls: ['./heading-example.component.scss']
})
export class HeadingExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) {
    this.examples =  new Array();
   }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
    .getCodeExample("heading/heading-default/heading-default.component").subscribe(resp1 => {
      this.examples.push(this.exampleService.generateExample({
        title: 'Default Headings',
        component: HeadingDefaultComponent,
        selector: "example1",
        examples: [
          resp1[0],
          resp1[1],
          resp1[2]
        ]
      }));
    });

    this.exampleService
    .getCodeExample("heading/heading-weights/heading-weights.component").subscribe(resp1 => {
      this.examples.push(this.exampleService.generateExample({
        title: 'Headings with different weights',
        component: HeadingWeightsComponent,
        selector: "example2",
        examples: [
          resp1[0],
          resp1[1],
          resp1[2]
        ]
      }));
    });
  }
}
