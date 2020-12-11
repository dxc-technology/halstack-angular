import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {TabsExampleComponent} from '../../components/examples/tabs/tabs-example/tabs-example.component';
import { TabsApiComponent } from '../../components/examples/tabs/tabs-api/tabs-api.component';
import { TabsThemeComponent } from '../../components/examples/tabs/tabs-theme/tabs-theme.component';

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  headingMargin = {
    bottom: 'medium'
  }
  
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
      }
      ,
      {
        id: 1,
        label: "THEMING",
        selector: "tabs-theme",
        component: TabsThemeComponent
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
