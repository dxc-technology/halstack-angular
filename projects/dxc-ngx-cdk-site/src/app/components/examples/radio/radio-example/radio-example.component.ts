import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from '../../../../service/example.service';
import { RadioSimpleComponent } from '../radio-simple/radio-simple.component';
import { RadioLabelPositionComponent } from '../radio-label-position/radio-label-position.component';
import { RadioDarkThemeComponent } from '../radio-dark-theme/radio-dark-theme.component';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import { RadioSizedComponent } from '../radio-sized/radio-sized.component';
import { RadioUncontrolledComponent } from '../radio-uncontrolled/radio-uncontrolled.component';

@Component({
  selector: 'app-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss']
})
export class RadioExampleComponent implements OnInit {
  examples: Array<Example>;

  constructor(private cdRef:ChangeDetectorRef,@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  ngAfterViewChecked()
{
  
  this.cdRef.detectChanges();
}
  createExamples() {
    this.exampleService
      .getCodeExample("radio/radio-simple/radio-simple.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Radio Controlled',
          component: RadioSimpleComponent,
          selector: "example1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("radio/radio-uncontrolled/radio-uncontrolled.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Radio Uncontrolled',
          component: RadioUncontrolledComponent,
          selector: "example2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("radio/radio-label-position/radio-label-position.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Radio Label position',
          component: RadioLabelPositionComponent,
          selector: "example3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("radio/radio-dark-theme/radio-dark-theme.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Radio Dark Theme',
          component: RadioDarkThemeComponent,
          selector: "example4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });

      this.exampleService
      .getCodeExample("radio/radio-group/radio-group.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Radio Group',
          component: RadioGroupComponent,
          selector: "example5",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
      this.exampleService
      .getCodeExample("radio/radio-sized/radio-sized.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Radio Sized',
          component: RadioSizedComponent,
          selector: "example6",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }

 
}
