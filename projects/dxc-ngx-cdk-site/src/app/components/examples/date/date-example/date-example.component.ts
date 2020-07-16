import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from '../../../../service/example.service';
import { DateSizedComponent } from '../date-sized/date-sized.component';
import { DateSimpleComponent } from '../date-simple/date-simple.component';
import { DateUncontrolledComponent } from '../date-uncontrolled/date-uncontrolled.component';

@Component({
  selector: 'app-date-example',
  templateUrl: './date-example.component.html',
  styleUrls: ['./date-example.component.scss']
})
export class DateExampleComponent implements OnInit {
  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }
  ngOnInit() {
    this.createExamples();
  }
  createExamples() {

    this.exampleService
    .getCodeExample(
      "date/date-simple/date-simple.component"
    ).subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample(
          {
            title: 'Controlled Date',
              component: DateSimpleComponent, 
              selector: "example1",
              examples: [
                resp1[0],
                resp1[1],
                resp1[2]
              ]
          }
        )
      );
    });

    this.exampleService
    .getCodeExample(
      "date/date-uncontrolled/date-uncontrolled.component"
    ).subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample(
          {
            title: 'Uncontrolled Date',
              component: DateUncontrolledComponent, 
              selector: "example2",
              examples: [
                resp1[0],
                resp1[1],
                resp1[2]
              ]
          }
        )
      );
    });

    this.exampleService
    .getCodeExample(
      "date/date-sized/date-sized.component"
    ).subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample(
          {
            title: 'Sized Date',
              component: DateSizedComponent, 
              selector: "example3",
              examples: [
                resp1[0],
                resp1[1],
                resp1[2]
              ]
          }
        )
      );
    });
    
  }

}
