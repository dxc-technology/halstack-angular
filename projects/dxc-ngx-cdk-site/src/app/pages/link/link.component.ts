import { Component, OnInit } from '@angular/core';
import { Section } from "../../model/sections";
import { LinkTablePropertiesComponent } from "../../components/examples/link/properties/link-table-properties/link-table-properties.component";
import { LinkExampleComponent } from "../../components/examples/link/link-example/link-example.component";
import { LinkImportComponent } from '../../components/examples/link/link-import/link-import.component';
import { LinkApiComponent } from '../../components/examples/link/link-api/link-api.component';
import { LinkThemeComponent } from '../../components/examples/link/link-theme/link-theme.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

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
