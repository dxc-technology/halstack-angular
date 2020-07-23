import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {ProgressbarTablePropertiesComponent} from "../../components/examples/progressbar/properties/progressbar-table-properties.component";
import {ProgressbarExampleComponent} from '../../components/examples/progressbar/progressbar-example/progressbar-example.component';
import { ProgressbarImportComponent } from '../../components/examples/progressbar/progressbar-import/progressbar-import.component';

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
        selector: "app-progressbar-table-properties",
        component: ProgressbarTablePropertiesComponent
      }
      ,
      {
        id: 1,
        label: "MODULE",
        selector: "progressbar-import",
        component: ProgressbarImportComponent
      },
      {
        id: 2,
        label: "EXAMPLES",
        selector: "app-progressbar-example",
        component: ProgressbarExampleComponent
      }
    );
  }
}
