import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { SwitchExampleComponent } from '../../components/examples/switch/switch-example/switch-example.component';
import { SwitchApiComponent } from '../../components/examples/switch/switch-api/switch-api.component';

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
      {id:0, label: 'API', selector: 'switch-api', component: SwitchApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-switch', component: SwitchExampleComponent}
      );
  }
  
}
