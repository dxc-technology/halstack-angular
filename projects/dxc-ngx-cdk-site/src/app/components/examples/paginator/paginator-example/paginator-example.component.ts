import { Component, OnInit, Inject } from '@angular/core';
import { Example } from 'src/app/model/example';
import { ExampleService } from 'src/app/service/example.service';
import { PaginatorDefaultComponent } from '../paginator-default/paginator-default.component';

@Component({
  selector: 'app-paginator-example',
  templateUrl: './paginator-example.component.html',
  styleUrls: ['./paginator-example.component.scss']
})
export class PaginatorExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("paginator/paginator-default/paginator-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Paginator',
          component: PaginatorDefaultComponent,
          selector: "paginator_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }

}
