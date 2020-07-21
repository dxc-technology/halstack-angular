import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {TabsTablePropertiesComponent} from "../../components/examples/tabs/properties/tabs-table-properties.component";
import {TabsExampleComponent} from '../../components/examples/tabs/tabs-example/tabs-example.component';

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
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
        selector: "examples-properties-dates",
        component: TabsTablePropertiesComponent
      }
      ,
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-dates",
        component: TabsExampleComponent
      }
    );
  }
}
