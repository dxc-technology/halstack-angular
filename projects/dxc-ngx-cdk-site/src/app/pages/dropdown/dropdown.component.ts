import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {DropdownExampleComponent} from '../../components/examples/dropdown/dropwdown-example/dropdown-example.component';
import { DropdownApiComponent } from '../../components/examples/dropdown/dropdown-api/dropdown-api.component';
import { DropdownThemeComponent } from '../../components/examples/dropdown/dropdown-theme/dropdown-theme.component';

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements OnInit {
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
        selector: "dropdown-api",
        component: DropdownApiComponent
      }
      ,
      {
        id: 1,
        label: "THEMING",
        selector: "dropdown-theme",
        component: DropdownThemeComponent
      }
      ,
      {
        id: 2,
        label: "EXAMPLES",
        selector: "examples-component-dates",
        component: DropdownExampleComponent
      }
    );
  }
}
