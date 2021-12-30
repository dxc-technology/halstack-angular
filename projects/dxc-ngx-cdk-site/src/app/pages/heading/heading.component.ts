import { Component, OnInit } from '@angular/core';
import { Section } from "../../model/sections";
import { HeadingExampleComponent } from '../../components/examples/heading/heading-example/heading-example.component';
import { HeadingApiComponent } from '../../components/examples/heading/heading-api/heading-api.component';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "heading-api",
        component: HeadingApiComponent
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "heading-example",
        component: HeadingExampleComponent
      }
    );
  }

}
