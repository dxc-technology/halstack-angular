import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from '../../../../service/example.service';
import { FooterDefaultComponent } from '../footer-default/footer-default.component';
import { FooterCustomContentComponent } from '../footer-custom-content/footer-custom-content.component';

@Component({
  selector: 'app-footer-example',
  templateUrl: './footer-example.component.html',
  styleUrls: ['./footer-example.component.scss']
})
export class FooterExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.generateExamples();
  }

  private generateExamples() {

    this.exampleService
      .getCodeExample("footer/footer-default/footer-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Default Footer',
          component: FooterDefaultComponent,
          selector: "example1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("footer/footer-custom-content/footer-custom-content.component")
      .subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Footer with custom content',
          component: FooterCustomContentComponent,
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
