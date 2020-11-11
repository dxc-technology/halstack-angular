import { Component, OnInit } from '@angular/core';
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
      // {id:0, label: 'API',selector: 'tag-api', component: TagApiComponent},
      // {id:1, label: 'THEMING', selector: 'tag-theme', component: TagThemeComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-tag', component: ToggleGroupExampleComponent}
    );
  }

}
