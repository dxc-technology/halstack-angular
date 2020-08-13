import { Component, OnInit, Inject } from '@angular/core';
import { Example } from 'src/app/model/example';
import { ExampleService } from 'src/app/service/example.service';
import { TagDefaultComponent } from '../tag-default/tag-default.component';
import { TagLinkComponent } from '../tag-link/tag-link.component';
import { TagSizedComponent } from '../tag-sized/tag-sized.component';
import { TagActionComponent } from '../tag-action/tag-action.component';

@Component({
  selector: 'tag-example',
  templateUrl: './tag-example.component.html',
  styleUrls: ['./tag-example.component.scss']
})
export class TagExampleComponent implements OnInit {

  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) { 
    this.examples =  new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("tag/tag-default/tag-default.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Basic Tag',
          component: TagDefaultComponent,
          selector: "tag_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("tag/tag-link/tag-link.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Tag with link',
          component: TagLinkComponent,
          selector: "tag_example_2",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("tag/tag-action/tag-action.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Tag with action',
          component: TagActionComponent,
          selector: "tag_example_3",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
    this.exampleService
      .getCodeExample("tag/tag-sized/tag-sized.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Sized Tag',
          component: TagSizedComponent,
          selector: "tag_example_4",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }

}
