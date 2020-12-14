import { Component, OnInit } from '@angular/core';
import { Section } from "../../model/sections";
import { LinkExampleComponent } from "../../components/examples/link/link-example/link-example.component";
import { LinkApiComponent } from '../../components/examples/link/link-api/link-api.component';
import { LinkThemeComponent } from '../../components/examples/link/link-theme/link-theme.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  headingMargin = {
    bottom: "medium",
  };

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
        selector: "link-api",
        component: LinkApiComponent
      },
      {
        id: 1,
        label: "THEMING",
        selector: "link-theme",
        component: LinkThemeComponent
      },
      {
        id: 2,
        label: "EXAMPLES",
        selector: "examples-component-link",
        component: LinkExampleComponent
      }
    );
  }

}
