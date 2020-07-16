import { Component, OnInit, Inject } from '@angular/core';
import { ExampleService } from 'src/app/service/example.service';
import { ButtonFilledParentComponent } from '../button-filled-parent/button-filled-parent.component';
import { ButtonSizedComponent } from '../button-sized/button-sized.component';
import { ButtonDarkThemeComponent } from '../button-dark-theme/button-dark-theme.component';
import { ButtonWithIconComponent } from '../button-with-icon/button-with-icon.component';
import { ButtonModesComponent } from '../button-modes/button-modes.component';
import { Example } from '../../../../model/example';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss']
})
export class ButtonExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {

    this.createExamples();

  }


  private createExamples() {
    this.exampleService
      .getCodeExample("button/button-modes/button-modes.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Button Modes',
          component: ButtonModesComponent,
          selector: "example1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("button/button-with-icon/button-with-icon.component")
      .subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Button Icons',
          component: ButtonWithIconComponent,
          selector: "example2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("button/button-dark-theme/button-dark-theme.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Button Dark Theme',
          component: ButtonDarkThemeComponent,
          selector: "example3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("button/button-sized/button-sized.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Button Sized',
          component: ButtonSizedComponent,
          selector: "example4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("button/button-filled-parent/button-filled-parent.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Button filled Parent',
          component: ButtonFilledParentComponent,
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
