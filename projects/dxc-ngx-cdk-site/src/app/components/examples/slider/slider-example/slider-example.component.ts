import { Component, OnInit, Inject } from '@angular/core';
import { ExampleService } from 'src/app/service/example.service';
import { Example } from 'src/app/model/example';
import { SliderDefaultComponent } from '../slider-default/slider-default.component';
import { SliderDiscreteComponent } from '../slider-discrete/slider-discrete.component';
import { SliderContinuousComponent } from '../slider-continuous/slider-continuous.component';
import { SliderUnlimitedComponent } from '../slider-unlimited/slider-unlimited.component';
import { SliderInputComponent } from '../slider-input/slider-input.component';
import { SliderSizedComponent } from '../slider-sized/slider-sized.component';
import { SliderDisabledComponent } from '../slider-disabled/slider-disabled.component';
import { SliderDarkComponent } from '../slider-dark/slider-dark.component';
import { SliderUncontrolledComponent } from '../slider-uncontrolled/slider-uncontrolled.component';

@Component({
  selector: 'app-slider-example',
  templateUrl: './slider-example.component.html',
  styleUrls: ['./slider-example.component.scss']
})
export class SliderExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("slider/slider-default/slider-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Controlled Slider',
          component: SliderDefaultComponent,
          selector: "Slider_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("slider/slider-uncontrolled/slider-uncontrolled.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Uncontrolled Slider',
          component: SliderUncontrolledComponent,
          selector: "Slider_example_2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
     });
    this.exampleService
      .getCodeExample("slider/slider-discrete/slider-discrete.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Discrete Slider',
          component: SliderDiscreteComponent,
          selector: "Slider_example_3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("slider/slider-continuous/slider-continuous.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Continuous Slider',
          component: SliderContinuousComponent,
          selector: "Slider_example_4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("slider/slider-unlimited/slider-unlimited.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Slider without limit values',
          component: SliderUnlimitedComponent,
          selector: "Slider_example_5",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("slider/slider-input/slider-input.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Slider with input',
          component: SliderInputComponent,
          selector: "Slider_example_6",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("slider/slider-sized/slider-sized.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Sized Slider',
          component: SliderSizedComponent,
          selector: "Slider_example_7",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("slider/slider-disabled/slider-disabled.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Disabled Slider',
          component: SliderDisabledComponent,
          selector: "Slider_example_8",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
      this.exampleService
      .getCodeExample("slider/slider-dark/slider-dark.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Dark Theme Slider',
          component: SliderDarkComponent,
          selector: "Slider_example_9",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }
}
