import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {ProgressbarExampleComponent} from '../../components/examples/progressbar/progressbar-example/progressbar-example.component';
import { ProgressbarApiComponent } from '../../components/examples/progressbar/progressbar-api/progressbar-api.component';
import { ProgressbarThemeComponent } from '../../components/examples/progressbar/progressbar-theme/progressbar-theme.component';

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
        label: "API",
        selector: "progressbar-api",
        component: ProgressbarApiComponent
      }
      ,
      {
        id: 1,
        label: "THEMING",
        selector: "progressbar-theme",
        component: ProgressbarThemeComponent
      },
      {
        id: 2,
        label: "EXAMPLES",
        selector: "progressbar-example",
        component: ProgressbarExampleComponent
      }
    );
  }
}
