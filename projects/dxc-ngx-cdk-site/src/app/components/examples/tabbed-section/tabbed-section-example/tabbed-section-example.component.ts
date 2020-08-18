import { Component, OnInit, Inject } from '@angular/core';
import { Example } from 'src/app/model/example';
import { ExampleService } from 'src/app/service/example.service';
import { TabbedSectionDefaultComponent } from '../tabbed-section-default/tabbed-section-default.component';

@Component({
  selector: 'tabbed-section-example',
  templateUrl: './tabbed-section-example.component.html',
  styleUrls: ['./tabbed-section-example.component.scss']
})
export class TabbedSectionExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("tabbed-section/tabbed-section-default/tabbed-section-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Default Tabbed Section',
          component: TabbedSectionDefaultComponent,
          selector: "tabbed-section_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }
}
