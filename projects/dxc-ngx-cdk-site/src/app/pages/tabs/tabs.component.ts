import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {TabsExampleComponent} from '../../components/examples/tabs/tabs-example/tabs-example.component';
import { TabsApiComponent } from '../../components/examples/tabs/tabs-api/tabs-api.component';

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
        label: "API",
        selector: "tabs-api",
        component: TabsApiComponent
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "app-tabs-example",
        component: TabsExampleComponent
      }
    );
  }
}
