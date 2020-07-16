import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {ProgressbarTablePropertiesComponent} from "../../components/examples/progressbar/properties/progressbar-table-properties.component";
import {ProgressbarExampleComponent} from '../../components/examples/progressbar/progressbar-example/progressbar-example.component';

@Component({
  selector: "app-progressbar",
  templateUrl: "./progressbar.component.html",
  styleUrls: ["./progressbar.component.scss"]
})
export class ProgressbarComponent implements OnInit {
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
        component: ProgressbarTablePropertiesComponent
      }
      ,
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-dates",
        component: ProgressbarExampleComponent
      }
    );
  }
}
