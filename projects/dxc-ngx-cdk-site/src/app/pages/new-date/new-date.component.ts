import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { NewDateExampleComponent } from 'src/app/components/examples/new-date/date-example/date-example.component';
import { NewDateApiComponent } from '../../components/examples/new-date/date-api/date-api.component';

@Component({
  selector: 'app-new-date',
  templateUrl: './new-date.component.html'
})
export class NewDateComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/experimental.svg';
  }

  ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'new-date-api', component: NewDateApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'new-date-properties', component: NewDateExampleComponent}
    );
  }

}
