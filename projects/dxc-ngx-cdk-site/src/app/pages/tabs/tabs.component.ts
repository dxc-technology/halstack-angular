import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {TabsTablePropertiesComponent} from "../../components/examples/tabs/properties/tabs-table-properties.component";
import {TabsExampleComponent} from '../../components/examples/tabs/tabs-example/tabs-example.component';
import { TabsImportComponent } from '../../components/examples/tabs/tabs-import/tabs-import.component';

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
        selector: "app-tabs-table-properties",
        component: TabsTablePropertiesComponent
      }
      ,
      {
        id: 1,
        label: "MODULE",
        selector: "tabs-import",
        component: TabsImportComponent
      },
      {
        id: 2,
        label: "EXAMPLES",
        selector: "app-tabs-example",
        component: TabsExampleComponent
      }
    );
  }
}
