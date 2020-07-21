import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../../model/example';
import { ExampleService } from '../../../../../service/example.service';
import { HeaderResponsiveComponent } from '../header-responsive/header-responsive.component';

@Component({
  selector: 'header-example-responsive',
  templateUrl: './header-example-responsive.component.html',
  styleUrls: ['./header-example-responsive.component.scss']
})
export class HeaderExampleResponsiveComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit(): void {
    this.generateExamples();
  }

  private generateExamples() {

    this.exampleService
      .getCodeExample("header/responsive/header-responsive/header-responsive.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Responsive Header',
          component: HeaderResponsiveComponent,
          selector: "example5",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

    }

}
