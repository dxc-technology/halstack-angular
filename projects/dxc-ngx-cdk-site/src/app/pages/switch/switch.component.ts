import { Component, Inject, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { SwitchExampleComponent } from '../../components/examples/switch/switch-example/switch-example.component';
import { SwitchTablePropertiesComponent } from '../../components/examples/switch/properties/switch-table-properties/switch-table-properties.component';

@Component({
  selector: "app-switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.scss"],
  providers: []
})
export class SwitchComponent implements OnInit{

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES', selector: 'examples-properties-switch', component: SwitchTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-switch', component: SwitchExampleComponent}
      );
  }
  
}
