import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from '../../../../service/example.service';
import { HeaderDefaultComponent } from '../header-default/header-default.component';
import { HeaderCustomContentComponent } from '../header-custom-content/header-custom-content.component';

@Component({
  selector: 'app-header-example',
  templateUrl: './header-example.component.html',
  styleUrls: ['./header-example.component.scss']
})
export class HeaderExampleComponent implements OnInit {


  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit(): void {
    this.generateExamples();
  }

  private generateExamples() {

    this.exampleService
      .getCodeExample("header/header-default/header-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Default Header',
          component: HeaderDefaultComponent,
          selector: "example1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("header/header-custom-content/header-custom-content.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Custom content Header',
          component: HeaderCustomContentComponent,
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
