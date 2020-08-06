import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from '../../../../service/example.service';
import { CheckboxSimpleComponent } from '../checkbox-simple/checkbox-simple.component';
import { CheckboxLabelPositionComponent } from '../checkbox-label-position/checkbox-label-position.component';
import { CheckboxSizedComponent } from '../checkbox-sized/checkbox-sized.component';
import { CheckboxUncontrolledComponent } from '../checkbox-uncontrolled/checkbox-uncontrolled.component';

@Component({
  selector: 'app-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.scss']
})
export class CheckboxExampleComponent implements OnInit {
  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {

    this.exampleService
    .getCodeExample(
      "checkbox/checkbox-simple/checkbox-simple.component"
    ).subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample(
          {
            title: 'Checkbox controlled',
              component: CheckboxSimpleComponent, 
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
      "checkbox/checkbox-uncontrolled/checkbox-uncontrolled.component"
    ).subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample(
          {
            title: 'Checkbox uncontrolled',
              component: CheckboxUncontrolledComponent, 
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
      "checkbox/checkbox-label-position/checkbox-label-position.component"
    ).subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample(
          {
            title: 'Checkbox label position',
              component: CheckboxLabelPositionComponent, 
              selector: "example3",
              examples: [
                resp1[0],
                resp1[1],
                resp1[2]
              ]
          })
      );
    });

    this.exampleService
    .getCodeExample(
      "checkbox/checkbox-sized/checkbox-sized.component"
    ).subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample(
          {
            title: 'Checkbox sized',
            component: CheckboxSizedComponent, 
            selector: "example4", 
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