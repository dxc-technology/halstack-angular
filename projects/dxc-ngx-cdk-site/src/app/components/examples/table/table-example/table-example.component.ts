import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { TableSimpleComponent } from '../table-simple/table-simple.component';
import { ExampleService } from '../../../../service/example.service';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array(); }

  ngOnInit() {
    this.exampleService.
      getCodeExample("table/table-simple/table-simple.component").subscribe(resp1 => {
       this.examples.push(this.exampleService.generateExample({
          title: 'Simple Table',
          component: TableSimpleComponent, 
          selector: "Table_example_1", 
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
