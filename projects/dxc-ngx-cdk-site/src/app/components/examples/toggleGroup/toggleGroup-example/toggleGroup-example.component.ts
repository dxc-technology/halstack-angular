import { Component, OnInit, Inject } from '@angular/core';
import { Example } from 'src/app/model/example';
import { ExampleService } from 'src/app/service/example.service';
import { ToggleGroupDefaultComponent } from '../toggleGroup-default/toggleGroup-default.component';


@Component({
  selector: 'toggleGroup-example',
  templateUrl: './toggleGroup-example.component.html',
  styleUrls: ['./toggleGroup-example.component.scss']
})
export class ToggleGroupExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("toggleGroup/toggleGroup-default/toggleGroup-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Basic ToggleGroup',
          component: ToggleGroupDefaultComponent,
          selector: "toggleGroup_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    
  }

}
