import { Component, OnInit } from '@angular/core';
import { Section } from "../../model/sections";
import { LinkTablePropertiesComponent } from "../../components/examples/link/properties/link-table-properties/link-table-properties.component";
import { LinkExampleComponent } from "../../components/examples/link/link-example/link-example.component";

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
        label: "PROPERTIES",
        selector: "link-table-properties",
        component: LinkTablePropertiesComponent
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "link-example",
        component: LinkExampleComponent
      }
    );
  }

}
