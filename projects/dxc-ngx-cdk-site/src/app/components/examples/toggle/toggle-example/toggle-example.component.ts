import { Component, OnInit, Inject } from '@angular/core';
import { Example } from 'src/app/model/example';
import { ExampleService } from 'src/app/service/example.service';
import { ToggleDefaultComponent } from '../toggle-default/toggle-default.component';
import { ToggleIconComponent } from '../toggle-icon/toggle-icon.component';
import { ToggleOutlinedComponent } from '../toggle-outlined/toggle-outlined.component';
import { ToggleDarkComponent } from '../toggle-dark/toggle-dark.component';

@Component({
  selector: 'app-toggle-example',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.scss']
})
export class ToggleExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("toggle/toggle-default/toggle-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Default Toggle',
          component: ToggleDefaultComponent,
          selector: "toggle_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("toggle/toggle-icon/toggle-icon.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Toggle with Icons',
          component: ToggleIconComponent,
          selector: "toggle_example_2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("toggle/toggle-outlined/toggle-outlined.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Outlined Toggle',
          component: ToggleOutlinedComponent,
          selector: "toggle_example_3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("toggle/toggle-dark/toggle-dark.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Dark theme Toggle',
          component: ToggleDarkComponent,
          selector: "toggle_example_4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }
}
