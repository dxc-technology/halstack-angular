import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { TagTablePropertiesComponent } from '../../components/examples/tag/properties/tag-table-properties/tag-table-properties.component';
import { TagExampleComponent } from '../../components/examples/tag/tag-example/tag-example.component';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-tag', component: TagTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-tag', component: TagExampleComponent}
    );
  }

}
