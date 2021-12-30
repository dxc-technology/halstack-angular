import { Component, OnInit } from '@angular/core';
import { ToggleGroupApiComponent } from 'src/app/components/examples/toggleGroup/toggleGroup-api/toggleGroup-api.component';
import { Section } from 'src/app/model/sections';
import { ToggleGroupExampleComponent } from '../../components/examples/toggleGroup/toggleGroup-example/toggleGroup-example.component';

@Component({
  selector: 'app-toggleGroup',
  templateUrl: './toggleGroup.component.html',
  styleUrls: ['./toggleGroup.component.scss']
})
export class ToggleGroupComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'toggle-api', component: ToggleGroupApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-Toggle', component: ToggleGroupExampleComponent}
    );
  }

}
