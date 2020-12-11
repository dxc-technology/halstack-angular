import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { SwitchExampleComponent } from '../../components/examples/switch/switch-example/switch-example.component';
import { SwitchApiComponent } from '../../components/examples/switch/switch-api/switch-api.component';
import { SwitchThemeComponent } from '../../components/examples/switch/switch-theme/switch-theme.component';

@Component({
  selector: "app-switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.scss"],
  providers: []
})
export class SwitchComponent implements OnInit{
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
      {id:0, label: 'API', selector: 'switch-api', component: SwitchApiComponent},
      {id:1, label: 'THEMING', selector: 'switch-theme', component: SwitchThemeComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-switch', component: SwitchExampleComponent}
      );
  }
  
}
