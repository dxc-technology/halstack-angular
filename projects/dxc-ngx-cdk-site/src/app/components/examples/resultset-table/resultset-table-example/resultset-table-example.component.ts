import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ResultsetTableSimpleComponent } from '../resultset-table-simple/resultset-table-simple.component';
import { ExampleService } from '../../../../service/example.service';

@Component({
  selector: 'examples-component-resultset-table',
  templateUrl: './resultset-table-example.component.html',
  styleUrls: ['./resultset-table-example.component.scss']
})
export class ResultsetTableExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array(); 
  }

  ngOnInit() {
    this.exampleService.
      getCodeExample("resultset-table/resultset-table-simple/resultset-table-simple.component").subscribe(resp1 => {
       this.examples.push(this.exampleService.generateExample({
          title: 'Resultset Table',
          component: ResultsetTableSimpleComponent, 
          selector: "ResultsetTable_example_1", 
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        })
      );
    });
  }

}
