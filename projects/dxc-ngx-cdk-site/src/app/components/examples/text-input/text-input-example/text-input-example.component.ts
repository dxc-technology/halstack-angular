import { Component, OnInit, Inject } from '@angular/core';
import { ExampleService } from 'src/app/service/example.service';
import { Example } from 'src/app/model/example';
import { TextInputDefaultComponent } from '../text-input-default/text-input-default.component';
import { TextInputFillParentComponent } from '../text-input-fill-parent/text-input-fill-parent.component';
import { TextInputMultiComponent } from '../text-input-multi/text-input-multi.component';
import { TextInputPrefixSuffixComponent } from '../text-input-prefix-suffix/text-input-prefix-suffix.component';
import { TextInputSizedComponent } from '../text-input-sized/text-input-sized.component';
import { TextInputUncontrolledComponent } from '../text-input-uncontrolled/text-input-uncontrolled.component';

@Component({
  selector: 'app-text-input-example',
  templateUrl: './text-input-example.component.html',
  styleUrls: ['./text-input-example.component.scss']
})
export class TextInputExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("text-input/text-input-default/text-input-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Controlled Input',
          component: TextInputDefaultComponent,
          selector: "text-input_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
      this.exampleService
      .getCodeExample("text-input/text-input-uncontrolled/text-input-uncontrolled.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Uncontrolled Input',
          component: TextInputUncontrolledComponent,
          selector: "text-input_example_2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("text-input/text-input-fill-parent/text-input-fill-parent.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Fill parent Input',
          component: TextInputFillParentComponent,
          selector: "text-input_example_3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("text-input/text-input-multi/text-input-multi.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Multilined Input',
          component: TextInputMultiComponent,
          selector: "text-input_example_4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("text-input/text-input-prefix-suffix/text-input-prefix-suffix.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Input with prefix/suffix',
          component: TextInputPrefixSuffixComponent,
          selector: "text-input_example_5",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("text-input/text-input-sized/text-input-sized.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Sized Input',
          component: TextInputSizedComponent,
          selector: "text-input_example_6",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }
}
